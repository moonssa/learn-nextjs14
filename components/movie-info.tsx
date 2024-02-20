import { API_URL } from "../app/(Home)/page";

async function getMovie(id: string) {
  console.log("Fetching Movie:", Date.now());
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h5>{JSON.stringify(movie)}</h5>;
}
