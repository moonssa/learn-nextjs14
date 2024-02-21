import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { getMovie } from "../../../../components/movie-info";

interface IParams {
  params: { id: string };
}
export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}
export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Suspense fallback={<h3> Loading Movie Info ...</h3>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h3> Loading Movie Videos</h3>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
