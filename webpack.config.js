module.exports = {
  entry: {
      app: './src/app.js',
      editorapp: './src/commentsapp.js'
  },
  output: {
    path: __dirname,
    filename: "./public/assets/[name].bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: [ 'es2015', 'react' ] }
      }
    ]
  }
};
