import TextField from "@mui/material/TextField";
import { useParams } from "react-router";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

export function EditMovie() {
  const { id } = useParams();
  let [movieName, setMovieName] = useState("");
  let [moviePoster, setMoviePoster] = useState("");
  let [movieRating, setMovieRating] = useState("");
  let [movieSummary, setMovieSummary] = useState("");
  let [movieTrailer, setMovieTrailer] = useState("");

  const getMovie = () => {
    console.log("Geting data from Api");

    fetch(`https://6a4ceefee1cf82a4a17dd0df.mockapi.io/movies/${id}`, {
      method: "GET",
    })
      .then((res) => (res.ok ? res.json() : Promise.reject("Movie not found")))
      .then((movie) => {
        console.log(movie);

        setMovieName(movie.name);
        setMoviePoster(movie.poster);
        setMovieSummary(movie.summary);
        setMovieRating(movie.rating);
        setMovieTrailer(movie.trailer);
      });
  };

  const updateMovie = () => {
    console.log("Updating movie");
  };

  useEffect(() => {
    console.log("Mounting is Done");
    getMovie();
  }, [id]);

  return (
    <section className="edit-movie">
      <h1>Hello Murangi</h1>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={(event) => setMovieName(event.target.value)}
        value={movieName}
        placeholder={movieName}
      />
      <TextField
        id="outlined-basic"
        label="Poster"
        variant="outlined"
        onChange={(event) => setMoviePoster(event.target.value)}
        value={moviePoster}
        placeholder={moviePoster}
      />
      <TextField
        id="outlined-basic"
        label="Rating"
        variant="outlined"
        onChange={(event) => setMovieRating(event.target.value)}
        value={movieRating}
        placeholder={movieRating}
      />
      <TextField
        id="outlined-basic"
        label="Summary"
        variant="outlined"
        onChange={(event) => setMovieSummary(event.target.value)}
        value={movieSummary}
        placeholder={movieSummary}
      />
      <TextField
        id="outlined-basic"
        label="Trailer"
        variant="outlined"
        onChange={(event) => setMovieTrailer(event.target.value)}
        value={movieTrailer}
        placeholder={movieTrailer}
      />
      <Button variant="contained">Edit Movie</Button>
    </section>
  );
}
