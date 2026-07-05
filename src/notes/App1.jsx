import "./styles.css";

// APP = View + Logic => Component
// Declaration Component

// Somebody wants App in another file (hence export)
export default function App() {
  // JS starts
  const name = "Zulu";
  // console.log(name);
  const followers = 2000;

  // JS ends
  return (
    // JSX starts
    <div className="App">
      <h1>
        Hello, {name} 🎉 has {followers * 2} followers
      </h1>
    </div>
    // JSX ends
  );
}

// {} - Interpolation - Only in JSX (Expression)
// {} - only in return

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello Sanlam</h1>
//       <label htmlFor="fullname">Name: </label>
//       <input id="fullname" type="text" placeholder="Jhon Doe" />
//     </div>
//   );
// }

// JSX ✅ HTML ❌
// 1. className (JSX)
// 2. htmlFor
// class - reservered keyword

// label - element

// React -> Babel -> HTML, CSS, JS

// Main
// JSX -> JS -> HTML
// _jsx -> document.createElement
