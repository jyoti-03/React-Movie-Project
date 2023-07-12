import Footer from './Components/Footer';
import Header from './Components/Header';
import styles from './page.module.css';
import Poster from './Components/Poster';
import Addmovie from './Components/Addmovie';

const Home = async () =>{ 
  const url_res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=d6667472d12f15cde166798b7a104ced&language=en-US&page=1`)
  const data = await url_res.json();
  const results = data.results;
  const Handeldelete = ({id})=>{
    <h1>jyoti{id}</h1>
  }
  
  return (
    <div className={styles.body}>
      <div className={styles.ndcol}>
        <Header />
        <div style={{height:"40px"}}></div>
        <text className="WT">Watch</text>
        <div style={{ color: "white" }}>
            {results && results.slice(10, 20).map((result) => (
            <Poster key={result.id} result={result}/>
            ))}
        </div>
        <Addmovie/>
        <Footer />
      </div>
    </div>
  )
} 
export default Home;
