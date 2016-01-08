'use strict';

var through = require('through2');
var render = require('@fivethirtyeight/d3-pre-renderer');

module.exports = function () {
  var transform = function (file, env, cb) {
    render({inputFile: file.path}, function (err, output) {
      if (err) {
        return cb(err);
      }

      file.contents = new Buffer(output);
      cb(null, file);
    });
  };

  return through.obj(transform);
};
