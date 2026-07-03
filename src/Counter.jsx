import { useState } from "react";

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
export function Counter() {
  let [dislike, setDislike] = useState(0);
  let [like, setLike] = useState(0);

  console.log("Re-render");
  return (
    <div>
      {/* Event Listener - click */}
      <h1>{!(like >= dislike + 10) || "You are awesome"}</h1>
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
        max={like + dislike}
        // value={((like / (like + dislike)) * 100).toString()}
        value={Math.max(like, dislike)}
      ></progress>
    </div>
  );
}
