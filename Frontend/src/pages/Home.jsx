import React, { useState, useRef} from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel.jsx'
import VehicalPanel from '../components/VehicalPanel.jsx';
import ConfirmRide from '../components/ConfirmRide.jsx';
import LookingForDriver from '../components/LookingForDriver.jsx';
import WaitingForDriver from '../components/WaitingForDriver.jsx';

function Home()
{
  const [pickup, setPickup] = useState(''); // Hook for Pick-Up Location
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const vehiclePanelRef = useRef()
  const [ confirmRidePanel, setConfirmRidePanel ] = useState(false)
  const confirmRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)

  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)

  useGSAP(() => {
    if(panelOpen) {
      gsap.to(panelRef.current, {
        height : '70%'
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    }
    else{
      gsap.to(panelRef.current, {
        height : '0%'
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])

  useGSAP(() => {
    if(vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)"
      })

    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)"
      })
    }
  }, [vehiclePanel])
  
  useGSAP(() => {
    if(confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(0)"
      })

    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(100%)"
      })
    }
  }, [confirmRidePanel])

  useGSAP(() => {
    if(vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)"
      })

    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)"
      })
    }
  }, [vehicleFound])

  useGSAP(() => {
    if(waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)"
      })

    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)"
      })
    }
  }, [waitingForDriver])




  

  const submitHandler = async (e) => {
    e.preventDefault();
    
  }

  return (
    <div className='h-screen relative overflow-hidden'> 
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className='h-screen w-screen'>
        {/* image for temporary use  */}
        <img className='h-full w-full object-cover' src="https://i.pinimg.com/originals/6b/f2/3a/6bf23a4ae46949524a06c20b8f2c2c77.png" alt="" />
      </div>

      <div className='flex flex-col justify-end h-screen absolute top-0 w-full '>
        <div className='h-[30%] bg-white p-6 '>
        <h5 ref={panelCloseRef} 
          onClick={() => {
            setPanelOpen(false)
          }} 
          className='absolute opacity-0 right-6 top-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
        </h5>

          <h4 className='text-3xl font-semibold mb-5'>Find a Trip</h4>
          <form onSubmit={(e) => {submitHandler(e)}}>
            <input
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mb-3"
              type="text"
              placeholder="Choose your Pick-Up Location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              onClick={() => {
                setPanelOpen(true)
              }}
            />
            <input
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full"
              type="text"
              placeholder="Choose your Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onClick={() => {
                setPanelOpen(true)
              }}
            />
          </form>
        </div>

        <div ref={panelRef} className='px-8 bg-white h-0'>
          <LocationSearchPanel setPanelOpen={setPanelOpen} vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel} />
        </div>
        

      </div>  
      
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-10 pt-12'>
        <VehicalPanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
      </div>

      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-6 pt-12'>
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>

      <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-6 pt-12'>
        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
        <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>
    </div>
  )
}

export default Home
