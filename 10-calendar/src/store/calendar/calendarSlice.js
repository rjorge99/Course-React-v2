import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
    _id: new Date().getTime(),
    title: 'All Day Event',
    notes: 'Notas',
    start: new Date(),
    end: addHours(new Date(), 2),
    user: {
        id: 1,
        name: 'Juan'
    }
};

const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [tempEvent],
        activeEvent: null
    },
    reducers: {
        onSetActiveEvent: (state, action) => {
            state.activeEvent = action.payload;
        },
        onAddNewEvent: (state, action) => {
            state.events.push(action.payload);
            state.activeEvent = null;
        },
        onUpdateEvent: (state, action) => {
            state.events = state.events.map((event) =>
                event._id === action.payload._id ? action.payload : event
            );
            state.activeEvent = null;
        },
        onDeleteEvent: (state, action) => {
            if (state.activeEvent) {
                state.events = state.events.filter(
                    (event) => event._id !== state.activeEvent._id
                );
                state.activeEvent = null;
            }
        }
    }
});

export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } =
    calendarSlice.actions;
export default calendarSlice;
