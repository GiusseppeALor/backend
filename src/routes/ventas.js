const express = require("express");
const router = express.Router();
const Ventas = require("../models/ventas");

/**
 * @swagger
 * components:
 *  schemas:
 *      Ventas:
 *          type: object
 *          properties:
 *              codigo:
 *                  type: integer
 *                  description: codigo del producto
 *              precio:
 *                  type: integer
 *                  description: precio del producto
 *              fecha:
 *                  type: string
 *                  description: fecha de venta del producto
 *              nomcliente:
 *                  type: string
 *                  description: nombre de la persona que compra el producto
 *              nomproducto:
 *                  type: string
 *                  description: nombre del producto
 *              cantidad:
 *                  type: integer
 *                  description: cantida de compra del producto
 */

router.get("/Ventas", (req, res) => {
    Ventas.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({mensaje : error}))
} );

router.get("/Ventas/:id", (req, res) => {
    const {id} = req.params;
    Ventas.find({codigo : id})
        .then((data) => res.json(data))
        .catch((error) => res.json({mensaje : error}))
} );

router.post("/Ventas", (req, res) => {
    const venta = Ventas(req.body);
    venta.save()
        .then((data) => res.json({mensaje : "Venta Registrada"}))
        .catch((error) => res.json({mensaje : error}))
} );

router.delete("/Ventas/:id", (req, res) => {
    const {id} = req.params;
    Ventas.deleteOne({codigo : id})
        .then((data) => res.json({mensaje : "Venta Eliminada"}))
        .catch((error) => res.json({mensaje : error}))
} );


module.exports = router;
