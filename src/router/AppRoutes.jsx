import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AuthSwitcher from '../pages/Login'
import Movie from '../pages/Movies'
import Reviews from '../components/Reviews'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='home' element={<Home />} />
      <Route path='/login' element={<AuthSwitcher />} />
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default AppRoutes
