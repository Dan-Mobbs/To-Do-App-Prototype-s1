const bcrypt = require('bcrypt');

let psword = bcrypt.hashSync('12345', 9);
console.log(psword);
