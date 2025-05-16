import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../Utils/axios"
import requests  from "../Utils/rquests";

const Banner = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBannerMovie = async () => {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);
        const movies = response.data.results;

        if (movies?.length > 0) {
          const randomMovie =
            movies[Math.floor(Math.random() * movies.length)];
          setMovie(randomMovie);
        } else {
          console.warn("No movies returned from API");
        }
      } catch (error) {
        console.error("Failed to fetch banner movie:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBannerMovie();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  if (loading) {
    return (
      <div className="banner loading">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="banner error">
        <h2>Unable to load banner movie.</h2>
      </div>
    );
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: movie.backdrop_path
          ? `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`
          : "none",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play" aria-label="Play Movie">
            Play
          </button>
          <button className="banner_button" aria-label="Add to My List">
            My List
          </button>
        </div>
        <h1 className="banner_description">
          {truncate(movie.overview, 150)}
        </h1>
      </div>
    </div>
  );
};

export default Banner;