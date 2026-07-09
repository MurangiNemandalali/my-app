import { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router";

// Task 1.1 - Separate the add movie logic to AddMovie component
export function AddMovie() {
  // Your Code
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTraier] = useState("");

  const navigate = useNavigate();
  const [error, errorState] = useState(false);
  const [loading, setLoading] = useState(false);

  const addMovie = () => {
    // Object short hand
    const newMovie = {
      name,
      poster,
      rating: +rating,
      summary,
      trailer,
    };
    /* Copy of movies + new movie */

    /* Copy of movies + new movie */
    // setMovieList([newMovie, ...movieList]);
    // POST
    // 1. method - POST
    // 2. Body & JSON
    // 3. Headers we are sending JSON
    setLoading(true);
    fetch("https://6a4ceefee1cf82a4a17dd0df.mockapi.io/movies", {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) =>
        res.ok ? navigate("/movies") : Promise.reject("Retry adding movie"),
      )
      .catch((errorMsg) => {
        console.log(errorMsg);
        errorState(true);
      })
      .finally(setLoading(false));

    // Task
    // Success -> navigate to /movies
    // Failure -> Retry
  };

  return (
    <section className="add-movie">
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      {loading && <h1>Loading...</h1>}
      {error ? <h1>Retry adding movie</h1> : null}
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
      <TextField
        onChange={(event) => setTraier(event.target.value)}
        value={trailer}
        placeholder="Trailer"
        id="outlined-basic"
        label="Trailer"
        variant="outlined"
      />

      <Button loading={loading} variant="contained" onClick={addMovie}>
        Add Movie
      </Button>
    </section>
  );
}
