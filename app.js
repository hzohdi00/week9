const express = require('express');
const app = express();
let path = require('path');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


const server = app.listen(8080, ()=>{
    console.log('hello!');
});