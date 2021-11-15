var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var AdministradorSchema = Schema({
  nombrecompleto: String,
  edad: Number,
  email: String,
  contraseña: String,
});
const Admin = mongoose.model("administrador", AdministradorSchema);
module.exports = Admin;
