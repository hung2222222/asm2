// import useHttp from "../../components/hooks/use-http";
// import NavBa from "../../components/NavBa/NavBa";
// import React, { useState, useEffect } from "react";

// function Browse() {
//   const [tasks, setTasks] = useState([]);

//   const { isLoading, error, sendRequest: fetchTasks } = useHttp();

//   useEffect(() => {
//     const transfromTasks = (tasksObj) => {
//       const loadedTask = [];

//       for (const taskKey in tasksObj) {
//         loadedTask.push({ id: taskKey, text: tasksObj[taskKey].text });
//       }
//       setTasks(loadedTask);
//     };
//     fetchTasks(
//       {
//         url: "https://api.themoviedb.org/3//trending/all/week?api_key=d79a59f8d47b95ae03f0e52a9235a4de&language=en-US",
//       },
//       transfromTasks
//     );
//   }, [fetchTasks]);

//   const taskAddHandler = (task) => {
//     setTasks((prevTasks) => prevTasks.concat(task));
//   };
//   return (
//     <React.Fragment>
//       <section>
//         <NavBa />
//         <div
//           items={tasks}
//           loading={isLoading}
//           error={error}
//           onFetch={fetchTasks}
//         ></div>
//       </section>
//     </React.Fragment>
//   );
// }

import Original from "../../components/Movie/Original";
import NavBa from "../../components/NavBa/NavBa";

import Trend from "../../components/Movie/Trend";
import HighRating from "../../components/Movie/HighRating";
import Act from "../../components/Movie/Act";
import Comedy from './../../components/Movie/Comedy';
import Horrified from './../../components/Movie/Horrified';
import RomanceMovies from './../../components/Movie/RomanceMovies';
import Documentaries from './../../components/Movie/Documentaries';
import Banner from "../../components/Banner/Banner";






function Browse() {

  // }
  return (
    <div className="app">
       
     <div>
       <NavBa />
       <Banner />
       </div>
       <div>
           <Original />
         </div>
        <Trend />
        <HighRating />
        <Act />
        <Comedy />
        <Horrified />
        <RomanceMovies />
        <Documentaries />
      </div>
  );
}

export default Browse;

