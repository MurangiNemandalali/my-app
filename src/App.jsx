//Murangi
import "./index.css";
import { MovieList } from "./Movies/MovieList";
import { Msg } from "./concepts/Msg";
import { UserList } from "./Users/UserList";
import { ColorGame } from "./ColorGame/ColorGame";
import { AddMovie } from "./Movies/AddMovie";
import { useState } from "react";
import { INITIAL_MOVIES } from "./Movies/INITIAL_MOVIES";
import Button from "@mui/material/Button";

import { Routes, Route, Navigate, replace } from "react-router";
import { NavLink } from "react-router";
// import { WhyFragment } from "./WhyFragment";
// import { ConditionalRendering } from "./ConditionalRendering";
// Default export (only one per file)
export default function App() {
  // const names = ["Staesha", "Lauren", "Zulu", "Nolo"];
  // Array Strings -> Array of JSX (Transform)
  const [moviesList, setMoviesList] = useState(INITIAL_MOVIES);

  return (
    // JSX starts
    <div className="App">
      {/* <MovieList /> */}
      {/* <UserList /> */}
      {/* <Counter /> */}
      {/* <ConditionalStyling /> */}
      {/* <ColorGame /> */}
      {/* <BrowserRouter>
        <App />
      </BrowserRouter> */}
      {/* a - will refresh */}
      {/* <a href="/about">About with a</a> | <a href="/contact">Contact with a</a>|{" "} */}
      {/* 3. Navigation */}
      <header>
        <nav className="navbar">
          <h2>Welcome to the App</h2>
          <ul>
            <li>
              <NavLink to="/movies"> Movies </NavLink>
            </li>{" "}
            |
            <li>
              <NavLink to="/movies/add-movie"> Add Movies </NavLink>
            </li>{" "}
            |
            <li>
              <NavLink to="/users"> Users </NavLink>
            </li>{" "}
            |
            <li>
              <NavLink to="/colour-game"> Color Game </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {/* <Button variant="contained">Hello world</Button>;2. Matching */}
      <Routes>
        {/* Redirection - new path */}

        <Route path="/films" element={<Navigate replace to="/movies" />} />
        <Route
          path="/movies/add-movie"
          element={
            <AddMovie moviesList={moviesList} setMoviesList={setMoviesList} />
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<MovieList moviesList={moviesList} />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/colour-game" element={<ColorGame />} />

        {/* Special - if none matches |* matches */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
    // JSX ends
  );
}

function NotFound() {
  return (
    <>
      <h1>404 Page not found</h1>
      <img src="https://cdnl.iconscout.com/lottie/premium/thumb/404-error-page-3959253-3299952.gif" />
    </>
  );
}

function Home() {
  return <h1>Welcome home my son</h1>;
}

// function AddMovie() {
//   let [movies, setMovies] = useState([
//     {
//       name: "Vikram",
//       poster:
//         "https://upload.wikimedia.org/wikipedia/en/9/93/Vikram_2022_poster.jpg",
//       rating: 8.4,
//       summary:
//         "Members of a black ops team must track and eliminate a gang of masked murderers.",
//     },
//     {
//       name: "RRR",
//       poster: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
//       rating: 8.8,
//       summary:
//         "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//     },
//     {
//       name: "Iron man 2",
//       poster:
//         "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//       rating: 7,
//       summary:
//         "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//     },
//     {
//       name: "No Country for Old Men",
//       poster:
//         "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//       rating: 8.1,
//       summary:
//         "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//     },
//     {
//       name: "Jai Bhim",
//       poster:
//         "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//       summary:
//         "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//       rating: 8.8,
//     },
//     {
//       name: "The Avengers",
//       rating: 8,
//       summary:
//         "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//       poster:
//         "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//     },
//     {
//       name: "Interstellar",
//       poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//       rating: 8.6,
//       summary:
//         "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//     },
//     {
//       name: "Baahubali",
//       poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//       rating: 8,
//       summary:
//         "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//     },
//     {
//       name: "Ratatouille",
//       poster:
//         "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//       rating: 8,
//       summary:
//         "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//     },
//     {
//       name: "PS2",
//       poster:
//         "https://m.media-amazon.com/images/M/MV5BNjUxYzY3ZmEtY2FkYi00MTE5LTkyNzUtOWY5YTM1MDdiMzIyXkEyXkFqcGc@._V1_.jpg",

//       summary:
//         "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
//       rating: 8,
//     },
//     {
//       name: "Thor: Ragnarok",
//       poster:
//         "https://upload.wikimedia.org/wikipedia/en/7/7d/Thor_Ragnarok_poster.jpg",
//       summary:
//         "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
//       rating: 8.8,
//     },
//   ]);

//   let newPoster = "";
//   let newName = "";
//   let newRating = "";
//   let newSummary = "";

//   <section>
//     <input
//       type="text"
//       placeholder="Name"
//       onChange={() => (newName = event.target.value)}
//     />
//     <input
//       type="text"
//       placeholder="Poster"
//       onChange={() => (newPoster = String(event.target.value))}
//     />
//     <input
//       type="text"
//       placeholder="Rating"
//       onChange={() => (newRating = Number(event.target.value))}
//     />
//     <input
//       type="text"
//       placeholder="Summary"
//       onChange={() => (newSummary = event.target.value)}
//     />
//     <button
//       onClick={() => {
//         console.log(newName);
//         console.log(newPoster);
//         console.log(newRating);
//         console.log(newSummary);

//         setMovies([
//           {
//             name: newName,
//             poster: newPoster,
//             rating: newRating,
//             summary: newSummary,
//           },
//           ...movies,
//         ]);

//         console.log(movies);
//       }}
//     >
//       Add Movie
//     </button>
//   </section>;
// }
