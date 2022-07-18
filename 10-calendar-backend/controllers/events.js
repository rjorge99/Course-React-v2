const Event = require('../models/Event');

const getEvents = async (req, res) => {
    const events = await Event.find().populate('user', 'name ');

    return res.status(200).json({
        ok: true,
        events
    });
};

const createEvent = async (req, res) => {
    const event = new Event(req.body);

    event.user = req.uid;
    await event.save();

    return res.status(200).json({
        ok: true,
        event
    });
};

const updateEvent = (req, res) => {};

const deleteEvent = (req, res) => {};

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
};
