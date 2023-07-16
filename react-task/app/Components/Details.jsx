import Review from "./Review";

const Details = ({ result, handelDelete }) => {
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
            />
            
        </div>
    );
};
export default Details;
