import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hero from './components/Hero.jsx';
import LaoutPage from './pages/LaoutPage.jsx';
import Login from './pages/Login.jsx'
import Signup from "./pages/Signup.jsx"
import Videos from './pages/Videos.jsx';
import { createRoutesFromElements,Route,createBrowserRouter,RouterProvider, } from 'react-router-dom';
import Payment from './pages/Payment.jsx';
import Home from './pages/Home.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';
import { userAuthHook } from './hook/UserHook';
import RwongPage from './components/RwongPage.jsx';


const route=createBrowserRouter(
  
createRoutesFromElements(

  <Route path="/" element={<LaoutPage/>}>
  <Route index element={<Home />} />
  <Route path="Login" element={<Login />} />
  <Route path="Signup" element={<Signup />} />
  <Route path="Videos" element={<Videos />} />
  <Route path="Payment" element={<Payment />} />
  <Route path='*' element={<RwongPage/>}/>
</Route>

)

)
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <AuthContextProvider> 
    <RouterProvider router={route}/> 
   
    </AuthContextProvider>
   
  </React.StrictMode>
)
