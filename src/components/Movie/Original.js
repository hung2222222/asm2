import { useState, useEffect, useRef } from "react";
import classes from "./Original.module.css";

import Slider from "react-slick";

const Original = (props) => {
  const [dataOriginal, setDataOreignal] = useState([]);

  const ref = useRef({});
  //sử dụng thư viện React Slick

  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    //autoplay: true,
    cssEase: "linear",
  };
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
      <Slider ref={ref} {...settings}>
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
      </Slider>
    </div>
  );
};

export default Original;
