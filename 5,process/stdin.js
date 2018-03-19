process.stdin.resume();
process.stdin.on('data',function(data){
    process.stdout.write('read from stdin.resume ' + data.toString());
})

/*
woshinina
read from stdin.resume woshinina
how are you
read from stdin.resume how are you

prcess.stdin是标准输入流，初始时它是被暂停的。要想从标准输入流读取数据，必须恢复流，并手动编写流的事件相应函数。


*/ 