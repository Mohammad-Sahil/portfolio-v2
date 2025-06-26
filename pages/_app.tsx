import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SplashScreen from '../components/SplashScreen';
import * as gtag from '../lib/gtag';
import SEO from '../components/SEO';

function MyApp({ Component, pageProps }: AppProps) {
  const [showSplash, setShowSplash] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const hasJustLoaded = !sessionStorage.getItem('hasLoadedOnce');

    if (hasJustLoaded) {
      setShowSplash(true);
      sessionStorage.setItem('hasLoadedOnce', 'true');
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  if (isLoading) {
    return null;
  }

  return <>
    <SEO />
    {showSplash ? <SplashScreen setShowSplash={setShowSplash} /> : <Component {...pageProps} />}
  </>;
}

export default MyApp;