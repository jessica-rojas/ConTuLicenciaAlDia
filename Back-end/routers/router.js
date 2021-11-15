const { Router } = require("express");
const router = Router();
var controllerlicencia = require("../controllers/controllerlicencia");
router.get("/prueba", controllerlicencia.prueba);
router.post('/crear',controllerlicencia.savelicencia);
router.post('/buscar/:id',controllerlicencia.buscarlicencia);
router.post('/buscarg/:id?',controllerlicencia.listarlicencias);
router.put('/licencia/:id',controllerlicencia.updatelicencia);


//var controlleradmin = require("../controllers/controlleradmin");
module.exports = router;
