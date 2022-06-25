import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

export const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleLogin = () => {
        login('Jorge Reyes');
        navigate('/', { replace: true });
    };

    return (
        <div className='container mt-5'>
            <h1>Login</h1>
            <hr />

            <button className='btn btn-primary' onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};
