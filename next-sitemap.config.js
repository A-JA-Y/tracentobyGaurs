/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://tracentobygaurs.com",
  // Static export: `next build` has already copied public/ into out/ by the time this
  // runs, so write sitemap.xml (and robots.txt) straight into the deployed folder.
  outDir: "out",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  // App Router icon files (app/icon.svg, app/apple-icon.png) build as routes; keep them out of the sitemap.
  exclude: ["/icon.svg", "/apple-icon.png"],


  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "daily",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};