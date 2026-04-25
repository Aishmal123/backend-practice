const fs=require('fs')
// console.log(fs)
const write="The fs (File System) module is a built-in Node.js tool that allows you to interact with your computer's files, enabling you to create, read, update, delete, and rename them. It provides both asynchronous methods (non-blocking) and synchronous methods (blocking) to handle file operations depending on your performance needs.";
fs.writeFile('create.txt',write,err =>{
if(err){
    console.log(`You got an err` );
}
else{
    console.log("you did this")
}
})
let addContent="The fs module acts as a bridge between your JavaScript code and the computer's storage, allowing your server to manage data beyond just the temporary memory of a running script. ";
fs.appendFile('create.txt',addContent,err=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('added successfully')
    }
})
fs.rename('create.txt','created.txt',err =>{
    if(err){
        console.log(err)
    }
    else{
        console.log('changed successfully')
    }
})
fs.readFile('created.txt', 'utf8', (err, data) =>{
if(err){
        console.log(err)
    }
    else{
        console.log('changed successfully')
    }
})