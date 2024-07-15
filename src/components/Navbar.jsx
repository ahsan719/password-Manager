import React from 'react'

function Navbar() {
  return (
   <nav className='bg-slate-800 text-white '>
        <div className="mycontainer flex justify-between mycontainer
    items-center px-4 h-11 py-7">

    <div className="logo font-bold text-white text-xl" >  
        <span className="text-green-500">&lt;</span>
        Pass 
        <span className="text-green-500">OP/&gt; </span> 


    </div>
    <ul className='flex gap-4 ' >
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/logout">Logout</a></li>
     </ul>
        </div>
   </nav>
  )
}

export default Navbar