import { FaBars } from 'react-icons/fa'

const Nav = () => {
  return (
    <div
      id='nav'
      className='absolute top-0 h-screen w-screen z-20 font-semibold'
    >
      <div className='hidden h-30 w-full max-w-7xl mx-auto text-white lg:flex flex-row pt-8 p-4 tracking-wider'>
        <p className='text-3xl cursor-default'>Logo</p>
        <div className='flex flex-row ml-auto cursor-pointer gap-12 text-2xl'>
          <div className='hover:text-[#FAAC78]'>
            <p>Servicios</p>
          </div>
          <div className='hover:text-[#FAAC78]'>
            <p>Tarifas</p>
          </div>
          <div className='hover:text-[#FAAC78]'>
            <p>Contacto</p>
          </div>
        </div>
      </div>
      <div className='lg:hidden flex flex-row absolute text-xl sm:text-4xl sm:gap-80'>
        <div className='flex-1 flex-row w-96 max-w-4xl mx-auto sm:text-3xl text-white pt-6 p-8 tracking-wider'>
          <p>Logo</p>
        </div>
        <div className='flex-1 flex-row pt-8 p-8 w-44 sm:w-64 sm:text-3xl text-white'>
          <FaBars />
        </div>
      </div>
    </div>
  )
}

export default Nav
