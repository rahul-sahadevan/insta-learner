import { useState } from 'react'
import './App.css'
import CourseListing from './components/CourseListing'
import Fetch from './components/x'
import Search from './components/Search'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import CourseDetails from './pages/CourseDetails'
import StudentDashBoard from './pages/StudentDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Routes>
       <Route path='/' element={<CourseListing/>}></Route>
       <Route path='/selectedcourse' element={<CourseDetails/>}></Route>
       <Route path='/dashboard' element={<StudentDashBoard/>}></Route>
     </Routes>
     
    </>
  )
}

export default App
