import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter/counterSlice';
import pokemonReducer from './slices/pokemon/pokemonSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        pokemon: pokemonReducer
    }
});
