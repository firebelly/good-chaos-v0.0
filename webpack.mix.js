const mix = require('laravel-mix');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');
// require('laravel-mix-ejs');

// const homepage = require('./src/data/homepage');
// const about = require('./src/data/about');
// const contacts = require('./src/data/contacts');

// const contents = {
//     homepage,
//     about,
//     contacts,
//     timestamp: Date.now()
// };

mix.webpackConfig({
    stats: {
        children: true,
    },
});

if (!mix.inProduction()) {
    mix
        // sets public path for manifest file
        .setPublicPath('build/')

        .copy('src/fonts','build/fonts')
        .copy('src/images','build/images')

        // bundles js: (from, to)
        .js('src/scripts/main.js', 'build/scripts')

        // compiles sass and add css3 prefixes: (from, to)
        .sass('src/styles/main.scss', 'build/styles')

        // compiles ejs templates: (from, to, contents, options)
        // .ejs('src/views', 'dist', contents, { rmWhitespace: true, partials: 'src/views/partials' })

        // serves assets and sync with browser sync
} else {
    mix
        // sets public path for manifest file
        .setPublicPath('build/')

        .copy('src/fonts','build/fonts')
        .copy('src/images','build/images')

        // bundles js: (from, to)
        .js('src/scripts/main.js', 'build/scripts')

        // compiles sass and add css3 prefixes: (from, to)
        .sass('src/styles/main.scss', 'build/styles')

        // compiles ejs templates: (from, to, contents, options)
        // .ejs('src/views', 'dist', contents, { rmWhitespace: true, partials: 'src/views/partials' })

        // cleans dist directory and compresses assets
        // .webpackConfig({ plugins: [ new CleanWebpackPlugin(), new CompressionPlugin() ] })
}