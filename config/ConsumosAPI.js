const conexion = require("./conexion");

const ConsumosAPI = require("express").Router();

//consumo que reliza la consulta de todos los registros
ConsumosAPI.get("/", function (req, res) {
  let sentencia_sql = "SELECT * FROM users";

  conexion.query(sentencia_sql, (e, rows, fields) => {
    if (e) console.error("ERROR EN LA CONSULTA" + " " + e);
    else res.json(rows);
  });
});

//consumo que reliza la consulta de un registro
ConsumosAPI.get("/:id", function (req, res) {
  const { id } = req.params;
  let sentencia_sql = "SELECT * FROM users WHERE id = ?";

  conexion.query(sentencia_sql, [id], (e, rows, fields) => {
    if (e) console.error("ERROR EN LA CONSULTA" + " " + e);
    else res.json(rows);
  });
});

//consumo que permite agregar un usuario
ConsumosAPI.post("/", function (req, res) {
  const { firstName, lastName, document, address, phone, email } = req.body;
  let sentencia_sql = `INSERT INTO users (firstName, lastName, document, address, phone, email)
   values ('${firstName}','${lastName}','${document}','${address}','${phone}','${email}')`;

  console.log(sentencia_sql);
  conexion.query(sentencia_sql, (e, rows, fields) => {
    if (e) console.error("ERROR EN LA INSERCION" + " " + e);
    else res.json({ status: "SE AGREGO CORRECTAMENTE EL USUARIO" });
  });
});

//consumo que permite eliminar un usuario
ConsumosAPI.delete("/:id", function (req, res) {
  const { id } = req.params;
  let sentencia_sql = `DELETE FROM users WHERE id= '${id}'`;

  console.log(sentencia_sql);
  conexion.query(sentencia_sql, [id], (e, rows, fields) => {
    if (e) console.error("ERROR EN LA ELIMINACION" + " " + e);
    else res.json({ status: "SE ELIMINO CORRECTAMENTE EL USUARIO" });
  });
});

//consumo que permite eliminar un usuario
ConsumosAPI.put("/:id", function (req, res) {
  const { id } = req.params;
  const { firstName, lastName, document, address, phone, email } = req.body;

  let sentencia_sql = `UPDATE users SET  
  firstName= '${firstName}',
  lastName='${lastName}',
  document='${document}',
  address='${address}',
  phone='${phone}',
  email='${email}' WHERE id ='${id}'`;

  console.log(sentencia_sql);
  conexion.query(sentencia_sql, (e, rows, fields) => {
    if (e) console.error("ERROR AL ACTUALIZAR USUARIO" + " " + e);
    else res.json({ status: "SE ACTUALIZO CORRECTAMENTE EL USUARIO" });
  });
});

//expor rytas
module.exports = ConsumosAPI;
