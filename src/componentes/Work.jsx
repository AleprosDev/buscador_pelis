import React from 'react'
import Img_test from '../img/img1_test.jpg'

function Work() {
  return (
    <section name='work' className='bg-[#c2686b] w-full md:h-[765px] text-black '>

        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-1'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-black'>
                    Trabajos
                </p>
                <p className='py-6'>
                    Fijate alguno de mis trabajos recientes
                </p>
            </div>

        {/*container*/}

            <section id='seccionTrabajo' className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-[10px]'>

                {/*grid item*/}
                <div style={{backgroundImage: `url(${Img_test})`}}
                    className='shadow-lg shadow-[#101419] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider text-center'>
                        React Js Application 
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Demo
                                </button>
                            </a>

                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Img_test})`}}
                    className='shadow-lg shadow-[#101419] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider text-center'>
                        React Js Application 
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Demo
                                </button>
                            </a>

                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*grid item*/}
                <div style={{backgroundImage: `url(${Img_test})`}}
                    className='shadow-lg shadow-[#101419] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider text-center'>
                        React Js Application 
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Demo
                                </button>
                            </a>

                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Img_test})`}}
                    className='shadow-lg shadow-[#101419] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider text-center'>
                        React Js Application 
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Demo
                                </button>
                            </a>

                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*grid item*/}
                <div style={{backgroundImage: `url(${Img_test})`}}
                    className='shadow-lg shadow-[#101419] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider text-center'>
                        React Js Application 
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Demo
                                </button>
                            </a>

                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Img_test})`}}
                    className='shadow-lg shadow-[#101419] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider text-center'>
                        React Js Application 
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Demo
                                </button>
                            </a>

                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                
            </section>

        </div>
    </section>
  )
}

export default Work