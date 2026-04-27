import express from 'express';
import cookieParser from 'cookie-parser';
const port =3000;
const app=express();

const Time=function(req,res,next){
    req.Time=Date.now()
    next()
}

app.use(Time);
app.get('/sign-Up',(req,res)=>{
    console.log(`here is your signup page recieved at ${req.Time}`);
    res.send('hey you got your signup page')
    console.log('Cookies: ', req.cookies);
})
const home=function(rea,res,next){
    req.home=Date.now()
    next()
}
app.get('/home',(req,res)=>{
    console.log(`here is your home page recived at ${req.DataView}`);
    res.send('hey you got your home page')
})
app.get('/user/:id',(req,res)=>{
    const userId=req.params.id;
if (id==='0') {
    const err=err(`you are entering invalid id`)
    err.status(400);

}else{
    console.log('user profile');
}
})

app.use((err,req,res,next)=>{
    console.error(err.stack)
    req.status(500).send('broken!!');
})

// app.use((err, req, res, next) => {
//   console.error(err.stack)
//   res.status(500).send('Something broke!')
// })

// load the cookie-parsing middleware
app.use(cookieParser())


app.listen(port)