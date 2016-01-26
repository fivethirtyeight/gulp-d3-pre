'use strict';

var through = require('through2');
var render = require('@fivethirtyeight/d3-pre-renderer');

module.exports = function (options) {
  options = options || {};

  var transform = function (file, env, cb) {
    options.inputFile = file.path;
    options.basePath = file.base;

    render(options, function (err, output) {
      if (err) {
        return cb(err);
      }
      file.contents = new Buffer(output);
      cb(null, file);
    });
  };

  return through.obj(transform);
};
