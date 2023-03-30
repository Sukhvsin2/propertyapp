import React from 'react'

function shortcuts() {
  return (
    <>
        <div className="card w-80 h-fit bg-white text-primary-content mr-4">
            <div className="card-body p-4">
                <div className='card-title text-black font-normal'>Shortcuts</div>
                <div className='info text-black py-3'>
                    <div className='text-center'>
                        <div style={{backgroundColor: "#F5F6FA", borderRadius: "20px"}} className='card p-4 flex'>
                            <span className='font-thin text-left'>Notify similar property</span>
                            <input type="checkbox" className="toggle toggle-info"  />
                        </div>
                        <button className="btn btn-block btn-outline text-gray-600 my-2">Key Facts</button>
                        <button className="btn btn-block btn-outline text-gray-600 my-2">Property History</button>
                        <button className="btn btn-block btn-outline text-gray-600 my-2">Demographics</button>
                        <button className="btn btn-block btn-outline text-gray-600 my-2">Points of Interest</button>
                    </div>
                    
                </div>

            </div>
        </div>
    </>
  )
}

export default shortcuts