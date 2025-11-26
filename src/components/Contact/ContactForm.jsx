import React from 'react'
import Heading from '../shared/Heading'
import imag from "../../assets/images/Rectangle2.svg"

export default function ContactForm() {
    return (
        <div className='py-30'>
            <div>
                <div>
                    <Heading heading={"Get in Touch"} description={"We’d love to hear from you."} />
                </div>
                <div>
                    <div className="group w-72 rounded-3xl overflow-hiddenshadow bg-amber-500">

                        <div className="relative overflow-hidden  hover:h-80  hover:transition-all duration-500">
                            <img
                                src={imag}
                                className="w-full h-full hover:h-auto hover:transition-all duration-300"
                            />

                            <h2 className="absolute bottom-4 left-4 text-white text-2xl font-bold">
                                Weight Gain
                            </h2>
                        </div>
                        <div className=" bg-red-700 relative overflow-hidden top-full left-0  opacity-0 invisible  transition-opacity duration-500  group-hover:opacity-100 group-hover:visible  bg-red- p-3 rounded shadow  h-35">
                            <div
                                className="absolute inset-x-0 bottom-0  bg-[#064e3b] text-white  py-4 px-4 rounded-3xl translate-y-full group-hover:translate-y-0 transition-all duration-300"
                            >
                                <p class="font-semibold mb-2">Duration</p>

                                <div class="flex gap-2">
                                    <button className="bg-white/20 px-4 py-2 rounded-full">30 Days</button>
                                    <button className="bg-white/20 px-4 py-2 rounded-full">60 Days</button>
                                    <button className="bg-white/20 px-4 py-2 rounded-full">90 Days</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div></div>
        </div>
    )
}
