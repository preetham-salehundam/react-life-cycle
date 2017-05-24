var path = require('path');
//var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');
var BUILD_DIR = path.resolve(__dirname,'src','client','public');
var APP_DIR = path.resolve(__dirname,'src','client','app');
var config = {

	entry:{
		main:APP_DIR+"/index.jsx"
		
	},

	output:{
		path:BUILD_DIR,
		filename:'bundle.js',
	},

	module:{
		loaders:[

					{
						test:/\.jsx$/,
						//exclude : /node_modules/,
						include: APP_DIR,
						loader:'babel-loader',
						query :{
							presets : ['es2015','react']
						}
					}
					
					

		]
	},
	plugins:[
		/*new CopyWebpackPlugin(
			[
				{from:'src/app/static/css',to:'css'}
			]
							)*/
							// ,
		 // new webpack.optimize.CommonsChunkPlugin({
                // names: ['vendor', 'manifest'] // Specify the common bundle's name.
            // })
	]
}

module.exports = config;

//inside loaders//
// ,
					// {
					// 	test : /\.css$/,
					// 	loader : 'style-loader!css-loader'
					// }