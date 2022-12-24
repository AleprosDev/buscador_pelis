import React from 'react'

function About() {
  return (
    <section name='about' className='w-full  h-[765px] bg-[#101419] text-gray-300' >
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#ADD9F4]'>About</p>
                </div>

                    <div></div>

            </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='text-4xl font-bold sm:text-right text-[#ADD9F4]'>
                        <p>
                            Hola, soy Alejandro. Ve un poco, capaz te interese.
                        </p>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed fugit quidem, voluptate dolorem, blanditiis ea,
                            incidunt ad quas dolore tempore odio eaque cupiditate consectetur quae voluptatem et nihil? Alias, velit.
                            Nostrum debitis in sed quaerat, labore eveniet sequi at asperiores minima omnis culpa eaque,
                            reprehenderit aspernatur? Nemo id officia distinctio esse hic facilis, autem ad quisquam aspernatur neque natus fuga.
                        </p>
                    </div>
                </div>

        </div>
    </section>
  )
}

export default About