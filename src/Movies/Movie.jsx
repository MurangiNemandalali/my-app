import { useState } from "react";
import { MovieCounter } from "./MovieCounter";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";

// Presentation Component
export function Movie({ movie, index, deleteBtn }) {
  // Scaffolding

  const styles = {
    color: movie?.rating >= 8 ? "green" : "red",
  };

  let [btnClick, setBtnClick] = useState(false);
  const navigate = useNavigate();

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

              {/* <KeyboardArrowDownIcon onClick={() => setBtnClick(!btnClick)} />
              <KeyboardArrowUpIcon onClick={() => setBtnClick(!btnClick)} /> */}

              {btnClick ? (
                <KeyboardArrowDownIcon onClick={() => setBtnClick(!btnClick)} />
              ) : (
                <KeyboardArrowUpIcon onClick={() => setBtnClick(!btnClick)} />
              )}
            </div>
            <button onClick={() => navigate(`/movies/${movie.id}`)}>
              ℹ️ Info
            </button>
            {/* <button onClick={() => setBtnClick(!btnClick)}>
              💡 Toggle Summary
            </button> */}
            {btnClick ? (
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {movie?.summary}
              </Typography>
            ) : null}
            <MovieCounter />

            {deleteBtn}
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

// Task 1.1 - Info -> /movies/0 or /movies/1 ... depending movie clicked

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
