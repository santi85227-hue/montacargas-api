const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/estado", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send('{"Activo"}');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor iniciado en puerto", PORT);
});
