import "./styles.css";

export default function App() {
  return (
    // JSX starts
    <div className="App">
      {/* Call - name (Props) */}
      <Msg name="Nolo" />
      <Msg name="Lauren" />
      <Msg name="Sakhile" />
    </div>
    // JSX ends
  );
}

// Props - Propertis of Component
// Always an object
// Create a component
// 1. PascalCase
// 2. Return JSX

// Declaration
// Best - ✅
function Msg({ name }) {
  return (
    <div>
      <h1>Hello, {name} 🎉</h1>
    </div>
  );
}

function Msg3(props) {
  const { name } = props;
  return (
    <div>
      <h1>Hello, {name} 🎉</h1>
    </div>
  );
}

function Msg2(props) {
  return (
    <div>
      <h1>Hello, {props.name} 🎉</h1>
    </div>
  );
}

// Parent -> Child (Pass data) => Props
function Msg1(props) {
  const name = props.name;
  console.log(props, typeof props);

  return (
    <div>
      <h1>Hello, {name} 🎉</h1>
    </div>
  );
}

// Declaration
// Parameter & Arg - Customize | Same logic for different Data
function prinName(name) {
  // const name = "Lauren";
  console.log("Hi,", name);
}

// Call
// prinName("Lauren");
// prinName("Nolo");
// prinName("Sakhile");
