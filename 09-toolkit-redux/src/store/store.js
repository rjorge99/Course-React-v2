import { configureStore } from '@reduxjs/toolkit';
import { todoApi } from './apis/todosApi';
import counterReducer from './slices/counter/counterSlice';
import pokemonReducer from './slices/pokemon/pokemonSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        pokemon: pokemonReducer,
        [todoApi.reducerPath]: todoApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoApi.middleware)
});
