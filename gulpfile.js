const {src, dest, watch, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');


function css(done){
    src('src/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(dest('build/css'))
    done();
}



function compiler(done){
    watch('src/scss/**/*.scss', css);
    done();
}


exports.compiler = parallel(compiler, css)
