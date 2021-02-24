const fs = require('fs');
const globby = require('globby');
const utils = require('../lib/utils/sitemapUtils')

// based on https://medium.com/frontend-digest/how-to-build-a-dynamic-sitemap-for-your-next-js-app-c69836c91f8a
async function generateSiteMap() {
  const pages = await globby([
    'pages/**/*.js',
    '!pages/_*.js',
    '!pages/**/[slug].js',
    '!pages/api',
    '!pages/404.js',
    'posts/*.md'
  ])

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
    .map(page => {
        const priority = utils.getPriority(page);
        const lastMod = utils.formatDate(utils.getFileLastModTime(page), 'yyyy-MM-dd');
        const changeFreq = 'monthly';
        const route = utils.getUrl(page);
        
        
return `
    <url>
        <loc>${`https://www.your-website.com${route}`}</loc>
        <lastmod>${lastMod}</lastmod>
        <priority>${priority}</priority>
        <changefreq>${changeFreq}</changefreq>
    </url>`
    })
    .join('')}
</urlset>`

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSiteMap()