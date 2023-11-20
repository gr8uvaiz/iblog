const express = require('express')
const PORT = 8000;
const app = express();
// Adding Modules 
const routes = require('./routes/index');
const DB = require('./config/mongoose')
const {isAuthenticated} = require('./middlewares/auth')
const cookieParser = require('cookie-parser')

app.use(express.static('./public'))
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}))
app.use(cookieParser());
app.use(isAuthenticated);

app.use(routes);



app.listen(PORT,()=>{
    console.log("Server is Running on ",PORT);
})