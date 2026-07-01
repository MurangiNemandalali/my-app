import { useState } from "react";
import "./index.css";
import { MovieList } from "./MovieList";
import { Msg } from "./Msg";
import { UserList } from "./UserList";
// Default export (only one per file)
export default function App() {
  const names = ["Staesha", "Lauren", "Zulu", "Nolo"];
  // Array Strings -> Array of JSX (Transform)

  return (
    // JSX starts
    <div className="App">
      {/* <MovieList /> */}
      <Counter />
    </div>
    // JSX ends
  );
}

// React reacts to special variables
// Hook variables
// What is hook? Hook is function ('use') - useState, useEffect, useContext

// state - current value of component
// setState - fn updates the state
// let [state, setState] = useState(Initial_Value)
// DOM methods - ❌

// y = f(x)
// Component is function State
// C = f(S) - State change Component re-renders (Re draw)
function Counter() {
  let [dislike, setDislike] = useState(0);
  let [like, setLike] = useState(0);

  console.log("Re-render");
  return (
    <div>
      {/* Event Listener - click */}
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        👍 {like}
      </button>
      <button
        onClick={() => {
          setDislike(dislike + 1);
        }}
      >
        👎 {dislike}
      </button>

      <progress
        max="100"
        value={((like / (like + Math.abs(dislike))) * 100).toString()}
      ></progress>
    </div>
  );
}

// Mental Model
// Click - onClick -> setLike -> Update States -> State Changes Renders

// onclick - JS - ❌
// onClick - React - ✅ (camelCase)

// Hardest - Invisible errors - ❌
