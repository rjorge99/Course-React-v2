import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        isLoadingEvents: true,
        events: [],
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
                event.id === action.payload.id ? action.payload : event
            );
            state.activeEvent = null;
        },
        onDeleteEvent: (state, action) => {
            if (state.activeEvent) {
                state.events = state.events.filter(
                    (event) => event.id !== state.activeEvent.id
                );
                state.activeEvent = null;
            }
        },
        onLoadEvents: (state, action) => {
            state.isLoadingEvents = false;
            action.payload.forEach((event) => {
                if (!state.events.some((dbEvent) => dbEvent.id === event.id))
                    state.events.push(event);
            });
        },
        onLogoutCalendar: (state, action) => {
            state.isLoadingEvents = true;
            state.events = [];
            state.activeEvent = null;
        }
    }
});

export const {
    onSetActiveEvent,
    onAddNewEvent,
    onUpdateEvent,
    onDeleteEvent,
    onLoadEvents,
    onLogoutCalendar
} = calendarSlice.actions;
export default calendarSlice;
