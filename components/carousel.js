import React, {useState} from 'react'

function Carousel() {
  const [scroll, setScroll] = useState(1)

  return (
    <div style={{maxHeight: "400px", maxWidth: "75vw", position: "relative", backgroundColor:" #F5F6FA", borderWidth: "0"}} className='mt-3 mx-auto preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top undefined'>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${scroll}`} onClick={() => {setScroll(scroll => scroll > 1 ? scroll-1 : 7)}} className="btn btn-circle">❮</a> 
                <a href={`#slide${scroll}`} onClick={() => {setScroll(scroll => scroll < 7 ? scroll+1 : 1)}} className="btn btn-circle">❯</a>
        </div>
        <div style={{height:"380px", width: "100%"}} className="carousel carousel-end rounded-box">
            <div id="slide1" className="carousel-item p-2">
                <img src="https://cdn.pixabay.com/photo/2017/06/19/17/37/robot-2420319_1280.png" alt="Drink" />
            </div> 
            <div id='slide2' className="carousel-item p-2">
                <img src="https://cdn.pixabay.com/photo/2020/10/05/08/34/cherries-5628562_1280.jpg" alt="Drink" />
            </div> 
            <div id="slide3" className="carousel-item p-2">
                <img src="https://cdn.pixabay.com/photo/2016/11/20/09/00/logs-1842267_1280.jpg" alt="Drink" />
            </div> 
            <div id="slide4" className="carousel-item p-2">
                <img src="https://cdn.pixabay.com/photo/2018/07/01/19/17/head-stuck-in-the-sand-3510206_1280.jpg" alt="Drink" />
            </div> 
            <div id="slide5" className="carousel-item p-2">
                <img src="https://cdn.pixabay.com/photo/2017/08/29/23/12/overhead-projector-2695243_1280.jpg" alt="Drink" />
            </div> 
            <div id="slide6" className="carousel-item p-2">
                <img src="https://cdn.pixabay.com/photo/2012/05/21/21/14/feet-49187_1280.jpg" alt="Drink" />
            </div> 
            <div id="slide7" className="carousel-item p-2">
                <img src="https://cdn.pixabay.com/photo/2018/01/25/17/48/fantasy-3106688_1280.jpg" alt="Drink" />
            </div>
        </div>
    </div>
  )
}

export default Carousel