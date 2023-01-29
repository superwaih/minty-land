import React from 'react'
import HeroTwo from "@/public/images/hero-2.png"
import Image from 'next/image'
const DiscoverSection = () => {
  return (
    <div className='text-white flex md:flex-row flex-col gap-4 justify-between py-12 mx-auto w-[70%]'>
        <div className='max-w-lg flex flex-col space-y-4 justify-center'>
            <h3 className='text-2xl text-[56px]
            text-semibold purple-text'>Discover</h3>
            <p className='text-white text-2xl font-semibold leading-20'>Immerse Yourself In The Beautiful and Evolving Virtual world</p>
            <p className='purple-text text-2xl leading-20'>
            Discover LANDs owned by users & experience incredible scenes and structures
            </p>
            <button className='rounded-md text-white font-semibold max-w-[140px] py-4 px-2 bg-[#D4007F] '>
                Get Started
            </button>
        </div>

        <div className=''>
            <Image
                width={420}
                height={300}
                src={HeroTwo}
                alt=""
            />
        </div>

    </div>
  )
}

export default DiscoverSection