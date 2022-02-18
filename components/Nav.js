import { FaBars } from 'react-icons/fa'
import React, { useState } from 'react'
import Image from 'next/image'


const Nav = ({ servicesRef, tariffsRef, contactRef }) => {
  const [showMenu, setShowMenu] = useState(false)

  let menuMask

  if(showMenu){
  
    menuMask = 
    <div
      className='bg-black opacity-60 absolute top-0 left-0 w-screen h-screen z-50'
      onClick={() => setShowMenu(false)}
    >
      <div className='space-y-8 w-screen h-screen grid grid-cols-1 content-center justify-center align-middle'>
        <div className='text-white z-60 py-4 text-center' onClick={() => {
          servicesRef.current.scrollIntoView({ behavior: 'smooth' })
        }}>
          <p>Servicios</p>
        </div>
        <div className='text-white z-60 py-4 text-center' onClick={() => {
          tariffsRef.current.scrollIntoView({ behavior: 'smooth' })
        }}>
          <p>Tarifas</p>
        </div>
        <div className='text-white z-60 py-4 text-center' onClick={() => {
          contactRef.current.scrollIntoView({ behavior: 'smooth' })
        }}>
          <p>Contacto</p>
        </div>
      </div>

    </div>
  }

  return (
    <div
      id='nav'
      className='absolute top-0 h-30 w-screen z-20 font-semibold'
    >
      {/*PC*/}
      <div className='hidden h-40 w-full max-w-7xl mx-auto text-white lg:flex flex-row pt-8 p-4 tracking-wider'>
        <p className='text-white text-xl'>POSICIONAMIENTO</p>
        <p className='text-[#FAAC78] text-xl'>WEB</p>
        <p className='text-white text-xl'>24</p>
        <div className='flex flex-row ml-auto cursor-pointer gap-12 text-2xl'>
          <div className='hover:text-[#FAAC78]' onClick={() => {
            servicesRef.current.scrollIntoView({ behavior: 'smooth' })
          }}>
            <p>Servicios</p>
          </div>
          <div className='hover:text-[#FAAC78]' onClick={ ()=> {
            tariffsRef.current.scrollIntoView({ behavior: 'smooth' })
          }}>
            <p>Tarifas</p>
          </div>
          <div className='hover:text-[#FAAC78]' onClick={() => {
            contactRef.current.scrollIntoView({ behavior: 'smooth' })
          }}>
            <p>Contacto</p>
          </div>
        </div>
      </div>
      {/*Mobile*/}
      <div className='lg:hidden flex flex-row absolute text-xl sm:text-4xl sm:gap-80'>
        <div className='flex-1 flex-row w-96 max-w-4xl mx-auto sm:text-3xl text-white pt-6 p-8 tracking-wider'>
          <Image src='/logo.png' layout='fill' objectFit='cover' />
        </div>
        <div className='flex-1 flex-row pt-8 p-8 w-44 sm:w-64 sm:text-3xl text-white'>
          <FaBars 
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        { menuMask }
      </div>
    </div>
  )
}

export default Nav
