var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './entry.js',
	output: {path: __dirname, filename:'./dist/bundle.js'},
	module: {
		loaders: [
		{
			test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0&plugins[]=transform-decorators-legacy&plugins[]=transform-runtime'
		},
    {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },
    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    },
      {
          test: /\.(eot|ttf|woff|woff2)$/,
          loader: 'file-loader?name=/fonts/[name].[ext]'
      },
      {
          test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
          loaders: [
            'file-loader?name=dist/img/[name].[ext]'
          ]}]
	}
};