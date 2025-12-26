import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
export default function Navbar() {
  return (
    
   
 <ul className='nav' >
    <li className='link'>
<Link to='/Home'>

Home
</Link>
    </li>
     <li className='link'>
<Link to='/About'>

About
</Link>
  </li>
<li className='link'>

<Link to='/Contact'>
Contact
</Link>


</li>



<li className='link'>

<Link to='/User'>
User
</Link>


</li>


<li className='link'>

<Link to='/Skills'>
Skills
</Link>


</li>




<li className='link'>

<Link to='/Projects'>
Projects
</Link>


</li>

 </ul>

 
  )
}
