import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon5.png'
import back_icon from '../../assets/back-icon5.png'
import user_1 from '../../assets/user1.jpg'
import user_2 from '../../assets/user2.jpg'
import user_3 from '../../assets/user3.jpg'
import user_4 from '../../assets/user4.jpg'


const Testimonials = () => {

  const slider = useRef();
  let tx =0;

  const slideForward =() => {
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`

  }

  const slideBackward =() => {
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`

  }
  
  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Khennycool</h3>
                  <span>Appclick, NG.</span>
                </div>
              </div>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            </div>

          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Cyrill</h3>
                  <span>Appclick, NG.</span>
                </div>
              </div>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            </div>

          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Isreal</h3>
                  <span>Appclick, NG.</span>
                </div>
              </div>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            </div>

          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>George</h3>
                  <span>Appclick, NG.</span>
                </div>
              </div>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            </div>

          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
