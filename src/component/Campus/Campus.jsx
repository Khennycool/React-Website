import React from 'react'
import './Campus.css'
import Gallery_1 from '../../assets/Gallery_1.jpg'
import Gallery_2 from '../../assets/Gallery_2.jpg'
import Gallery_3 from '../../assets/Gallery_3.jpg'
import Gallery_5 from '../../assets/Gallery_5.jpg'
import Gallery_6 from '../../assets/Gallery_6.jpg'
import Gallery_7 from '../../assets/Gallery_7.jpg'
// import Gallery_4 from '../../assets/Gallery_4.jpg'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={Gallery_1} alt="" />
        <img src={Gallery_2} alt="" />
        <img src={Gallery_3} alt="" />
        {/* <img src={Gallery_4} alt="" /> */}
      </div>
      <div className="gallery">
        <img src={Gallery_5} alt="" />
        <img src={Gallery_6} alt="" />
        <img src={Gallery_7} alt="" />
        {/* <img src={Gallery_4} alt="" /> */}
      </div>
      <div className="campus-btn">
      <button className='btn dark-btn'>See More Here <img src={white_arrow} alt="" /></button>
      </div>
      
    </div>
  )
}

export default Campus
