import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Calendar } from 'react-big-calendar';
import { CalendarEvent } from '../components/CalendarEvent';
import { CalendarModal } from '../components/CalendarModal';
import { NavBar } from '../components/NavBar';
import { getMessagesES } from '../../helpers/getMessages';
import { localizer } from '../../helpers/calendarLocalizer';
import { useState } from 'react';
import { useUiStore } from '../../hooks/useUiStore';
import { useCalendarStore } from '../../hooks/useCalendarStore';
import { FabAddNew } from '../components/FabAddNew';
import { FabDelete } from '../components/FabDelete';

export const CalendarPage = () => {
    const [lastView] = useState(localStorage.getItem('lastView') || 'week');
    const { openDateModal } = useUiStore();
    const { events, setActiveEvent } = useCalendarStore();

    const eventStyleGetter = (event, start, end, isSelected) => {
        return {
            style: {
                backgroundColor: '#347CF7',
                borderRadius: '0px',
                opacity: 0.8,
                color: 'white'
            }
        };
    };

    const onDoubleClick = () => {
        openDateModal();
    };

    const onSelect = (event) => {
        setActiveEvent(event);
    };

    const onViewChanged = (event) => {
        localStorage.setItem('lastView', event);
    };

    return (
        <>
            <NavBar />
            <Calendar
                defaultView={lastView}
                culture='es'
                localizer={localizer}
                events={events}
                startAccessor='start'
                endAccessor='end'
                style={{ height: 'calc(100vh - 80px)' }}
                messages={getMessagesES()}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: CalendarEvent
                }}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
                onView={onViewChanged}
            />
            <CalendarModal />
            <FabAddNew />
            <FabDelete />
        </>
    );
};
