var zlib    = require('zlib');
var tar     = require('tar');
var fstream = require('fstream');

module.exports = function(filename_or_stream, next) {
  var files = {};
  fstream
    .Reader(filename_or_stream)
    .on("error", next)
    .pipe(zlib.createGunzip())
    .on("error", next)
    .pipe(tar.Parse())
    .on("error", next)
    .on("entry", function (e) {
      var content = "";
      e.on("error", next)
      e.on("data", function (c) {
        content += c.toString();
      });
      e.on("end", function () {
        files[e.props.path] = content;
      });
    })
    .on("end", function() {
      next(null, files);
    });
};
