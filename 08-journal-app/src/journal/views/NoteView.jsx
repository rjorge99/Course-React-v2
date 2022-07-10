import { SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';
import {
    setActiveNote,
    startDeletingNote,
    startSaveNote,
    startUploadingFiles
} from '../../store/journal/journalSlice';
import { ImageGallery } from '../components';

export const NoteView = () => {
    const dispatch = useDispatch();
    const fileInputRef = useRef();
    const { active: note, messageSaved, isSaving } = useSelector((state) => state.journal);
    const { body, title, onInputChange, date, formState } = useForm(note);

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState]);

    useEffect(() => {
        if (messageSaved.length > 0) Swal.fire('Note updated', messageSaved, 'success');
    }, [messageSaved]);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date]);

    const onFileInputChange = ({ target }) => {
        if (target.files.lenght === 0) return;
        dispatch(startUploadingFiles(target.files));
    };

    const onDelete = () => {
        dispatch(startDeletingNote());
    };

    const onSaveNote = () => {
        dispatch(startSaveNote());
    };

    return (
        <Grid
            className='animate__animated animate__fadeIn animate__faster'
            container
            direction='row'
            justifyContent='space-between'
            sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>
                    {dateString}
                </Typography>
            </Grid>

            <Grid item>
                <input
                    type='file'
                    ref={fileInputRef}
                    multiple
                    onChange={onFileInputChange}
                    style={{ display: 'none' }}
                />
                <IconButton
                    color='primary'
                    disabled={isSaving}
                    onClick={() => fileInputRef.current.click()}>
                    <UploadOutlined />
                </IconButton>
                <Button onClick={onSaveNote} color='primary' sx={{ paddnig: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    value={title}
                    name='title'
                    onChange={onInputChange}
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder='Title'
                    label='Title'
                    sx={{ border: 'none', mb: 1 }}
                />
                <TextField
                    value={body}
                    name='body'
                    onChange={onInputChange}
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder='Whant to write something?'
                    minRows={5}
                />

                <Grid container justifyContent='end'>
                    <Button onClick={onDelete} sx={{ mt: 2 }} color='error'>
                        Borrar
                    </Button>
                </Grid>
                <ImageGallery images={note.imageUrls} />
            </Grid>
        </Grid>
    );
};
