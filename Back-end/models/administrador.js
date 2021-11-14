var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var AdministradorSchema = Schema({
  nombrecompleto: String,
  edad: Integer ,
  email: String,
  contraseña: String,
});
const Admin = mongoose.model("carerra", AdministradorSchema);
module.exports = Admin;
