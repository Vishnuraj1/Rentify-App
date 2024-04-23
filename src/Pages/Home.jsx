import React from 'react'
import Header from '../Components/Header/Header'
import Section1 from '../Components/Banner/TopSection/Section1'
import Slider from '../Components/Banner/BottomSection/Slider'
import AboutUs from '../Components/AboutUs/AboutUs'
import Footer from '../Components/Footer/Footer'


const Home = () => {
  return (
    <div>
        <Header/>
        <Section1/>
        <Slider/>
        <AboutUs/>
        <Footer/>
    </div>
  )
}

export default Home