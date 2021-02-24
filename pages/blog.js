import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Layout from '../components/layout/layout'
import blogStyles from '../styles/blog.module.scss'
import { getPosts } from '../lib/posts'
import Date from '../components/date'


const Blog = ({ allPostsData }) => {
  return (
    <Layout>
        <Head>
            <title>{`Blog | ${process.env.siteTitle}`}</title>
            <meta name="og:title" content={`Blog | ${process.env.siteTitle}`} />
            <meta name="og:description" content="Blog posts from Levi Jackson" />
            <meta name="title" content={`Blog | ${process.env.siteTitle}`} />
            <meta name="description" content="Blog posts from Levi Jackson" />
        </Head>
        <div className={blogStyles.blogPosts}>
            <h1>Blog posts</h1>
            {allPostsData.map(({ id, date, title }) => (
            <div key={id} className={blogStyles.posts__post}>
                <Link href={`/posts/${id}`}>
                    <a>
                        {title}
                        <small className={blogStyles.posts__date}>
                            <Date dateString={date} />
                        </small>
                    </a>
                </Link>
            </div>          
            ))}
        </div>
    </Layout>
  )
}

export const getStaticProps = () => {
    const allPostsData = getPosts(20);

    return {
        props: {
            allPostsData
        }
    }
}

export default Blog;