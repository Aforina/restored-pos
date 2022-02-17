const Footer = () => {
  return (
    <div>
      {/*PC*/}
      <div
        id='footer'
        className='hidden md:block w-screen bg-[#4B505C] text-white mt-8 text-xl tracking-wide'
      >
        <div className='w-full max-w-7xl mx-auto flex flex-row px-4 py-8 font-semibold'>
          <div className='mx-auto flex flex-col md:flex-row cursor-pointer gap-12 text-xl'>
            <p className='hover:text-gray-300'>Servicios</p>
            <p className='hover:text-gray-300'>Tarifas</p>
            <p className='hover:text-gray-300'>Contacta</p>
          </div>
          <div className='ml-auto flex flex-col md:flex-row cursor-pointer gap-12'>
            <p>PosicionamientoWeb24</p>
          </div>
        </div>
      </div>
      {/*Mobile*/}
      <div className='md:hidden w-screen bg-[#4B505C] text-white sm:mt-8 text-xl tracking-wide text-center'>
        <div className='w-full max-w-4xl flex flex-col py-8 font-semibold gap-y-3'>
          <div className='flex flex-col space-y-3'>
            <p>Servicios</p>
            <p>Tarifas</p>
            <p>Contacta</p>
            <p className='py-4'>PosicionamientoWeb24</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
