import React from 'react'

function Hero() {
  return (
    <div className='w-full h-[90vh]'>
        <img src='https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg' alt=''
        className='w-full h-full object-cover'/>
        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
                <h2 className='text-4xl py-4 italic'>With Weekaway</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab deleniti eveniet praesentium nesciunt unde laudantium ducimus eos eius at voluptatem nostrum aspernatur quas non totam corrupti perspiciatis, officiis minus porro? </p>
            </div>
        </div>
    </div>
  )
}

export default Hero