import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Poster = ({result}) => {
    return (
        <div>
            <Link href={`/movie/${result.id}`}>
                <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                    width={200}
                    height={252}
                    alt='Movie Poster'
                ></Image>
            </Link>
            {result.original_title}
        </div>
    )
};
export default Poster
