import React from 'react'

const About = () => {
  return (
    <div className='max-w-lg flex flex-col space-y-4 mx-auto w-[80%] mb-12'>
        <h3 className='text-2xl  md:text-[56px]
        text-semibold purple-text '>About MintyLand</h3>
        <p className='text-[#6F6D6D] text-2xl leading-20 '>
        MintyLand lets you buy and sell virtual assets and real estate.
        </p>
        <button className='rounded-md text-white font-semibold max-w-[140px] py-4 px-2 bg-[#D4007F] '>
            Get Started
        </button>
    </div>

  )
}

export default About