import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons' 
import { faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons' 

import Search from '../search/search'
import ExternalLink from '../externalLink'

library.add(faGithub, faLinkedin, faEnvelope, faStackOverflow)

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.analyticsId}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.analyticsId}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <style>{`
          body {
            font-family: 'Open Sans', sans-serif;
          }
        `}</style>
        <style>{`
          /* latin-ext */
          @font-face {
            font-family: 'Bitter';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/bitter/v16/raxhHiqOu8IVPmnRc6SY1KXhnF_Y8fbfOLbOW3pzveS5B3Nd.woff) format('woff');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'Bitter';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/bitter/v16/raxhHiqOu8IVPmnRc6SY1KXhnF_Y8fbfOLjOW3pzveS5Bw.woff) format('woff');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* latin-ext */
          @font-face {
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFW50bf8pkAp6a.woff2) format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
        `}</style>
      </Head>
      <div className="grid">
        <header>
          <div className="site-info">
            <Link href="/"><a href="/" className="navbar-brand">Levi Jackson</a></Link>
          </div>
          <div className="navigation">   
            <Link href="/blog/">Blog</Link>
            <Link href="/about/">About</Link>
          </div>
          <Search /> 
        </header>

        <div className="content">
          {children}
        </div>

        <footer>
          <div className="name">
            Levi Jackson <small>{(new Date().getFullYear())}</small>
          </div>
          <div className="contact">
            <ExternalLink href={`${process.env.github}`} title="Check me out on GitHub"><FontAwesomeIcon icon={["fab", "github"]} size="1x"/></ExternalLink>
            <ExternalLink href={`${process.env.linkedin}`} title="Check me out on LinkedIn"><FontAwesomeIcon icon={["fab", "linkedin"]} size="1x" /></ExternalLink>
            <ExternalLink href={`${process.env.stackoverflow}`} title="Check me out on Stack Overflow"><FontAwesomeIcon icon={["fab", "stack-overflow"]} size="1x" /></ExternalLink>
            <ExternalLink href={`mailto:${process.env.email}`} title="Email me"><FontAwesomeIcon icon={["fas", "envelope"]} size="1x" /></ExternalLink>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout;