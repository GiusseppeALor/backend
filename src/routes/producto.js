const express = require("express");
const router = express.Router();
const productomodel = require("../models/producto")


/**
 * @swagger
 * components:
 *  schemas:
 *      producto:
 *          type: object
 *          properties:
 *              juego:
 *                  type: String
 *                  description: Nombre del videojuego
 *              precio:
 *                  type: String
 *                  description: precio del videojuego 
 *              plataforma:
 *                  type: String
 *                  description: plataforma del videojuego 
 *              genero:
 *                  type: String
 *                  description: genero del videojuego 
 *              stock:
 *                  type: Integer
 *                  description: stock del videojuego 
 */


//total de productos
router.get("/producto", (req,res) => {
    productomodel.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({mensaje:error}))    
});



//listado de productos por codigo
router.get("/producto/:id", (req,res) => {
    const {id} = req.params;
    productomodel.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({mensaje:error}))    
});

//
router.post("/producto", (req, res) => {
    const producto = productomodel(req.body);
    producto.save()
        .then((data) => res.json({mensaje:"Producto guardado correctamente"}))
        .catch((error) => res.json({mensaje:error}))    
});

//
router.put("/producto/:id", (req, res) => {
    const {id} = req.params;
    const {juego, precio, plataforma, genero, stock} = req.body

    productomodel
        .updateOne({_id: id}, {$set:{juego, precio, plataforma, genero, stock,}})
        .then((data) => res.json({mensaje:"Objeto actualizado"}))
});

module.exports = router;