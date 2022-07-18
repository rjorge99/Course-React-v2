const Evento = require('../models/Event');

const getEvents = async (req, res) => {
    const events = await Evento.find().populate('user', 'name ');

    return res.status(200).json({
        ok: true,
        events
    });
};

const createEvent = async (req, res) => {
    const event = new Evento(req.body);

    event.user = req.uid;
    await event.save();

    return res.status(200).json({
        ok: true,
        event
    });
};

const updateEvent = async (req, res) => {
    const eventoId = req.params.id;

    const evento = await Evento.findById(eventoId);
    if (!evento)
        return res.status(404).json({
            ok: false,
            message: 'Evento no encontrado'
        });

    if (evento.user.toString() !== req.uid) {
        return res.status(401).json({
            ok: false,
            message: 'No tienes permiso para actualizar este evento'
        });
    }

    const nuevoEvento = {
        ...req.body,
        user: req.uid
    };

    const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, nuevoEvento, {
        new: true
    });

    return res.status(200).json({
        ok: true,
        evento: eventoActualizado
    });
};

const deleteEvent = async (req, res) => {
    const eventoId = req.params.id;

    const evento = await Evento.findById(eventoId);

    if (!evento)
        return res.status(404).json({
            ok: false,
            message: 'Evento no encontrado'
        });

    if (evento.user.toString() !== req.uid)
        return res.status(401).json({
            ok: false,
            message: 'No tienes permiso para eliminar este evento'
        });

    await Evento.findByIdAndDelete(eventoId);

    return res.status(200).json({
        ok: true
    });
};

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
};
