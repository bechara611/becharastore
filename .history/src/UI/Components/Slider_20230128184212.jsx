import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'
import header22 from  './../../img/Header2.jpg'
export const Slider = () => {
  return (
  <>
  <Splide aria-label="My Favorite Images">
  <SplideSlide>
    <img src={header22} alt=""/>
  </SplideSlide>
  <SplideSlide>
    <img src={header22} alt=""/>
  </SplideSlide>
</Splide>
  
  </>
  )
}
