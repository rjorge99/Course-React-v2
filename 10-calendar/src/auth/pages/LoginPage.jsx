import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useAuthStore } from '../../hooks/useAuthStore';
import { useForm } from '../../hooks/useForm';
import './login.css';

const loginFormFields = {
    loginEmail: '',
    loginPassword: ''
};

const registerFormFields = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerConfirmPassword: ''
};

export const LoginPage = () => {
    const { startLogin, startRegister, errorMessage } = useAuthStore();

    useEffect(() => {
        if (errorMessage) Swal.fire('Error en la autenticacion', errorMessage, 'error');
    }, [errorMessage]);

    const {
        loginEmail,
        loginPassword,
        onInputChange: onLoginInputChange
    } = useForm(loginFormFields);

    const {
        registerName,
        registerEmail,
        registerPassword,
        registerConfirmPassword,
        onInputChange: onRegisterInputChange
    } = useForm(registerFormFields);

    const loginSubmit = (event) => {
        event.preventDefault();
        startLogin(loginEmail, loginPassword);
    };

    const registerSubmit = (event) => {
        event.preventDefault();
        if (registerPassword !== registerConfirmPassword)
            return Swal.fire(
                'Error en la autenticacion',
                'Las contraseñas no coinciden',
                'error'
            );

        startRegister(registerName, registerEmail, registerPassword);
    };

    return (
        <div className='container login-container'>
            <div className='row'>
                <div className='col-md-6 login-form-1'>
                    <h3>Ingreso</h3>
                    <form onSubmit={loginSubmit}>
                        <div className='form-group mb-2'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Correo'
                                name='loginEmail'
                                value={loginEmail}
                                onChange={onLoginInputChange}
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Contraseña'
                                name='loginPassword'
                                value={loginPassword}
                                onChange={onLoginInputChange}
                            />
                        </div>
                        <div className='d-grid gap-2'>
                            <input type='submit' className='btnSubmit' value='Login' />
                        </div>
                    </form>
                </div>

                <div className='col-md-6 login-form-2'>
                    <h3>Registro</h3>
                    <form onSubmit={registerSubmit}>
                        <div className='form-group mb-2'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Nombre'
                                name='registerName'
                                value={registerName}
                                onChange={onRegisterInputChange}
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <input
                                type='email'
                                className='form-control'
                                placeholder='Correo'
                                name='registerEmail'
                                value={registerEmail}
                                onChange={onRegisterInputChange}
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Contraseña'
                                name='registerPassword'
                                value={registerPassword}
                                onChange={onRegisterInputChange}
                            />
                        </div>

                        <div className='form-group mb-2'>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Repita la contraseña'
                                name='registerConfirmPassword'
                                value={registerConfirmPassword}
                                onChange={onRegisterInputChange}
                            />
                        </div>

                        <div className='d-grid gap-2'>
                            <input type='submit' className='btnSubmit' value='Crear cuenta' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
