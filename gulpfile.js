const
  gulp = require('gulp'),
  $ = require('gulp-load-plugins')(),
  webpack = require('webpack'),
  WebpackDevServer = require('webpack-dev-server'),
  webpackConfig = require('./webpack.config.js'),
  runSequence = require('run-sequence').use(gulp),
  exec = require('child_process').exec,
  debug = require('debug');

const paths = {
  server: 'src/server/index.js',
  serverIgnore: [
    'gulpfile.js',
    'src/public/',
    'src/client/'
  ],
  css: './src/public/css',
  sass: './src/client/sass/main.scss',
  publicJs: './src/public/js',
  js: [
    './src/client/js/main.js',
    './src/client/js/frame-runner.js',
  ]
};

gulp.task('lint', () => {
  const eslint = $.eslint;
  return gulp.src(['**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('sass', () => {
  const sass = $.sass;
  return gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.css));
});

gulp.task('js', () => {
  return gulp.src(paths.js)
    .pipe(gulp.dest(paths.publicJs));
});

gulp.task('server', () => {
  const nodemon = $.nodemon;
  nodemon({
    script: paths.server,
    ext: '.hbs .js',
    ignore: paths.serverIgnore,
    env: {
      NODE_ENV: process.env.NODE_ENV || 'development',
      DEBUG: process.env.DEBUG || 'mcc:*',
    }
  }).on('restart', (files) => {
    if (files) {
      debug('Nodemon will restart due to changes in: ', files);
    }
  });
});

gulp.task('watch', () => {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.js, ['js']);
});

gulp.task('default', ['sass', 'js', 'server', 'watch']);
