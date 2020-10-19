import React, { useState, useEffect } from "react";

function Movielink({match,movies}) {
  console.log(match.params.id);
  const [movie, setMovie] = useState({});

  useEffect(() => {
      console.log(movies.find((film) => film.id === match.params.id))
    setMovie(movies.find((film) => film.id === match.params.id));
    // console.log(m);
  }, []);
  return (
    <div className="movielink">
<h1>{movie.title}</h1>
<img src={movie.image} alt={movie} ></img>
<iframe width="853" height="480" src={movie.url} title="movie" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    
        

      
    </div>
  );
}
export default Movielink;
