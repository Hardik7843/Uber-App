import React from 'react'

const LocationSearchPanel = (props) =>
{
  const locations = [
    "221B Baker Street, Shivaji Nagar, Pune, Maharashtra, 411005",
    "Flat No. 45, Palm Avenue, Ballygunge, Kolkata, West Bengal, 700019",
    "Plot No. 12, MG Road, Connaught Place, New Delhi, Delhi, 110001",
    "Villa No. 78, Jubilee Hills, Hyderabad, Telangana, 500033",
  ];

  return (
    // This is temporary address


    <div>

      {

        locations.map((location, idx) =>
        {
          return (
            <div
              key={idx}
              onClick={() => {
                props.setVehiclePanel(true)
                props.setPanelOpen(false)
              }}
              className='flex items-center border-2 border-gray-400 rounded-lg  active:border-black justify-start my-2 p-3'
            >
              <h2 className='bg-[#eee] h-8 w-8 flex items-center justify-center  rounded-full mr-2'><i className="ri-map-pin-line"></i></h2>
              <h4 className='font-medium'>{location}</h4>
            </div>)
        })
      }

    </div>
  )
}

export default LocationSearchPanel
