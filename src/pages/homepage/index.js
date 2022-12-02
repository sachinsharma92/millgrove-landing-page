import Layout from 'components/Layout'
import React from 'react'

// Views Sections here
import HeroSection from 'views/HeroSection/firstfold'
import HomeCarousel from 'views/HomeCarousel/HomeCarousel'
import HomeCarouselMobile from 'views/HomeCarouselMobile/HomeCarouselMobile'
import Reservation from 'views/Reservation'
import Secondfold from 'views/SecondFold/secondfold'
import ThreeDView from 'views/ThreeDView'

export const HomePage = () => {
  return (
    <Layout>
      <div className='home-section'>
        <HeroSection />
        <Secondfold />
        <ThreeDView />
        <HomeCarousel />
        <HomeCarouselMobile />
        <Reservation />
      </div>
    </Layout>
  )
}
