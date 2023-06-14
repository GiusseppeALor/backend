const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config();
const producto = require("./routes/producto")

const app = express();
const port = 5000;

app.use(express.json());



app.get("/", (req,res) => {
    res.send("Games caves funcionando")
});
app.use("/api", producto)

app.listen(port,() => console.log("Servidor funcionando en el puerto"+port));
mongoose.connect(process.env.mongodb_connect)
    .then(() => console.log("Conexión realizada a mongoDB"))
    .catch((error) => console.log(error))