import { useEffect, useState } from "react";

// like & disLike -> State of Component
// Like or disLike update - Re-renders - Hence total update

// State updates -> Re-render (Costly)
// useEffect -> Attach the code to LifeCycle component

// All useEffect runs on mount
export function Counter() {
  let [like, setLike] = useState(0);
  let [disLike, setDisLike] = useState(0);

  let total = like + disLike;
  // console.log("Re-render");

  // ComponentDidUpdate - Any state or props changes - Implicitly
  useEffect(() => {
    console.log("1. Component updated");
  });

  // Better - ✅ - Explicitly
  useEffect(() => {
    console.log("2. Component updated");
  }, [like, disLike]);

  // ComponentDidMount - Re-routing / Conditional rending
  // Only on mount - After they don't run
  // useEffect(() => {
  //   console.log("0. Mounted");
  // }, []);

  // ComponentDidUpdate

  // Component Mount
  // useEffect(() => {
  //   console.log("1. log");
  // }, [disLike]);

  // // Component Mount
  // useEffect(() => {
  //   console.log("2. log");
  // }, [like, disLike]);

  // useEffect(() => {
  //   console.log("Mounted");

  //   // Component Mount && Unmounting
  //   return () => {
  //     console.log("Unmounting");
  //   };
  // }, []);

  const incrementLike = () => {
    setLike((state) => state + 1);
  };

  const incrementDisLike = () => {
    setDisLike(disLike + 1);
  };

  return (
    <div className="counter-container">
      {/* Event Listener - click */}
      <div className="action-buttons">
        <button onClick={incrementLike}>👍 {like}</button>
        <button onClick={incrementDisLike}>👎 {disLike}</button>
      </div>
    </div>
  );
}

// useEffect(callback, [Dependencies])
