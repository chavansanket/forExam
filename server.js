const express = require('express');
const config = require('config');

const empRelatedRoutes = require ('./routes/emp');

const app = express();

app.use((request, response, next)=>{
    response.setHeader('Access-Control-Allow-Origin',"*");
    response.setHeader('Access-Control-Allow-Headers',"*");
    response.setHeader('Access-Control-Allow-Methods', "*")
    next();
})


app.use(express.json()); 

app.use('/emp',empRelatedRoutes);





const portNo = config.get("PORT");
app.listen(portNo,()=>{console.log("Server Started at " + portNo)})








// const express = require('express')
// const cors = require('cors')

// const app = express()
// app.use(cors('*'))

// app.get('/', (request, response) => {
//   response.send('ba application')
// })

// app.listen(4000, '0.0.0.0', () => {
//   console.log('server started on port 4000')
// })