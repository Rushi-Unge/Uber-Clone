import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { IoIosArrowDown } from 'react-icons/io';
import { FaRegUser } from "react-icons/fa";
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        duration: 0.5,
        ease: 'power3.inOut',
        padding: 24
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: 'power3.in',
       
      });
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        duration: 0.5,
        ease: 'power3.inOut',
        padding: 0
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
        duration: 0.5,
      });
    }
  }, [panelOpen]);

  return (
    <section className="h-screen relative overflow-hidden">
      {/* Uber Logo */}
      <img
        className="w-16 absolute left-5 top-7"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber-logo"
      />

      {/* Map */}
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://i0.wp.com/www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png?fit=493%2C383&ssl=1"
          alt="map"
        />
      </div>

      {/* Find Trip */}
      <div className="flex flex-col justify-end absolute top-0 w-full h-screen">
        {/* First Div */}
        <div className="h-[30%] p-5 bg-white relative">
          {/* Arrow Icon */}
          <h5
            ref={panelCloseRef}
            className="h-6 w-6 opacity-0 text-2xl text-gray-500 absolute right-4 top-6 cursor-pointer"
            onClick={() => setPanelOpen(false)}
          >
            <IoIosArrowDown />
          </h5>

          <h4 className="text-3xl font-semibold">Find a trip</h4>
          <form onSubmit={submitHandler}>
            {/* Line */}
            <div className="line absolute h-16 w-1 top-[40%] left-8 bg-gray-400 rounded-full"></div>

            {/* Pickup Location Input */}
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-slate-200 mt-2 w-full shadow-lg text-lg px-8 py-2 rounded-lg"
              type="text"
              placeholder="Add a pick-up location"
            />

            {/* Destination Location Input */}
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-slate-200 mt-2 w-full shadow-lg text-lg px-8 py-2 rounded-lg"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>

        {/* Location Suggestion */}
        <div
          ref={panelRef}
          className="overflow-hidden bg-white h-[0%]">
            <LocationSearchPanel vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel} />
          </div>
      </div>

{/* Vehicle Selection */}
      <div className='fixed hidden w-full z-10 bottom-0 bg-white py-8 px-2'>
        <h3 className='text-2xl font-semibold mb-3'>Choose a vehicle</h3>
   <div className='flex border-2 border-black rounded-xl w-full items-center justify-between bg-slate-100 p-1 mb-3'>
<img className='h-24' src="https://attic.sh/kboy7kzto2fs18ssjuw0z0fxnf89" alt="car png" />
<div className='w-1/2'>
  <h4 className='flex gap-2 items-center font-medium text-sm'>UberGo <FaRegUser/>  4</h4>
  <h5 className='text-xs font-medium'>5 mins away</h5>
  <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
</div>
<h2 className='text-xl font-semibold'>₹150.20</h2>
   </div>

   <div className='flex border-2 border-black rounded-xl w-full items-center justify-between bg-slate-100 p-1 mb-3'>
<img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="bike png" />
<div className='w-1/2'>
  <h4 className='flex gap-2 items-center font-medium text-sm'>Moto <FaRegUser/>  1</h4>
  <h5 className='text-xs font-medium'>5 mins away</h5>
  <p className='font-normal text-xs text-gray-600'>Affordable, Motarcycle rides</p>
</div>
<h2 className='text-xl font-semibold'>₹100.20</h2>
   </div>

   <div className='flex border-2 border-black rounded-xl w-full items-center justify-between bg-slate-100 p-1 mb-3'>
<img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="bike png" />
<div className='w-1/2'>
  <h4 className='flex gap-2 items-center font-medium text-sm'>Moto <FaRegUser/>  3</h4>
  <h5 className='text-xs font-medium'>6 mins away</h5>
  <p className='font-normal text-xs text-gray-600'>Affordable, Auto rides</p>
</div>
<h2 className='text-xl font-semibold'>₹180.20</h2>
   </div>
      </div>
    </section>
  );
};

export default Home;
