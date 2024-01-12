import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // Assuming you're using react-router for routing
import { motion } from "framer-motion";

const Details = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODEzM2QyZmVjZTIxYjdiMTQ3YmVhZTIzMDM3ZGFkZSIsInN1YiI6IjY1OWNhMWRjMjJkZjJlMDFhMjExY2YyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1u5qItr3_otSuCY2UrAYfq4DoRbaTOBf4B6UMBtFR6g",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setMovieDetails(json);
      })
      .catch((err) => console.error("error:" + err));
  }, [movieId]);

  if (!movieDetails) {
    return (
      <div className="w-full py-32 flex justify-center">
        <div className="text-3xl font-bold">Movies</div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center bg-[#1B354A]">
      <div className="w-[1300px] ">
        <div className="p-4">
          <motion.div
            layoutId={`bubble-${movieDetails.id}`}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="relative overflow-hidden rounded-md bg-gray-300 mb-4"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">
                {movieDetails.title}
              </h3>
              <p className="text-gray-400">{movieDetails.release_date}</p>
              <p className="my-4">{movieDetails.overview}</p>
              {/* Display other details as needed */}
              <Link to="/" className="text-blue-500 hover:underline">
                Back to Trending
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Details;
