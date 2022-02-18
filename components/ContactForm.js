import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'


const FormSchema = Yup.object().shape({
  name: Yup.string()
    .required('Campo Obligatorio'),
  email: Yup.string()
    .email('Por favor introduce un correo válido')
    .required('Campo Obligatorio'),
  number: Yup.number(),
  web: Yup.string().required('Campo Obligatorio'),
  matter: Yup.string().required('Campo Obligatorio'),
  message: Yup.string().required('Campo Obligatorio'),
  terms: Yup.boolean().oneOf([true], 'Por favor acepta los términos y condiciones')
})

const ContactForm = ({refProp}) => {
  const [submittedForm, changeSubmittedForm] = useState(false)
  return (
    <div
      id='contactForm'
      ref={refProp}
      className=' sm:pb-20 pt-3 w-screen relative max-w-4xl mx-auto place-self-center text-[#4B505C]'
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
          validationSchema = {FormSchema}
          onSubmit={( {values, resetForm }) => {
            resetForm()
            changeSubmittedForm(true)
            setTimeout(() => changeSubmittedForm(false), 5000)
          }}
        >
          {({ values, errors, handleChange, setFieldValue }) => (
            <Form className='formulario'>
              <div className='relative bg-white drop-shadow-md'>
                <div className='absolute grid grid-cols-1 top-20 -left-[5vw] w-2/5 p-8 pb-44 space-y-4 text-white bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] items-center justify-center'>
                  <h1 className='text-3xl my-5 font-semibold text-center '>
                    Información
                  </h1>
                  <div className='inline-flex space-x-1 text-lg'>
                    <FaEnvelope className='mr-1 mt-2' />
                    <p>info@posicionamientoweb24.com</p>
                  </div>
                  <div className='inline-flex space-x-1 text-lg'>
                    <FaMapMarkerAlt className='mr-2 mt-1' />
                    <p>C/ Herrero 24, Castellón, 12005, España</p>
                  </div>
                  <div className='inline-flex space-x-1 text-lg'>
                    <FaPhoneAlt className='mr-1 mt-1' />
                    <p>+34 633 79 82 55</p>
                  </div>
                </div>
                <div className='w-full justify-center self-center items-center bg-white pt-20 pb-20 pl-80 pr-10 text-lg'>
                  <div className='divide-y space-y-2'>
                    <div>
                      <div className='w-full h-12 rounded-lg'>
                        <Field
                          type='text'
                          id='name'
                          name='name'
                          onChange={handleChange}
                          placeholder='Nombre'
                          className='primaryInput w-full h-full outline-0'
                        />
                      </div>
                    </div>
                    <div>
                      <div className='text-red-600 font-weight: 600 pb-1'>
                        <ErrorMessage
                          name='name'
                          component={() => (
                            <div className='error'>{errors.name}</div>
                          )}
                        />
                      </div>
                      <div className='w-full h-12 rounded-lg'>
                        <Field
                          type='text'
                          id='email'
                          name='email'
                          onChange={handleChange}
                          placeholder='Correo'
                          className='primaryInput w-full h-full outline-0'
                        />
                      </div>
                    </div>
                    <div>
                      <div className='text-red-600 font-weight: 600 pb-1'>
                        <ErrorMessage
                          name='email'
                          component={() => (
                            <div className='error'>{errors.email}</div>
                          )}
                        />
                      </div>
                      <div className='w-full h-12 rounded-lg'>
                        <Field
                          type='text'
                          id='number'
                          name='number'
                          onChange={handleChange}
                          placeholder='Teléfono'
                          className='primaryInput w-full h-full outline-0'
                        />
                      </div>
                    </div>
                    <div>
                      <div className='text-red-600 font-weight: 600 pb-1'>
                        <ErrorMessage
                          name='number'
                          component={() => (
                            <div className='error'>{errors.number}</div>
                          )}
                        />
                      </div>
                      <div className='w-full h-12 rounded-lg'>
                        <Field
                          type='text'
                          id='web'
                          name='web'
                          onChange={handleChange}
                          placeholder='Web'
                          className='primaryInput w-full h-full outline-0'
                        />
                      </div>
                    </div>
                    <div>
                      <div className='text-red-600 font-weight: 600 pb-1'>
                        <ErrorMessage
                          name='web'
                          component={() => (
                            <div className='error'>{errors.web}</div>
                          )}
                        />
                      </div>
                      <div className='w-full h-12 rounded-lg'>
                        <Field
                          type='text'
                          id='matter'
                          name='matter'
                          onChange={handleChange}
                          placeholder='Asunto'
                          className='primaryInput w-full h-full outline-0'
                        />
                      </div>
                    </div>
                    <div className='pb-4'>
                      <div className='text-red-600 font-weight: 600 pb-1'>
                        <ErrorMessage
                          name='matter'
                          component={() => (
                            <div className='error'>{errors.matter}</div>
                          )}
                        />
                      </div>
                      <div className='w-full h-12 rounded-lg'>
                        <Field
                          type='text'
                          id='message'
                          name='message'
                          as='textarea'
                          onChange={handleChange}
                          placeholder='Deja tu mensaje'
                          className='primaryInput w-full h-full outline-0'
                        />
                      </div>
                    </div>
                    <div>
                      <div className='text-red-600 font-weight: 600 pb-1'>
                        <ErrorMessage
                          name='message'
                          component={() => (
                            <div className='error'>{errors.message}</div>
                          )}
                        />
                      </div>
                      <div className='justify-center text-center pt-4'>
                        <label className='w-full'>
                          <Field
                            type='checkbox'
                            onChange={() => {
                              if (values.terms) {
                                setFieldValue('terms', false)
                              }
                              if (!values.terms) {
                                setFieldValue('terms', true)
                              }
                            }}
                            id='terms'
                            checked={values.terms}
                            className='w-4 h-4 mr-3'
                            name='terms'
                            value='terms'
                          />
                          Acepto los Términos y Condiciones
                        </label>
                        <div className='text-red-600 font-weight: 600 pb-1'>
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
                          <button className='w-full h-full font-semibold inline-block align-middle'>
                              <input type='submit' value='ENVIAR' className='cursor-pointer font-semibold'/>
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
        <div className='justify-center mx-4 self-center items-center drop-shadow-md bg-white pb-10 pt-4'>
          <div className='divide-y space-y-2'>
            <form>
              <label className='w-full h-14 rounded-lg mb-3 '>
                <input type='text' placeholder='Nombre' className='pl-3 w-full h-full outline-0 pb-6' onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Nombre'} />
              </label>
            </form>
            <form>
              <label className='w-full h-14 rounded-lg mb-3 '>
                <input type='text' placeholder='Correo Electrónico' className='pl-3 w-full h-full outline-0 pb-6' onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Correo Electrónico'} />
              </label>
            </form>
            <form>
              <label className='w-full h-14 rounded-lg mb-3 '>
                <input type='text' placeholder='Teléfono' className='pl-3 w-full h-full outline-0 pb-6' onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Teléfono'} />
              </label>
            </form>
            <form>
              <label className='w-full h-14 rounded-lg mb-3 '>
                <input type='text' placeholder='Tu Página Web' className='pl-3 w-full h-full outline-0 pb-6' onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Tu Página Web'} />
              </label>
            </form>
            <form>
              <label className='w-full h-14 rounded-lg mb-3 '>
                <input type='text' placeholder='Asunto' className='pl-3 w-full h-full outline-0 pb-6' onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Asunto'} />
              </label>
            </form>
            <form>
              <label className='w-full h-28 rounded-lg mb-3 '>
                <input type='text' placeholder='Deja tu mensaje' className='pl-3 w-full h-full outline-0 pb-6' onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Deja tu mensaje'} />
              </label>
            </form>
            <form>
              <div className='justify-center text-center mt-4'>
                <p className= 'text-center'>
                  <input type='checkbox' className='mr-1'/>
                  Acepto los Términos y Condiciones
                </p>
                <div className='text-center px-3 justify-center md:text-4 lg:text-base xl:text-xl cursor-pointers tracking-wider'>
                  <nav className='w-full h-12 mt-8 bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white rounded-md'>
                    <button
                      className='w-full h-full font-semibold inline-block align-middle'
                      type='submit'
                    >
                      ENVIAR
                    </button>
                  </nav>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='grid grid-cols-1 w-screen pt-4 px-8 pb-12 space-y-6 text-white bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] items-center justify-center'>
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
