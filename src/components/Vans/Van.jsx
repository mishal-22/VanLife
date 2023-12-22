import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Van() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  if (!vans) {
    return <h1>Loading...</h1>;
  }
  const vanElements = vans.map((van) => (
    <Link to={`/van/${van.id}`}>
      <div key={van.id} className="van-tile">
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>
    </Link>
  ));
  return (
    <div>
      <h1 className="options-head">Explore our van options</h1>
      <div className="options">
        <p className="option">Simple</p>
        <p className="option">Luxury</p>
        <p className="option">Rugged</p>
      </div>
      <div className="van-items">{vanElements}</div>
    </div>
  );
}

export default Van;
