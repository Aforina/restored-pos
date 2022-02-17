import Image from 'next/image'
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Hero = () => {
  const [submittedForm, changeSubmittedForm] = useState(false)
  return (
    <div className='id=hero'>
      <div className='hidden sm:block h-screen w-screen relative overflow-y-hidden'>
        <div className=' bg-gray-400 bg-opacity-50 absolute top-0 h-screen z-10 w-screen' />
        <Image src='/hero-cover.jpg' layout='fill' objectFit='cover' />
        <div className='flex flex-col w-screen h-screen absolute z-20 justify-center self-center items-center'>
          <Formik
            initialValues={{
              webHero: '',
              emailHero: '',
              terms: ''
            }}
          
          validate={values => {
            const errors = {}

            // Web Validation
            if (!values.webHero) {
              errors.webHero = 'Campo obligatorio'
            }
            
            // Email Validation
            if (!values.emailHero) {
              errors.emailHero = 'Campo Obligatorio'
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                values.emailHero
              )
            ) {
              errors.emailHero = 'Por favor, introduce un email válido'
            }

            return errors
          }}
          onSubmit={(values, { resetForm }) => {
            resetForm()
            changeSubmittedForm(true)
            setTimeout(() => changeSubmittedForm(false), 5000)
          }}
          >
            {({errors}) => (
              <Form className='headerForm'>
                <div className='bg-white bg-opacity-25 py-20 px-72'>
                  <h1 className='text-white text-6xl font-semibold mb-10 text-center'>
                    ANÁLISIS SEO
                  </h1>
                  <div className='grid grid-rows-2 gap-y-4 px-12'>
                    <div className='bg-white h-12 text-center text-gray-300 grid content-center'>
                      <Field 
                        type='text'
                        id='webHero'
                        name='webHero'
                        placeholder='www.ejemplo.com'
                        className='text-center'
                      />
                      
                    </div>
                    <div className='bg-white h-12 text-center text-gray-300 grid content-center'>
                      <Field 
                          type='text'
                          id='emailHero'
                          name='emailHero'
                          placeholder='email@gmail.com'
                          className='text-center'
                        />
                    </div>
                    <p className='text-white text-center text-lg'>
                      <Field
                          type='checkbox'
                          id='terms'
                          name='terms'
                          value='terms'
                          className='mr-2'
                        />
                      Acepto los Términos y Condiciones
                    </p>
                    <nav className='w-full h-12 bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white rounded-md'>
                      <button className='w-full h-full font-semibold inline-block align-middle cursor-pointer'>
                        EMPIEZA AHORA
                      </button>
                    </nav>
                  </div>
                  {submittedForm && (
                    <p className='exit'>¡Formulario enviado con éxito!</p>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className='sm:hidden h-screen w-screen relative overflow-y-hidden'>
        <div className=' bg-gray-400 bg-opacity-50 absolute top-0 h-screen z-10 w-screen' />
        <Image src='/hero-cover.jpg' layout='fill' objectFit='cover' />
        <div className='flex flex-col w-screen h-screen absolute z-20 justify-center self-center items-center'>
          <div className='bg-white bg-opacity-25 py-4'>
            <h1 className='text-white text-3xl font-semibold mb-10 text-center'>
              ANÁLISIS SEO
            </h1>
            <div className='grid grid-rows-2 gap-y-4 px-12'>
              <div className='bg-white h-12 text-center text-gray-300 grid content-center'>
                www.ejemplo.com
              </div>
              <div className='bg-white h-12 text-center text-gray-300 grid content-center'>
                email@gmail.com
              </div>
              <p className='text-white text-center text-lg'>
                Acepto los Términos y Condiciones
              </p>
              <nav className='w-full h-12 bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white rounded-md'>
                <button className='w-full h-full font-semibold inline-block align-middle '>
                  EMPIEZA AHORA
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
