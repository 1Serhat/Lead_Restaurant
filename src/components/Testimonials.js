import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/testimonial.css';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <div className="testimonial">
        <h2 className="title"> Was unsere Kunden über uns sagen</h2>
        <div className="container">
          <Slider {...settings}>
            <div className="testimonialsItem">
              <img src="https://images.unsplash.com/photo-1612041720569-7e67f4061729?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
              <h3>Serhat Altay</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, a.</p>
            </div>
            <div className="testimonialsItem">
              <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
              <h3>Levin Altay</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, a.</p>
            </div>
            <div className="testimonialsItem">
              <img src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
              <h3>Ada Altay</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, a.</p>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}