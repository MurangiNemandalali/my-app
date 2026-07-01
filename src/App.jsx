import "./index.css";

export default function App() {


  return (
   <UserList/>
  );
}

//Readablity and Maintainabllity
//Smart & Presentation
//Smart - Holds the data
//Presentation - Displays & Styles UI

function UserList() {
    const users = [
    {
      name: "James Bond",
      userPic:
        "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2024/10/daniel-craig-james-bond.jpg",
    },
    {
      name: "John Wick",
      userPic:
        "https://tse3.mm.bing.net/th/id/OIP.uqy2cCKS24Ecd-V00JNltQHaDt?r=0&cb=thfvnextfalcon3&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ];
  return(<div className="App">
      <section>
        {users.map(({ name, userPic }) => {
          return <User name={name} url={userPic} />;
        })}
      </section>
    </div>);
}

//Presentation Reuserablity increases
function User({ name, url }) {
  return (
    <div className="App">
      <div className="user-card">
        <img src={url} className="user-image" />
        <h1>Hello, {name}</h1>
        <button className="user-button">Who are you picking?</button>
      </div>
    </div>
  );
}
