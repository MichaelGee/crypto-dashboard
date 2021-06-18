const withFonts = require('next-fonts');

module.exports = withFonts({
  images: {
    domains: ['3.us-east-2.amazonaws.com'],
  },
   enableSvg: true,
   webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
     return config;
   }
}); 

module.exports = {
  
};

