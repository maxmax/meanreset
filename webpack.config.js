module.exports = {
  //entry: ["./src/app.js", "./src/test.js"],
  entry: {
      //main: './src/js/main.js'
      app: './src/app.js',
      test: './src/test.js',
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
