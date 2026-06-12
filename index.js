const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname));

app.get("/estado", (req, res) => {

    const id = req.query.id;

    // Ejemplo temporal
    res.json({
        id: id,
        Activo: true
    });

});

//app.get("/estado", (req, res) => {
//    res.sendFile(path.join(__dirname, "index.html"));
//});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor iniciado");
});
