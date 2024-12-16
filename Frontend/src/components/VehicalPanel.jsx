import React from 'react'

const VehicalPanel = (props) =>
{
    return (
        <div>
            <h5
                onClick={() => {
                    props.setVehiclePanel(false)
                }}
                className='p-1 text-center w-[90%] absolute top-0'><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
            <h2 className='text-2xl font-semibold mb-3'>Choose a Vehicle</h2>

            <div 
                onClick={() => {
                    props.setConfirmRidePanel(true)
                }}

                className='p-3 border-2  active:border-black mb-2 rounded-xl w-full flex items-center justify-between '
            >
                <img className='h-14 w-16' src="https://5.imimg.com/data5/SELLER/Default/2024/5/421808430/IR/FH/UJ/103718232/mumbai-nashik-cab-service-500x500.png" alt="" />
                <div className='w-1/2'>
                    <h4 className='font-medium text-base'>Uber Go <span className=''><i className="ri-user-fill"></i>4</span></h4>
                    <h5 className='font-medium text-sm '>2 Mins Away</h5>

                    <p className='font-normal text-xs text-gray-800'>Budget Friendly Ride</p>
                </div>
                <h2 className='text-lg font-semibold '>₹199</h2>
            </div>

            <div 
                onClick={() => {
                    props.setConfirmRidePanel(true)
                }}
                className='p-3 border-2 active:border-black mb-2 rounded-xl w-full flex items-center justify-between '
            >
                <img className='h-14 w-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                <div className='w-1/2'>
                    <h4 className='font-medium text-base'>Moto<span className=''><i className="ri-user-fill"></i>1</span></h4>
                    <h5 className='font-medium text-sm '>3 Mins Away</h5>

                    <p className='font-normal text-xs text-gray-800'>Budget Friendly Moto Ride</p>
                </div>
                <h2 className='text-lg font-semibold '>₹60</h2>
            </div>

            <div 
                onClick={() => {
                    props.setConfirmRidePanel(true)
                }}
                className='p-3 border-2 active:border-black mb-2 rounded-xl w-full flex items-center justify-between '
            >
                <img className='h-14 w-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                <div className='w-1/2'>
                    <h4 className='font-medium text-base'>Auto<span className=''><i className="ri-user-fill"></i>3</span></h4>
                    <h5 className='font-medium text-sm '>8 Mins Away</h5>

                    <p className='font-normal text-xs text-gray-800'>Affordable Auto Ride</p>
                </div>
                <h2 className='text-lg font-semibold '>₹100</h2>
            </div>
        </div>
    )
}

export default VehicalPanel