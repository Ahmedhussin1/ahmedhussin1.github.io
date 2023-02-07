import React from 'react'
import './header.css'
import '../../index.css'
import Cta from './Cta'
import Me from '../../assets/08143353-7ac1-44a4-9739-0faf711a46ff-removebg-preview.png'
import HeaderSocials from './HeaderSocials'
function Header() {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Ahmed M.Hussain</h1>
        <h5 className='text-light'>Fullstack Developer</h5>

        <Cta/>
        <HeaderSocials/>

        <div className='me'>
          <img src={Me} alt=""/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down </a>
         
      </div>
    </header>
  )
}

export default Header