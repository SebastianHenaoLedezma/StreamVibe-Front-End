import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Movies from '../pages/Home/Movies/movies'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='home' element={<Home />} />
      <Route path='/' element={<Home />} />
      <Route path='movies' element={<Movies />} />
    </Routes>
  )
}

export default AppRoutes
