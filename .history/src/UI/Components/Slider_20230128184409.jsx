import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'
import header22 from  './../../img/Header2.jpg'

// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
export const Slider = () => {
  return (
  <>
  <Splide
  options={ {
    rewind: true,
    width : 800,
    height:800,
    gap   : '1rem',
  } }
  aria-label="My Favorite Images">
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
