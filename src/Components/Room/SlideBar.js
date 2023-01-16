import React from 'react'
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
const SlideBar = ({handleChange}) => {

  return (
    <RangeSlider min={handleChange?.priceRange[0]} max={handleChange?.priceRange[1]}  defaultValue={[handleChange?.priceRange[0],handleChange?.priceRange[1]]} onInput={(e)=> handleChange.handleChange(e)}/>
  )
}

export default SlideBar