const { Router } = require('express');
const { check } = require('express-validator');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const isDate = require('../helpers/isDate');
const validarCampos = require('../middlewares/validar-campos');
const validarJWT = require('../middlewares/validar-jwt');
const validateObjectId = require('../middlewares/validateObjectId');
const router = Router();

router.use(validarJWT);

router.get('/', getEvents);

router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de fin es obligatoria').custom(isDate),
        validarCampos
    ],
    createEvent
);

router.put('/:id', validateObjectId, updateEvent);

router.delete('/:id', validateObjectId, deleteEvent);

module.exports = router;
