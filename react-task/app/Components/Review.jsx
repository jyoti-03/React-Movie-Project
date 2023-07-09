"use client"
import React, { useState } from 'react';

const Review = () =>{
    const [rating, setRating] = useState(0);
    const HandelLike = () => {
        setRating(rating + 1);
    };
    const HandeDislLike= () => {
        setRating(rating-1);
    };

    return(
        <div className="review">
            <img itemType='button' src="Icon-Like.png" className="Like" onClick={HandelLike} ></img>
            <div className="Rating">{rating}</div>
            <img src="Icon-Dislike.png" className="Dislike" onClick={HandeDislLike}></img>
            <img src="Icon-Delete.png" className="Delete"></img>
        </div>
    )
}

export default Review;
