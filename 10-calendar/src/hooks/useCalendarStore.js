import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import calendarApi from '../api/calendarApi';
import { convertEventsToDateEvents } from '../helpers/convertEventsToDateEvents';
import {
    onAddNewEvent,
    onUpdateEvent,
    onSetActiveEvent,
    onDeleteEvent,
    onLoadEvents
} from '../store/calendar/calendarSlice';

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector((state) => state.calendar);
    const { user } = useSelector((state) => state.auth);

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    };

    const startSavingEvent = async (calendarEvent) => {
        try {
            if (calendarEvent.id) {
                await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
                return dispatch(onUpdateEvent({ ...calendarEvent, user }));
            }

            // Creacion
            const { data } = await calendarApi.post('/events', calendarEvent);
            dispatch(onAddNewEvent({ ...calendarEvent, id: data.event.id, user }));
        } catch (err) {
            console.log(err);
            Swal.fire('Error al guardar', error.response.data.message, 'error');
        }
    };

    const startLoadingEvents = async () => {
        try {
            console.log('startoading');
            const { data } = await calendarApi.get('/events');
            dispatch(onLoadEvents(convertEventsToDateEvents(data.events)));
        } catch (error) {
            console.log(error);
        }
    };

    const startDeleteEvent = async () => {
        try {
            await calendarApi.delete(`/events/${activeEvent.id}`);
            dispatch(onDeleteEvent());
        } catch (error) {
            console.log(error);
            Swal.fire('Error al eliminar', error.response.data.message, 'error');
        }
    };

    return {
        events,
        activeEvent,
        setActiveEvent,
        startSavingEvent,
        startDeleteEvent,
        hasEventSelected: !!activeEvent,
        startLoadingEvents
    };
};
