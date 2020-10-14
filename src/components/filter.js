import React from "react";
import { Form } from "react-bootstrap";
// import { Rate } from "antd";
function Searchmovie({setSearch}) {
 
  const handlechange = (e) => {
    setSearch(e.target.value);
  };
  // const handlechangestar = (e) => {
  //   setStarvalue(e.value);
  // };
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter your search</Form.Label>
          <br></br>
          <input type="text" onChange={handlechange}></input>
        </Form.Group>
        {/* <Rate defaultValue={1} onChange={handlechangestar}/> */}
      </Form>
    </div>
  );
}
export default Searchmovie;
