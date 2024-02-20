import { Metadata } from "next";
import Link from "next/link";

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
export const metadata: Metadata = {
  title: "Home 🏠",
};

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const json = await (await fetch(API_URL)).json();
  return json;
}
export default async function Home() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
