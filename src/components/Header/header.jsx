import React from 'react'
import '../Header/Header.scss'
import Logo from '../img/logo.png'
function header() {
  return (
    <div>
<nav class=" nav__bar">
  <div class="navbar__49 container">
<div className='logo__back'>
  <a href="#"><img className='header__logo'  src={Logo} alt="#"/></a>
  <a href="#"> <h1 class=" technolgy__logo">Alliedge Technologies</h1></a>
</div>
    <div class="nav__wrapper" >
      <ul >
        <li class="nav-item">
          <a class="header__text" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="header__text" href="/services">services</a>
          </li>
        <li class="nav-item">
          <a class="header__text" href="">technolgy</a>
        </li>
        <li class="nav-item">
          <a class="header__text" href="">Group Compnies</a>
        </li>
        <li class="nav-item">
          <a class="header__text" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="header__text" href="/contact" >contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<section>
  
</section>
  </div>

  )
}

export default header;