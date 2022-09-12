import { useState, useEffect } from "react";
import classes from "./RomanceMovies.module.css";

const RomanceMovies = () => {
  const [dataRomance, setDataRomance] = useState([]);

  const callApiRomanceMovies = async () => {
    const responseRomance = await fetch(
      " http://api.themoviedb.org/3/discover/movie?api_key=d79a59f8d47b95ae03f0e52a9235a4de&with_genres=10749 "
    );
    const resultRomance = await responseRomance.json();
    console.log(resultRomance);
    setDataRomance(resultRomance.results);
  };
  useEffect(() => {
    callApiRomanceMovies();
  }, []);

  return (
    <div className={classes.romance}>
      <h2>Romance</h2>
      {dataRomance &&
        dataRomance.length > 0 &&
        dataRomance.map((item) => {
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

export default RomanceMovies;
