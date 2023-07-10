const appForTopics = express.Router();
const mysql = require('mysql');
var connection = mysql.createConnection({
    host     : config.get("localhost"),
    user     :  config.get("root"),
    password :  config.get("manager"),
    database :  config.get("punedac")
   });
   "PORT": 9999,


// appForTopics.get("/:id",(request,response)=>{

//     connection.query(`select topic_name,topic_id from topics_tbl where topic_id = ${request.params.id}`,(error,result)=>{
//         if(error==null){
//             var data =JSON.stringify(result)
//             response.setHeader("Content-Type","application/json");
//             response.write(data);
//         }
//         else{
//             console.log(error);
//                     response.setHeader("Content-Type","application/json");
//                     response.write(error)
//         }
//         response.end();
//     })

// })
