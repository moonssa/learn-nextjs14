import { API_URL } from "../app/(Home)/page";
import styles from "../styles/movie-info.module.css";
async function getMovie(id: string) {
  // console.log("Fetching Movie:", Date.now());
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        className={styles.poster}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}> {movie.title}</h1>
        <h3> ★ {movie.vote_average}</h3>
        <p>{movie.overview}</p>
        {movie.homepage ? (
          <a href={movie.homepage} target={"_blank"}>
            Homepage &rarr;
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
