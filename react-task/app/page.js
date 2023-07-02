import Footer from './Components/Footer';
import Header from './Components/Header';
import styles from './page.module.css';
import Movie from './Components/Imdb';

function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.ndcol}>
        <Header />
        <Movie />
        <Footer />
      </div>
    </div>
  )
} 
export default Home;
