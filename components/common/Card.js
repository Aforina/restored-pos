const Card = ({
  price,
  title,
  subtitle,
  details,
  details2,
  buttonText,
  extraClassNames,
  priceProperties,
  buttonProperties
}) => {
  return (
    <div
      className={`drop-shadow-md hover:drop-shadow-xl relative ${extraClassNames}`}
    >
      <div className='text-center p-2 pt-4 sm:p-8 text-xs sm:text-base'>
        <h1 className={`text-3xl sm:text-4xl font-semibold ${priceProperties}`}>
          {price}
        </h1>
        <p className='font-medium mb-4'>{title}</p>
        <div className='space-y-2'>
          <p className='font-normal'>{subtitle}</p>
          <p className='font-normal'>{details}</p>
          <p className='font-normal'>{details2}</p>
        </div>
        <nav
          className={`absolute w-11/12 sm:w-3/4 h-9 sm:h-12 mt-8 rounded-md bottom-4 sm:bottom-8 tracking-wide ${buttonProperties}`}
        >
          <button className='w-full h-full font-semibold inline-block align-middle'>
            {buttonText}
          </button>
        </nav>
      </div>
    </div>
  )
}

export default Card
