import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layouts/AuthLayout';

export const RegisterPage = () => {
    return (
        <AuthLayout title='Create Account'>
            <form>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField label='Name' type='text' placeholder='Name' fullWidth />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label='Email'
                            type='email'
                            placeholder='email@google.com'
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label='Password'
                            type='password'
                            placeholder='Password'
                            fullWidth
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
                        <Grid item xs={12}>
                            <Button variant='contained' fullWidth>
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
                        <Link component={RouterLink} color='inherit' to='/auth/login'>
                            Ingresar
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
