import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blogsdata } from '../../utils/constants'
import BlogDetails from '../../pages/BlogDetails'
import fb from "../../assets/Icons/facebookicon.svg"
import Insta from "../../assets/Icons/instagramicon.svg"
import X from "../../assets/Icons/xicon.svg"
import linkedin from "../../assets/Icons/linkedinicon.svg"
import group from "../../assets/Icons/groupicon.svg"


function Details() {
    const { bid } = useParams()



    const BlogDetails = blogsdata.find(blog => blog.id === parseInt(bid))

    return (
        <div className='my-40 mx-4 md:mx-20 lg:mx-38'>
            <div className='flex flex-col gap-20'>
                <div>
                    <p className='text-5xl font-bold'>{BlogDetails.discription}</p>
                </div>
                <div className='w-full flex flex-col'>
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-row justify-between'>
                            <p className='text-[#1E1E1E]'>Published on {BlogDetails.date}</p>
                            <div className='flex flex-row items-center gap-4'>
                                <p className='text-[#000000B2]'>Share</p>
                                <div className='flex flex-row gap-3'>
                                    <div className='border border-gray-500 rounded-full '>
                                        <img className='mx-2 h-3 w-3 my-2' src={fb} alt="" />
                                    </div>
                                    <div className='border border-gray-500 rounded-full '>
                                        <img className='mx-2 h-3 w-3 my-2' src={X} alt="" />
                                    </div>
                                    <div className='border border-gray-500 rounded-full '>
                                        <img className='mx-2 h-3 w-3 my-2' src={Insta} alt="" />
                                    </div>
                                    <div className='border border-gray-500 rounded-full '>
                                        <img className='mx-2 h-3 w-3 my-2' src={linkedin} alt="" />
                                    </div>
                                    <div className='border border-gray-500 rounded-full '>
                                        <img className='mx-2 h-3 w-3 my-2' src={group} alt="" />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className='w-full rounded-xl' src={BlogDetails.img} alt="" />
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Details
