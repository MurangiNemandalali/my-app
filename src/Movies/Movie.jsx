import { useState } from "react";
import { MovieCounter } from "./MovieCounter";

// Presentation Component
export function Movie({ movie }) {
  // Scaffolding

  const styles = {
    color: movie?.rating >= 8 ? "green" : "red",
  };

  let [btnClick, setBtnClick] = useState(false);

  return (
    <div className="movie-container">
      <img src={movie?.poster} alt={movie?.name} />
      <div className="movie-spec-container">
        <h2 className="movie-name">{movie?.name}</h2>
        <p className="movie-rating" style={styles}>
          ⭐<span>{movie?.rating}</span>{" "}
        </p>
      </div>
      <button onClick={() => setBtnClick(!btnClick)}>💡 Toggle Summary</button>
      {btnClick ? <p className="movie-summary">{movie?.summary}</p> : null}

      <MovieCounter />
    </div>
  );
}

// Task 2.2  - Toggle Summary
// Clue: hook

// function MovieStyling() {

// }

// function toggleSummary() {
//   if (btnClick) {
//     const hideSummary = {
//       display: none,
//     };
//   }
// }
