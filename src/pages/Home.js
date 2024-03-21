import React from 'react'
import Hero from '../components/Hero'
import Service_card from '../components/Service_cards'
import Our_products from '../components/Our_products'
import Component5 from '../components/Component5'
import Component6 from '../components/Component6'
import Store from '../components/Store'
import Products from '../components/Bestseller'
import Review from '../components/Review'
import Testimonial from '../components/Testimonial'

export const Home = () => {
  return (
    <div>
        <Hero />
        <Service_card />
        <Our_products />
        <Component5 />
        <Component6 />
        <Store />
        <Products />
        <Review />
        <Testimonial />
    </div>
  )
}
