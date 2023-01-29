import React from 'react'
import Image from 'next/image';
import {GiHamburgerMenu} from "react-icons/gi"
import Logo from '@/public/svgs/logoicon.svg'
const Hero = () => {
  return (
    <div
      className="w-full  h-[70vh] py-6 px-8 bg-cover bg-hero bg-center lg:h-[648px]
    bg-no-repeat"
    >
      <nav className="bg-black mx-auto py-4 text-white">
      <ul className=" justify-evenly md:flex hidden">
          <li>Marketplace</li>
          <li>My Assets</li>
          <li>Events</li>
          <li>Login</li>
          <li>Sign Up</li>
        </ul>
        <ul className=" justify-between px-4 md:hidden flex">
          <li>Home</li>
          <li>
            <GiHamburgerMenu />
            
          </li>
        </ul>
      </nav>

      <div className="align-center mt-52 mx-auto w-[80%]">
        <h1 className="text-4xl md:text-6xl leading-20 max-w-md text-white font-bold">
          Welcome to
        </h1>
        <h2>
          <Image
            width={0}
            height={0}
            src={Logo}
            alt=""
          />
          </h2>
        <p className="md:text-3xl text-xl text-white max-w-md">Buy, Sell and Own Virtual land</p>
      </div>
    </div>
  );
}

export default Hero