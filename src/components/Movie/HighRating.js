import { useState, useEffect } from "react";
import classes from "./HighRating.module.css";

const HighRating = () => {
  const [dataHighRating, setDataHighRating] = useState([]);
  const callApiHigRating = async () => {
    const reponseHighRating = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=d79a59f8d47b95ae03f0e52a9235a4de&language=en-US"
    );
    const resultHightRating = await reponseHighRating.json();
    console.log(resultHightRating);
    setDataHighRating(resultHightRating.results);
  };
  useEffect(() => {
    callApiHigRating();
  }, []);
  return (
    <div className={classes.highRating}>
      <h2>High Rating</h2>
      {dataHighRating &&
        dataHighRating.length > 0 &&
        dataHighRating.map((item) => {
          return (
            <img
              key={item.id}
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt="fix"
            />
          );
        })}
      ;
    </div>
  );
};

export default HighRating;
