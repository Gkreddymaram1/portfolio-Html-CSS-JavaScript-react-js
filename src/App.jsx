import React from 'react'
import './App.css'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact'
import {Routes,Route } from 'react-router-dom'; 
import Navbar from './Components/Navbar';
import User from './Components/user';
import Footer from './Components/Footer'
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import HeroSection from'./Components/Herosection';


export default function App() {
  return (


<>


<Navbar />


<HeroSection/>
<Routes>

<Route path='/home' element={ <Home/>}/>
<Route path='/About' element={ <About/>}/>
<Route path='/Contact' element={ <Contact/>}/>
<Route path='/User' element={ <User/>}/>
<Route path='/Skills' element={ <Skills/>}/>
 

 <Route path='/Projects' element={ <Projects/>}/>


<Route path='*' element={<h1>Not Found data</h1>}/>


   </Routes> 

<Footer/>
</>




  )
}
















