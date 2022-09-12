import { useState, useEffect } from "react";
import classes from "./Act.module.css";

const Act = () => {
  const [dataAct, setDataAct] = useState([]);

  const callApiAct = async () => {
    const reponseAct = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=d79a59f8d47b95ae03f0e52a9235a4de&with_genres=28"
    );
    const resultAct = await reponseAct.json();
    console.log(resultAct);
    setDataAct(resultAct.results);
  };
  useEffect(() => {
    callApiAct();
  }, []);
  return (
    <div className={classes.act}>
      <h2>Act</h2>

      {dataAct &&
        dataAct.length > 0 &&
        dataAct.map((item) => {
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

export default Act;
