import React from 'react'
import ImageSwiper from '../components/Swiper'
import DealsAndOffers from '../components/DealsAndOffers'
import ProductSwiper from '../components/ProductSwiper'
import ProductsSwiper from '../components/ProductsSwiper'
import Message from '../components/Message'
import Recoment from '../components/Recoment'
import Send from '../components/Send'

export default function Home() {
  return (
    <div className=''>
      <div className="container p-2 ">
        <ImageSwiper />
        <DealsAndOffers />
        <ProductSwiper />
        <ProductsSwiper />
        <Message />
        <Recoment />
      </div>
      <Send/>
    </div>
  )
}
