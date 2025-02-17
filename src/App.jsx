import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './pages/Users'
import {Navigate,Routes,Route,Outlet,useLocation} from "react-router-dom"
import DashBoard from './pages/DashBord'
import Tasks from './pages/Tasks'
import Trash from './pages/Trash'
import TaskDetails from './pages/TaskDetails'
import Login from './pages/Login'



function Layout (){
  const user=""
  const location = useLocation()
  return user ? (
   <div className='w-full h-screen flex flex-col md:flex-row '>
    <div className="w-1/5 b-screen bg-white sticky rop-0 hiddne md:block">
    {/*<side bar/> */}
    </div>

    {/*<MobileSidebar/>*/}

    <div>
      <div className='flex-1 overflow-y-auto'>
        {/* {<Navbar/>} */}

        <div className='p-4 2xl:px-10'>
          <Outlet/>
        </div>

      </div>
    </div>

   </div>
  ):(
    <Navigate to='/log-in' state={{from: location}}replace/>

  )
}

function App() {
   

  return (

   <main className='w-full min-h-screen bg-[#f3f4f6]'>
    
    <Routes>
      <Route element={<Layout/>}>
      <Route path='/' element={<Navigate to='/dashboard'/>}/>
      <Route path='/dashboard' element={<DashBoard/>}/>
      <Route path='/tasks' element={<Tasks/>}/>
      <Route path='/completed/:status' element={<Tasks/>}/>
      <Route path='/in-progress/:status' element={<Tasks/>}/>
      <Route path='/todo/:status' element={<Tasks/>}/>
      <Route path='/team' element={<Users/>}/>
      <Route path='/trashed' element={<Trash/>}/>
      <Route path='/task/:id' element={<TaskDetails/>}/>

      </Route>
      <Route path='/log-in' element={<Login/>}/>

    </Routes>

   </main>

  )
}

export default App
