import React from 'react'
import Hero from '../components/Hero'
import Curriculum from '../components/Curriculum'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='max-w-[1640px] bg-purple-800 grid grid-cols-1 gap-8  '>
    <Hero />
    <Curriculum />
    <ProductCard />
    <Footer />
    </div>
  )
}

export default Home