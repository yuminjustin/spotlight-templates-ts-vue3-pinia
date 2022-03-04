var gulp = require('gulp');
var replace = require('gulp-replace');
var copy = require('gulp-contrib-copy');
var config = require('./build/config');

var root = config.build.outputPathName;

gulp.task('default', function (done) {

    // 服务端支持rewrite
    //apache
    gulp.src('./gulp/.htaccess')
        .pipe(copy())
        .pipe(gulp.dest(root));

    /*
    ngix 需要另外配置
    location / {
        try_files $uri $uri/ /index.html;
    }
    */
    // 解决二级路由刷新后目录问题
    gulp.src(root + '/index.html')
        .pipe(replace('=static/', '=/static/'))
        .pipe(gulp.dest(root));
    gulp.src(root + '/static/js/manifest.*.js')
        .pipe(replace('+"static/js/"+', '+"/static/js/"+'))
        .pipe(gulp.dest(root + '/static/js/'));

    done();
    console.log('打包成功.')
})