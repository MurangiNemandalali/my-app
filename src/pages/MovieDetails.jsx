import { useNavigate, useParams } from "react-router";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

// Task 1.2 - Display the movie name corresponding the index/id
export function MovieDetails() {
  // Make MovieDetails own its data
  // Call the API for it
  const { id } = useParams();
  //const movie = movieList[id];
  let [movie, setMovie] = useState(movieList[id]);

  useEffect(
    fetch(`https://6a4ceefee1cf82a4a17dd0df.mockapi.io/movies/${id}`, {
      method: "GET",
    }).then((res) => res.json()),
    [setMovie],
  );

  const styles = {
    color: movie?.rating >= 8 ? "teal" : "crimson",
  };

  const navigate = useNavigate();
  return (
    <div className="movie-detail-container">
      <iframe
        width="100%"
        height="518"
        src={movie?.trailer}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="movie-content-container">
        <div className="movie-spec-container">
          <h2 className="movie-name">{movie?.name}</h2>
          <p className="movie-rating" style={styles}>
            ⭐ {movie?.rating}
          </p>
        </div>
        <p className="movie-summary">{movie?.summary}</p>
        <Button variant="contained" onClick={() => navigate(-1)}>
          Back
        </Button>
      </div>
    </div>
  );
}

// Task 2.1 go back in page
