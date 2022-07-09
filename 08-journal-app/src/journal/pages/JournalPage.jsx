import { AddOutlined } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { startNewNote } from '../../store/journal/journalSlice';
import { JournalLayout } from '../layouts/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

export const JournalPage = () => {
    const dispatch = useDispatch();
    const { isSaving, active } = useSelector((state) => state.journal);

    const onClickAddNote = () => {
        dispatch(startNewNote());
    };

    return (
        <JournalLayout>
            {/* <Typography> */}
            {/*     Lorem ipsum dolor sit amet consectetur, adipisicing elit. A odio consectetur */}
            {/*     provident magnam. Harum ipsam ad ab iure consectetur in! */}
            {/* </Typography> */}

            {active ? <NoteView /> : <NothingSelectedView />}

            <IconButton
                disabled={isSaving}
                onClick={onClickAddNote}
                size='large'
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}>
                <AddOutlined sx={{ fontSize: 35 }} />
            </IconButton>
        </JournalLayout>
    );
};
