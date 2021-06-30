# Setup
1) Run `npm install`
2) `cp .example.next.config.js next.config.js` and adjust the environment settings for you site
3) Adjust `bin/sitemapGenerate.js` and swap `https://www.your-website.com` with your web site URL

# Sitemap Generation
Build the application and it will generate the sitemap. If you're hosting it on Vercel this step will run automatically during deployment.
```
npm run build
```

# Testing
`npm run test` will validate the core functionality

# Blog Posts

## Code Formatting
This project uses [remarkjs/react-markdown](https://github.com/remarkjs/react-markdown) and [react-syntax-highlighter/react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) to do code formatting. 

To format in a specific language, use the format of
```
```<language>
```php
```bash
```javascript
```

A list of language options can be found [here](https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_PRISM.MD).
