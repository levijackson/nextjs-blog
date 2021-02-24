import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import Layout from '../components/layout/layout'
import Schema from '../components/schema'
import aboutStyles from '../styles/about.module.scss'


const About = () => {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "email": `mailto: ${process.env.email}`,
    "image": process.env.image,
    "jobTitle": process.env.jobTitle,
    "name": process.env.fullName,
    "url": process.env.website
  };

  return (
    <Layout>
      <Head>
        <title>{`About | ${process.env.siteTitle}`}</title>
        <meta name="og:title" content={`About | ${process.env.siteTitle}`} />
        <meta name="title" content={`About | ${process.env.siteTitle}`} />
        <meta name="og:description" content={`${process.env.description}`} />
        <meta name="description" content={`${process.env.description}`} />
        <meta name="og:image" content={`${process.env.website}${process.env.image}`} />
      </Head>
      <Schema json={schemaJson} />

      <article>
        <h1>Hi There!</h1>
        <p>Add some content here</p>
        
      </article>
      <aside className={aboutStyles.photo}>
      <Image
            src={`${process.env.image}`}
            alt={`Photo of ${process.env.fullName}`}
            width={250}
            height={167}
        />
      </aside>
    </Layout>
  )
}

export default About;