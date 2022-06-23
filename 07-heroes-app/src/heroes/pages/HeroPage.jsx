import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const hero = useMemo(() => getHeroById(id), [id]);

    if (!hero) return navigate(-1, { replace: true });
    const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

    const onNavigateBack = () => {
        navigate(-1, { replace: true });
    };

    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img
                    className='img-thumbnail animate__animated animate__fadeInLeft'
                    src={`/assets/heroes/${id}.jpg`}
                    alt={superhero}
                />
            </div>
            <div className='col-8'>
                <h3>{superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Alter ego:</b>
                        {alter_ego}
                    </li>
                    <li className='list-group-item'>
                        <b>Publisher:</b>
                        {publisher}
                    </li>
                    <li className='list-group-item'>
                        <b>First appearance</b>
                        {first_appearance}
                    </li>
                </ul>

                <h5 className='mt-3'>Characters</h5>
                <p>{characters}</p>

                <button className='btn btn-outline-primary' onClick={onNavigateBack}>
                    Regresar
                </button>
            </div>
        </div>
    );
};
