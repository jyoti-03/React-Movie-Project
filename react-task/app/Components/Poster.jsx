import Image from 'next/image';
import Details from './Details';

const Poster = ({result, handelDelete, onLike, onDislike, vote_count}) => {
    return (
        <div className='MovieMain'>
            <div style={{height:24}}></div>
            <Image src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
                width={200}
                height={252}
                alt='Movie Poster'
                className='MoviePho'>
            </Image>
            <Details 
                key={result.id}
                result={result}
                handelDelete={handelDelete}
                onLike={onLike}
                onDislike={onDislike}
                vote_count={vote_count}
            />
            <div style={{height:24}}></div>
            <div style={{border: 'solid .5px #5E5E75'}}></div>
        </div>
    )
};
export default Poster;
