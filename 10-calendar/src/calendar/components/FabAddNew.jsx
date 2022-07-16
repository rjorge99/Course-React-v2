import { addHours } from 'date-fns';
import { useCalendarStore } from '../../hooks/useCalendarStore';
import { useUiStore } from '../../hooks/useUiStore';

export const FabAddNew = () => {
    const { setActiveEvent } = useCalendarStore();
    const { openDateModal } = useUiStore();

    const handleClickNew = () => {
        openDateModal();
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours(new Date(), 2),
            user: {
                id: 1,
                name: 'Juan'
            }
        });
    };

    return (
        <button className='btn btn-primary fab' onClick={handleClickNew}>
            <i className='fas fa-plus'></i>
        </button>
    );
};
