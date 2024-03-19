import React from 'react'
import '../Home/home.scss'
import Time from "./img/timecard.svg"
import Tchick from "./img/gurantee 1.svg"
import Cash from "./img/cash 1.svg"
import Team from "./img/team 1.svg"
function home(){
  return (
    <div> 
      <section className='info__home'>
        <div className='grow container'>
          <div>
              <h1>   Expand your <br /> coverage with  <span>Alliedge.</span></h1>
              <p>Customer satisfaction is at the heart of everything we do.We are committed to  providing exceptional IT services <br /> 
                           that exceed your expectations and help you  achieve your business goals.</p>
              <button className='info__connect'> Let’s connect</button>
          </div>
        </div>
      </section>
      <section className='info'>
    <div class='info__quality container'>
      <h1>Our <span>Expertise</span></h1>
      <div className='card__div' >
         <div class="card">
            <img src={Tchick} alt="Image Description"/>
            <div class="card-content">
                <h1>Card Title</h1>
                <p>Our commitment to 
quality enables us to
 deliver software solution
 that are only functional,
 but also user-friendly,
 reliable, secure, provides
  expectational customer
 satisfaction</p>
            </div>    
        </div>
        <div class="card">
            <img src={Time} alt="Image Description"/>
            <div class="card-content">
                <h1>Card Title</h1>
                <p>Our commitment to 
quality enables us to
 deliver software solution
 that are only functional,
 but also user-friendly,
 reliable, secure, provides
  expectational customer
 satisfaction</p>
            </div>    
        </div>

        <div class="card">
            <img src={Team} alt="Image Description"/>
            <div class="card-content">
                <h1>Card Title</h1>
                <p>Our commitment to 
quality enables us to
 deliver software solution
 that are only functional,
 but also user-friendly,
 reliable, secure, provides
  expectational customer
 satisfaction</p>
            </div>    
        </div>
        <div class="card">
            <img src={Cash} alt="Image Description"/>
            <div class="card-content">
                <h1>Card Title</h1>
                <p>Our commitment to 
quality enables us to
 deliver software solution
 that are only functional,
 but also user-friendly,
 reliable, secure, provides
  expectational customer
 satisfaction</p>
            </div>    
        </div>
      </div>
    </div>

</section>
<section className='info__tech'>
  <div className='container'>
  <div className='line__height'>
  <h1>Meet <span>Alliedge Group</span></h1>
    <div></div>
  </div>
  </div>

</section>
</div>
  )
}

export default home