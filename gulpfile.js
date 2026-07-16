const gulp = require('gulp')
const svgo = require('gulp-svgo')
const path = require('path')
const fs = require('fs')

const SRC_DIR = path.join(__dirname, 'src/icons')
const OPTIMIZED_DIR = path.join(__dirname, 'src/icons/optimized')

function optimizeSvg() {
  if (fs.existsSync(OPTIMIZED_DIR)) {
    fs.rmSync(OPTIMIZED_DIR, { recursive: true, force: true })
  }
  return gulp
    .src([`${SRC_DIR}/**/*.svg`, `!${OPTIMIZED_DIR}/**/*.svg`])
    .pipe(
      svgo({
        plugins: [
          { removeViewBox: false },
          { removeDimensions: true },
          { removeStyleElement: true },
          { removeScriptElement: true },
          { removeTitle: true },
          { removeDesc: true },
          { removeUselessDefs: true },
          { removeEmptyAttrs: true },
          { removeHiddenElems: true },
          { removeEmptyText: true },
          { convertColors: true },
          { convertPathData: true },
          { mergePaths: true },
          { removeUnusedNS: true },
          { sortAttrs: true },
          { removeEmptyContainers: true },
          { cleanupIds: true },
          { minifyStyles: true },
          { convertTransform: true },
          { convertShapeToPath: true },
          { convertEllipseToCircle: true },
          { moveElemsAttrsToGroup: true },
          { moveGroupAttrsToElems: true },
          { collapseGroups: true },
          { sortDefsChildren: true },
        ],
      })
    )
    .pipe(gulp.dest(OPTIMIZED_DIR))
}

exports.optimizeSvg = optimizeSvg
exports.default = optimizeSvg
