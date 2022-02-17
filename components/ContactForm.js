import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import React, { useState } from 'react'


const ContactForm = () => {
  const [submittedForm, changeSubmittedForm] = useState(false)
  return (
    <div
      id='contactForm'
      className=' sm:pb-20 pt-3 w-screen relative max-w-3xl mx-auto place-self-center text-[#4B505C] '
    >
      <h1 className='text-2xl sm:text-4xl font-bold text-center pb-14'>
        Escríbenos
      </h1>
      {/*PC*/}
      <div className='hidden sm:block'>
        <Formik
          initialValues={{
            name: '',
            email: '',
            number: '',
            web: '',
            matter: '',
            message: '',
            terms: ''
          }}
          validate={valores => {
            const errores = {}

            // Name Validation
            if (!valores.name) {
              errores.name = 'Este campo es obligatorio'
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
              errores.name = 'Por favor introduce un nombre válido'
            }

            // Email Validation
            if (!valores.email) {
              errores.email = 'Este campo es obligatorio'
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                valores.email
              )
            ) {
              errores.email = 'Por favor introduce un correo válido'
            }

            // Number Validation
            if (
              !/^[0-9]{2,3}-? ?[0-9]{6,7}$/.test(valores.number) &&
              valores.number !== ''
            ) {
              errores.number = 'Por favor introduce un número válido'
            }

            // Web Validation
            if (!valores.web) {
              errores.web = 'Este campo es obligatorio'
            }

            // Matter Validation
            if (!valores.matter) {
              errores.matter = 'Este campo es obligatorio'
            }

            // Message Validation
            if (!valores.message) {
              errores.message = 'Este campo es obligatorio'
            }

            // Terms and Conditions Validation
            if (!valores.terms) {
              errores.terms = ''
            }

            return errores
          }}
          onSubmit={(valores, { resetForm }) => {
            resetForm()
            changeSubmittedForm(true)
            setTimeout(() => changeSubmittedForm(false), 5000)
          }}
        >
          {({ errors }) => (
            <Form className='formulario'>
              <div className='relative bg-white drop-shadow-md'>
                <div className='absolute grid grid-cols-1 top-20 -left-[5vw] w-2/5 p-8 pb-24 space-y-4 text-white bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] items-center justify-center'>
                  <h1 className='text-3xl my-5 font-semibold text-center '>
                    Información
                  </h1>
                  <div className='inline-flex space-x-1'>
                    <FaEnvelope className='mr-1 mt-1' />
                    <p>info@posicionamientoweb.com</p>
                  </div>
                  <div className='inline-flex space-x-1'>
                    <FaMapMarkerAlt className='mr-2 mt-1' />
                    <p>C/ Enmedio 20, Castellón, 12006, España</p>
                  </div>
                  <div className='inline-flex space-x-1'>
                    <FaPhoneAlt className='mr-1 mt-1' />
                    <p>+34 637 85 22 56</p>
                  </div>
                </div>
                <div className='w-full justify-center self-center items-center bg-white pt-20 pb-20 pl-72 pr-10 '>
                  <div className='divide-y'>
                    <div>
                      <div className='w-full h-12 rounded-lg'>
                        <Field
                          type='text'
                          id='name'
                          name='name'
                          placeholder='Nombre'
                        />
                      </div>
                      <div className='text-red-600 font-weight: 600'>
                        <ErrorMessage
                          name='name'
                          component={() => (
                            <div className='error'>{errors.name}</div>
                          )}
                        />
                      </div>
                    </div>
                    <div>
                      <div className='w-full h-12 rounded-lg'>
                        <Field
                          type='text'
                          id='email'
                          name='email'
                          placeholder='Correo'
                        />
                      </div>
                      <div className='text-red-600 font-weight: 600'>
                        <ErrorMessage
                          name='email'
                          component={() => (
                            <div className='error'>{errors.email}</div>
                          )}
                        />
                      </div>
                    </div>
                    <div>
                      <div className='w-full h-12 rounded-lg'>
                        <Field
                          type='text'
                          id='number'
                          name='number'
                          placeholder='Teléfono'
                        />
                      </div>
                      <div className='text-red-600 font-weight: 600'>
                        <ErrorMessage
                          name='number'
                          component={() => (
                            <div className='error'>{errors.number}</div>
                          )}
                        />
                      </div>
                    </div>
                    <div>
                      <div className='w-full h-12 rounded-lg'>
                        <Field
                          type='text'
                          id='web'
                          name='web'
                          placeholder='Web'
                        />
                      </div>
                      <div className='text-red-600 font-weight: 600'>
                        <ErrorMessage
                          name='web'
                          component={() => (
                            <div className='error'>{errors.web}</div>
                          )}
                        />
                      </div>
                    </div>
                    <div>
                      <div className='w-full h-12 rounded-lg'>
                        <Field
                          type='text'
                          id='matter'
                          name='matter'
                          placeholder='Asunto'
                        />
                      </div>
                      <div className='text-red-600 font-weight: 600'>
                        <ErrorMessage
                          name='matter'
                          component={() => (
                            <div className='error'>{errors.matter}</div>
                          )}
                        />
                      </div>
                    </div>
                    <div className='pb-4'>
                      <div className='w-full h-12 rounded-lg'>
                        <Field
                          type='text'
                          id='message'
                          name='message'
                          as='textarea'
                          placeholder='Deja tu mensaje'
                        />
                      </div>
                      <div className='text-red-600 font-weight: 600'>
                        <ErrorMessage
                          name='message'
                          component={() => (
                            <div className='error'>{errors.message}</div>
                          )}
                        />
                      </div>
                    </div>
                    <div>
                      <div className='justify-center text-center pt-4'>
                        <label className='w-full'>
                          <Field
                            type='checkbox'
                            id='terms'
                            name='terms'
                            value='terms'
                            className='mr-1'
                          />
                          Acepto Términos y Condiciones
                        </label>
                        <div className='text-red-600 font-weight: 600'>
                          <ErrorMessage
                            name='terms'
                            component={() => (
                              <div className='error'>{errors.terms}</div>
                            )}
                          />
                        </div>
                      </div>
                      <div className='text-center px-3 justify-center md:text-4 lg:text-base xl:text-xl cursor-pointers tracking-wider'>
                        <nav className='w-full h-12 mt-8 bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white rounded-md'>
                          <button
                            className='w-full h-full font-semibold inline-block align-middle'
                            type='contratar'
                          >
                            ENVIAR
                          </button>
                        </nav>
                        {submittedForm && (
                        <p className='exito'>¡Formulario enviado con éxito!</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      {/*Mobile*/}
      <div className='sm:hidden'>
        <div className='justify-center mx-4 self-center items-center bg-white py-10'>
          <div className='divide-y'>
            <div className='w-full h-14 rounded-lg my-3 '>
              <p className='pl-3 w-full h-full'>Nombre</p>
            </div>
            <div className='w-full h-14 rounded-lg my-3'>
              <p className='pl-3 w-full h-full'>Correo Electrónico</p>
            </div>
            <div className='w-full h-14 rounded-lg my-3'>
              <p className='pl-3 w-full h-full'>Teléfono</p>
            </div>
            <div className='w-full h-14 rounded-lg my-3'>
              <p className='pl-3 w-full h-full'>Tu Página Web</p>
            </div>
            <div className='w-full h-14 rounded-lg my-3'>
              <p className='pl-3 w-full h-full'>Asunto</p>
            </div>
            <div className='w-full h-14 rounded-lg my-3'>
              <p className='pl-3 w-full h-full'>Deja tu mensaje</p>
            </div>
            <div className='justify-center text-center'>
              <p className='w-full'>Acepto los Términos y Condiciones</p>
              <div className='text-center p-3 justify-center md:text-4 lg:text-base xl:text-xl cursor-pointers tracking-wider'>
                <nav className='w-full h-12 mt-8 bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white rounded-md'>
                  <button
                    className='w-full h-full font-semibold inline-block align-middle'
                    type='contratar'
                  >
                    ENVIAR
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 top-20 w-screen p-8 space-y-4 text-white bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] items-center justify-center'>
          <h1 className='text-3xl my-5 font-semibold text-center'>
            Información
          </h1>
          <div className='inline-flex space-x-1'>
            <FaEnvelope className='mr-1 mt-1' />
            <p>info@posicionamientoweb.com</p>
          </div>
          <div className='inline-flex space-x-1'>
            <FaMapMarkerAlt className='mr-2 mt-1' />
            <p>C/ Enmedio 20, Castellón, 12006, España</p>
          </div>
          <div className='inline-flex space-x-1'>
            <FaPhoneAlt className='mr-1 mt-1' />
            <p>+34 637 85 22 56</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
