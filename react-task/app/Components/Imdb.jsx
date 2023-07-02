import Results from "./Response";
// const Api_Key = process.env.Api_Key
const Movie = async () => {
    const url_res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=d6667472d12f15cde166798b7a104ced&language=en-US&page=1`)
    const data = await url_res.json();
    const result = data.results
    return (
        <Results result={result}/>
        // <p key={result.id}>{this.props.result}</p>
    )
}
export default Movie;
