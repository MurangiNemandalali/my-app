import { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
    <section className="add-movie">
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      <TextField
        onChange={(event) => setName(event.target.value)}
        value={name}
        placeholder="Name"
        id="outlined-basic"
        label="Name"
        variant="outlined"
      />
      <TextField
        onChange={(event) => setPoster(event.target.value)}
        value={poster}
        placeholder="Poster"
        id="outlined-basic"
        label="Poster"
        variant="outlined"
      />
      <TextField
        onChange={(event) => setRating(event.target.value)}
        value={rating}
        placeholder="Rating"
        id="outlined-basic"
        label="Rating"
        variant="outlined"
      />
      <TextField
        onChange={(event) => setSummary(event.target.value)}
        value={summary}
        placeholder="Summary"
        id="outlined-basic"
        label="Summary"
        variant="outlined"
      />

      <Button variant="contained" onClick={addMovie}>
        Add Movie
      </Button>
    </section>
  );
}
