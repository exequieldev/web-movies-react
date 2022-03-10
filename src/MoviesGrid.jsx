import movies from './movies.json';
import { MovieCard } from './MovieCard';
import styles from './MoviesGrid.module.css';

export function MoviesGrid(){
    return (
        <ul className={styles.movieGrid}>
         {movies.map( (movie) =>
              <MovieCard key={movie.id} movie={movie}/>)}
       </ul>
    );
}