var gulpfileinclude =require('gulp-file-include')

var {src,pipe,dest,watch,series,parallel}=require('gulp')
var webserver=require('gulp-webserver')


function fileinclude (){
    return src('./src/index.html')
    .pipe(gulpfileinclude(
        {
            prefix:'@',
            basepath:'./src'
        }
    ))
    .pipe(dest('./dest'))
}

function watchTesk(){
    watch("./src/*.html",fileinclude)
}

function webserverTesk(){
    return src('./dest')
    .pipe(webserver({
        host:'localhost',
        port:4000,
        open:'./index.html',
        livereload:true

    }))
}
module.exports={

    fileinclude:fileinclude,
    watchTesk:watchTesk,
    webserverTesk:  series(  watchTesk,webserverTesk)

}