const express = require("express");
const router = express.Router();
const productomodel = require("../models/producto");
const producto = require("../models/producto");


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




/**
 * @swagger
 *  /api/producto:
 *  get:
 *      summary: Buscar productos
 *      tags: [Producto]
 *      responses:
 *          200:
 *              description: todos los productos
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/producto'
 */


//total de productos
router.get("/producto", (req,res) => {
    productomodel.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({mensaje:error}))    
});




//listado de productos por codigo

/**
 * @swagger
 * /api/producto/{id}:
 *  get:
 *      summary: Buscar productos
 *      tags: [Producto]
 *      parameters:
 *          -in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: El id del producto
 *      responses:
 *          200:
 *              description: todos los productos
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/producto'
 *          404:
 *              description: producto no encontrado
 */

router.get("/producto/:id", (req,res) => {
    const { id } = req.params;
    productomodel
        .then((data) => res.json(data))
        .catch((error) => res.json({mensaje:error}))    
});

//subir archivo
router.post("/producto", (req, res) => {
    const producto = productomodel(req.body);
    producto.save()
        .then((data) => res.json({mensaje:"Producto guardado correctamente"}))
        .catch((error) => res.json({mensaje:error}))    
});

//modificar archivo
router.put("/producto/:id", (req, res) => {
    const {id} = req.params;
    const {juego, precio, plataforma, genero, stock} = req.body

    productomodel
        .updateOne({_id: id}, {$set:{juego, precio, plataforma, genero, stock,}})
        .then((data) => res.json({mensaje:"Objeto actualizado"}))
});

module.exports = router;