import { createSlice } from '@reduxjs/toolkit';
import { pokemonApi } from '../../../api/apiPokemon';

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false
    },
    reducers: {
        startLoadingPokemon: (state) => {
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        }
    }
});

export const getPokemons =
    (page = 0) =>
    async (dispatch, getState) => {
        dispatch(startLoadingPokemon());
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);

        dispatch(
            setPokemons({
                page: page + 1,
                pokemons: data.results
            })
        );
    };

const { startLoadingPokemon, setPokemons } = pokemonSlice.actions;
export default pokemonSlice.reducer;
