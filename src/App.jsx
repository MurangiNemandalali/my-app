//Murangi
import "./index.css";
import { MovieList } from "./Movies/MovieList";
import { Msg } from "./Msg";
import { UserList } from "./Users/UserList";
import { ColorGame } from "./ColorGame/ColorGame";
// import { WhyFragment } from "./WhyFragment";
// import { ConditionalRendering } from "./ConditionalRendering";
// Default export (only one per file)
export default function App() {
  const names = ["Staesha", "Lauren", "Zulu", "Nolo"];
  // Array Strings -> Array of JSX (Transform)

  return (
    // JSX starts
    <div className="App">
      <MovieList />
      {/* <UserList /> */}
      {/* <Counter /> */}

      {/* <ConditionalStyling /> */}
      {/* <ColorGame /> */}
    </div>
    // JSX ends
  );
}
