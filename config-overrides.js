const { override, fixBabelImports } = require('customize-cra');
const path = require('path');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        style: 'css',
    }),
    config => {
        config.resolve.alias = {
            '@': path.resolve(__dirname, 'src'),
        };
        config.devtool = false; //去掉map文件
        // config.entry = ['babel-polyfill', path.resolve(__dirname, 'src/index.js')]; //主要是添加'babel-polyfill'到入口处
        //下面的配置在此处省略
        // 暴露webpack的配置 config ,evn
        // config.entry.unshift('babel-polyfill');
        return config;
    }
);
// {
//     mode: 'development',
//     bail: false,
//     devtool: 'cheap-module-source-map',
//     entry: '/Users/lizw/Desktop/客开大屏/重庆壳牌/src/index.js',
//     output: {
//       path: undefined,
//       pathinfo: true,
//       filename: 'static/js/bundle.js',
//       futureEmitAssets: true,
//       chunkFilename: 'static/js/[name].chunk.js',
//       publicPath: '/',
//       devtoolModuleFilenameTemplate: [Function],
//       jsonpFunction: 'webpackJsonpcqqp',
//       globalObject: 'this'
//     },
//     optimization: {
//       minimize: false,
//       minimizer: [ [TerserPlugin], [OptimizeCssAssetsWebpackPlugin] ],
//       splitChunks: { chunks: 'all', name: true },
//       runtimeChunk: { name: [Function: name] }
//     },
//     resolve: {
//       modules: [ 'node_modules', '/Users/lizw/Desktop/客开大屏/重庆壳牌/node_modules' ],
//       extensions: [
//         '.web.mjs', '.mjs',
//         '.web.js',  '.js',
//         '.json',    '.web.jsx',
//         '.jsx'
//       ],
//       alias: { '@': '/Users/lizw/Desktop/客开大屏/重庆壳牌/src' },
//       plugins: [ [Object], [ModuleScopePlugin] ]
//     },
//     resolveLoader: { plugins: [ [Object] ] },
//     module: { strictExportPresence: true, rules: [ [Object], [Object] ] },
//     plugins: [
//       HtmlWebpackPlugin {
//         options: [Object],
//         childCompilerHash: undefined,
//         assetJson: undefined,
//         hash: undefined,
//         version: 4
//       },
//       InterpolateHtmlPlugin {
//         htmlWebpackPlugin: [Function],
//         replacements: [Object]
//       },
//       ModuleNotFoundPlugin {
//         appPath: '/Users/lizw/Desktop/客开大屏/重庆壳牌',
//         yarnLockFile: undefined,
//         useYarnCommand: [Function: bound useYarnCommand],
//         getRelativePath: [Function: bound getRelativePath],
//         prettierError: [Function: bound prettierError]
//       },
//       DefinePlugin { definitions: [Object] },
//       HotModuleReplacementPlugin {
//         options: {},
//         multiStep: undefined,
//         fullBuildTimeout: 200,
//         requestTimeout: 10000
//       },
//       ReactRefreshPlugin { options: [Object] },
//       CaseSensitivePathsPlugin {
//         options: {},
//         logger: [Object],
//         pathCache: {},
//         fsOperations: 0,
//         primed: false
//       },
//       WatchMissingNodeModulesPlugin {
//         nodeModulesPath: '/Users/lizw/Desktop/客开大屏/重庆壳牌/node_modules'
//       },
//       ManifestPlugin { opts: [Object] },
//       IgnorePlugin {
//         options: [Object],
//         checkIgnore: [Function: bound checkIgnore]
//       },
//       ESLintWebpackPlugin {
//         key: 'ESLintWebpackPlugin',
//         options: [Object],
//         run: [Function: bound run] AsyncFunction
//       }
//     ],
//     node: {
//       module: 'empty',
//       dgram: 'empty',
//       dns: 'mock',
//       fs: 'empty',
//       http2: 'empty',
//       net: 'empty',
//       tls: 'empty',
//       child_process: 'empty'
//     },
//     performance: false
//   }
