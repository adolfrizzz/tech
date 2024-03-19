import React from 'react'
import  "../Footer/footer.scss"


function footer() {
  return (
<footer class="footer">
    <div class="container">
        <div class="row__hui">
            <div class="`">
                <h4>Company</h4>
                <ul>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div class="footer-widget">
                <h4>Services</h4>
                <ul>
                    <li><a href="#">Web Development</a></li>
                    <li><a href="#">Mobile App Development</a></li>
                    <li><a href="#">UI/UX Design</a></li>
                    <li><a href="#">Digital Marketing</a></li>
                </ul>
            </div>
            <div class="footer-widget">
                <h4>Contact Us</h4>
                <ul>
                    <li><i class="fa fa-map-marker"></i> 123 Street, City, Country</li>
                    <li><i class="fa fa-phone"></i> +123 456 7890</li>
                    <li><i class="fa fa-envelope"></i> info@example.com</li>
                </ul>
            </div>
        </div>
    </div>
    
</footer>


  ) 
}

export default footer