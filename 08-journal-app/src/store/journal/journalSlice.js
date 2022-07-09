import { createSlice } from '@reduxjs/toolkit';
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { loadNotes } from '../../helpers/loadNotes';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        notes: [],
        messageSaved: null,
        active: null
    },
    reducers: {
        savingNewNote: (state, action) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state) => {},
        updateNote: (state, action) => {},
        deleteNoteById: (state, action) => {}
    }
});

export const startNewNote = () => async (dispatch, getState) => {
    dispatch(savingNewNote());
    const { uid } = getState().auth;

    const newNote = {
        title: '',
        body: '',
        date: new Date().getTime()
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
};

export const startLoadingNotes = () => async (dispatch, getState) => {
    const { uid } = getState().auth;
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
};

const { addNewEmptyNote, setActiveNote, savingNewNote, setNotes } = journalSlice.actions;
export default journalSlice.reducer;
