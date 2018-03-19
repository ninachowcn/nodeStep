//引入自定义模块 module.js
var myModule = require('./module');
//调用自定义模块的方法
myModule.setName('zyt');
myModule.sayHello();

//hello zyt
/*
创建模块
    Node.js提供了exports和require两个对象，其中exports是模块公开的接口，require用于从外部获取一个模块的接口，即获取模块的exports对象
*/ 