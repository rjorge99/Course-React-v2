import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';

export const NoteView = () => {
    return (
        <Grid container direction='row' justifyContent='space-between' sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>
                    28 de agosto, 2023
                </Typography>
            </Grid>

            <Grid item>
                <Button color='primary' sx={{ paddnig: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder='Title'
                    label='Title'
                    sx={{ border: 'none', mb: 1 }}
                />
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder='Whant to write something?'
                    minRows={5}
                />
                <ImageGallery />
            </Grid>
        </Grid>
    );
};
