var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'ninachow',
    database:'sys',
});

connection.connect();

// connection.query('select 1 + 1 AS solution', function(err,results,fields){
//     if(err) throw err;
//     console.log('the solution is: ', results[0].solution);
// });

//查询数据表所有数据
connection.query('select * from websites',function(err,result){
    if(err){
        console.log('[select error] - ', err.message);
        return;
    }
    console.log(result)
})

//插入新数据
var addsql = 'insert into websites(Id,name,url,alexa,country) values(0,?,?,?,?)';
var addsqlParams = ['菜鸟工具','https://c.runnoob.com','2323236','ZYT'];
connection.query(addsql, addsqlParams,function(err,result){
    if(err){
        console.log('[select error] - ', err.message);
        return;
    }
    console.log('------------------insert--------------------------');
    console.log(result)
})

//修改数据
var modSql = 'update websites set name = ?, url = ? where Id = ?';
var modSqlParams = ['菜鸟移动站','http://baidu.com',6];
connection.query(modSql,modSqlParams,function(err,result){
    if(err){
        console.log('[select error] - ', err.message);
        return;
    }
    console.log('------------------update--------------------------');
    console.log(result,result.affectedRows)
})

//删除数据
var delSql = 'delete from websites where Id = 7';
connection.query(delSql,function(err,result){
    if(err){
        console.log('[select error] - ', err.message);
        return;
    }
    console.log('------------------delete--------------------------');
    console.log(result,result.affectedRows)
})
connection.end();