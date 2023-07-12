"use client"
import axios from 'axios';
import React, { useState } from 'react';

const Review = ({ result }) =>{
    const [rating, setRating] = useState(0);
    const HandelLike = () => {
        setRating(rating + 1);
    };
    const HandeDislLike= () => {
        setRating(rating - 1);
    };
    const Handeldelete = async (result) => {
        // Handle the delete logic here
        console.log(`Deleting item with ID: ${result.id}`);
        await axios.delete(`/api/deleteMovie?id=${result.id}`);
        console.log('Movie deleted successfully');
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
// } onClick={() => Handeldelete(result)}
// style={{position: "absolute",bottom: "0px"}}
export default Review;
