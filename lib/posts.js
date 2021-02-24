import fs from 'fs'
import path from 'path'
import { getPostIdFromFileName, postsDirectory, formatStaticPaths, sortPostsByDate, parsePostData } from './utils/postUtils'


function getPostFileNames() {
    return fs.readdirSync(postsDirectory);
}

/**
 * Get all the posts sorted by post date (not last mod time)
 */
function getSortedPostsData() {
    const fileNames = getPostFileNames();
    const allPostsData = fileNames.map(fileName => {
        const id = getPostIdFromFileName(fileName);
        return getPostData(id);
    });
    
    return sortPostsByDate(allPostsData);
  }


/**
 * Returns an array that looks like this:
 * 
 *   [
 *   {
 *       params: {
 *       id: 'ssg-ssr'
 *       }
 *   }
 *   ]
 */
export function getAllPostIdPaths() {
    const fileNames = getPostFileNames();
    return formatStaticPaths(fileNames);
}

/**
 * Get the full post information, including content for a post
 * @param string id 
 */
export function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const postData = parsePostData(fileContents);

    // Combine the data with the id and contentHtml
    return {
        id,
        ...postData
    }
}

/**
 * Get the number of posts made
 */
export const numberOfPosts = () => {
  return getPostFileNames().length;
}

/**
 * Get a set number of posts
 * @param int start 
 * @param int limit 
 */
export const getPosts = (start = 0, limit) => {
  const posts = getSortedPostsData();
  
  if (!limit) {
    return posts;
  }

  return posts.slice(start, limit);
}
  