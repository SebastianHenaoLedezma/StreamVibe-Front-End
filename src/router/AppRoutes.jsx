import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Movies from '../pages/Home/Movies/movies'
import AuthSwitcher from '../pages/Login'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='home' element={<Home />} />
      <Route path='login' element={<AuthSwitcher />} />
      <Route path='/' element={<Home />} />
      <Route path='movies' element={<Movies />} />
    </Routes>
  )
}

export default AppRoutes
