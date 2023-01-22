import './App.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from "./components/header/header"
import Home from './Pages/Home/Home';
import MovieList from './components/movie_list/movieList';
import Movie from "./Pages/movie_detail/movie"
function App() {
  

  return (
    <Router>
      <Header/>
    <Routes>
      <Route index element={<Home/>}></Route>
      <Route path='movie/:id' element={<Movie/>}/>
      <Route path='movies/:type' element={<MovieList/>}/>
      <Route  path='/*' element={<h1>Error Page</h1>}/>
    </Routes>
    </Router>
  )
}

export default App
