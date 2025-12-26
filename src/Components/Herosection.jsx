import React from 'react'
import Profile from '../img/profile.jpeg';
import "./HeroSection.css";

export default function HeroSection() {
  return (


    <section >
    <div >
        <div>
            <p >Hey, i'm Gopi</p>
            <h1 >
                <span >Full stack</span>{" "}
                <br />
                Developer
            </h1>
            <p >I'm Gopi looking for a Frontend developer Job   
                <br/>
                i had rectently completed by  btech in the steam with cse
            </p>
        </div>
        <button className='btn' >Get in Touch</button>
    </div>

    <div  className='img'>
        <img src={Profile} alt="Profile"  width={200} height={220}  />
        
    </div>
    </section>
  )
}   