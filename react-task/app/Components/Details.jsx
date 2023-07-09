import Poster from "./Poster";
import Review from "./Review";
const Details = ({ result }) => {
    return (
        <div className='MovieDetails'>
            <text style={{width:"fit-content",fontSize:"36px",fontFamily:"Kanit",fontStyle:"normal"}}>{result.title}</text>
            <br></br>
            <text style={{width:"fit-content",fontSize:"16px",color:"#F3F3F3",fontFamily:"Kanit"}}>{result.release_date.slice(0, 4)}</text>
            <br></br>
            <div style={{height:"12px"}}></div>
            <text style={{fontSize:"18px",fontFamily:"Kanit"}}>Description</text>
            <br></br>
            <text style={{fontSize:'12px',width:"495px",height:"fit-content",fontFamily:"Kanit",fontStyle:"normal"}}>{result.overview}</text>
            <Review key={result.id} />
        </div>
    );
};
export default Details;
