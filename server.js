const express = require('express');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const server = app.listen(8080,()=>{
    console.log("App funcionando");
});

server.on('error',()=>console.log("Error en la conexión"))

app.use('/api', router);

app.use('/static', express.static(__dirname+'/public'))