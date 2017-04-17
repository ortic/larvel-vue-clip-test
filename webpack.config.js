module.exports = {
  vue: {
    loaders: {
      js: 'buble-loader',
      scss: 'vue-style-loader!css-loader!sass-loader'
    }
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    },
    extensions: ['.js', '.vue']
  }
}