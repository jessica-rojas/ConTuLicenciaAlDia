const { Router } = require("express");
const router = Router();
var controllerlicencia = require("../controllers/controllerlicencia");
router.get("/prueba", controllerlicencia.prueba);
export default router;
