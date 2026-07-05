import "./index.css";

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
  ];
  return (
    // JSX starts
    <div className="App">
      {/* Sol 1 */}
      {/* {users.map((usr) => (
        <User name={usr.name} pic={usr.pic} />
      ))} */}

      {/* prop={key} */}
      {/* Sol 2 - Common */}
      {/* {users.map(({ name, pic }) => (
        <User name={name} pic={pic} />
      ))} */}

      {/* Object key name == Prop name */}
      {/* Sol 3 */}
      {users.map((usr) => (
        <User {...usr} />
      ))}

      {/* {names.map((nm) => (
        <Msg name={nm} />
      ))} */}
    </div>
    // JSX ends
  );
}

// Prop name
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

function Msg({ name }) {
  return (
    <div>
      <h1>Hello, {name} 🎉</h1>
    </div>
  );
}
