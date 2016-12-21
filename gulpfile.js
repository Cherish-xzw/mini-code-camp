var gulp = require("gulp"),
	$ = require('gulp-load-plugins')(),
	webpack = require("webpack"),
	WebpackDevServer = require("webpack-dev-server"),
	webpackConfig = require("./webpack.config.js"),
	runSequence = require('run-sequence').use(gulp),
	exec = require('child_process').exec;

// The development server (the recommended option for development)
gulp.task("default", ["webpack-dev-server"]);

// Build and watch cycle (another option for development)
// Advantage: No server required, can run app from filesystem
// Disadvantage: Requests are not blocked until bundle is available,
//               can serve an old app on refresh
gulp.task("build-dev", ["webpack:build-dev"], function () {
	gulp.watch(["./src/**/*"], ["webpack:build-dev"]);
});

// Production build
gulp.task("build", ["webpack:build"]);

gulp.task("webpack:build", function (callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	myConfig.plugins = myConfig.plugins.concat(
		new webpack.DefinePlugin({
			"process.env": {
				// This has effect on the react lib size
				"NODE_ENV": JSON.stringify("production")
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	);

	// run webpack
	webpack(myConfig, function (err, stats) {
		if (err) throw new $.util.PluginError("webpack:build", err);
		$.util.log("[webpack:build]", stats.toString({
			colors: true
		}));
		callback();
	});
});

// modify some webpack config options
var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;

// create a single instance of the compiler to allow caching
var devCompiler = webpack(myDevConfig);

gulp.task("webpack:build-dev", function (callback) {
	// run webpack
	devCompiler.run(function (err, stats) {
		if (err) throw new $.util.PluginError("webpack:build-dev", err);
		$.util.log("[webpack:build-dev]", stats.toString({
			colors: true
		}));
		callback();
	});
});

gulp.task("webpack-dev-server", function (callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	myConfig.devtool = "eval";
	myConfig.debug = true;

	// Start a webpack-dev-server
	new WebpackDevServer(webpack(myConfig), {
		publicPath: "/" + myConfig.output.publicPath,
		stats: {
			colors: true
		},
		inline: true,
		hot: true
	}).listen(8080, "localhost", function (err) {
		if (err) throw new $.util.PluginError("webpack-dev-server", err);
		$.util.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
	});
});

gulp.task('rev', function () {
	return gulp.src(['src/client/**/*.js', 'src/client/**/*.css'])
		.pipe($.rev())
		.pipe(gulp.dest('release/build'))  // write rev'd assets to build dir
		.pipe($.rev.manifest())
		.pipe(gulp.dest('release/build'));  // write manifest to build dir
});

gulp.task('add-revsion', function () {
	return gulp.src(['release/build/*.json', 'src/client/views/**/*.html'])
		.pipe($.revCollector())
		.pipe(gulp.dest('release/build/views'));
});

gulp.task('clean', function () {
	return gulp.src('release', { read: false })
		.pipe($.clean());
});

gulp.task('build', function (cb) {
	runSequence('clean', 'rev', 'add-revsion', cb)
});

gulp.task('release', ['build'], function () {
	return gulp.src(['src*/server*/**', 'package.json', 'release/build*/**'])
		.pipe(gulp.dest('release'));
});

gulp.task('dependencies', function () {
	exec('cd release && npm install --production ', function (err, stdout, stderr) {
		if (stdout) console.log(stdout);
	});
});

gulp.task('package', ['dependencies'], function () {
	runSequence('release', 'dependencies');
	return gulp.src('release/**')
		.pipe($.tar('release.tar'))
		.pipe($.gzip())
		.pipe(gulp.dest('archive'));
});