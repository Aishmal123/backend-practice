const Http=require('http')
const Server=Http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/plane');
    res.end('hhi ,now my server is running');
});

    Server.listen(3000, '127.0.0.1', () => {
    console.log("server is running at http://127.0.0.1:3000");

});