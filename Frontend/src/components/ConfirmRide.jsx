import React from 'react'

const ConfirmRide = (props) =>
{
    return (
        <div>
            <h5
                onClick={() =>
                {   
                    props.setConfirmRidePanel(false)
                }}
                className='p-1 text-center w-[90%] absolute top-0'><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
                <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>
                
                <div className='flex flex-col gap-2 justify-between items-center '>
                    <img className='h-20' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />

                    <div className='w-full mt-5'>
                        <div className='flex items-center gap-4 p-3'>
                            <i className="text-lg ri-map-pin-line"></i>
                            <div>
                                <h3 className='text-lg font-medium'>562/11-A</h3>
                                <p className='text-sm -mt-1 text-gray-600'>Marve Beach, Malad(E), Mumbai-97</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4 p-3'>
                            <i className="text-lg ri-map-pin-line"></i>
                            <div>
                                <h3 className='text-lg font-medium'>562/11-A</h3>
                                <p className='text-sm -mt-1 text-gray-600'>Marve Beach, Malad(E), Mumbai-97</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4 p-3'>
                            <i className="ri-cash-line"></i>
                            <div>
                                <h3 className='text-lg font-medium'>560</h3>
                                <p className='text-sm -mt-1 text-gray-600'>Ride Cost</p>
                            </div>
                        </div>
                    </div>

                    <button 
                        onClick={() => {
                            props.setVehicleFound(true)
                            props.setConfirmRidePanel(false)
                        }}
                        className=' py-1 w-full bg-green-600 text-white rounded-lg font-semibold'>Confirm</button>
                </div>
        </div>
    )
}

export default ConfirmRide