import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import MovieDetail from "./Components/MovieDetail"
import ErrorPage from "./Components/Errorpage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState();

  useEffect(() => {
    if(searchText){
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=3f8ff0c1398b5b3adc5a787b0794fa72&query=${searchText}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.results);
      });
    }
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" Component={Home} />
        <Route
          path="/movies"
          element={
            <Movies keyword={searchText} searchResults={searchResults} />
          }
        />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/errorpage" element={<ErrorPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
