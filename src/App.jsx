// import { useState } from 'react'
// import './App.css'

// import {Routes, Route, useLocation} from "react-router-dom";
import Navbar from "./components/Header/Navbar.jsx";
import Home from "./components/Content/Home.jsx";
import HeroSection from "./components/Content/HeroSection.jsx";


function App() {


  return (
    <>
        <div className={'content'}>
            <Navbar/>
            <HeroSection/>
            <Home/>
        </div>
    </>
  )
}

export default App
