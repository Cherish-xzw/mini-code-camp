const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

const paths = {
  server: 'src/server/index.js',
  serverIgnore: [
    'gulpfile.js',
    'src/server/public/',
    'src/client/'
  ],
  css: './src/server/public/css',
  sass: './src/client/sass/main.scss',
  sassFiles: './src/client/sass/**/*.scss',
  publicJs: './src/server/public/js',
  js: './src/client/js/**/*.js'
};

gulp.task('lint', () => {
  const eslint = $.eslint;
  return gulp.src(['**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('sass', () => {
  const sass = $.sass;
  const cleanCss = $.cleanCss;
  const sourcemaps = $.sourcemaps;
  return gulp.src(paths.sass)
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.identityMap())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCss())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.css));
});

gulp.task('js', () => {
  const uglify = $.uglify;
  const babel = $.babel;
  const sourcemaps = $.sourcemaps;
  return gulp.src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.identityMap())
    .pipe(babel())
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.publicJs));
});

gulp.task('server', ['lint'], () => {
  const nodemon = $.nodemon;
  nodemon({
    script: paths.server,
    ext: '.hbs .js',
    ignore: paths.serverIgnore,
    env: {
      NODE_ENV: process.env.NODE_ENV || 'development',
      DEBUG: process.env.DEBUG || 'mcc:*',
    }
  });
});

gulp.task('watch', () => {
  gulp.watch(paths.sassFiles, ['sass']);
  gulp.watch(paths.js, ['js']);
});

gulp.task('default', ['server', 'sass', 'js', 'watch']);
