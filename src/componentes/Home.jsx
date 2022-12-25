import React from 'react'
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from 'react-scroll';

function Home() {



  return (
    <div name='home' className='bg-[#476C9B] w-full h-[765px] '>
      {/*container*/}

      <section className='max-w-[1000px] max-h-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#662729] font-bold'>Hola, mi nombre es</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#101419]'>Alejandro Pros</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#65aebb]'>Soy un front end developer</h2>
        <p className='text-[#65aebb] py-4 max-w-[700px]'>Soy un developer especializado en construccion de SPA responsives. Mi interes
          es sobre todo la fluidez de los elementos y la UX.
        </p>
        <div>
          <button className='font-bold text-black group border-2 px-10  py-3 my-2 flex items-center rounded-lg hover:bg-[#984447] hover:border-[#984447] hover:transition-colors hover:text-[#65aebb]'>
            <Link className='' to='work' smooth={true} >
            <p>Esto hice</p>
            </Link>
            <span className='flex group-hover:rotate-90 duration-300 ml-3 '>
              <AiFillCaretRight size='25px' className='ml-[10px] mt-[2px]'/>
            </span>

          </button> 
        </div>
      </section>
    </div>
  )
}

export default Home