import React from "react";
import SectionImg from "../images/section-img.png"
const PricingTable = () => {
    return (
        <>
            <section class="pricing-table section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <h2>We Provide You The Best Treatment In Resonable Price</h2>
                                <img src={SectionImg} alt="#" />
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-12 col-12">
                            <div class="single-table">
                                <div class="table-head">
                                    <div class="icon">
                                        <i class="fa-solid fa-scissors"></i>
                                    </div>
                                    <h4 class="title">Plastic Suggery</h4>
                                    <div class="price">
                                        <p class="amount">$199<span>/ Per Visit</span></p>
                                    </div>
                                </div>
                                <ul class="table-list">
                                    <li><i class="icofont icofont-ui-check"></i>Lorem ipsum dolor sit</li>
                                    <li><i class="icofont icofont-ui-check"></i>Cubitur sollicitudin fentum</li>
                                    <li class="cross"><i class="fa-solid fa-xmark"></i>Nullam interdum enim</li>
                                    <li class="cross"><i class="fa-solid fa-xmark"></i>Donec ultricies metus</li>
                                    <li class="cross"><i class="fa-solid fa-xmark"></i>Pellentesque eget nibh</li>
                                </ul>
                                <div class="table-bottom">
                                    <a class="btn" href="#">Book Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 col-12">
                            <div class="single-table">
                                <div class="table-head">
                                    <div class="icon">
                                        <i class="fa-solid fa-tooth"></i>
                                    </div>
                                    <h4 class="title">Teeth Whitening</h4>
                                    <div class="price">
                                        <p class="amount">$299<span>/ Per Visit</span></p>
                                    </div>
                                </div>
                                <ul class="table-list">
                                    <li><i class="fa fa-arrow-right" aria-hidden="true"></i>Lorem ipsum dolor sit</li>
                                    <li><i class="fa fa-arrow-right" aria-hidden="true"></i>Cubitur sollicitudin fentum</li>
                                    <li><i class="fa fa-arrow-right" aria-hidden="true"></i>Nullam interdum enim</li>
                                    <li class="cross"><i class="fa-solid fa-xmark"></i>Donec ultricies metus</li>
                                    <li class="cross"><i class="fa-solid fa-xmark"></i>Pellentesque eget nibh</li>
                                </ul>
                                <div class="table-bottom">
                                    <a class="btn" href="#">Book Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 col-12">
                            <div class="single-table">
                                <div class="table-head">
                                    <div class="icon">
                                        <i class="fa-solid fa-heart-pulse"></i>
                                    </div>
                                    <h4 class="title">Heart Suggery</h4>
                                    <div class="price">
                                        <p class="amount">$399<span>/ Per Visit</span></p>
                                    </div>
                                </div>
                                <ul class="table-list">
                                    <li><i class="fa fa-arrow-right" aria-hidden="true"></i>Lorem ipsum dolor sit</li>
                                    <li><i class="fa fa-arrow-right" aria-hidden="true"></i>Cubitur sollicitudin fentum</li>
                                    <li><i class="fa fa-arrow-right" aria-hidden="true"></i>Nullam interdum enim</li>
                                    <li><i class="fa fa-arrow-right" aria-hidden="true"></i>Donec ultricies metus</li>
                                    <li><i class="fa fa-arrow-right" aria-hidden="true"></i>Pellentesque eget nibh</li>
                                </ul>
                                <div class="table-bottom">
                                    <a class="btn" href="#">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default PricingTable;