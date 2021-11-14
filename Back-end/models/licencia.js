var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var LicenciaSchema = Schema({
  nombre: String,
  escuela: String,
  universidad: String,
});
const Licencia = mongoose.model("carerra", LicenciaSchema);
module.exports = Licencia;