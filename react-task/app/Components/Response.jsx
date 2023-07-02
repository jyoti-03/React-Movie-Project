import React from "react";
import Poster from "./Poster";
const Results = ({ result }) => {
    return (
    <div style={{ color: "white" }}>
            {result && result.slice(0, 10).map((result) => (
            <Poster key={result.id} result={result}/>
        ))}
    </div>
    );
};
export default Results;
