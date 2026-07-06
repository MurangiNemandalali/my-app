import { useState } from "react";
import { MovieCounter } from "./MovieCounter";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

// Presentation Component
export function Movie({ movie }) {
  // Scaffolding

  const styles = {
    color: movie?.rating >= 8 ? "green" : "red",
  };

  let [btnClick, setBtnClick] = useState(false);

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="520"
            image={movie?.poster}
            alt="green iguana"
          />
          <CardContent>
            <div className="movie-spec-container">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="movie-name"
              >
                {movie?.name}
              </Typography>
              <Rating
                name="read-only"
                value={movie?.rating / 2}
                precision={0.5}
                readOnly
              />

              <p className="movie-rating" style={styles}>
                <span>{movie?.rating}</span>{" "}
              </p>

              {/* <KeyboardArrowDownIcon /> */}
            </div>
            <button onClick={() => setBtnClick(!btnClick)}>
              💡 Toggle Summary
            </button>
            {btnClick ? (
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {movie?.summary}
              </Typography>
            ) : null}
            <MovieCounter />
          </CardContent>
        </CardActionArea>
      </Card>

      <div className="movie-container">
        <img src={movie?.poster} alt={movie?.name} />
        <div className="movie-spec-container">
          <h2 className="movie-name">{movie?.name}</h2>
          <p className="movie-rating" style={styles}>
            ⭐<span>{movie?.rating}</span>{" "}
          </p>
        </div>
        <button onClick={() => setBtnClick(!btnClick)}>
          💡 Toggle Summary
        </button>
        {/* {btnClick ? <p className="movie-summary">{movie?.summary}</p> : null} */}
        {btnClick ? (
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {movie?.summary}
          </Typography>
        ) : null}

        <MovieCounter />
      </div>
    </>
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
