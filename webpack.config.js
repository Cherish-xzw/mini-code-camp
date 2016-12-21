var webpack = require('webpack');
var fs = require('fs');
var path = require('path');
var _ = require('lodash');

function readEntries(){
    var dirs = fs.readdirSync('./src/client/js/entries');
    var matchs = [], files = {};
    dirs.forEach(function(item){
        matchs = item.match(/(.+)\.js$/);
        if(matchs){
            files[matchs[1]] = path.resolve('./src/client/js/entries/',item);
        }
    });
    return files;
}

module.exports = {

    entry:_.extend(readEntries(),{
        vendors:['jquery']
    }),
    output:{
        path:__dirname+'/build',
        filename:'[name].js',
        publicPath:'js/'
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin('vendors','vendors.js'),
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery',
            'window.jQuery':'jquery'
        }),
    ]
}