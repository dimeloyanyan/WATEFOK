const fs = require('fs');

fs.writeFile('./text.txt','linea 1',function (err) {
    if (err){
        console.log(err);
    }
    console.log('File created')
})