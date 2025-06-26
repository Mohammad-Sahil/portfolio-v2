import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SplashScreen from '../components/SplashScreen';
import * as gtag from '../lib/gtag';
import SEO from '../components/SEO';

// Utility function to detect bots/crawlers
function isBot(userAgent: string): boolean {
  const botPatterns = [
    /googlebot/i,
    /bingbot/i,
    /slurp/i,
    /duckduckbot/i,
    /baiduspider/i,
    /yandexbot/i,
    /facebookexternalhit/i,
    /twitterbot/i,
    /linkedinbot/i,
    /whatsapp/i,
    /telegrambot/i,
    /applebot/i,
    /discord/i,
    /skypeuripreview/i,
    /crawler/i,
    /spider/i,
    /bot/i
  ];

  return botPatterns.some(pattern => pattern.test(userAgent));
}

function MyApp({ Component, pageProps }: AppProps) {
  const [showSplash, setShowSplash] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isBotDetected, setIsBotDetected] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if it's a bot/crawler
    const userAgent = navigator.userAgent;
    const botDetected = isBot(userAgent);
    setIsBotDetected(botDetected);

    // For bots, skip splash screen and loading states
    if (botDetected) {
      setIsLoading(false);
      setShowSplash(false);
      return;
    }

    // Normal user flow
    const hasJustLoaded = !sessionStorage.getItem('hasLoadedOnce');

    if (hasJustLoaded) {
      setShowSplash(true);
      sessionStorage.setItem('hasLoadedOnce', 'true');
    }

    // Small delay to prevent flash, but keep it minimal for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
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

  // For server-side rendering and bots, always render content
  if (typeof window === 'undefined' || isBotDetected) {
    return (
      <>
        <SEO />
        <Component {...pageProps} />
      </>
    );
  }

  // For human users, show loading state only briefly
  if (isLoading) {
    return (
      <>
        <SEO />
        {/* Render a minimal loading state that still includes SEO */}
        <div style={{ opacity: 0, position: 'absolute', zIndex: -1 }}>
          <Component {...pageProps} />
        </div>
      </>
    );
  }

  return (
    <>
      <SEO />
      {showSplash ? (
        <SplashScreen setShowSplash={setShowSplash} />
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;