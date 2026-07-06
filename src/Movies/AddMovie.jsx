import { useState } from "react";

// Task 1.1 - Separate the add movie logic to AddMovie component
export function AddMovie({ moviesList, setMoviesList }) {
  // Your Code
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const addMovie = () => {
    // Object short hand
    const newMovie = {
      name,
      poster,
      rating: +rating,
      summary,
    };
    /* Copy of movies + new movie */
    setMoviesList([newMovie, ...moviesList]);
  };

  return (
    <section>
      <input
        onChange={(event) => setName(event.target.value)}
        value={name}
        placeholder="Name"
      />
      <input
        onChange={(event) => setPoster(event.target.value)}
        value={poster}
        placeholder="Poster"
      />
      <input
        onChange={(event) => setRating(event.target.value)}
        value={rating}
        placeholder="Rating"
      />
      <input
        onChange={(event) => setSummary(event.target.value)}
        value={summary}
        placeholder="Summary"
      />
      <button onClick={addMovie}>Add Movie</button>
    </section>
  );
}
