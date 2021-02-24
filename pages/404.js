import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Layout from '../components/layout/layout'

const FourOhFour = () => {
  return (
    <Layout>
      <Head>
        <title>{`404 | ${process.env.siteTitle}`}</title>
        <meta name="og:title" content={`404 | ${process.env.siteTitle}`} />
      </Head>

      <section>
        <h1>404 - Page Not Found</h1>
        <Link href="/">
        <a>
            Go back home
        </a>
        </Link>
      </section>
    </Layout>
  )
}

export default FourOhFour;