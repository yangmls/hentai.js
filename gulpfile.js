var gulp = require('gulp');
var webpack = require('webpack');
var path = require('path');

gulp.task('default', ['framework']);

gulp.task('framework', function() {
  
  var compiler = webpack({
    
    context: path.join(__dirname, 'src'),
    entry: './bootstrap',
    
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel'
        }
      ]
    },
    
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'hentai.js'
    }
    
  });
  
  compiler.watch({
    
    aggregateTimeout: 300,
    poll: true
    
  }, function() {
    console.log('files re-compiled...')
  });
  
});