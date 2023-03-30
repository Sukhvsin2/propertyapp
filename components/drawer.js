import React from 'react'

function drawer() {
  return (
    <div className={``}>
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-70 h-full bg-white text-base-content text-black font-thin">
                {/* <!-- Sidebar content here --> */}
                <button style={{backgroundColor:'#2E63F6'}} className="btn btn-active text-white mb-4">Create New Tour</button>
                <li><a>Dashboard</a></li>
                <li><a>Search Property</a></li>
                <li><a>Calendar</a></li>
                <li><a>My Clients</a></li>
                <li><a>MLS List</a></li>
                <li><a>Notifications</a></li>
                <li><a>Invite & Earn</a></li>
                </ul>
            
            </div>
        </div>
    </div>
  )
}

export default drawer