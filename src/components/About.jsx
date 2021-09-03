import React from 'react'
import aboutLogo from '../assets/images/Programmer-bro.png'

export default () => {
  return (
    <div className="about">
      <div className="about__img"><img src={aboutLogo} alt="" /></div>
      <div className="about__content"></div>
      <div className="about__btn">Explore</div>
    </div>
  )
}