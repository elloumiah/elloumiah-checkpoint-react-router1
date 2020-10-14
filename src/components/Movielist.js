import React, { useState } from "react";
import Moviecard from "./Moviecard";
import ModalAdd from "./modal";
import Searchmovie from "./filter";

function Movielist(props) {
  const cardsStyle = {
    display: "flex",
    flexWrap: "wrap",
    margin: "20px",
    justifyContent: "space-around",
  };
  const [Search, setSearch] = useState("");
  const [starvalue, setStarvalue] = useState("");
  return (
    <div >
      <div>
        <Searchmovie setSearch={setSearch} setStarvalue={setStarvalue} />
      </div>
      <div style={cardsStyle}>
      {props.movies
        .filter(
          (movie) =>
            movie.title.toLowerCase().includes(Search.toLowerCase()) &&
            movie.rate >= starvalue
        )
        .map((movie, i) => (
          <Moviecard movie={movie} key={i} />
        ))}
        </div>
      <ModalAdd movies={props.movies} setMovies={props.setMovies} />
    </div>
  );
}
export default Movielist;
