import { useState, useEffect } from "react";

import classes from "./Horrified.module.css";

const Horrified = () => {
  const [datHorrified, setDataHorrified] = useState([]);

  const callApiHorrified = async () => {
    const reponseHorrified = await fetch(
      "http://api.themoviedb.org/3/discover/movie?api_key=d79a59f8d47b95ae03f0e52a9235a4de&with_genres=27"
    );

    const resultHorrified = await reponseHorrified.json();
    console.log(resultHorrified);
    setDataHorrified(resultHorrified.results);
  };
  useEffect(() => {
    callApiHorrified();
  }, []);
  return (
    <div className={classes.horrified}>
      <h2>Horror</h2>
      {datHorrified &&
        datHorrified.length > 0 &&
        datHorrified.map((item) => {
          return (
            <img
              key={item.id}
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt="fix"
            />
          );
        })}
    </div>
  );
};

export default Horrified;
