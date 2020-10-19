import React, { useState } from "react";
import "./App.css";
// import Moviecard from "./components/Moviecard";
import Movielist from "./components/Movielist";
import Rating from "./components/Rating";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "./Assets/aa.jpg";
import image2 from "./Assets/bb.jpg";
import image3 from "./Assets/cc.jpg";
import { Route,Switch } from "react-router-dom";
import Movielink from "./components/Movielink";

const moviesL = [
  {
    title: "Bloodshot",
    id : "1", 
    image: image1,
    description: "Action movie",
    rate: "1",
    url:"https://www.youtube.com/embed/vOUVVDWdXbo"
  },
  {
    title: "The GOD Father",
    id : "2", 
    image: image2,
    description: "Action movie",
    rate: "5",
    url:"https://www.youtube.com/embed/HWqKPWO5T4o"
    
  },
  {
    title: "Black widow",
    id : "3", 
    image: image3,
    description: "Sciense Fiction movie",
    rate: "3",
    url:"https://www.youtube.com/embed/ybji16u608U"
    
  },
];

function App() {
  const [movies, setMovies] = useState(moviesL);
  const [rate, setRate] = useState("");
  return (
    <div className="App">
      <Switch>

      <Route
        path="/"
        exact
        render={() => (
          <div>
            <Rating
              testRating={true}
              rate={rate}
              filterByRate={(rate) => setRate(rate)}
            />
            <Movielist movies={movies} setMovies={setMovies} />
          </div>
        )}
      ></Route>

      <Route path='/:id' 
      exact
      render={(props) => <Movielink {...props} movies={movies} />}
        />
      </Switch>
    </div>
  );
}

export default App;
