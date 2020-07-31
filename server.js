const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
require('dotenv').config()
const port=process.env.PORT
const database = require('./config/database.config')
var userRoutes = require('./app/routes/user.routes')
app.use('/user',userRoutes)
.s


database.mongoose;

app.listen(port,()=>{
    console.log('server is listning on a port '+port)
})