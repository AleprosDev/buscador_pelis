import React from 'react'
import {FaReact} from 'react-icons/fa'
import {IoLogoPython} from 'react-icons/io'
import {DiDjango} from 'react-icons/di'
import {DiJavascript1} from 'react-icons/di'


function Skills() {
  return (
    <div name='skills' className='w-full h-[800px] bg-[#65aebb] text-[#0e1b2c]'>
      {/*container*/}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <hgroup>
          <p className='text-4xl font-bold inline border-b-4 border-[#662729] '>
            Habilidades
          </p>

          <p className='pt-6 font-semibold text-4xl'>
            Estas son algunas de las tecnologias con las que he trabajado
          </p>
        </hgroup>
        

        <section className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 justify-between'>
          <div className='shadow-md shadow-[#476C9B]  rounded-lg bg-[#476C9B] hover:scale-110 duration-500  '>
          <FaReact size={80} className='mx-auto items-center my-3'/>
            <p className='font-bold text-white my-4'>React</p>
          </div>

          <div className='shadow-md shadow-[#476C9B]  rounded-lg bg-[#476C9B] hover:scale-110 duration-500  '>
          <IoLogoPython size={80} className='mx-auto items-center my-3'/>
            <p className='font-bold text-white my-4'>Python</p>
          </div>

          <div className='shadow-md shadow-[#476C9B]  rounded-lg bg-[#476C9B] hover:scale-110 duration-500  '>
          <DiDjango size={80} className='mx-auto items-center my-3'/>
            <p className='font-bold text-white my-4'>Django</p>
          </div>

          <div className='shadow-md shadow-[#476C9B]  rounded-lg bg-[#476C9B] hover:scale-110 duration-500  '>
          <DiJavascript1 size={80} className='mx-auto items-center my-3'/>
            <p className='font-bold text-white my-4'>Javascript</p>
          </div>

        </section>  

        

        

       

      </div>

    </div>
  )
}

export default Skills