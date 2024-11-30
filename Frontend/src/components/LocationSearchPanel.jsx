import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

const LocationSearchPanel = () => {

    // sample array of location
    const locations = [
        "24B, Near Nagpur Baypass, Padmavati Nagar, Jalna 431213",
        "24B, Near Nagpur Baypass, Padmavati Nagar, Pune 431213",
        "24B, Near Nagpur Baypass, Padmavati Nagar, Mumbai 431213"
    ]

  return (
    <section >
   {/* Sample Data */}
   <div className='flex border-2 p-2 rounded-xl border-slate-500 active:border-black justify-center items-center float-start gap-5 mb-5'>
    <FaLocationDot size={24} />
    <h4>24B, Near Nagpur Baypass, Padmavati Nagar, Jalna 431213</h4>
   </div>
   <div className='flex border-2 p-2 rounded-xl border-slate-500 active:border-black justify-center items-center float-start gap-5 mb-5'>
    <FaLocationDot size={24} />
    <h4>24B, Near Nagpur Baypass, Padmavati Nagar, Jalna 431213</h4>
   </div>
   <div className='flex border-2 p-2 rounded-xl border-slate-500 active:border-black justify-center items-center float-start gap-5 mb-5'>
    <FaLocationDot size={24} />
    <h4>24B, Near Nagpur Baypass, Padmavati Nagar, Jalna 431213</h4>
   </div>
   <div className='flex border-2 p-2 rounded-xl border-slate-500 active:border-black justify-center items-center float-start gap-5 mb-5'>
    <FaLocationDot size={24} />
    <h4>24B, Near Nagpur Baypass, Padmavati Nagar, Jalna 431213</h4>
   </div>
   <div className='flex border-2 p-2 rounded-xl border-slate-500 active:border-black justify-center items-center float-start gap-5 mb-5'>
    <FaLocationDot size={24} />
    <h4>24B, Near Nagpur Baypass, Padmavati Nagar, Jalna 431213</h4>
   </div>
    </section>
  )
}

export default LocationSearchPanel
