import { useState, useEffect } from "react";
import classes from "./Original.module.css";
const Original = () => {
  const [dataOriginal, setDataOreignal] = useState([]);

  const callApiOriginal = async () => {
    const reponseOriginal = await fetch(
      "https://api.themoviedb.org/3/discover/tv?api_key=d79a59f8d47b95ae03f0e52a9235a4de&with_network=123"
    );
    const resultOriginal = await reponseOriginal.json();
    console.log(resultOriginal);
    setDataOreignal(resultOriginal.results);
  };

  useEffect(() => {
    callApiOriginal();
  }, []);
  return (
    <div className={classes.original}>
      <h2>test</h2>
      {dataOriginal &&
        dataOriginal.length > 0 &&
        dataOriginal.map((item) => {
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

export default Original;
