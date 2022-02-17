import Head from 'next/head'
import React, {useState, useRef} from 'react'
// import { useState, useEffect, useRef } from 'react'

import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Services from '../components/Services'
import SelfEmployedTariffs from '../components/SelfEmployedTariffs'
import PymesTariffs from '../components/PymesTariffs'
import BusinessTariffs from '../components/BusinessTariffs'
import ContactForm from '../components/ContactForm'
import myComponent from '../components/Map'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='min-h-screen min-w-screen overflow-hidden bg-[#F6F6F6] open-sans'>
      <Head>
        <title>Posicionamiento Web 24</title>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
      </Head>
      <div className='relative w-screen h-screen overflow-y-hidden'>
        <Hero />
        <Nav />
      </div>
      <Services />
      <SelfEmployedTariffs />
      <PymesTariffs />
      <BusinessTariffs />
      <ContactForm />
      {/* <myComponent /> */}
      <Footer />
    </div>
  )
}
