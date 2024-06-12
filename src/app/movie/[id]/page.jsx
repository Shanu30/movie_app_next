import React from "react";
import Image from "next/image";

const MoviePage = async ({ params }) => {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=b5e44d486f7809e636f2abafd3108339`
  );
  const movie = await res.json();
  return (
    <div className="max-w-6xl m-auto">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row md:space-x-5 content-center">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.posterpath
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "100%" }}
        ></Image>
        <div className="p-2">
          <h2 className="font-bold text-lg mb-3">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-2">{movie.overview}</p>
          <p className="mb-2">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-2">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
