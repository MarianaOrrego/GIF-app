import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGird } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {

    //const [categories, setCategories] = useState(['Animales']);
    const [categories, setCategories] = useState(defaultCategories);

    return (
        <>
            <div className='contenedor'>
                <div className='title'>
                    <h1>GIF App</h1>
                </div>
                <div className='ubicacion'>
                    <AddCategory setCategories={setCategories} />
                    <hr />
                </div>
            </div>

            <ol>
                {
                    categories.map(category =>

                        <GifGird
                            category={category}
                            key={category}
                        />
                    )
                }
            </ol>
        </>
    );

};

