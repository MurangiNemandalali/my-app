import { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router";
import { useFormik } from "formik";
import { object, string, number } from "yup";

const movieSchema = object({
  name: string()
    .required("Movie name is required")
    .min(2, "Movie name must be at least 2 characters"),
  poster: string()
    .required("Movie poster URL is required")
    .url("Must be a valid URL"),
  rating: number()
    .required("Rating is required")
    .min(0, "Rating must be at least 0")
    .max(10, "Rating must be at most 10"),
  summary: string()
    .required("Movie summary is required")
    .min(10, "Summary must be at least 10 characters"),
  trailer: string()
    .required("Trailer URL is required")
    .url("Must be a valid URL"),
});

// Task 1.1 - Separate the add movie logic to AddMovie component
export function AddMovie() {
  // Your Code
  const navigate = useNavigate();
  const [error, errorState] = useState(false);
  const [loading, setLoading] = useState(false);

  const { values, handleChange, handleBlur, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        poster: "",
        rating: "",
        summary: "",
        trailer: "",
      },
      validationSchema: movieSchema,
      onSubmit: (data) => {
        addMovie(data);
      },
    });

  const addMovie = (data) => {
    // Object short hand
    const newMovie = {
      name: data.name,
      poster: data.poster,
      rating: +data.rating,
      summary: data.summary,
      trailer: data.trailer,
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
    <section>
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      {loading && <h1>Loading...</h1>}
      {error ? <h1>Retry adding movie</h1> : null}
      <form onSubmit={handleSubmit} className="add-movie">
        <TextField
          id="name"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          placeholder="Name"
          label="Name"
          variant="outlined"
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
        />
        <TextField
          id="poster"
          name="poster"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.poster}
          placeholder="Poster"
          label="Poster"
          variant="outlined"
          error={touched.poster && Boolean(errors.poster)}
          helperText={touched.poster && errors.poster}
        />
        <TextField
          id="rating"
          name="rating"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.rating}
          placeholder="Rating"
          label="Rating"
          variant="outlined"
          error={touched.rating && Boolean(errors.rating)}
          helperText={touched.rating && errors.rating}
        />
        <TextField
          id="summary"
          name="summary"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.summary}
          placeholder="Summary"
          label="Summary"
          variant="outlined"
          error={touched.summary && Boolean(errors.summary)}
          helperText={touched.summary && errors.summary}
        />
        <TextField
          id="trailer"
          name="trailer"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.trailer}
          placeholder="Trailer"
          label="Trailer"
          variant="outlined"
          error={touched.trailer && Boolean(errors.trailer)}
          helperText={touched.trailer && errors.trailer}
        />

        <Button type="submit" loading={loading} variant="contained">
          Add Movie
        </Button>
      </form>
    </section>
  );
}
