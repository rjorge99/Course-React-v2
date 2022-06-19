import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGif = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getImages();
    }, [category]);

    const getImages = async () => {
        const images = await getGifs(category);
        setImages(images);
        setIsLoading(false);
    };

    return {
        images,
        isLoading
    };
};
