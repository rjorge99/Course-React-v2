import { useCalendarStore } from '../../hooks/useCalendarStore';

export const FabDelete = () => {
    const { startDeleteEvent, hasEventSelected } = useCalendarStore();

    const handleDelete = () => {
        startDeleteEvent();
    };

    if (!hasEventSelected) return null;

    return (
        <button className='btn btn-danger fab-danger' onClick={handleDelete}>
            <i className='fas fa-trash-alt'></i>
        </button>
    );
};
