import { API_URL } from "../app/(Home)/page";

async function getVideos(id: string) {
  console.log("Fetching Videos", Date.now());
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}
export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h5>{JSON.stringify(videos)}</h5>;
}