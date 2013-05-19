# Description [![build status](https://secure.travis-ci.org/curious-attempt-bunny/node-tgz.png)](http://next.travis-ci.org/curious-attempt-bunny/node-tgz)

Extract files from a tgz archive in node.js in memory - yes, this doesn't write to disk.

# Usage

    var tgz = require('tgz');
    tgz(filename_or_stream, function(error, files) { console.log(files['folder/file.txt']); );

# Installation

    npm install tgz

# License

MIT
