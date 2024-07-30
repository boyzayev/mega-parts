
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import AppLayout from './layout/AppLayout'
import MainLayout from './layout/MainLayout'
import Home from './page/Home'
import Login from './page/Login'
import Register from './page/Register'
import Blog from './page/Blog'
import Absorbes from './page/Absorbes'
import VideoDetail from './page/VideoDetail'
import HeartProduct from './page/HeartProduct'
import Mycart from './page/Mycart'
import Profile from './page/Profile'


function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='/blogs' element={<Blog />} />
            <Route path='/shock-absorbes' element={<Absorbes />} />
            <Route path='/product/:id' element={<VideoDetail/>}/>
            <Route path='/heartProduct' element={<HeartProduct/>}/>
            <Route path='/cart' element={<Mycart/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Route>
        </Route>
      </Routes>
    </Router>
  ) 
}

export default App
