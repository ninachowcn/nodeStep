var fs = require('fs');
fs.readFile('file.txt','utf-8',function(err,data){
    if (err) {
       console.log(err) 
    } else {
        console.log(data)
    }
});
console.log('end')

// 执行结果：
//end
//这些是从文档内读出！