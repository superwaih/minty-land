import React from 'react'
import HeroTwo from "@/public/images/hero-3.png"
import Image from 'next/image'
const TradeSection = () => {
  return (
    <div className='text-white flex justify-between md:flex-row flex-col-reverse gap-4 py-12 mx-auto w-[70%]'>
    <div>
        <Image
            width={400}
            height={300}
            src={HeroTwo}
            alt=""
        />
    </div>

    <div className='max-w-lg flex flex-col space-y-4 '>
        <h3 className='text-2xl text-[56px]
        text-semibold purple-text'>Trade</h3>
        <p className='text-white text-2xl font-semibold leading-20'>Immerse Yourself In The Beautiful and Evolving Virtual world</p>
        <p className='purple-text text-2xl leading-20'>
        Discover LANDs owned by users & experience incredible scenes and structures
        </p>
        <button className='rounded-md text-white font-semibold max-w-[140px] py-4 px-2 bg-[#D4007F] '>
            Get Started
        </button>
    </div>

   
</div>
  )
}

export default TradeSection