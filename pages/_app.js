import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as analytics from '../components/analytics'
import '../styles/global.scss'

const App = ({ Component, pageProps }) => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            analytics.pageview(url);
        }

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        }
    }, [router.events]);

    return <Component {...pageProps} />
}

export default App;