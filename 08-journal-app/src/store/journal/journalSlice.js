import { createSlice } from '@reduxjs/toolkit';
import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { fileUpload } from '../../fileUpload';
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
            state.messageSaved = '';
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map((note) => {
                if (note.id === action.payload.id) {
                    return action.payload;
                }
                return note;
            });
            state.messageSaved = 'Note updated correctly.';
        },
        deleteNoteById: (state, action) => {
            state.notes = state.notes.filter((note) => note.id !== action.payload);
            state.active = null;
        },
        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
        },
        clearNotesLogout: (state) => {
            state.notes = [];
            state.active = null;
            state.messageSaved = '';
            state.isSaving = false;
        }
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

export const startSaveNote = () => async (dispatch, getState) => {
    dispatch(setSaving());

    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    const { id, ...noteToFireStore } = note;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await setDoc(docRef, noteToFireStore, { merge: true });

    dispatch(updateNote(note));
};

export const startUploadingFiles =
    (files = []) =>
    async (dispatch, getState) => {
        dispatch(setSaving());

        const fileUploadPromises = [];
        for (const file of files) fileUploadPromises.push(fileUpload(file));

        const photosUrls = await Promise.all(fileUploadPromises);
        dispatch(setPhotosToActiveNote(photosUrls));
    };

export const startDeletingNote = () => async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await deleteDoc(docRef);
    dispatch(deleteNoteById(note.id));
};

const {
    addNewEmptyNote,
    deleteNoteById,
    savingNewNote,
    setNotes,
    setPhotosToActiveNote,
    setSaving,
    updateNote
} = journalSlice.actions;
export const { setActiveNote, clearNotesLogout } = journalSlice.actions;
export default journalSlice.reducer;
