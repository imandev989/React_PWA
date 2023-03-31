import Movie from "./components/movie/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetail from "./components/MovieDetail/index";
import RCounter from './components/RCounter/index';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Movie />} />
        <Route path="/movie-detail/:id" element={<MovieDetail />} />
        <Route path="/rcounter" exact element={<RCounter />} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;
