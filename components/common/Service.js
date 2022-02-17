import Image from 'next/image'

const Service = ({ title, image, description }) => {
  return (
    <div className='flex flex-row space-x-4 mb-4'>
      <div>
        <Image src={image} layout='fixed' width={80} height={80} />
      </div>
      <div className='place-items-center'>
        <p className='font-medium'>{title}</p>
        <div>{description}</div>
      </div>
    </div>
  )
}

export default Service
