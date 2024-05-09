const fs = require('fs');

fs.readFile('welcome.txt', function(err, data) {
    if (err) return console.log(err); {
        console.log(data.toString());
    }
});