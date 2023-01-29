import React from 'react'

const Footer = () => {
  return (
    <div className=' border-white border-t-8  justify-between md:flex-row flex-col-reverse gap-4 py-12 mx-auto w-[70%]'>
         <nav className="mx-auto text-white">
        <ul className="flex flex-col md:flex-row  justify-evenly ">
          <li>Marketplace</li>
          <li>My Assets</li>
          <li>Events</li>
          <li>Login</li>
          <li>Sign Up</li>
        </ul>
      </nav>
    </div>
  )
}

export default Footer