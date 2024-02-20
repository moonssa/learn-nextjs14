"use client";
import { Metadata } from "next";
import { useEffect, useState } from "react";

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
// export const metadata: Metadata = {
//   title: "Home 🏠",
// };
export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState();
  const getMovies = async () => {
    const json = await (await fetch(URL)).json();
    setMovies(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return <div>{isLoading ? "Loading" : JSON.stringify(movies)}</div>;
}
