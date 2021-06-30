import React from 'react';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

import Layout from '../../components/layout/layout';
import postStyles from '../../styles/post.module.scss';
import { getAllPostIdPaths, getPostData } from '../../lib/posts';
import { getSchemaFromPost } from '../../lib/utils/postUtils';
import Schema from '../../components/schema';
import Date from '../../components/date';
import CodeFormatter from '../../components/codeBlock';

const Slug = ({ postData }) => {
  return (
    <Layout>
      <Schema json={getSchemaFromPost(postData)} />

      <Head>
          <title>{postData.title}</title>
          <meta name="og:title" content={`${postData.title} | ${process.env.siteTitle}`} />
          <meta name="title" content={`${postData.title} | ${process.env.siteTitle}`} />
          <meta name="description" content={`${postData.title}`} />
      </Head>
      <div className={postStyles.postWrapper}>
        <div/>
        <article className={postStyles.post}>
          <h1 className={postStyles.title}>{postData.title}</h1>
          <div className={postStyles.post__date}>
            <Date dateString={postData.date} />
          </div>
          <div className="post_content">
            <ReactMarkdown components={{ code: CodeFormatter }}>{postData.content}</ReactMarkdown>
          </div>
          <div className={postStyles.feedback_note}>
            If you have any feedback for me, I'd love to hear it - corrections, alternative paths, you name it! 
            Send me an email levi@levijackson.xyz
          </div>
        </article>
        <div/>
      </div>
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const postData = getPostData(params.slug);

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