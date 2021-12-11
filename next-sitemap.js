const getChangeFreq = (path) => {
    switch (path) {
      case '/':
      case '/blog':
        return 'weekly';
      case '/about':
        return 'never';
    }
  
    if (path.startsWith('/posts/')) {
      return 'never';
    }
  
    return false;
  };
  
  module.exports = {
    siteUrl: process.env.website || 'https://www.levijackson.xyz',
    changefreq: 'yearly',
    autoLastmod: false,
    transform: async (config, path) => {
      const changeFreq = getChangeFreq(path);
      return {
        loc: path,
        changefreq: (changeFreq ? changeFreq : config.changefreq),
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: [],
      }
    },
  }