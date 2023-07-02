import React from "react";
const Results = ({ result }) => {
    return (
    <div style={{ color: "white" }}>
        {result && result.slice(0, 10).map((result) => (
        <div key={result.id}>
            {result.original_title} {result.release_date}:
            <br/>
            {result.overview}
        </div>
        ))}
    </div>
    );
};
export default Results;
