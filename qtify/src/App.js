import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
// import Hero from "./components/Hero/Hero";
import { Outlet } from "react-router-dom";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./api/api.js";
import { StyledEngineProvider } from "@mui/material";

function App() {
// const [searchData, useSearchData] = useState();
const [data, setData] = useState({});

const generateData = (key, source) => {
  source().then((data) => {
    setData((prevData) => {
      return {...prevData, [key]: data};
    });
  });
};

useEffect(() => {
  generateData("topAlbums", fetchTopAlbums);
  generateData("newAlbums", fetchNewAlbums);
  generateData("songs", fetchSongs);
}, []);

const { topAlbums = [], newAlbums = [], songs = [] } = data;

  return (
    <>
    <StyledEngineProvider injectFirst>
    <Navbar searchData={[...topAlbums, ...newAlbums]} />
    <Outlet context={{ data: {topAlbums, newAlbums, songs} }} />
    </StyledEngineProvider>
    </>
  );
}                                                                                                 



export default App;

// -------------------------------------------------------------------------------------------------------------

// import React, {useState, useEffect} from "react";
// // import Hero from "../components/Hero/Hero";
// // import Card from "../components/Card/Card";
// import { StyledEngineProvider } from "@mui/material";
// import { Outlet } from "react-router-dom";
// import { fetchTopAlbums, fetchNewAlbums } from "./api/api.js";
// import Navbar from "./components/Navbar/Navbar.jsx";

// function App() {
//   const [data, setData] = useState({});
//   const generateData = (key, source) => {
//     source().then((data) => {
//       setData((prevState) => {
//         return { ...prevState, [key]: data};
//       })
//     })
//   }
//   useEffect(() => {
//     generateData("topAlbums", fetchTopAlbums);
//     generateData("newAlbums", fetchNewAlbums);
//   }, []);
//   const { topAlbums = [], newAlbums = [] } = data;

//   return (
//     <div>
//       <StyledEngineProvider injectFirst>
//         <Navbar />
//         <Outlet context={{data: {topAlbums, newAlbums}}}/>
//       </StyledEngineProvider>
//     </div>
//   );
// }

// export default App;







