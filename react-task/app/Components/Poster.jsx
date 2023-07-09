import React from 'react';
import Image from 'next/image';
import Details from './Details';

const Poster = ({result}) => {
    return (
        <div className='MovieMain'>
            <Image src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
                width={200}
                height={252}
                alt='Movie Poster'
                className='MoviePho'>
            </Image>
            <Details key={result.id} result={result}/>
            <div style={{height:24}}></div>
        </div>
    )
};
export default Poster;
