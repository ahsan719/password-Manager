import React from 'react'

function Navbar() {
  return (
   <nav className='bg-purple-200 flex justify-between
    items-center px-4 h-11 '>
    <div className="logo font-bold">PassMan</div>
    <ul className='flex gap-4 ' >
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/logout">Logout</a></li>
     </ul>
   </nav>
  )
}

export default Navbar