import React from 'react';

const Review = ({ result, handelDelete, onLike, onDislike, vote_count}) =>{
    
    return(
        <div className="review">
            <img itemType='button' src="Icon-Like.png" className="Like" onClick={() => onLike(result.id)} />
            <div className="Rating">{vote_count}</div>
            <img src="Icon-Dislike.png" className="Dislike" onClick={() => onDislike(result.id)}/>
            <img src="Icon-Delete.png" className="Delete" onClick={() => handelDelete(result.id)}/>
        </div>
    )
}
export default Review;
