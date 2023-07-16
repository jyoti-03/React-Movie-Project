import React, { useState } from 'react';

const Review = ({ result, handelDelete }) =>{
    
    const [rating, setRating] = useState(0);
    const HandelLike = () => {
        setRating(rating + 1);
    };
    const HandeDislLike= () => {
        setRating(rating - 1);
    };
    // const Handeldelete = (ID) => {
    //     console.log(`Deleting item with ID: ${result.id}`);
    //     setData((res)=>res.filter((result)=>result.id !== ID));
    //     console.log("done")
        
    // };

    return(
        <div className="review">
            <img itemType='button' src="Icon-Like.png" className="Like" onClick={HandelLike} />
            <div className="Rating">{rating}</div>
            <img src="Icon-Dislike.png" className="Dislike" onClick={HandeDislLike}/>
            <img src="Icon-Delete.png" className="Delete" onClick={() => handelDelete(result.id)}/>
        </div>
    )
}
// onClick={() => Handeldelete(result)}
// style={{position: "absolute",bottom: "0px"}}
export default Review;
