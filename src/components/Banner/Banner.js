import { useState, useEffect } from "react";

// import { imageBasePath, requests } from "../../constants/index";
import classes from "./Banner.module.css";
const Banner = () => {
  const [dataBanner, setDataBanner] = useState();

  useEffect(() => {
    const callApiOriginal = async () => {
      const reponseOriginal = await fetch(
        "https://api.themoviedb.org/3/discover/tv?api_key=d79a59f8d47b95ae03f0e52a9235a4de&with_network=123"
      );
      const resultOriginal = await reponseOriginal.json();
      console.log(resultOriginal.results);

      //test\
      let loadBanner = [];
      loadBanner = resultOriginal.results;
      console.log(loadBanner);
      const f = loadBanner[Math.floor(Math.random() * (loadBanner.length - 1))];
      console.log(f);

      setDataBanner(f);
      // loadBanner = [];
    };

    callApiOriginal(console.log(dataBanner));
  }, []);

  return (
    <div className="banner">
      <div className={classes.banner}>
        {dataBanner &&
          dataBanner.length > 0 &&
          dataBanner.map((item) => {
            return (
              <div>
                {/* {dataList} */}
                <img
                  key={item.id}
                  src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                  alt="fix"
                />
                <h1>{item.name}</h1>
              </div>
            );
          })}
        <div>
          <button>Play</button>
          <button>Mylist</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
// import React, { useEffect, useState } from 'react';
// import styles from './style.module.css';
// import { imageBasePath, requests } from '../../constants/index';

// export const Banner = () => {
//     const [film, setFilm] = useState();
//     useEffect(() => {
//         async function fetchData() {
//             const url = `${requests.fetchNetflixOriginals}`;
//             // console.log('url: ', url);
//             const dat =  await fetch(url);
//             // console.log('dat: ', dat);
//             const res = await dat.json();
//             // console.log('res: ', res);
//             const f = res.results[Math.floor(Math.random() * res.results.length - 1)];
//             // console.log('film: ', f);
//             setFilm(f);
//         }
//         fetchData();
//     },[]);
//     const bgurl = film?(imageBasePath + film.backdrop_path):'';
//     // console.log('bg: ', bgurl);
//     return (
//         <React.Fragment>
//             <div className={styles['banner-container']} style={{
//                 backgroundImage: `url(${bgurl})`
//             }}>
//                 <h2 className={styles['film-title']}>{film&&film.original_name}</h2>
//                 <div className={styles['button-group-banner']}>
//                     <button>Play</button>
//                     <button>My List</button>
//                 </div>
//                 {film&&<p className={styles['film-overview']}>{film.overview}</p>}
//             </div>
//         </React.Fragment>
//     )
// }
