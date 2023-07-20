import Review from "./Review";

const Details = ({ result, handelDelete, onLike, onDislike, vote_count }) => {
    return (
        <div className='MovieDetails'>
            <text className="Mtitle">{result.title}</text>
            <br></br>
            <text className="Myear">{result.release_date.slice(0, 4)}</text>
            <br></br>
            <div style={{height:"12px"}}></div>
            <text className="Td">Description</text>
            <br></br>
            <text className="Mov">{result.overview}</text>
            <Review
                result={result}
                handelDelete={handelDelete}
                onLike={onLike}
                onDislike={onDislike}
                vote_count={vote_count}
            />
            
        </div>
    );
};
export default Details;
