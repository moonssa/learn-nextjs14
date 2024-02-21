import { Metadata } from "next";
import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
export const metadata: Metadata = {
  title: "Home 🏠",
};

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const json = await (await fetch(API_URL)).json();
  return json;
}
export default async function Home() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
