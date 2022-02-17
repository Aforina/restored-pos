import Card from '../components/common/Card.js'

const SelfEmployedTariffs = () => {
  return (
    <div
      id='selfemployedtariffs'
      className='pb-8 sm:pb-20 w-screen relative max-w-xs sm:max-w-7xl mx-auto place-self-center text-[#4B505C]'
    >
      <h1 className='text-2xl sm:text-4xl font-bold pb-14 text-center'>
        Tarifas Para Autónomos
      </h1>
      {/*pc*/}
      <div className='hidden sm:block'>
        <div className='grid grid-cols-4 gap-10'>
          <Card
            price={'35€'}
            title={'Semanal'}
            subtitle={'Informe Mensual de Posicionamiento'}
            details={''}
            details2={''}
            buttonText={'CONTRATAR'}
            extraClassNames='bg-white h-80 w-72'
            priceProperties='text-[#FAAC78]'
            buttonProperties='bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white'
          />
          <Card
            price={'42,35€'}
            title={'Semanal'}
            subtitle={'Informe Mensual de Posicionamiento'}
            details={'Seguimiento de Tráfico'}
            details2={''}
            buttonText={'CONTRATAR'}
            extraClassNames='bg-white h-80 w-72'
            priceProperties='text-[#FAAC78]'
            buttonProperties='bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white'
          />
          <Card
            price={'55€'}
            title={'Semanal'}
            subtitle={'Recomendaciones de Contenido'}
            details={'Control de Rastreo'}
            details2={''}
            buttonText={'CONTRATAR'}
            extraClassNames='bg-white h-80 w-72'
            priceProperties='text-[#FAAC78]'
            buttonProperties='bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white'
          />
          <Card
            price={'60,50€'}
            title={'Semanal'}
            subtitle={'Seguimiento de Tráfico'}
            details={'Creación Básica de Contenido'}
            details2={''}
            buttonText={'CONTRATAR'}
            extraClassNames='bg-white h-80 w-72'
            priceProperties='text-[#FAAC78]'
            buttonProperties='bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white'
          />
        </div>
        <div className='grid grid-cols-3 mt-10 content-center gap-10 max-w-5xl mx-auto'>
          <Card
            price={'66,55€'}
            title={'Semanal'}
            subtitle={'Control de Rastreo'}
            details={'Creación Básica de Contenido'}
            details2={''}
            buttonText={'CONTRATAR'}
            extraClassNames='bg-white h-80 w-72'
            priceProperties='text-[#FAAC78]'
            buttonProperties='bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white'
          />
          <Card
            price={'90€'}
            title={'Semanal'}
            subtitle={'Informe Mensual de Posicionamiento'}
            details={''}
            details2={''}
            buttonText={'CONTRATAR'}
            extraClassNames='bg-white h-80 w-72'
            priceProperties='text-[#FAAC78]'
            buttonProperties='bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white'
          />
          <Card
            price={'102,85€'}
            title={'Semanal'}
            subtitle={'Seguimiento de Tráfico'}
            details={''}
            details2={''}
            buttonText={'CONTRATAR'}
            extraClassNames='bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white h-80 w-72'
            priceProperties='text-white'
            buttonProperties='bg-white text-[#FAAC78]'
          />
        </div>
      </div>
      {/*mobile*/}
      <div className='sm:hidden'>
        <div className='grid grid-cols-2 gap-6'>
          <Card
            price={'35€'}
            title={'Semanal'}
            subtitle={'Informe Mensual de Posicionamiento'}
            details={''}
            details2={''}
            buttonText={'CONTRATAR'}
            extraClassNames='bg-white h-60 w-40'
            priceProperties='text-[#FAAC78]'
            buttonProperties='bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white'
          />
          <Card
            price={'42,35€'}
            title={'Semanal'}
            subtitle={'Informe Mensual de Posicionamiento'}
            details={'Seguimiento de Tráfico'}
            details2={''}
            buttonText={'CONTRATAR'}
            extraClassNames='bg-white h-60 w-40'
            priceProperties='text-[#FAAC78]'
            buttonProperties='bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white'
          />
          <Card
            price={'55€'}
            title={'Semanal'}
            subtitle={'Recomendaciones de Contenido'}
            details={'Control de Rastreo'}
            details2={''}
            buttonText={'CONTRATAR'}
            extraClassNames='bg-white h-60 w-40'
            priceProperties='text-[#FAAC78]'
            buttonProperties='bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white'
          />
          <Card
            price={'60,50€'}
            title={'Semanal'}
            subtitle={'Seguimiento de Tráfico'}
            details={'Creación Básica de Contenido'}
            details2={''}
            buttonText={'CONTRATAR'}
            extraClassNames='bg-white h-60 w-40'
            priceProperties='text-[#FAAC78]'
            buttonProperties='bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white'
          />
          <Card
            price={'66,55€'}
            title={'Semanal'}
            subtitle={'Control de Rastreo'}
            details={'Creación Básica de Contenido'}
            details2={''}
            buttonText={'CONTRATAR'}
            extraClassNames='bg-white h-60 w-40'
            priceProperties='text-[#FAAC78]'
            buttonProperties='bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white'
          />
          <Card
            price={'90€'}
            title={'Semanal'}
            subtitle={'Informe Mensual de Posicionamiento'}
            details={''}
            details2={''}
            buttonText={'CONTRATAR'}
            extraClassNames='bg-white h-60 w-40'
            priceProperties='text-[#FAAC78]'
            buttonProperties='bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white'
          />
          <Card
            price={'102,85€'}
            title={'Semanal'}
            subtitle={'Seguimiento de Tráfico'}
            details={''}
            details2={''}
            buttonText={'CONTRATAR'}
            extraClassNames='bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white h-60 w-40'
            priceProperties='text-white'
            buttonProperties='bg-white text-[#FAAC78]'
          />
        </div>
      </div>
    </div>
  )
}

export default SelfEmployedTariffs
