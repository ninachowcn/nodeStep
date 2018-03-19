console.log('this is console.log');
process.stdout.write('this is process.stdout.write');

/*
process.stdout是标准输出流，通常我们使用的console.log()  其底层是用 process.stdout.write();实现。
*/ 