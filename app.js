const express = require("express");
const serveStatic = require("serve-static");
const path = require ("path");

const app = express ();

app.use("/public", serveStatic(path.join(__dirname, '/public')))
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"/views/index.html")
)})
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
})