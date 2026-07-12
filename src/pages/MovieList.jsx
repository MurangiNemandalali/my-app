import { useEffect, useState } from "react";
import { Movie } from "../Movies/Movie";
import { INITIAL_MOVIES } from "../Movies/INITIAL_MOVIES";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router";
import DeleteIcon from "@mui/icons-material/Delete";

// import { AddMovie } from "./AddMovie";
// import { MovieList } from "../App";

// Steps
// 1. Start with Scaffolding in Presentation component - one movie
// 2. Move the data to Smart (Pass it down as props)
// 3. Responsive
// 4. Mapping the cards
// Smart

// Steps
// 1. Start with Scaffolding in Presentation component - one movie
// 2. Move the data to Smart (Pass it down as props)
// 3. Responsive
// 4. Mapping the cards
// Smart

// export function MovieList({ moviesList }) {
//   /* Your Code */

//   return (
//     <main>
//       {/* Your Code */}
//       {/* <AddMovie movieList={movieList} setMovieList={setMovieList} /> */}

//       <section className="movie-list-container">
//         {moviesList.map((movie, index) => (
//           <Movie movie={movie} key={index} index={index} />
//         ))}
//       </section>
//     </main>
//   );
// }

// Empower with own data
// setMovieList() - Re-render - fetch -> setMovieList()
// C=F(S)
// Smart - API & Data
export function MovieList() {
  /* Your Code */

  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();

  const getMovies = () => {
    fetch("https://6a4ceefee1cf82a4a17dd0df.mockapi.io/movies", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setMovieList(data));
  };
  useEffect(() => {
    console.log("Mounting is Done");
    getMovies();
  }, []);

  // Task - Delete API
  const deleteMovie = (id) => {
    console.log("Deleting...");
    // Your code

    fetch(`https://6a4ceefee1cf82a4a17dd0df.mockapi.io/movies/${id}`, {
      method: "DELETE",
    }).then(() => getMovies());
  };

  return (
    <main>
      <section className="movie-list-container">
        {/* Key - makes diffing faster */}
        {movieList.map((movie, index) => (
          <Movie
            movie={movie}
            key={index}
            id={movie.id}
            editBtn={
              <IconButton
                aria-label="edit"
                onClick={() => navigate("/movies/:id/edit")}
              >
                {" "}
                <EditIcon />
              </IconButton>
            }
            deleteBtn={
              // <button onClick={() => deleteMovie(movie.id)}>Delete 🗑️</button>
              <IconButton
                aria-label="edit"
                onClick={() => deleteMovie(movie.id)}
              >
                {" "}
                <DeleteIcon />
              </IconButton>
            }
          />
        ))}
      </section>
    </main>
  );
}
// Zulu - Delegating the control to Sakhile
// However you want you can make the delete look

// Id
// Pass JSX prop
