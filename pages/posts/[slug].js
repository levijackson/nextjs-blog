import React from 'react'
import Head from 'next/head'

import Layout from '../../components/layout/layout'
import postStyles from '../../styles/post.module.scss'
import { getAllPostIdPaths, getPostData } from '../../lib/posts'
import { markdownToHtml, getSchemaFromPost } from '../../lib/utils/postUtils'
import Schema from '../../components/schema'
import Date from '../../components/date'

const Slug = ({ postData }) => {
  return (
    <Layout>
      <Schema json={getSchemaFromPost(postData)} />

      <Head>
          <title>{postData.title} | {process.env.siteTitle}</title>
          <meta name="og:title" content={`${postData.title} | ${process.env.siteTitle}`} />
          <meta name="title" content={`${postData.title} | ${process.env.siteTitle}`} />
          <meta name="description" content={`${postData.title}`} />
      </Head>

        <article className={postStyles.post}>
          <h1>{postData.title}</h1>
          <div className={postStyles.post__date}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.content }} />
        </article>
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const postData = getPostData(params.slug);

  postData.content = await markdownToHtml(postData.content);

  return {
    props: {
      postData
    }
  }
}

export const getStaticPaths = () => {
  const paths = getAllPostIdPaths();

  return {
    paths,
    fallback: false
  }
}

export default Slug;