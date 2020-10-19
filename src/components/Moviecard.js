import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from './Rating';
import { Link } from "react-router-dom";

// import { Rate } from "antd";
function Moviecard(props) {
  return (
    <div>
      
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.movie.image}  style={{ height: '300px' }} />
        <Card.Body>
          <Card.Title>{props.movie.title}</Card.Title>
          <Card.Text>{props.movie.description}</Card.Text>
          <Rating rate={props.movie.rate} testRating={false}/>
         

          <Link to= {`/${props.movie.id}`}>
          <Button variant="primary">Start</Button>  
          </Link>

          
        
        </Card.Body>
      </Card>

     
    </div>
  );
}
export default Moviecard;

// import React from "react";
// import { Card } from "react-bootstrap";
// import { Button } from "react-bootstrap";

// export default function Moviecard(props) {
//   return (
//     <div>
//       {props.Movies.map((movie, i) => (
//         <Card style={{ width: "18rem" }} key={i}>
//           <Card.Img variant="top" src="holder.js/100px180" />
//           <Card.Body>
//             <Card.Title>{movie.title}</Card.Title>
//             <Card.Text>
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </Card.Text>
//             <Button variant="primary">Go somewhere</Button>
//           </Card.Body>
//         </Card>
//       ))}
//     </div>
//   );
// }
