const generate = require('generate-password');

var pass = generate.generate({
    length: 30,
    numbers: true,
    symbols: true
});


console.log(pass);