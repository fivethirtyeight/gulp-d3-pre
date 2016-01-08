/* global it */
'use strict';

var expect = require('expect.js');
var d3Pre = require('..');
var fs = require('fs');
var path = require('path');
var gutil = require('gulp-util');

it('should prerender the SVGs', function (done) {
  var stream = d3Pre();

  stream.on('data', function (file) {
    var expected = fs.readFileSync(path.resolve(__dirname + '/data/expected.html')).toString();
    expect(file.contents.toString()).to.be(expected);
  });

  stream.on('end', done);

  stream.write(new gutil.File({
    cwd: __dirname,
    base: path.join(__dirname, 'data'),
    path: path.join(__dirname, 'data', 'input.html'),
    contents: fs.readFileSync(path.resolve(__dirname + '/data/input.html'))
  }));

  stream.end();
});
