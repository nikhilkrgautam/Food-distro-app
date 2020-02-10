import React from "react";
import pic6 from "../assets/pic6.png"
import pic1 from "../assets/pic1.png"
import pic4 from "../assets/pic4.png"
import pic5 from "../assets/pic5.png"


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }



  render() {
    return (
      <div>
         <div class="head">
            <div class="stat1">
            <h1><br/>Hunger is a logistics problem.<br/>There isn't a lack of food,<br/>rather an ineffective<br/>
            redistribution of excess food.</h1>
            </div>
        <div class="stat2">
            <h5>You say: Wait a minute. We live in a tech-enabled world where logistics<br/><br/>
                 issues are practically obsolete. Why are we still tolerating such a contradictory equation?</h5>
        </div>
        <div id="icons">
           <div class="sub-icons">
            <div class="icon-holder"><i class="fas fa-car" aria-hidden="true" style={{color: "orangered"}}></i></div>
            <div class="icon-text">
                <p class="icon-inner-text">Pick Up%</p>
                    <div class="item-animate">
                        <h2 class="code1" style={{color: "orangered"}}>98%</h2>
                    </div>
            </div>
           </div>
           <div class="sub-icons">
            <div class="icon-holder"><i class="fas fa-utensils" aria-hidden="true" style={{color: "orangered"}}></i></div>
            <div class="icon-text"><p class="icon-inner-text">People Fed</p>
                <div class="item-animate">
                    <span style={{color: "orangered"}} class="code2">48374</span></div>
                </div>
           </div>
           <div class="sub-icons">
            <div class="icon-holder"><i class="fa the-icon fa-inr" aria-hidden="true" style={{color: "orangered"}}></i></div>
            <div class="icon-text"><p class="icon-inner-text">Revenue Saved</p>
                
                <div class="item-animate">
                    <span style={{color: "orangered"}} class="code3">453243</span></div>
                </div>
           </div>
           <div class="sub-icons">
            <div class="icon-holder"><i class="fas fa-hamburger" aria-hidden="true" style={{color: "orangered"}}></i></div>
            <div class="icon-text"><p class="icon-inner-text">Food Saved(Kg)</p>
                
                <div class="item-animate">
                    <span style={{color: "orangered"}} class="code4">43421</span></div>
                </div>
           </div>
        </div>
        </div>


			<div class="container">
				<h1>How does Free Foodie work?</h1>
				<p id="waste">Food waste and hunger are inextricably linked issues, and FREE has developed
                     the end-to-end solution that addresses both.<br/> Restaurants, hotels, hospitals, corporate
                      cafeterias, and other businesses with food use Copia’s technology to understand overproduction
                       trends and reduce surplus over time, while ensuring that excess food is used to its highest
                        and best potential — to feed people in need.</p>
            </div>
            <div class="cards">
                <div class="card" style={{width: "18rem", marginTop: "40px"}}>
                    <img src={pic4} class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">You Request</h5>
                      <p class="card-text">Use Free Foodie’s website to schedule pickups of your surplus food. 
                        We provide all the tools to efficiently prepare and package your meals like a pro.</p>
                    </div>
                  </div>

                  <div class="card" style={{width: "18rem", marginTop: "40px"}}>
                    <img src={pic5} class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">We Recover</h5>
                      <p class="card-text">Rely on a Free Foodie's people to pick up your excess food and
                           deliver it safely to a local nonprofit recipient.</p>
                    </div>
                  </div>

                  <div class="card" style={{width: "18rem", marginTop: "40px"}}>
                    <img src={pic6} class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">We Report</h5>
                      <p class="card-text">Track surplus trends, make better buying decisions, and
                           access significant saving tips through your Free Foodie's dashboard.</p>
                    </div>
                </div>
            
            </div>
            


            <footer class="footer-distributed">
 
                <div class="footer-left">
              <img src={pic1} style={{marginLeft: "20px"}} />
                    <h3>About<span> FREE FOODIE</span></h3>
     
                    <p class="footer-links">
                        <a href="#">Home</a>
                        |
                        <a href="#">Blog</a>
                        |
                        <a href="#">About</a>
                        |
                        <a href="#">Contact</a>
                    </p>
     
                    <p class="footer-company-name">2020 Free Foodie Food Wastage Solutions Pvt. Ltd.</p>
                </div>
     
                <div class="footer-center">
                    <div>
                        <i class="fa fa-map-marker"></i>
                          <p><span>2/10, Old BDD Chawl
                             S.S. Wagh Road</span>
                            Naigaon, Dadar, Mumbai - 400014</p>
                    </div>
     
                    <div>
                        <i class="fa fa-phone"></i>
                        <p>+91 22-27782183</p>
                    </div>
                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="mailto:support@freefood.com">support@freefood.com</a></p>
                    </div>
                </div>
                <div class="footer-right">
                    <p class="footer-company-about">
                        <span>About the company</span>
                        No Food Waste is a mission to end food waste and hunger to make the “World Hunger Free”.
                         We recover surplus food from weddings, parties and functions and donate it to needy and
                          hungry people.

                        Dedicated Food Recovery Units including Helpline Number, Food Recovery Vehicles, Vessels,
                         Mobile Application and Volunteers are involved for effective process execution.</p>
                    <div class="footer-icons">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                        <a href="#"><i class="fa fa-youtube"></i></a>
                    </div>
                </div>
            </footer>
      </div>
    )
  }
}

export default Home
