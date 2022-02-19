const express = require('express');
const mongoose = require('mongoose');
const contactRoutes = require('./route/contactRoute')
const app = express();
app.use(express.json());

const mongoUrl = "mongodb+srv://hamzaamara1925:<hamza1925>@cluster0.mpbxb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(mongoUrl,{ useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false, useCreateIndex:true}, (err)=>{
    err ? console.log(err) : console.log('database is connected')
})
app.use(contactRoutes)
const port = 5000 

app.listen(port, (err)=>{
    err ? console.log(err) : console.log('server is runing on port 5000')
})