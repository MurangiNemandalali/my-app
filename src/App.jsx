import "./index.css";
import { MovieList } from "./MovieList";
import { Msg } from "./Msg";
import { UserList } from "./UserList";


export default function App() {
  const names = ["Staesha", "Lauren", "Zulu", "Nolo"];
  // Array Strings -> Array of JSX (Transform)

  return (
    // JSX starts
    <div className="App">
      <MovieList />
      <UserList/>
      <Msg/>
    </div>
    // JSX ends
  );
}

