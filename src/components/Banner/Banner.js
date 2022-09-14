import { useState, useEffect } from "react";

// import { imageBasePath, requests } from "../../constants/index";
import classes from "./Banner.module.css";
const Banner = () => {
  const [banner, setBanner] = useState();
  const callApiOriginal = async () => {
    const reponseOriginal = await fetch(
      "https://api.themoviedb.org/3/discover/tv?api_key=d79a59f8d47b95ae03f0e52a9235a4de&with_network=123"
    );
    const resultOriginal = await reponseOriginal.json();
    const data = resultOriginal.results;
    setBanner(data[Math.floor(Math.random() * (data.length - 1))]);
  };
  useEffect(() => {
    callApiOriginal();
  }, []);

  return (
    <div className="banner">
      <div className={classes.banner}>
        <div>
          {banner && (
            <>
              <img
                src={`https://image.tmdb.org/t/p/w500${banner.backdrop_path}`}
                alt="fix"
              />
              <div className={classes.absolute}>
                <h1>{banner.name}</h1>
                <button>Play</button>
                <button style={{ marginLeft: "20px" }}>Mylist</button>
                <p>{banner.overview}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
