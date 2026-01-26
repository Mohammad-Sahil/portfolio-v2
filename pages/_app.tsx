import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SplashScreen from '../components/SplashScreen'
import * as gtag from '../lib/gtag'
import SEO from '../components/SEO'

function MyApp({ Component, pageProps }: AppProps) {
  const [showSplash, setShowSplash] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Mark that we're now on the client side
    setIsClient(true)

    // Only run splash logic on client side and avoid sessionStorage conflicts
    try {
      const hasJustLoaded =
        typeof window !== 'undefined' &&
        !sessionStorage.getItem('hasLoadedOnce')

      if (hasJustLoaded) {
        setShowSplash(true)
        sessionStorage.setItem('hasLoadedOnce', 'true')
      }
    } catch (error) {
      // Fallback if sessionStorage fails
      console.warn('SessionStorage not available:', error)
    }
  }, [])

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  // Always render content for SSR (bots, crawlers, initial load)
  // This ensures no 500 errors and proper SEO
  return (
    <>
      <SEO />
      {isClient && showSplash ? (
        <SplashScreen
          setShowSplash={setShowSplash}
        />
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}

export default MyApp
