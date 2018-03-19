function hello(){
    var name;
    this.setName = function(oName){
        name = oName;
    }
    this.sayHello = function(){
        console.log('hello ' + name)
    }

}
module.exports = hello;