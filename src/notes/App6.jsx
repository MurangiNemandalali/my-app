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

// like & disLike -> State of Component
// Like or disLike update - Re-renders - Hence total update
function Counter() {
  let [like, setLike] = useState(0);
  let [disLike, setDisLike] = useState(0);
  let total = like + disLike;
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
          setDisLike(disLike + 1);
        }}
      >
        👎 {disLike}
      </button>

      <progress max={total} value={like}></progress>
    </div>
  );
}

// Mental Model
// Click - onClick -> setLike -> Update States -> State Changes Renders

// onclick - JS - ❌
// onClick - React - ✅ (camelCase)

// Hardest - Invisible errors - ❌
