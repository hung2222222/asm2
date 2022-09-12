import { useState, useEffect } from "react";
import classes from "./Trend.module.css";

// import "./Trend.module";

const Trend = () => {
  const [data, setData] = useState([]);
  const callApi = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/trending/all/week?api_key=d79a59f8d47b95ae03f0e52a9235a4de&language=en-US"
    );
    const result = await res.json();
    console.log(result);
    setData(result.results);
  };
  useEffect(() => {
    callApi();
  }, []);
  return (
    <div className={classes.trend}>
      <div>
        <h2>Trend</h2>
      </div>
      {data &&
        data.length > 0 &&
        data.map((item) => {
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

export default Trend;
