import Card from '../components/common/Card.js'

const PymesTariffs = () => {
  return (
    <div
      id='pymestariffs'
      className='pb-8 pt-3 sm:pb-20 w-screen relative max-w-xs sm:max-w-7xl mx-auto place-self-center text-[#4B505C]'
    >
      <h1 className='text-2xl sm:text-4xl font-bold pb-14 text-center'>
        Tarifas Para Pymes
      </h1>
      <div className='sm:hidden'>
        <div className='flex flex-cols-2 space-x-4 place-items-center justify-center'>
          <Card
            price={'108,90€'}
            title={'Mensual'}
            subtitle={'Informe Mensual de Posicionamiento'}
            details={''}
            details2={''}
            buttonText={'CONTRATAR'}
            extraClassNames='bg-white h-60 w-40'
            priceProperties='text-[#FAAC78]'
            buttonProperties='bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white'
          />
          <Card
            price={'169,40€'}
            title={'Mensual'}
            subtitle={'Seguimiento de Tráfico'}
            details={'Creación Básica de Contenido'}
            details2={'Control de Rastreo'}
            buttonText={'CONTRATAR'}
            extraClassNames='bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white h-60 w-40'
            priceProperties='text-white'
            buttonProperties='bg-white text-[#FAAC78]'
          />
        </div>
      </div>
      <div className='hidden sm:block'>
        <div className='flex flex-cols-2 space-x-20 place-items-center justify-center'>
          <Card
            price={'108,90€'}
            title={'Mensual'}
            subtitle={'Informe Mensual de Posicionamiento'}
            details={''}
            details2={''}
            buttonText={'CONTRATAR'}
            extraClassNames='bg-white h-80 w-72'
            priceProperties='text-[#FAAC78]'
            buttonProperties='bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white'
          />
          <Card
            price={'169,40€'}
            title={'Mensual'}
            subtitle={'Seguimiento de Tráfico'}
            details={'Creación Básica de Contenido'}
            details2={'Control de Rastreo'}
            buttonText={'CONTRATAR'}
            extraClassNames='bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white h-80 w-72'
            priceProperties='text-white'
            buttonProperties='bg-white text-[#FAAC78]'
          />
        </div>
      </div>
    </div>
  )
}

export default PymesTariffs
