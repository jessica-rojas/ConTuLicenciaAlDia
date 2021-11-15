const Admin = require("../models/administrador");

function pruebadmin(req, res) {
  res.status(200).send("EL ADMIN ES DAVID");
}

function saveadmin(req, res) {
  var myadmin = new Admin(req.body);
  myadmin.save((err, result) => {
    res.status(200).send({ message: result });
  });
}

function buscaradmin(req, res) {
  var idadmin = req.params.id;
  Admin.findById(idadmin).exec(function (err, result) {
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

function updateadmin(req, res) {
  var id = mongoose.Types.ObjectId(req.query.productId);
  Admin.findOneAndUpdate(
    { _id: id },
    req.body,
    { new: true },
    function (err, Admin) {
      if (err) res.send(err);
      res.json(Admin);
    }
  );
}
module.exports = {
  pruebadmin,
  buscaradmin,
  updateadmin,
};
