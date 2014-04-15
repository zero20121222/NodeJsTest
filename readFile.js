var fs = require('fs'), fileContent = 'nothing';
fs.readFile("hello.js", "utf-8", function(err, file) {  
    console.log('start readfile\n');

    if(err) {  
        console.log(err);
        return;  
    }
    fileContent = file;
    
    console.log('end readfile \n');
});
console.log('doSomethingWithFile: '+ fileContent +'\n');