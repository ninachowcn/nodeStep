function compute(){
    console.log("this is compute module");
}

function somethingComplited(args){
    console.log("this is somethingComplited module");
    console.log(args)
}

function doSomething(args,callback){
    somethingComplited(args);
    process.nextTick(callback);
    // callback();
}

doSomething('123123',function end(){
    compute();
})

/*
this is somethingComplited module
123123
this is compute module

process.nextTick(callback)的功能是为事件循环设置一项任务。Node.js会在下次事件循环调响应时调用callback

如果假设compute()和somethingComplited()是两个较为耗时的函数。以上的程序在调用doSomething时会先执行somethingComplited(args),然后立即调用回调函数，在onEnd()中又会执行compute(),修改为process.nextTick(callback);替换 callback();

使用process.nextTick()后，改写后的程序会把上面耗时的操作拆分为两个事件，减少每个事件的执行时间，提高事件相应速度。
*/ 
