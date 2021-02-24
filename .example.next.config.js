module.exports = (phase, { defaultConfig }) => {
    return {
      poweredByHeader: false,
      trailingSlash: true,
      reactStrictMode: true,
      env: {
        analyticsId: 'G-8FR3HQX72D',
        name: 'Levi',
        fullName: 'Levi Jackson',
        siteTitle: 'Levi Jackson | Web Engineer',
        email: 'levi@levijackson.xyz',
        jobTitle: 'Web Engineer',
        website: 'https://www.levijackson.xyz',
        image: '/images/levi-jackson.jpg',
        description: 'About Levi Jackson. I am a full stack engineer currently living in the Burlington/Greensboro area of North Carolina.'
      },
      webpack: (config, { isServer }) => {
        if (isServer) {
          require('./bin/sitemapGenerator.js');
        }
    
        return config;
      }
    }
}
