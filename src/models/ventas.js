const mongoose = require("mongoose")

const Ventas = mongoose.Schema({
    codigo: {
        type: Number,
        require: true
    },

    precio: {
        type: String,
        require: true
    },

    nomcliente: {
        type: String,
        require: true
    },

    fecha: {
        type: String,
        require: true
    },

    cantidad: {
        type: Number,
        require: true
    },

    nomproducto: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model("Ventas GC", Ventas)
