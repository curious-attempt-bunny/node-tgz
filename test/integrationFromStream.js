var tgz     = require('..');
var test    = require('tape');
var fstream = require('fstream');

test('access example archive via stream', function(t) {
  tgz(fstream.Reader('example.tgz'), function(err, root) {
    t.ok(root['example/file1.txt'], 'Expect file1.txt to be present'); 
    t.end();
  });
});

