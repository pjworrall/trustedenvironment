var fs = require('fs');

fs.readFile('queries/query.sh', 'utf8', function(err, contents) {
    console.log(contents);
});

console.log('after calling readFile');