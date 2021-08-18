require("./config/conexion");
const express = require("express");
const ConsumosAPI = require("./config/ConsumosAPI");

const puerto = process.env.port || 3000;

//instancia express
const app = express();

app.use(express.json());

//configuracion

app.set("port", puerto);

//rutas

app.use("/api", require("./config/ConsumosAPI"));

//iniciar express

app.listen(app.get("port"), (e) => {
  if (e) console.log("ERROR AL INICIAR EL SERVER:" + e);
  else console.log("INICIo EL SERVER:" + puerto);
});
