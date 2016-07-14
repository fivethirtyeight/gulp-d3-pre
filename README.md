# gulp-d3-pre
Gulp task for pre-rendering d3 with d3-pre.

See [d3-pre](https://github.com/fivethirtyeight/d3-pre) for more detailed documentation.


## Usage

Install the gulp plugin:
```
$ npm install @fivethirtyeight/gulp-d3-pre
```

Create a gulp task:

```js
gulp.task('prerender-svgs', function() {
  gulp.src('./public/index.html')
    .pipe(d3Pre())
    .pipe(gulp.dest('./public/'));
})
```
