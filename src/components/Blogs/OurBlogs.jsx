import React from 'react'
import Heading from '../shared/Heading'
import { blogsdata } from '../../utils/constants'

export default function OurBlogs() {
  return (
    <div className='my-30'>
      <div className='text-center'>
            <Heading heading={"Our Blogs"} />
            <p>Insights to guide your health journey.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4'>
        {blogsdata.map((blog,index)=>(
            <div key={index}>
                <img src={blog.img} alt="" />
                <p>{blog.date}</p>
                <p>{blog.discription}</p>

            </div>
        ))}

      </div>
    </div>
  )
}
