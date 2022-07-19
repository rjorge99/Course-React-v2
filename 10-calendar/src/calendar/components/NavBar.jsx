import { useAuthStore } from '../../hooks/useAuthStore';

export const NavBar = () => {
    const { startLogout } = useAuthStore();

    const onLogout = () => {
        startLogout();
    };

    return (
        <div className='navbar navbar-dark bg-dark mb-4 px-4'>
            <span className='navbar-brand'>
                <i className='fas fa-calendar-alt'></i> &nbsp; Jorge
            </span>
            <button className='btn btn-outline-danger' onClick={onLogout}>
                <i className='fas fa-sign-out-alt'></i> &nbsp; Logout
            </button>
        </div>
    );
};
