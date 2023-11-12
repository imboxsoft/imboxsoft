module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-each': {},
    'postcss-simple-vars': {},
    'tailwindcss/nesting': 'postcss-nested',
    tailwindcss: {},
    autoprefixer: {},
  },
}

console.log('PostCSS Configuration:', module.exports.plugins);