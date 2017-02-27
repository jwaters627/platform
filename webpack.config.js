var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './entry.js',
	output: {path: __dirname, filename:'./dist/bundle.js'},
	module: {
		loaders: [
		{
			test: /.js?$/,
			loader: 'babel-loader',
			exclude: /node-modules/,
			query: {
				presets: ['es2015', 'react', 'stage-0']
			}
		},
    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    },
     {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'file-loader'
      },
      {
          test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
          loaders: [
            'url-loader?limit=10000&mimetype=image/svg+xml'
          ]}]
	}
};