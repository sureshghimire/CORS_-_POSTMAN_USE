
//run the server : npm run start
//nodemon dependecies will be running on this server
const express = require('express');

//call the express function and give port number
const app = express();
const port = 8888;

//create a get route for '/'
app.get('/',(req,res)=>{
    //set the header for CORS
    res.header('Access-Control-Allow-Origin','*');
    res.send('Hello World!!');
});

//create a get route for '/json' on localhoast:8888
app.get('/json',(req,res)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.json({message: 'hello world'});
});

//create post route for '/json'
app.post('/json', (req,res)=>{
    let body ='';
    req.on('data',(chunk)=>{
        onsole.log(typeof body);
        console.log(JSON.parse(body));
        res.header('Access-Control-Allow-Origin', '*');
        res.json({ success: true });
        
    })
})

//start the server
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})