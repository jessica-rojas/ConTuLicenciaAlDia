const { Router } = require("express");
const router = Router();
var controllerlicencia = require("../controllers/controllerlicencia");
router.get("/prueba", controllerlicencia.prueba);
router.post('/crear',controllerlicencia.savelicencia);
router.post('/buscar/:id',controllerlicencia.buscarlicencia);
router.post('/buscar/:id?',controllerlicencia.listarlicencias);

//var controlleradmin = require("../controllers/controlleradmin");
module.exports = router;
