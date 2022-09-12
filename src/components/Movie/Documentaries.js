import { useState, useEffect } from "react";

import classes from "./Documentaries.module.css";

const Documentaries = () => {
  const [dataDocument, setDataDocument] = useState([]);

  const callDocument = async () => {
    const reponseDocument = await fetch(
      "http://api.themoviedb.org/3/discover/movie?api_key=d79a59f8d47b95ae03f0e52a9235a4de&with_genres=99"
    );

    const resultDocument = await reponseDocument.json();
    console.log(resultDocument);
    setDataDocument(resultDocument.results);
  };
  useEffect(() => {
    callDocument();
  }, []);
  return (
    <div className={classes.documentaries}>
      <h2>Document</h2>
      {dataDocument &&
        dataDocument.length > 0 &&
        dataDocument.map((item) => {
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

export default Documentaries;
