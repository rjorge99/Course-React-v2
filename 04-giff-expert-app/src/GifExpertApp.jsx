import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onCategoryAdded = (category) => {
        if (categories.includes(category)) return;
        setCategories([...categories, category]);
    };

    return (
        <>
            <h1>Giff Expert</h1>
            <AddCategory onAddCategory={onCategoryAdded} />

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};
