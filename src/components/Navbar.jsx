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

        
        <div className="logo">Github</div>
      </div>

    </nav>
  )
}

export default Navbar
