var myModule = require('./module')
myModule.setName('nina');

var myModule2 = require('./module')
myModule2.setName('zyt');

myModule.sayHello();

//hello zyt
/*
单次加载
    上面的例子有点类似创建一个对象，但实际上和对象又有本质的区别，因为require不会重复加载模块，也就是说无论调用多少次require，获取的模块都是同一个
*/ 