const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { isDate } = require("../helpers/isDate");
const {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
} = require("../controllers/events");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

//Todas tienen que tener que pasar por la validacion
router.use(validarJWT);

//obtener eventos
router.get(
    "/",

    getEventos
);
router.post(
    "/",
    [
        check("title", "El titulo es obligatorio").not().isEmpty(),
        check("start", "La fecha de inicio es obligatoria").custom(isDate),
        check("end", "La fecha de fin es obligatoria").custom(isDate),
        validarCampos
    ],
    crearEvento
);
router.put(
    "/:id",
    [
        check("title", "El titulo es obligatorio").not().isEmpty(),
        check("start", "La fecha de inicio es obligatoria").custom(isDate),
        check("end", "La fecha de fin es obligatoria").custom(isDate),
        validarCampos
    ],
    actualizarEvento
);
router.delete("/:id", eliminarEvento);

module.exports = router;
