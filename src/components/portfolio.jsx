import React from "react";
import SectionImg from '../images/section-img.png'
import Pf1 from "../images/pf1.jpg"
const Portfolio = () => {
    return (
        <>
            <section class="portfolio section" >
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <h2>We Maintain Cleanliness Rules Inside Our Hospital</h2>
                                <img src={SectionImg} alt="#" />
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12 col-12">
                            <div class="owl-carousel portfolio-slider">
                                <div class="single-pf">
                                    <img src={Pf1} alt="#" />
                                    <a href="portfolio-details.html" class="btn">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Portfolio;