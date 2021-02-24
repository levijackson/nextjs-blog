import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

export const postsDirectory = path.join(process.cwd(), 'posts')

export const getPostIdFromFileName = (fileName) => {
    return fileName.replace(/\.md$/u, '');
}

export const formatStaticPaths = (fileNames) => {
    return fileNames.map(fileName => {
        return {
            params: {
                slug: getPostIdFromFileName(fileName)
            }
        }
    });
}

export const sortPostsByDate = (posts) => {
    return posts.sort((a, b) => {
        if (a.date < b.date) {
          return 1;
        }

        return -1;
      })
}

export const parsePostData = (fileContents) => {
    const matterResult = matter(fileContents);

    return {
        content: matterResult.content,
        excerpt: matterResult.excerpt,
        ...matterResult.data
    }
}

export const markdownToHtml =  async (markdown) => {
    const result = await remark().use(html).process(markdown);

    return result.toString();
}

export const getSchemaFromPost = (postData) => {
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": postData.title,
        "datePublished": postData.date,
        "mainEntityOfPage": "True",
        "author": {
          "@type": "Person",
          "name": "Levi Jackson"
        },
        "articleBody": postData.content
      };
}