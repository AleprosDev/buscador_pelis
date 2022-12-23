import React, {useState} from 'react'
import AP from '../assets/AP.png'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillMail } from "react-icons/ai";

function NavBar() {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <section className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#101419] text-gray-300'>
      <div>
        <img src={AP} alt="logo imagen" className='w-[80px]'/>
      </div>

      {/* menu */}

        <ul className='hidden md:flex items-center'>
          <li className='hover:bg-[#83a4b9] hover:transition-colors duration-400 hover:text-[black] flex h-[80px] items-center '>Home</li>
          <li className='hover:bg-[#83a4b9] hover:transition-colors duration-400 hover:text-[black] flex h-[80px] items-center '>About</li>
          <li className='hover:bg-[#83a4b9] hover:transition-colors duration-400 hover:text-[black] flex h-[80px] items-center '>Skills</li>
          <li className='hover:bg-[#83a4b9] hover:transition-colors duration-400 hover:text-[black] flex h-[80px] items-center '>Works</li>
          <li className='hover:bg-[#83a4b9] hover:transition-colors duration-400 hover:text-[black] flex h-[80px] items-center '>Contact</li>
        </ul>


      {/* Hamburguer */}
      <section onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <i class="fa-solid fa-bars"></i> : <i class="fa-solid fa-xmark"></i>}
      
      </section>

      {/* Movil menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#101419] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl hover:bg-[#102634]'>Home</li>
          <li className='py-6 text-4xl hover:bg-[#102634]'>About</li>
          <li className='py-6 text-4xl hover:bg-[#102634]'>Skills</li>
          <li className='py-6 text-4xl hover:bg-[#102634]'>Works</li>
          <li className='py-6 text-4xl hover:bg-[#102634]'>Contact</li>
        </ul>


      {/* Social icons */}
      <section className='flex fixed flex-col top-[35%] left-0  '>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#101419] rounded-lg'>
            <a href="/" className='flex justify-between items-center w-full text-gray-300'
            > Github <AiFillGithub size={30}/>
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#101419] rounded-lg mt-1'>
            <a href="/" className='flex justify-between items-center w-full text-gray-300'
            > Linkedin <AiFillLinkedin size={30}/>
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#101419] rounded-lg mt-1'>
            <a href="/" className='flex justify-between items-center w-full text-gray-300'
            > Twitter <AiFillTwitterCircle size={30}/>
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#101419] rounded-lg mt-1'>
            <a href="/" className='flex justify-between items-center w-full text-gray-300'
            > Email <AiFillMail size={30}/>
            </a>
          </li>
        </ul>
      </section>


    </section>
  )
}

export default NavBar