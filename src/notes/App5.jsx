import "./index.css";
// Named - rename & Default named
import abc, { dbl, secret as shush } from "./fun";
// import sum from "./fun";
const secret = 100;

console.log(dbl(10));
console.log(secret);
console.log(shush);
console.log(abc(10, 5));

// React Vite bundler
// If Components - Strictly jsx (Vite)

// Default export (only one per file)
export default function App() {
  const names = ["Staesha", "Lauren", "Zulu", "Nolo"];
  // Array Strings -> Array of JSX (Transform)

  return (
    // JSX starts
    <div className="App">
      <MovieList />
    </div>
    // JSX ends
  );
}

// Steps
// 1. Start with Scaffolding in Presentation component - one movie
// 2. Move the data to Smart (Pass it down as props)
// 3. Responsive
// 4. Mapping the cards

// Smart
function MovieList() {
  const movies = [
    {
      name: "Vikram",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/9/93/Vikram_2022_poster.jpg",
      rating: 8.4,
      summary:
        "Members of a black ops team must track and eliminate a gang of masked murderers.",
    },
    {
      name: "RRR",
      poster: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    },
    {
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    },
    {
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    },
    {
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
    },
    {
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    },
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    },
    {
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    },
    {
      name: "PS2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNjUxYzY3ZmEtY2FkYi00MTE5LTkyNzUtOWY5YTM1MDdiMzIyXkEyXkFqcGc@._V1_.jpg",

      summary:
        "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
      rating: 8,
    },
    {
      name: "Thor: Ragnarok",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/7/7d/Thor_Ragnarok_poster.jpg",
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
      rating: 8.8,
    },
  ];

  return (
    <section className="movie-list-container">
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}
    </section>
  );
}

// Presentation Component
function Movie({ movie }) {
  // Scaffolding

  return (
    <div className="movie-container">
      <img src={movie?.poster} alt={movie?.name} />
      <div className="movie-spec-container">
        <h2 className="movie-name">{movie?.name}</h2>
        <p className="movie-rating">⭐ {movie?.rating}</p>
      </div>
      <p className="movie-summary">{movie?.summary}</p>
    </div>
  );
}

// Readable & Maintainable & Testability
// Smart & Presentation Component
// Smart - Holds Data
// Presentation - Displays & Styles UI

// Smart
function UserList() {
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
    <section>
      {users.map(({ name, pic }) => (
        <User name={name} pic={pic} />
      ))}
    </section>
  );
}

// Prop name
// Presentation - Reusability ⬆️
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

// Task: Create MovieList && Movie

// Task 1.3: Can you send an object as prop
