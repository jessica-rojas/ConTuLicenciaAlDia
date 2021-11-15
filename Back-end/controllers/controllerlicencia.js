const Licencia = require("../models/licencia");

function prueba(req, res) {
  // res.status(200).send({
  //   message: "probando una acción",
  // });
  res.status(200).send("ESTA MONDA FUNCIONA WEON");
}
function savelicencia(req, res) {
  var mylicencia = new Licencia(req.body);
  mylicencia.save((err, result) => {
    res.status(200).send({ message: result });
  });
}
function buscarlicencia(req, res) {
  var idlicence = req.params.id;
  Licencia.findById(idlicence).exec(function (err, result) {
    if (err) {
      res
        .status(500)
        .send({ message: "Error al momento de ejecutar la solicitud" });
    } else {
      if (!result) {
        res
          .status(404)
          .send({ message: "El registro a buscar no se encuentra disponible" });
      } else {
        res.status(200).send({ result });
      }
    }
  });
}

function listarlicencias(req, res) {
  var idlicence = req.params.idb;
  if (!idlicence) {
    var result = Licencia.find({}).sort("numero_secuencial");
  } else {
    var result = Licencia.find({ _id: idlicence }).sort("numero_secuencial");
  }
  result.exec(function (err, result) {
    if (err) {
      res
        .status(500)
        .send({ message: "Error al momento de ejecutar la solicitud" });
    } else {
      if (!result) {
        res
          .status(404)
          .send({ message: "El registro a buscar no se encuentra disponible" });
      } else {
        res.status(200).send({ result });
      }
    }
  });
}
function updatelicencia(req, res) {
  var id = mongoose.Types.ObjectId(req.query.productId);
  Licencia.findOneAndUpdate(
    { _id: id },
    req.body,
    { new: true },
    function (err, Licencia) {
      if (err) res.send(err);
      res.json(Licencia);
    }
  );
}
module.exports = {
  prueba,
  savelicencia,
  buscarlicencia,
  listarlicencias,
  updatelicencia,
};
