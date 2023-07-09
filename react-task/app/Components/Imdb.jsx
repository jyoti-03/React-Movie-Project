import Results from "./Response";

const Movie = async () => {
    const url_res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=d6667472d12f15cde166798b7a104ced&language=en-US&page=1`)
    const data = await url_res.json();
    const result = data.results;

    return (
        <>
            <div style={{height:"40px"}}></div>
            <text className="WT">Watch</text>
            <div style={{height:"28px"}}></div>
            <Results result={result}/>
        </>
    )
}

export default Movie;
