import { useState } from "react";
import { Movie } from "./Movie";
import { INITIAL_MOVIES } from "./INITIAL_MOVIES";
// import { AddMovie } from "./AddMovie";
// import { MovieList } from "../App";

// Steps
// 1. Start with Scaffolding in Presentation component - one movie
// 2. Move the data to Smart (Pass it down as props)
// 3. Responsive
// 4. Mapping the cards
// Smart

// Steps
// 1. Start with Scaffolding in Presentation component - one movie
// 2. Move the data to Smart (Pass it down as props)
// 3. Responsive
// 4. Mapping the cards
// Smart

export function MovieList({ moviesList }) {
  /* Your Code */

  return (
    <main>
      {/* Your Code */}
      {/* <AddMovie movieList={movieList} setMovieList={setMovieList} /> */}

      <section className="movie-list-container">
        {moviesList.map((movie) => (
          <Movie movie={movie} />
        ))}
      </section>
    </main>
  );
}
