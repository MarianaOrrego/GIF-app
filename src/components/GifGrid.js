import PropTypes from 'prop-types';

import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGird = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );
    
    return (
        <>
            <h3 className="animate__animated animate__fadeIn animate__delay-1s">{category}</h3>

            { loading && <p className="animate__animated animate__flash animate__delay-1s">Loading</p> }

            <div className="cardgrid">

                {
                    images.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGird.propTypes = {
    category: PropTypes.string.isRequired
}