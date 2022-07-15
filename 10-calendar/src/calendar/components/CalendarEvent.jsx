export const CalendarEvent = ({ event }) => {
    const { title, user } = event;

    return (
        <>
            {title} - {user.name}
        </>
    );
};
