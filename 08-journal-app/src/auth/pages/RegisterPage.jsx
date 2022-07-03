import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layouts/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailAndPassword } from '../../store/auth/authSlice';

const initialValues = {
    displayName: '',
    email: '',
    password: ''
};

const formValidations = {
    email: [(value) => value.includes('@'), 'El correo no es valido.'],
    password: [(value) => value.length >= 6, 'El password debe tener mas de 6 letras.'],
    displayName: [(value) => value.length >= 1, 'El nombre es obligatorio.']
};

export const RegisterPage = () => {
    const { status, errorMessage } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [formSubmited, setFormSubmited] = useState(false);
    const {
        email,
        password,
        displayName,
        onInputChange,
        isFormValid,
        displayNameValid,
        emailValid,
        passwordValid,
        formState
    } = useForm(initialValues, formValidations);

    const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

    const onSubmit = (e) => {
        e.preventDefault();
        setFormSubmited(true);

        if (!isFormValid) return;

        dispatch(startCreatingUserWithEmailAndPassword(formState));
    };

    return (
        <AuthLayout title='Create Account'>
            <form
                onSubmit={onSubmit}
                className='animate__animated animate__fadeIn animate__faster'>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label='Name'
                            type='text'
                            placeholder='Name'
                            name='displayName'
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmited}
                            helperText={displayNameValid}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label='Email'
                            type='email'
                            placeholder='email@google.com'
                            name='email'
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmited}
                            helperText={emailValid}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label='Password'
                            type='password'
                            placeholder='Password'
                            name='password'
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmited}
                            helperText={passwordValid}
                            fullWidth
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
                        <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
                            <Alert severity='error'>{errorMessage}</Alert>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant='contained'
                                fullWidth
                                type='submit'
                                disabled={isCheckingAuthentication}>
                                Create Account
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
                        <Link component={RouterLink} color='inherit' to='/auth/login'>
                            Login
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
