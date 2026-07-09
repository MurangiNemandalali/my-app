import { useEffect, useState } from "react";
import { Movie } from "../Movies/Movie";
import { INITIAL_MOVIES } from "../Movies/INITIAL_MOVIES";
import { AddMovie } from "./AddMovie";

// Empower with own data
// setMovieList() - Re-render - fetch -> setMovieList()
// C=F(S)
// Smart - API & Data
export function MovieList() {
  /* Your Code */

  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch("https://6971d50b32c6bacb12c4aa19.mockapi.io/movies", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setMovieList(data));
  };

  const deleteMovie = (id) => {
    fetch(`https://6971d50b32c6bacb12c4aa19.mockapi.io/movies/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => getMovies());

    // getMovies(); // ❌
    // Race condition
  };

  // mounted
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <main>
      <section className="movie-list-container">
        {/* Key - makes diffing faster */}
        {movieList.map((movie, index) => (
          <Movie
            movie={movie}
            key={index}
            id={index}
            deleteBtn={
              <button onClick={() => deleteMovie(movie.id)}>Delete 🗑️</button>
            }
          />
        ))}
      </section>
    </main>
  );
}
// Zulu - Delegating the control to Sakhile
// However you want you can make the delete look

// Id
// Pass JSX prop
