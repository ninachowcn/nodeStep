var hello = require('./singleObject');

var hello1 = new hello();
hello1.setName("nina");
hello1.sayHello();

var hello2 = new hello();
hello2.setName("zyt");
hello2.sayHello();

/*
hello nina
hello zyt

覆盖exports
    有时我们知识想把一个对象封装到模块中，例如
    定义模块：singleObejct.js
    引入模块使用：getSingleObject.js
    繁琐：exports.hello=hello;
        引入：require("./singleobject").hello;
    简易：module.exports=hello;
    exports本身仅仅是一个普通的空对象，即{}，它是专门用来声明接口
*/ 