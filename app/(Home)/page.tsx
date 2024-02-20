import { Metadata } from "next";

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
export const metadata: Metadata = {
  title: "Home 🏠",
};

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const json = await (await fetch(URL)).json();
  return json;
}
export default async function Home() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li>{JSON.stringify(movie)}</li>
      ))}
    </div>
  );
}
