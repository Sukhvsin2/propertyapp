import React from 'react'

function sidePanel({d}) {

  return (
    <>
        <div className="card ml-4 w-90 h-fit bg-white text-primary-content">
            <div className="card-body p-4">
                <div className="card-actions justify-between">
                    <button style={{backgroundColor: "#E6F3EC", color: "#13AD5C"}} className="btn glass">For Sale</button>
                    <button style={{backgroundColor: "#2E63F5", }} className="btn text-white hover:bg-cyan-600">Add List</button>
                </div>
                <div className='info text-black py-3'>
                    <div className='font-bold'>MLS#: {d == undefined ? "" : d.mls}</div>
                    <div><span className='font-light'>Listed for</span>: <span className='text-blue-500 font-semibold'>$1,549,356</span></div>
                    <div className='address mt-2 pr-1'>2118 Thronridge Cir. Syracuse, Connecticut 35624</div>
                    <div className='text-center'>
                        <button className="btn btn-block btn-outline text-gray-600 my-2 text-left">View Map</button>
                        <button className="btn btn-block btn-outline text-gray-600 my-2">Get Directions</button>
                        <button className="btn btn-block btn-outline text-gray-600 my-2">Share</button>
                        <button className="btn btn-block btn-outline text-gray-600 my-2">My Notes</button>
                    </div>
                    <div className='card'>
                        <div style={{backgroundColor: "#F5F6FA", borderRadius: "20px"}} className='card-body p-4'>
                            <div className='text-left font-thin'>Listing Agent</div>
                            <div className='realtorInfo'>
                                <span>Courtney Henry</span> <br/>
                                <span className='text-gray-500'>+90 552 489 8277</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default sidePanel