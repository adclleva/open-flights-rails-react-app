import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Airline from "./Airline";
function Airlines() {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/airlines.json")
      .then((resp) => {
        setAirlines(resp.data.data);
      })
      .catch((resp) => console.log(resp));
  }, [airlines.length]);

  const grid = airlines.map((item) => {
    return <Airline key={item.attributes.name} attributes={item.attributes} />;
  });

  return (
    <div className="home">
      <div className="header">
        <h1>OpenFlights</h1>
        <div className="subheader">Honest, unbiased airline reviews.</div>
      </div>
      <ul>{grid}</ul>
    </div>
  );
}

export default Airlines;
