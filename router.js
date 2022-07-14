const express = require('express');
const Contenedor = require('./contenedor')
const { Router } = express;

const router = Router();
const contenedor = new Contenedor('productos');


//GET
router.get('/productos',(req,res)=>{
    res.send(contenedor.getAll());
})

router.get('/productos/:id',(req,res)=>{
    res.send(contenedor.getById(Number(req.params.id)));
})

//POST
router.post('/productos',(req,res)=>{
    const newProducto = req.body;
    let id = contenedor.save(newProducto);
    res.status(201).send(contenedor.getById(id))
})

//PUT
router.put('/productos/:id',(req,res)=>{
    let respuesta = contenedor.update(req.params.id,req.body);
    res.send(respuesta)
})

//DELETE
router.delete('/productos/:id',(req,res)=>{
    let respuesta = contenedor.deleteById(Number(req.params.id));
    res.send(respuesta)
})


module.exports = router;