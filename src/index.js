const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config();
const producto = require("./routes/producto")
const swaggerUI = require("swagger-ui-express")
const swaggerJSDoc = require("swagger-jsdoc")
const path = require("path");
const { version } = require("os");

const app = express();
const port = 8000;

app.use(express.json());
const swaggerSpecs = {
    definition:{
        openapi: "3.0.0",
        info:{
            title: "Documentacion de API Games caves",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:8000"
            }
        ]
    },
    apis: [ ` ${path.join(__dirname, "./routes/*.js")} `]
}


//
app.get("/", (req,res) => {
    res.send("Games caves funcionando")
});
app.use("/api", producto)
app.use("/doc-api", swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(swaggerSpecs)))

app.listen(port,() => console.log("Servidor funcionando en el puerto"+port));
mongoose.connect(process.env.mongodb_connect)
    .then(() => console.log("Conexión realizada a mongoDB"))
    .catch((error) => console.log(error))