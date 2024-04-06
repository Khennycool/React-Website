import React from 'react'
import Header from './component/Header/header'
import Hero from './component/Hero/Hero'
import Programs from './component/Programs/Programs'
import Tittle from './component/Tittle/Tittle'
import About from './component/About/About'
import Campus from './component/Campus/Campus'
import Testimonials from './component/Testimonials/Testimonials'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'


const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <div className="container">
      <Tittle subTitle='OUR PROGRAM' title='What We Offer'/>
      <Programs/>
      <About/>
      <Tittle subTitle='GALLERY' title='Campus Photos'/>
      <Campus/>
      <Tittle subTitle='TESTIMONIALS' title='What Students Says'/>
      <Testimonials/>
      <Tittle subTitle='CONTACT US' title='Get in Touch'/>
      <Contact/>
      <Footer/>
      

      </div>
    
      
    </div>
  )
}

export default App
