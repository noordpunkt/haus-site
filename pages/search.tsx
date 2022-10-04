import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Footer from '../components/footer'
import HeaderMini from '../components/headermini'
import Header from '../components/header'

//Importing icons
import { HomeIcon, UsersIcon, BuildingOfficeIcon, TagIcon, MapPinIcon, ArrowSmallRightIcon } from "@heroicons/react/24/outline";

//Importing date formatter
import dayjs from 'dayjs';

function search() {

  const router = useRouter();

  //ES6 De-structing  (the information passed by router.query)

  const {location, startDate, endDate, numberOfGuests} = router.query;

  // Start and End date formatted
  const dayjs = require("dayjs");
  const now = dayjs(startDate).format("dddd D")
  const then = dayjs(endDate).format("dddd D")

 

  return (
    <div className='h-screen'>

    <Header
    placeholder={`${location} | ${now} to ${then}`}
    />

    <main className=''>
      <section className='px-8 py-8'>

        <div className='flex flex-row items-center'>
        
        <p className='font-light text-md'>{now}</p>
        <ArrowSmallRightIcon className='h-3 px-1 font-bold text-gray-600'/>
        <p className='font-light text-md'>{then}</p>

        </div>

        <div className='flex flex-row items-center'>

        <MapPinIcon className='h-6 pr-1 font-bold text-gray-600'/>
        <p className='font-bold text-3xl'>{location}</p>
        </div>


        <div>
          <p className='button'>Cancellation flexibility</p>
          <p className='button'>Type of place</p>
          <p className='button'>Price</p>
          <p className='button'>Rooms and Beds</p>
          <p className='button'>More filters</p>
          
        </div>
      </section>

    </main>

    <Footer/>
    </div>
  )
}

export default search