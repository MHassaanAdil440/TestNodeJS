var fs = require('fs');

fs.appendFile('mynewfile1.txt', ' We are going to nail it.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});