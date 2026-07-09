import { useEffect, useState } from "react";
import { Movie } from "../Movies/Movie";
import { INITIAL_MOVIES } from "../Movies/INITIAL_MOVIES";
import { AddMovie } from "../pages/AddMovie";

// Empower with own data
// setMovieList() - Re-render - fetch -> setMovieList()
// C=F(S)
export function MovieList() {
  /* Your Code */

  const [movieList, setMovieList] = useState([]);

  // console.log("Re-render");

  // data -> 11 - [{},{}..]
  // ComponentDidMount - Only on mount
  // fetch -> setMovieList -> change movieList -> re-render -> updation -> [] 🛡️

  // Shield 🛡️ - only on mounting ✅ - not one updation ❌
  useEffect(() => {
    console.log("Mounting is Done");

    fetch("https://6971d50b32c6bacb12c4aa19.mockapi.io/movies")
      .then((res) => res.json())
      .then((data) => setMovieList(data));
  }, []);

  // componentDidUpdate - Don't do
  // useEffect(() => {
  //   console.log("Mounting is Done");

  //   fetch("https://6971d50b32c6bacb12c4aa19.mockapi.io/movies")
  //     .then((res) => res.json())
  //     .then((data) => setMovieList(data));
  // }, [movieList]);

  return (
    <main>
      <section className="movie-list-container">
        {/* Key - makes diffing faster */}
        {movieList.map((movie, index) => (
          <Movie movie={movie} key={index} id={index} />
        ))}
      </section>
    </main>
  );
}
// Id
