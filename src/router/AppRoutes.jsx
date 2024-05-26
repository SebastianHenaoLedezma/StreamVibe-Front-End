import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Movies from '../pages/Home/Movies/movies'
import AuthSwitcher from '../pages/Login'
import Movie from '../pages/Movie'
import Reviews from '../components/Reviews'
import MovieByGenre from '../pages/MovieByGenre/movieByGenre'
import MustWatch from '../components/PopularMovies/mustWatch'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<AuthSwitcher />} />
      {/* Libre */}
      
      <Route path='movies' element={<Movies />} />
      <Route path='/movie' element={<Movie />} />
      <Route path='/movie/:id' element={<Movie />} />
      <Route path='/must-watch' element={<MustWatch />} />
      <Route path='/moviesbygenre/:id' element={<MovieByGenre />} />
    </Routes>
  )
}

export default AppRoutes
