const gulp = require('gulp')
const del = require('del')
const rename = require('gulp-rename')
const replace = require('gulp-replace')
const gulpIf = require('gulp-if')
const argv = require('yargs').argv
const browserSync = require('browser-sync').create()
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const debug = require('gulp-debug')
const newer = require('gulp-newer')

const fileInclude = require('gulp-file-include')
const critical = require('critical').stream
const htmlMin = require('gulp-htmlmin')

const less = require('gulp-less')
const postCSS = require('gulp-postcss')
const autoPrefixer = require('autoprefixer')
const pxToRem = require('postcss-pxtorem')
const focus = require('postcss-focus')
const gmq = require('gulp-group-css-media-queries')
const sourceMaps = require('gulp-sourcemaps')
const cssMin = require('gulp-clean-css')

const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const include = require('gulp-include')

const imageMin = require('gulp-imagemin')
const imageMinPng = require('imagemin-pngquant')
const favicon = require('gulp-favicons')
const svgSprite = require('gulp-svg-sprite')

const paths = {
  views: {
    source: './source/views/**/*.html',
    build: './build/',
    watch: [
      './source/blocks/**/*.html',
      './source/components/**/*.html',
      './source/views/**/*.html'
    ]
  },
  styles: {
    source: './source/styles/main.less',
    build: './build/styles/',
    watch: [
      './source/blocks/**/*.less',
      './source/components/**/*.less',
      './source/styles/**/*.less'
    ]
  },
  scripts: {
    source: './source/scripts/**/*.js',
    build: './build/scripts/',
    watch: [
      './source/blocks/**/*.js',
      './source/components/**/*.js',
      './source/scripts/**/*.js'
    ]
  },
  images: {
    source: [
      './source/images/*.png',
      './source/images/background/*.png',
      '!./source/images/favicons/*.png',
      '!./source/images/svg/stack/*.svg'
    ],
    build: './build/images/',
    watch: [
      './source/images/background/*.png',
      '!./source/images/favicons/*.png',
      '!./source/images/svg/stack/*.svg'
    ]
  },
  favicons: {
    source: './source/images/favicons/*.png',
    build: './build/',
    watch: './source/images/favicons/*.png'
  },
  svgSpriteStack: {
    source: './source/images/svg/stack/*.svg',
    build: './build/images/sprites/',
    watch: './source/images/svg/stack/*.svg'
  },
  fonts: {
    source: './source/fonts/**/*.{woff,woff2}',
    build: './build/fonts/',
    watch: './source/fonts/**/*.{woff,woff2}'
  }
}

function views() {
  return gulp.src(paths.views.source)
    .pipe(plumber({
      errorHandler: notify.onError({
        message: 'Error: <%= error.message %>',
        title: 'HTML Error'
      }),
      function() {
        this.emit('end');
      }
    }))
    .pipe(fileInclude({
      prefix: '@'
    }))
    .pipe(gulpIf(argv.build, replace('.css', '.min.css')))
    .pipe(gulpIf(argv.build, replace('.js', '.min.js')))
    .pipe(gulpIf(argv.build, critical({
      base: 'paths.views.build',
      css: [
        './build/styles/main.min.css'
      ],
      dimensions: [{
        width: 320,
        height: 568
        },
        {
        width: 768,
        height: 1024
        },
        {
        width: 1440,
        height: 1280
        }
      ],
      inline: true,
      minify: true
    })))
    .pipe(gulpIf(argv.build, htmlMin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true
    })))
    .pipe(debug({
      title: 'HTML:'
    }))
    .pipe(gulp.dest(paths.views.build))
    .on('end', browserSync.reload)
}

function styles() {
  return gulp.src(paths.styles.source)
    .pipe(plumber({
      errorHandler: notify.onError({
        message: 'Error: <%= error.message %>',
        title: 'HTML Error'
      }),
      function() {
        this.emit('end');
      }
    }))
    .pipe(gulpIf(argv.dev, sourceMaps.init()))
    .pipe(less())
    .pipe(gmq())
    .pipe(postCSS([
      autoPrefixer({
        grid: 'no-autoplace'
      }),
      pxToRem(),
      focus()
    ]))
    .pipe(gulpIf(argv.build, cssMin({
      level: 2
    })))
    .pipe(gulpIf(argv.build, rename({
      suffix: '.min'
    })))
    .pipe(gulpIf(argv.dev, sourceMaps.write('./maps/', {
      addComment: false
    })))
    .pipe(debug({
      title: 'CSS:'
    }))
    .pipe(gulp.dest(paths.styles.build))
    .pipe(browserSync.stream())
}

function scripts() {
  return gulp.src(paths.scripts.source)
    .pipe(plumber({
      errorHandler: notify.onError({
        message: 'Error: <%= error.message %>',
        title: 'HTML Error'
      }),
      function() {
        this.emit('end');
      }
    }))
    .pipe(include())
    .pipe(gulpIf(argv.dev, sourceMaps.init()))
    .pipe(concat('main.js'))
    .pipe(gulpIf(argv.build, uglify()))
    .pipe(gulpIf(argv.build, rename({
      suffix: '.min'
    })))
    .pipe(gulpIf(argv.dev, sourceMaps.write('./maps/', {
      addComment: false
    })))
    .pipe(debug({
      title: 'Scripts:'
    }))
    .pipe(gulp.dest(paths.scripts.build))
    .on('end', browserSync.reload)
}

function images() {
  return gulp.src(paths.images.source)
    .pipe(newer(paths.images.build))
    .pipe(gulpIf(argv.build, imageMin([
      imageMinPng({
        dithering: 0.4,
        speed: 1,
        strip: true,
        quality: [0, 1]
      })
    ])))
    .pipe(debug({
      title: 'Images:'
    }))
    .pipe(gulp.dest(paths.images.build))
}

function favicons() {
  return gulp.src(paths.favicons.source)
    .pipe(newer(paths.favicons.build))
    .pipe(favicon({
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        windows: false,
        yandex: false
      }
    }))
    .pipe(debug({
      title: 'Favicons:'
    }))
    .pipe(gulp.dest(paths.favicons.build))
}

function svgSpriteStack() {
  return gulp.src(paths.svgSpriteStack.source)
    .pipe(gulpIf(argv.build, imageMin([
      imageMin.svgo({
        plugins: [
          {cleanupAttrs: true},
          {cleanupListOfValues: true},
          {collapseGroups: true},
          {convertColors: true},
          {convertEllipseToCircle: true},
          {convertPathData: true},
          {convertShapeToPath: true},
          {convertTransform: true},
          {mergePaths: true},
          {minifyStyles: true},
          {moveElemsAttrsToGroup: true},
          {removeComments: true},
          {removeDesc: true},
          {removeDimensions: true},
          {removeDoctype: true},
          {removeEditorsNSData: true},
          {removeEmptyAttrs: true},
          {removeEmptyContainers: true},
          {removeEmptyText: true},
          {removeHiddenElems: true},
          {removeMetadata: true},
          {removeNonInheritableGroupAttrs: true},
          {removeOffCanvasPaths: true},
          {removeScriptElement: true},
          {removeTitle: true},
          {removeUnknownsAndDefaults: true},
          {removeUnusedNS: true},
          {removeUselessStrokeAndFill: true},
          {removeXMLNS: true},
          {removeXMLProcInst: true},
          {sortAttrs: true}
        ]
      })
    ])))
    .pipe(svgSprite({
      dest: './',
      mode: {
        stack: {
          bust: false,
          dest: './',
          prefix: '.',
          render: {
            less: {
              dest: './../../../source/styles/helpers/spriteSvg.less',
              template: './source/styles/helpers/spriteSvg.handlebars'
            }
          },
          sprite: 'sprite.stack.svg'
        }
      },
      svg: {
        xmlDeclaration: ''
      }
    }))
    .pipe(replace('.svg .', '.svg '))
    .pipe(replace('#.', '#'))
    .pipe(replace('-dims', ''))
    .pipe(debug({
      title: 'SVG Sprite Stack:'
    }))
    .pipe(gulp.dest(paths.svgSpriteStack.build))
}

function fonts() {
  return gulp.src(paths.fonts.source)
    .pipe(newer(paths.fonts.build))
    .pipe(debug({
      title: 'Fonts:'
    }))
    .pipe(gulp.dest(paths.fonts.build))
}

function clean() {
  return del('./build/*')
}

function watch() {
  if (argv.sync) {
    browserSync.init({
      host: 'localhost',
      notify: false,
      port: 7000,
      server: './build/',
      ui: false
    })
  }
  gulp.watch(paths.views.watch, views)
  gulp.watch(paths.styles.watch, styles)
  gulp.watch(paths.scripts.watch, scripts)
  gulp.watch(paths.images.watch, images)
  gulp.watch(paths.favicons.watch, favicons)
  gulp.watch(paths.svgSpriteStack.watch, svgSpriteStack)
  gulp.watch(paths.fonts.watch, fonts)
}

gulp.task('default', gulp.series(clean, svgSpriteStack, styles, views, scripts, images, favicons, fonts, watch))
