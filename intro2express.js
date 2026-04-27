import express from 'express';
const port =3000;
const app=express();
app.use(express.json());
app.get('/',(req,res)=>{
    console.log('you are learning express');
    res.send('you are achieving it');
    
});
app.get('/about/:slug',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    console.log("here is the basic information of your about page")
    res.send("here is the basic information of your about page")
})
app.get('/contact',(req,res)=>{
       console.log("here is the basic information of your about page")
    res.send("here is the basic information of your contact page")
})
app.get('/sign-In',(req,res)=>{
    console.log("here is the basic information of your about page")
    res.send("here is the basic information of your contact page")
})
app.listen(port,()=>{
    console.log('you are on the right path')
});