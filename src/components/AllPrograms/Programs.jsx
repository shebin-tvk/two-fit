import React from 'react'
import Heading from '../shared/Heading'
import { designData } from '../../utils/constants'
import Faq from '../shared/Faq'
import SeeWhatPossible from '../Home/SeeWhatPossible'
import { Navigate, useNavigate } from 'react-router-dom'

const Programs = () => {
  const Navigate = useNavigate()
  const handleclick = (id) => {
    Navigate(`/programs/${id}`)
  }

  return (
    <div className=''>
      <div className='flex flex-col  items-center w-full justify-center py-15'>
        <Heading heading='Choose Your Plan' description='Guided programs designed for your goals' />
      </div>
      <div className=' grid grid-cols-1 place-items-center gap-0 md:gap-5  md:grid-cols-3 px-[5px] md:px-5 lg:px-[150px] '>
        {designData.map((item, i) => (
          <div key={i} className='group md:hover:h-auto md:group-hover:flex md:group-hover:flex-col w-full bg-red900'>
            <div className='relative md:group-hover:w-full   bg-green700 md:object-cover'>
              <img src={item.img} alt="image" className='relative w-full rounded-xl object-cover md:group-hover:aspect-square md:group-hover:w-full' onClick={() => handleclick(item.id)} />
              <p className='absolute md:group-hover:bottom-10 bottom-45 left-9 md:bottom-18 md:left-9 text-4xl text-white font-extrabold leading-[1.2] tracking-[-1px] '>{item.heading}</p>
            </div>

            <div className='flex w-full md:group-hover:block  md:group-hover:h-auto flex-col gap-4 md:hidden  bg-[#0A4F48] rounded-2xl   my-2 py-3 px-5  md:py-2 md:px-2 lg:py-4 lg:px-4 text-white'>
              <p className='md:px-4 md:text-md text-xl lg:px-2'>Duration</p>
              <div className='flex flex-row  gap-2 md:gap-5 md:py-2 px-3 md:px-3 md:text-lg lg:text-2xl lg:gap-8 lg:px-2 lg:py-1'>
                <button className='rounded-2xl border px-5  py-1 md:text-xs  md:text-md lg:text-lg md:py-1 lg:py-2 md:px-1 lg:px-2  bg-[#10635b]'>30 Days</button>
                <button className='rounded-2xl border px-5  py-1 md:text-xs  md:text-md lg:text-lg md:py-1 lg:py-2 md:px-1 lg:px-2  bg-[#10635b]'>60 Days</button>
                <button className='rounded-2xl border px-5  py-1 md:text-xs  md:text-md lg:text-lg md:py-1 lg:py-2 md:px-1 lg:px-2  bg-[#10635b]'>90 Days</button>
              </div>
            </div>


          </div>
        ))}
      </div>
      <div>{/* <Faq/> */}</div>
      <div>{/* <SeeWhatPossible/> */}</div>
    </div>
  );
}

export default Programs;