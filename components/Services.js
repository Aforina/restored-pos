import Service from './common/Service'

const Services = () => {
  return (
    <div
      id='services'
      className='w-screen pb-8 sm:pb-20 relative max-w-xs sm:max-w-7xl mx-auto place-self-center text-[#4B505C]'
    >
      <h1 className='py-14 text-2xl sm:text-4xl font-bold text-center'>
        Nuestros Servicios
      </h1>
      {/*mobile*/}
      <div className='sm:hidden grid grid-cols-1 text-sm'>
        <div className='flex flex-cols-1 space-x-4 mb-8'>
          <Service
            title={'Informe Mensual de Posicionamiento'}
            image={'/informe_mensual_posicionamiento_edit.png'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, velit sit amet molestie tincidunt, felis augue semper ante, id vestibulum purus sem vel urna. In sit amet sagittis libero.'
            }
          />
        </div>
        <div className='flex flex-cols-1 space-x-4 mb-8'>
          <Service
            title={'Seguimiento de Tráfico'}
            image={'/seguimiento_de_trafico_edit.png'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, velit sit amet molestie tincidunt, felis augue semper ante, id vestibulum purus sem vel urna. In sit amet sagittis libero.'
            }
          />
        </div>
        <div className='flex flex-cols-1 space-x-4 mb-8'>
          <Service
            title={'Recomendaciones de Contenido'}
            image={'/recomendaciones_de_contenido_edit.png'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, velit sit amet molestie tincidunt, felis augue semper ante, id vestibulum purus sem vel urna. In sit amet sagittis libero.'
            }
          />
        </div>
        <div className='flex flex-cols-1 space-x-4 mb-8'>
          <Service
            title={'Control de Rastreo'}
            image={'/control_de_rastreo_edit.png'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, velit sit amet molestie tincidunt, felis augue semper ante, id vestibulum purus sem vel urna. In sit amet sagittis libero.'
            }
          />
        </div>
        <div className='flex flex-cols-1 space-x-4 mb-8'>
          <Service
            title={'Creación Básica de Contenidos'}
            image={'/creacion_basica_contenido_edit.png'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, velit sit amet molestie tincidunt, felis augue semper ante, id vestibulum purus sem vel urna. In sit amet sagittis libero.'
            }
          />
        </div>
      </div>
      {/*pc*/}
      <div className='hidden sm:block'>
        <div className='grid grid-cols-2 gap-2 text-base'>
          <div className='flex flex-cols-2 space-x-10 mr-16 mb-8'>
            <Service
              title={'Informe Mensual de Posicionamiento'}
              image={'/informe_mensual_posicionamiento_edit.png'}
              description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, velit sit amet molestie tincidunt, felis augue semper ante, id vestibulum purus sem vel urna. In sit amet sagittis libero.'
              }
            />
          </div>
          <div className='flex flex-cols-2 space-x-10 mr-16 mb-8'>
            <Service
              title={'Seguimiento de Tráfico'}
              image={'/seguimiento_de_trafico_edit.png'}
              description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, velit sit amet molestie tincidunt, felis augue semper ante, id vestibulum purus sem vel urna. In sit amet sagittis libero.'
              }
            />
          </div>
          <div className='flex flex-cols-2 space-x-10 mr-16 mb-8'>
            <Service
              title={'Recomendaciones de Contenido'}
              image={'/recomendaciones_de_contenido_edit.png'}
              description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, velit sit amet molestie tincidunt, felis augue semper ante, id vestibulum purus sem vel urna. In sit amet sagittis libero.'
              }
            />
          </div>
          <div className='flex flex-cols-2 space-x-10 mr-16 mb-8'>
            <Service
              title={'Control de Rastreo'}
              image={'/control_de_rastreo_edit.png'}
              description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, velit sit amet molestie tincidunt, felis augue semper ante, id vestibulum purus sem vel urna. In sit amet sagittis libero.'
              }
            />
          </div>
          <div>
            <Service
              title={'Creación Básica de Contenidos'}
              image={'/creacion_basica_contenido_edit.png'}
              description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, velit sit amet molestie tincidunt, felis augue semper ante, id vestibulum purus sem vel urna. In sit amet sagittis libero.'
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
