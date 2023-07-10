const express =  require('express');
const config = require('config');

const emp = express.Router();
const mysql = require('mysql');
var connection = mysql.createConnection({
    host     : config.get("host"),
    user     :  config.get("user"),
    password :  config.get("password"),
    database :  config.get("database")
   });

emp.get("/:e_name",(request,response)=>{

    connection.query(`select * from Employee_Tb where e_name=${request.params.e_name}`,(error,result)=>{
        if(error==null){
            var data =JSON.stringify(result)
            response.setHeader("Content-Type","application/json");
            response.write(data);
        }
        else{
            console.log(error);
                    response.setHeader("Content-Type","application/json");
                    response.write(error)
        }
        response.end();
    })

})


emp.put("/:e_name",(request,response)=>{
    var query1=`update Employee_Tb set id=${request.body.id},dname=${request.body.dname} where e_name=${request.params.e_name}`;
     
    // var query=`update tutorials_tbl set contents='${request.body.contents}' where tutorial_id=${request.params.tutorialId}`;
    connection.query(query1,(error,result)=>{
        if(error==null){
            var data =JSON.stringify(result)
            response.setHeader("Content-Type","application/json");
            response.write(data);
        }
        else{
            console.log(error);
                    response.setHeader("Content-Type","application/json");
                    response.write(error)
        }
        response.end();
    })
})

emp.post("/",(request,response)=>{
    // var query1=`insert into Employee_Tb(id,e_name,email,password,emp_id,dname)
    var query1=`insert into Employee_Tb(id,e_name,email)
         values
            (${request.body.id},'${request.body.e_name}','${request.body.email}')`;
            
    // var query=`insert into tutorials_tbl(tutorial_id,title,visits,author_id,topic_id,publishDate,contents) 
    //                 values(${request.body.tutorial_id},'${request.body.title}',${request.body.visits},${request.body.author_id},
    //                         ${request.body.topic_id},'${request.body.publishDate}','${request.body.contents}')`;
    connection.query(query1,(error,result)=>{
        if(error==null){
            var data =JSON.stringify(result)
            response.setHeader("Content-Type","application/json");
            response.write(data);
        }
        else{
            console.log(error);
                    response.setHeader("Content-Type","application/json");
                    response.write(error)
        }
        response.end();
    })
})

emp.delete("/:e_name",(request,response)=>{
    connection.query(`delete from Employee_Tb where e_name=${request.params.e_name}`,(error,result)=>{
        if(error==null){
            var data =JSON.stringify(result)
            response.setHeader("Content-Type","application/json");
            response.write(data);
        }
        else{
            console.log(error);
                    response.setHeader("Content-Type","application/json");
                    response.write(error)
        }
        response.end();
    })
})




module.exports=emp;