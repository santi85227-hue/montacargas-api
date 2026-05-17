const express = require("express");

const app = express();

app.use(express.json());

let equipos = {
  "1A313102": true
};

app.get("/estado", (req, res) => {

  const id = req.query.id;

  if (!id) {
    return res.json({
      error: "Falta ID"
    });
  }

  res.json({
    activo: equipos[id] || false
  });
});

app.post("/estado", (req, res) => {

  const { id, activo } = req.body;

  equipos[id] = activo;

  res.json({
    ok: true,
    equipo: id,
    activo
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor iniciado");
});
