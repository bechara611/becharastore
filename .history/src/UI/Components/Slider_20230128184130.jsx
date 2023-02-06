import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'

export const Slider = () => {
  return (
  <>
  <Splide aria-label="My Favorite Images">
  <SplideSlide>
    <img src="image1.jpg" alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
    <img src="image2.jpg" alt="Image 2"/>
  </SplideSlide>
</Splide>
  
  </>
  )
}
