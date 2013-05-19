var tgz   = require('..');
var test = require('tape');

test('access example archive', function(t) {
  tgz('example.tgz', function(err, root) {
    t.ok(root['example/file1.txt'], 'Expect file1.txt to be present');
    t.end();
  }); 
});

test('non-existant file', function(t) {
  tgz('doesnotexist.tgz', function(err, root) {
    t.ok(err, 'Expect error');
    t.end();
  });
});

test('non tgz file', function(t) {
  tgz('integration.js', function(err, root) {
    t.ok(err, 'Expect error');
    t.end();
  });
});
