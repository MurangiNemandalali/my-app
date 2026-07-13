import TextField from "@mui/material/TextField";
import { useParams } from "react-router";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { useFormik } from "formik";
import { object, string, number } from "yup";

const movieSchema = object({
  movieName: string()
    .required("Movie name is required")
    .min(2, "Movie name must be at least 2 characters"),
  moviePoster: string()
    .required("Movie poster URL is required")
    .url("Must be a valid URL"),
  movieRating: number()
    .required("Rating is required")
    .min(0, "Rating must be at least 0")
    .max(10, "Rating must be at most 10"),
  movieSummary: string()
    .required("Movie summary is required")
    .min(10, "Summary must be at least 10 characters"),
  movieTrailer: string()
    .required("Trailer URL is required")
    .url("Must be a valid URL"),
});

export function EditMovie() {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [error, errorState] = useState(false);

  const navigate = useNavigate();

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
    setValues,
  } = useFormik({
    initialValues: {
      movieName: "",
      moviePoster: "",
      movieRating: "",
      movieSummary: "",
      movieTrailer: "",
    },
    validationSchema: movieSchema,
    onSubmit: (data) => {
      updateMovie(data);
    },
  });

  const getMovie = () => {
    console.log("Geting data from Api");

    fetch(`https://6a4ceefee1cf82a4a17dd0df.mockapi.io/movies/${id}`, {
      method: "GET",
    })
      .then((res) => (res.ok ? res.json() : Promise.reject("Movie not found")))
      .then((movie) => {
        console.log(movie);

        setValues({
          movieName: movie.name,
          moviePoster: movie.poster,
          movieSummary: movie.summary,
          movieRating: movie.rating,
          movieTrailer: movie.trailer,
        });
      });
  };

  const updateMovie = (data) => {
    console.log("Updating movie");

    const updatedMovie = {
      name: data.movieName,
      poster: data.moviePoster,
      summary: data.movieSummary,
      rating: data.movieRating,
      trailer: data.movieTrailer,
    };

    setLoading(true);

    fetch(`https://6a4ceefee1cf82a4a17dd0df.mockapi.io/movies/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
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
  };

  useEffect(() => {
    console.log("Mounting is Done");
    getMovie();
  }, [id]);

  return (
    <section>
      <h1>Hello Murangi</h1>
      {loading && <h1>Loading...</h1>}
      {error ? <h1>Retry adding movie</h1> : null}

      <form onSubmit={handleSubmit} className="edit-movie">
        <TextField
          id="movieName"
          name="movieName"
          label="Name"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.movieName}
          error={touched.movieName && Boolean(errors.movieName)}
          helperText={touched.movieName && errors.movieName}
        />
        <TextField
          id="moviePoster"
          name="moviePoster"
          label="Poster"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.moviePoster}
          error={touched.moviePoster && Boolean(errors.moviePoster)}
          helperText={touched.moviePoster && errors.moviePoster}
        />
        <TextField
          id="movieRating"
          name="movieRating"
          label="Rating"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.movieRating}
          error={touched.movieRating && Boolean(errors.movieRating)}
          helperText={touched.movieRating && errors.movieRating}
        />
        <TextField
          id="movieSummary"
          name="movieSummary"
          label="Summary"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.movieSummary}
          error={touched.movieSummary && Boolean(errors.movieSummary)}
          helperText={touched.movieSummary && errors.movieSummary}
        />
        <TextField
          id="movieTrailer"
          name="movieTrailer"
          label="Trailer"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.movieTrailer}
          error={touched.movieTrailer && Boolean(errors.movieTrailer)}
          helperText={touched.movieTrailer && errors.movieTrailer}
        />
        <Button type="submit" variant="contained">
          Edit Movie
        </Button>
      </form>
    </section>
  );
}
