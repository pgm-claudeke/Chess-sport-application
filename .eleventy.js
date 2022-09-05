module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "src/assets/styles/main.css": "main.css",
    "src/assets/fonts": "fonts",
    "src/assets/icons": "icons",
    "src/assets/images": "images",
    "src/assets/js": "js"
  });

  return {
    ...eleventyConfig, 
    dir: {
      input: "src",
      output: "build",
      layouts: "_includes/layouts/"
    }
  }
}