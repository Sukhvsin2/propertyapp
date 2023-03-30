import React from 'react'

function mainPanel({d}) {
  return (
    <div className='m-2'>
        <div style={{borderRadius: "0"}} className='card w-auto h-fit bg-white text-primary-content'>
            <div className='card-body text-black p-4 my-4'>
                <div className='options flex justify-between font-extralight'>
                    <span className='px-2 mr-2'>Property Details</span>
                    <span className='px-2'>Apartments</span>
                    <span className='px-2'>3 Bedrooms</span>
                    <span className='px-2'>2 Bedrooms</span>
                    <span className='px-2'>2 Garage</span>
                    <span className='px-2'>1,963 sq. ft.</span>
                    <span className='px-2'>1,173 sq. ft.</span>
                </div>
            </div>
        </div>
        <div style={{borderRadius: "0"}} className='card w-auto h-fit bg-white text-primary-content mt-4'>
            <div className='card-body p-4'>
                <div className="tabs text-black w-full">
                    <a style={{width: "30%", margin: "auto"}} className="tab tab-bordered tab-active">Key Facts</a> 
                    <a style={{width: "30%", margin: "auto"}} className="tab tab-bordered">Details</a> 
                    <a style={{width: "30%", margin: "auto"}} className="tab tab-bordered">Rooms</a>
                </div>
                <div className='activeInfo text-black p-4'>
                    <span className='font-extrathin text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo risus a mattis semper. Integer placerat volutpat odio, at pulvinar tortor laoreet mattis. Proin aliquet semper tempus.</span>
                    <div className='details mt-4'>
                        <div className='flex justify-between font-normal'><span>Tax</span> <span>{d == undefined ? "" : `$${d.tax}`}</span></div>
                    </div>
                    <div className="divider"></div>
                    <div className='details mt-4'>
                        <div className='flex justify-between font-normal'><span>Type</span> <span>Single-Family</span></div>
                    </div>
                    <div className="divider"></div>
                    <div className='details mt-4'>
                        <div className='flex justify-between font-normal'><span>Building Age</span> <span>{d == undefined ? "" : `${d.buildingAge} Years`}</span></div>
                    </div>
                    <div className="divider"></div>
                    <div className='details mt-4'>
                        <div className='flex justify-between font-normal'><span>Size</span> <span>{d == undefined ? "loading..." : d.size}</span></div>
                    </div>
                    <div className="divider"></div>
                    <div className='details mt-4'>
                        <div className='flex justify-between font-normal'><span>Parking</span> <span>{d == undefined ? "loading..." : d.parking}</span></div>
                    </div>
                    <div className="divider"></div>
                    <div className='details mt-4'>
                        <div className='flex justify-between font-normal'><span>Basement</span> <span>{d == undefined ? "loading..." : d.basement}</span></div>
                    </div>
                    <div className="divider"></div>
                    <div className='details mt-4'>
                        <div className='flex justify-between font-normal'><span>MLS#</span> <span>{d == undefined ? "loading..." : d.mls}</span></div>
                    </div>
                    <div className="divider"></div>
                    <div className='details mt-4'>
                        <div className='flex justify-between font-normal'><span>Possesion</span> <span>{d == undefined ? "loading..." : `${d.possesion} Days`}</span></div>
                    </div>
                    <div className="divider"></div>
                    <div className='desc mt-4'>
                        <div className='card-title font-light mb-4'>Description</div>
                        <div className='font-extrathin text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo risus a mattis semper. Integer placerat volutpat odio, at pulvinar tortor laoreet mattis. Proin aliquet semper tempus. Etiam auctor lacus leo read more..</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default mainPanel