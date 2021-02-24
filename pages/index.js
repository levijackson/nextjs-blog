import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Layout from '../components/layout/layout'
import utilStyles from '../styles/utils.module.scss'
import { getPosts } from '../lib/posts'
import Date from '../components/date'


const Index = ({ allPostsData }) => {
  return (
    <Layout>
      <Head>
          <title>{process.env.siteTitle}</title>
          <meta name="og:title" content={process.env.siteTitle} />
          <meta name="title" content={`Blog | ${process.env.siteTitle}`} />
      </Head>
      <article>
        <h1>Hello there!</h1>
        <p>Add some content here</p>
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
  const allPostsData = getPosts(0, 5);

  return {
    props: {
      allPostsData
    }
  }
}


export default Index;