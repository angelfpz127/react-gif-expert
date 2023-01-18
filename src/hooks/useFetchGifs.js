import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading(false);

    }

    useEffect( () => {
        //Opción 1:
        //getGifs(category)
        //    .then( newImages => setImages(newImages) );
        
        //Opción 2:
        getImages();
    }, [])


    return {
        images: images,
        isLoading,
    }
}