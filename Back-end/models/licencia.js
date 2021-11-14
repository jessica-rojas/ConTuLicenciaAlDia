var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var LicenciaSchema = Schema({
  numero_secuencial: Integer,
  fecha_expedicion: Date,
  Tipo: String,
  modalidad: String,
  vigencia: Date,
  nombre_completo_propietario: String,
  identificacion_propietario: Integer,
  nombre_urbanizacion: String,
  direccion_predio: String,
  descripcion: String,
  planos: Array,
  supervicion_tecnica: Boolean,
  certificado_ocupacion: Boolean,
});
var Licencia = mongoose.model("carerra", LicenciaSchema);
module.exports = Licencia;
