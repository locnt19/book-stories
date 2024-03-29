const del = require('del')
gulp = require('gulp')
pug = require('gulp-pug')
sass = require('gulp-sass')
cssnano = require('cssnano')
babel = require('gulp-babel')
uglify = require('gulp-terser')
concat = require('gulp-concat')
rename = require('gulp-rename')
replace = require('gulp-replace')
plumber = require('gulp-plumber')
postcss = require('gulp-postcss')
prefixer = require('autoprefixer')
srcmap = require('gulp-sourcemaps')
cssImport = require('gulp-cssimport')
sassUnicode = require('gulp-sass-unicode')
cssDeclarationSorter = require('css-declaration-sorter')
browserSync = require('browser-sync').create()
readFileSync = require('graceful-fs').readFileSync
sass.compiler = require('node-sass');


// Task clean
gulp.task('clean', function () {
	return del(['./dist']);
})

// Task copy font icon
gulp.task('copyFontsIcon', function () {
	let config = JSON.parse(readFileSync('./config.json'));
	return gulp.src(config.font)
		.pipe(gulp.dest('./dist/webfonts'));
})

// Task copy web font
gulp.task('copyWebFont', function () {
	return gulp.src([
		'./src/assets/fonts/*',
		'bower_components/mdi/fonts/*'
	])
		.pipe(gulp.dest('./dist/fonts'));
})

// Task clean images
gulp.task('cleanImages', function () {
	return del(['./dist/img'])
})

// Task copy images
gulp.task('copyImages', function () {
	return gulp.src('./src/assets/images/**/**.{svg,gif,png,jpg,jpeg}')
		.pipe(gulp.dest('./dist/img'));
})

// Task plugin JS
gulp.task('globalJs', function () {
	let glob = JSON.parse(readFileSync("./config.json"))
	return gulp.src(glob.globalJs, {
			allowEmpty: true
		})
		.pipe(concat('global.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.reload({
			stream: true
		}))
})

// Task custom JS in website
gulp.task('js', function () {
	return gulp.src('./src/components/main.js', {
			allowEmpty: true
		})
		.pipe(srcmap.init())
		.pipe(babel({
			presets: ['@babel/preset-env']
		}))
		.pipe(uglify())
		.pipe(srcmap.write('.'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

// Task plugin CSS
gulp.task('globalCss', function () {
	let glob = JSON.parse(readFileSync("./config.json"))
	return gulp.src(glob.globalCss, {
			allowEmpty: true,
		})
		.pipe(concat('global.min.css'))
		.pipe(postcss([
			cssnano(),
			cssDeclarationSorter({
				order: 'smacss'
			})
		]))
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
})

// Task custom CSS in website
gulp.task('css', function () {
	return gulp.src([
			'./src/components/main.sass',
		], {
			allowEmpty: true
		})
		.pipe(srcmap.init())
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(sassUnicode())
		.pipe(postcss([
			prefixer({
				cascade: false,
			}),
			cssnano(),
			cssDeclarationSorter({
				order: 'smacss'
			})
		]))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(srcmap.write('.'))
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

// Task compile HTML
gulp.task('html', function () {
	return gulp.src([
			'./src/views/*.pug',
			'!./src/views/\_*.pug'
		])
		.pipe(pug({
			pretty: '\t',
		}))
		.pipe(plumber())
		.pipe(gulp.dest('./dist/'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

// Task watch
gulp.task('serve', function () {
	browserSync.init({
			notify: false,
			server: {
				baseDir: './dist',
			},
			port: 8000
		}),
		gulp.watch([
				'./config.json'
			],
			gulp.parallel('globalJs', 'globalCss')
		),
		gulp.watch([
				'./src/assets/**/**.{svg,gif,png,jpg,jpeg}'
			],
			gulp.series('cleanImages', 'copyImages')
		),
		gulp.watch([
				'./src/**/**.pug',
			],
			gulp.series('html')
		),
		gulp.watch([
				'./src/components/**/**.sass',
			],
			gulp.series('css')
		),
		gulp.watch([
				'./src/components/main.js',
			],
			gulp.series('js')
		),
		gulp.watch('./dist/*').on('change', browserSync.reload)
})

// Gulp task defaul
gulp.task('default', gulp.series(
	'clean',
	'copyImages',
	'copyFontsIcon',
	'copyWebFont',
	'globalCss',
	'globalJs',
	'html',
	'css',
	'js',
	'serve'
))
