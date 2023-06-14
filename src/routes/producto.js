const express = require("express");
const router = express.Router();
const productomodel = require("../models/producto")


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

module.exports = router;