function defaultTask(cb) {
    cb();
}

exports.default = defaultTask;

//getting series understanding of types of functions
const { series } = require('gulp');

//private function 
function clean(cb){
    //body
    cb();
}

//public function
function build(cb){
    //body
    cb();
}


exports.build = build;
exports.default = series(clean,build);


//get understanding for series and parallel function
//series functions
function transpile(cb) {
    //body
    cb();
}

function bundle(cb){
    //body
    cb();
}

exports.build = series(transpile,bundle);

//parallel functions
const { parallel } = require('gulp');

function javascript(cb){
    //body
    cb();
}

function css(cb){
    //body
    cb();
}

exports.build = parallel(javascript,css);

//nested level series and parallel

const {series,parallel} = require('gulp');

function clean(cb){
    //body
    cb();
}

function cssTranspile(cb){
    //body
    cb();
}

function cssMinify(cb){
    //body
    cb();
}

function jsTranspile(cb) {
    //body
    cb();
}

function jsBundle(cb){
    //body
    cb();
}

function publish(cb){
    //body
    cb();
}

exports.build = series(clean,parallel(cssTranspile,series(jsTranspile,jsBundle),parallel(cssMinify),publish));