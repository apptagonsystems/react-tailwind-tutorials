import React from 'react'

function Gallery() {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='wi-full h-full object-cover' src='https://cdn.pixabay.com/photo/2019/09/12/15/21/resort-4471852__480.jpg' alt=''/>
            </div>
            <div>
                <img className='wi-full h-full object-cover' src='https://cdn.pixabay.com/photo/2014/08/08/21/19/tree-413714__480.jpg' alt=''/>
            </div>
            <div>
                <img className='wi-full h-full object-cover' src='https://cdn.pixabay.com/photo/2021/10/23/23/27/dead-sea-6736592__480.jpg' alt=''/>
            </div>
            <div>
                <img className='wi-full h-full object-cover' src='https://cdn.pixabay.com/photo/2016/05/03/14/05/bahrain-1369259__480.jpg' alt=''/>
            </div>
            <div>
                <img className='wi-full h-full object-cover' src='https://cdn.pixabay.com/photo/2016/05/16/06/17/pool-1395071__480.jpg' alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Gallery