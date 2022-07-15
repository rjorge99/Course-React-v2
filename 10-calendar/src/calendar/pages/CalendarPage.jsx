import { NavBar } from '../components/NavBar';

import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { addHours } from 'date-fns';
import { localizer } from '../../helpers/calendarLocalizer';
import { getMessagesES } from '../../helpers/getMessages';

const events = [
    {
        title: 'All Day Event',
        notes: 'Notas',
        start: new Date(),
        end: addHours(new Date(), 2)
    }
];

export const CalendarPage = () => {
    const eventStyleGetter = (event, start, end, isSelected) => {
        console.log({ event, start, end, isSelected });

        return {
            style: {
                backgroundColor: '#347CF7',
                borderRadius: '0px',
                opacity: 0.8,
                color: 'white'
            }
        };
    };

    return (
        <>
            <NavBar />
            <Calendar
                culture='es'
                localizer={localizer}
                events={events}
                startAccessor='start'
                endAccessor='end'
                style={{ height: 'calc(100vh - 80px)' }}
                messages={getMessagesES()}
                eventPropGetter={eventStyleGetter}
            />
        </>
    );
};
