import { useState, useEffect } from "react";
import classes from "./Comedy.module.css";
const Comedy = () => {
  const [dataComedy, setDataComedy] = useState([]);

  const callApiComedy = async () => {
    const reponseComedy = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=d79a59f8d47b95ae03f0e52a9235a4de&with_genres=35"
    );
    const resultComedy = await reponseComedy.json();
    console.log(resultComedy);
    setDataComedy(resultComedy.results);
  };
  useEffect(() => {
    callApiComedy();
  }, []);

  return (
    <div className={classes.comedy}>
      <h2>Comedy</h2>
      {dataComedy &&
        dataComedy.length > 0 &&
        dataComedy.map((item) => {
          return (
            <img
              key={item.id}
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt="fix"
            />
          );
        })}
      {/* {dataComedy &&
        dataComedy.length > 0 &&
        dataComedy.map((item) => {
          <img
            key={item.id}
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt="fix"
          />;
        })} */}
    </div>
  );
};

export default Comedy;
