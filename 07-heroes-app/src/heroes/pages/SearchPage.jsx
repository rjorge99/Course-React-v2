import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const q = searchParams.get('q') || '';
    const heroes = getHeroesByName(q);
    const { searchText, onInputChange } = useForm({ searchText: q });

    const showSearch = q === '';
    const showError = !showSearch && heroes.length === 0;

    const onSearchSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?q=${searchText}`);
    };

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className='row'>
                <div className='col-5'>
                    <h4>Searching</h4>
                    <hr />

                    <form onSubmit={onSearchSubmit}>
                        <input
                            type='text'
                            placeholder='Seach a hero'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className='btn btn-outline-primary mt-2'>Search</button>
                    </form>
                </div>

                <div className='col-7'>
                    <h4>Results</h4>
                    <hr />

                    <div
                        className='alert alert-primary animate__animated animate__fadeIn'
                        style={{ display: showSearch ? '' : 'none' }}>
                        Search a hero
                    </div>
                    <div
                        className='alert alert-danger animate__animated animate__fadeIn'
                        style={{ display: showError ? '' : 'none' }}>
                        No hero with <b>{q}</b>
                    </div>

                    {heroes.map((hero) => (
                        <HeroCard key={hero.id} {...hero} />
                    ))}
                </div>
            </div>
        </>
    );
};
