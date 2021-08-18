const mySql = require("mysql");
const { hostname } = require("os");

/* abrir conexion a BDD */
const conexionBD = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "gestionIngWeb2",
});

/* VERIFICAR CONEXION EXISTOSA */
conexionBD.connect((e) => {
  if (e) throw e;
  console.log(
    "Conexion a BDD de KTPC  y JP existosa ya puede hacer transacciones"
  );
});

/* CERRAR CONEXION */

//conexionBD.end();

module.exports = conexionBD;
