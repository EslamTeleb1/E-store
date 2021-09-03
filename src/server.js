const express = require("express");
const hbs=require('hbs');
const path=require('path');
const port=process.env.PORT||3000;
const app = express();
const publicDirectoryPath= path.join(__dirname,'../public');

const viewsPath=path.join(__dirname,'../views');
app.set('view engine','hbs');
app.set('views',viewsPath);

console.log(publicDirectoryPath)
app.use(express.static(publicDirectoryPath)); 

app.get('',(req,res)=>{
 
    res.render('index')
})

app.get('/login',(req,res)=>{
 
    res.render('login')
})

app.listen(port,()=>{

    console.log('server is up '+port);

})