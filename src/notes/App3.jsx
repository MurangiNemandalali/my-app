import "./styles.css";

export default function App() {
  const names = ["Staesha", "Lauren", "Zulu", "Nolo"];
  // Array Strings -> Array of JSX (Transform)

  const users = [
    {
      name: "Khan",
      pic: "https://imgcdn.stablediffusionweb.com/2024/3/16/d82676ea-288a-4e25-9ff8-4b202655f845.jpg",
    },
    {
      name: "Murangi",
      pic: "https://imgcdn.stablediffusionweb.com/2024/9/24/ed4d3b06-90f7-4d8d-ae20-9e6059147870.jpg",
    },
    {
      name: "Nolo",
      pic: "https://p16-seeyou-useast8.capcutcdn-us.com/tos-useast8-i-2zwwjm3azk-tx2/e3d3597bdbc846df9267944afbabc082~tplv-2zwwjm3azk-image.image",
    },
    {
      name: "Nolo 2",
      pic: "https://p16-seeyou-useast8.capcutcdn-us.com/tos-useast8-i-2zwwjm3azk-tx2/e3d3597bdbc846df9267944afbabc082~tplv-2zwwjm3azk-image.image",
    },
  ];
  return (
    // JSX starts
    <div className="App">
      {users.map((usr) => (
        <User name={usr.name} pic={usr.pic} />
      ))}

      {/* {names.map((nm) => (
        <Msg name={nm} />
      ))} */}

      {/* Task - User - Dry */}
      {/* Call - name (Props) */}
      {/* <User
        name="Khan"
        pic="https://imgcdn.stablediffusionweb.com/2024/3/16/d82676ea-288a-4e25-9ff8-4b202655f845.jpg"
      />
      <User
        name="Murangi"
        pic="https://imgcdn.stablediffusionweb.com/2024/9/24/ed4d3b06-90f7-4d8d-ae20-9e6059147870.jpg"
      />
      <User
        name="Nolo"
        pic="https://p16-seeyou-useast8.capcutcdn-us.com/tos-useast8-i-2zwwjm3azk-tx2/e3d3597bdbc846df9267944afbabc082~tplv-2zwwjm3azk-image.image"
      /> */}
    </div>
    // JSX ends
  );
}

function User({ name, pic }) {
  return (
    <div className="user-container">
      <img src={pic} alt={name + "'s profile pic"} />
      <p className="user-msg">
        Hello, <span className="user-name">{name} 🎉</span>
      </p>
    </div>
  );
}

function User1(props) {
  console.log(props);
  return (
    <div className="user-container">
      <img src={props.pic} />
      <p className="user-msg">
        Hello, <span className="user-name">{props.name} 🎉</span>
      </p>
    </div>
  );
}

// Task
// Create User & Implement the design

// Declaration
// Best - ✅
function Msg({ name }) {
  return (
    <div>
      <h1>Hello, {name} 🎉</h1>
    </div>
  );
}

// Props - Propertis of Component
// Always an object
// Create a component
// 1. PascalCase
// 2. Return JSX
