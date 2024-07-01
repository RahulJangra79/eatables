import React from 'react'
import Hero from '../components/UserComponents/Hero'
import Component5 from '../components/UserComponents/Component5'
import Store from '../components/UserComponents/Store'
import Products from '../components/UserComponents/Bestseller'
import Review from '../components/UserComponents/Review'
import Testimonial from '../components/UserComponents/Testimonial'
import { heroData } from '../components/data/HeroData'
import OurProducts from '../components/UserComponents/Our_products'
import ServiceCard from '../components/UserComponents/Service_cards'

export const UserHome = () => {

  return (
    <div>
        <Hero data={heroData}/>
        <ServiceCard />
        <OurProducts />
        <Component5 />
        <Store />
        <Products />
        <Review />
        <Testimonial />
    </div>
  )
}
