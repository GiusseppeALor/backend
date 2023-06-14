const mongoose = require("mongoose")

const productomodel = mongoose.Schema({


    juego:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    plataforma:{
        type: String,
        required: true
    },
    genero:{
        type: String,
        required: true
    },
    stock:{
        type: Number,
        required: true
    }
});


module.exports = mongoose.model("producto", productomodel);

