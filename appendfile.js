var fs = require('fs')

fs.appendFile('mynewfile1.txt', 'Hello crew! Lets do it', function(err){
    if(err){
        throw err
    }else{
        console.log('Saved!')
    }})