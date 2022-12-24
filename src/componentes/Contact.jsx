import React from 'react'

function Contact() {
  return (
    <section name='contact' className='w-full h-[765px] bg-[#ADD9F4] flex justify-center p-4 items-center'>
        <form action="" className='flex flex-col max-w-[600px] w-full mt-[4rem]'>
            <div className=''>
                <p className='text-4xl font-bold inline border-b-4 border-[#101419] mb-4'>
                    Contacto
                </p>
                <p className='mt-[25px]'>
                    Completa el formulario o enviame un email - miemail@gmail.com
                </p>
            </div>
            <input className='my-4 p-2 bg-white text-black rounded-lg' type="text" placeholder='Name' name='name' />
            <input className='mb-4 p-2 bg-white text-black rounded-lg' type="email" placeholder='Email' name='email' />
            <textarea className='bg-white p-2 rounded-lg' name="message" rows="8"></textarea>
            <button className='text-black border-2 bg-[#ADB5F4] rounded-lg hover:bg-[#c74044] hover:border-[#ac4e51] px-4 py-3 my-8 mx-auto flex items-center'>Trabajemos juntos!</button>
        </form>
    </section>
  )
}

export default Contact