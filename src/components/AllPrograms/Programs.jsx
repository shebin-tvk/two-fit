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
          <div key={i} className=' group md:group-hover:flex md:group-hover:flex-col'>
            <div className='relative group-hover:h-10 bg-red-900'>
              <img src={item.img} alt="image" className='rounded-xl object-center group-hover:h-100' onClick={() => handleclick(item.id)} />
              <p className='absolute bottom-45 left-9 md:bottom-18 md:left-9 text-4xl text-white font-extrabold leading-[1.2] tracking-[-1px] '>{item.heading}</p>
            </div>
            <div className='flex md:group-hover:block flex-col gap-4 md:hidden  bg-[#0A4F48] rounded-2xl w-full my-5 py-4 px-4 text-white'>
              <p className='text-xl'>Duration</p>
              <div className='flex flex-row justify-between md:hover:block  text-[18px]'>
                <button className='rounded-2xl border py-2 px-2  bg-[#10635b]'>30 Days</button>
                <button className='rounded-2xl border py-2 px-2  bg-[#10635b]'>60 Days</button>
                <button className='rounded-2xl border py-2 px-2  bg-[#10635b]'>90 Days</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {/* <Faq/> */}
      </div>
      <div>
        {/* <SeeWhatPossible/> */}
      </div>
    </div>
  )
}

export default Programs