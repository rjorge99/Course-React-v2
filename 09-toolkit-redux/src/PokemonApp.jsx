import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon/pokemonSlice';

export const PokemonApp = () => {
    const dispatch = useDispatch();
    const { page, pokemons } = useSelector((state) => state.pokemon);

    useEffect(() => {
        dispatch(getPokemons());
    }, []);

    return (
        <>
            <h1>Pokemon</h1>
            <hr />

            <ul>
                {pokemons.map((p) => (
                    <li key={p.name}>{p.name}</li>
                ))}
            </ul>

            <button onClick={() => dispatch(getPokemons(page))}>Next</button>
        </>
    );
};
