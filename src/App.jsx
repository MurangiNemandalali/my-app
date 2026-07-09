//Murangi
import "./index.css";
import { MovieList } from "./pages/MovieList";
import { Msg } from "./concepts/01-Msg";
import { UserList } from "./pages/UserList";
import { ColorGame } from "./pages/ColorGame";
import { AddMovie } from "./pages/AddMovie";
import { useState } from "react";
import { INITIAL_MOVIES } from "./Movies/INITIAL_MOVIES";
import Button from "@mui/material/Button";
import { MovieDetails } from "./pages/MovieDetails";

import {
  Routes,
  Route,
  Navigate,
  replace,
  useParams,
  useNavigate,
} from "react-router";
import { NavLink } from "react-router";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
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
        <Route path="/movies/add-movie" element={<AddMovie />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/" element={<Home />} />
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
