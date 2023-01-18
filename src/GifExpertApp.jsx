import React, { useState } from 'react';
//import { AddCategory } from './components/AddCategory';
//import { GifGrid } from './GifGrid';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch']);
    
    const onAddCategory = ( newCategory ) => {

        if ( categories.includes(newCategory) ) return;

        setCategories([
            newCategory,
            ...categories, 
        ]);
        //setCategories( cat => [ ...cat, 'Valorant' ] )
    };

    return (
        <>
            {/*Título*/}
            <h1>GifExpertApp</h1>

            {/*Input*/}
            <AddCategory 
                //setCategories={setCategories} 
                onNewCategory={ value => onAddCategory( value ) }
            />


            {/*Listado de Gif*/}
                
                {/*Gif Item*/}
            { 
                categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                )) 
            }
                
        </> 
    );
}
 
export default GifExpertApp;