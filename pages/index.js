import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Layout from '../components/layout/layout'
import utilStyles from '../styles/utils.module.scss'
import { getPosts } from '../lib/posts'
import ExternalLink from '../components/externalLink'
import Date from '../components/date'


const Index = ({ allPostsData }) => {
  return (
    <Layout>
      <Head>
          <title>{process.env.siteTitle}</title>
          <meta name="og:title" content={process.env.siteTitle} />
          <meta name="title" content={`Blog | ${process.env.siteTitle}`} />
          <meta name="description" content="This is both a playground to test new technologies as 
          well as document some of the things I have encountered and 
          observed along the way that I feel might be helpful for someone else." />
      </Head>
      <article>
        <h1>Hello there!</h1>
        <p>
          This is both a playground to test new technologies as 
          well as document some of the things I have encountered and 
          observed along the way that I feel might be helpful for someone else.
	  This site was built using these technologies:
        </p>
        <ul className={utilStyles.techList}>
          <li><ExternalLink href="https://reactjs.org/">React</ExternalLink></li>
          <li><ExternalLink href="https://nextjs.org/">NextJS</ExternalLink></li>
          <li><ExternalLink href="https://vercel.com/">Vercel</ExternalLink></li>
          <li>CSS via <ExternalLink href="https://github.com/css-modules/css-modules">CSS Modules</ExternalLink> (using SCSS)</li>
          <li>CSS grids/flexbox</li>
        </ul>
      </article>

      <aside>
        <h2>Recent Posts</h2>
        <ul className={utilStyles.recentPosts}>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className={utilStyles.recentPosts__post}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <small className={utilStyles.recentPosts__date}>
                <Date dateString={date} />
              </small>
            </li>          
          ))}
        </ul>
      </aside>
    </Layout>
  )
}

export const getStaticProps =  () => {
  const allPostsData = getPosts(0, 10);

  return {
    props: {
      allPostsData
    }
  }
}


export default Index;