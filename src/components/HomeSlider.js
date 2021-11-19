
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import { Button } from "./Button";

const Carousel = styled(Slider)`
  width: 100%;
  height: 100%;
  overflow: hidden;
position: relative;
  top: 80px;
  left: 0;
`;
const Wrap = styled.div`
    /* width: 100%;
    height: 100%; */

  img{
    width: 100%;
    background-position: center;
    background-size: cover;
    z-index: -1;
  }
  .content{
    .desc{
      position: absolute;
      left: 50%;
      top: 40%;
      transform: translate(-50%, -50%);
      text-align: center;

      width: 60%;
      margin: 0 auto;
      
        .slideTitle{
          font-size: 50px;
          color: #fff;
          margin-bottom: 20px;
          text-shadow: 0px 1px 2px rgba(0,0,0,0.7);

        }
        .slideDesc{
          font-size: 20px;
          color: #fff;
          margin-bottom: 20px;
          text-shadow: 0px 1px 2px rgba(0,0,0,0.7);
          line-height: 1.6;
        }
      
        @media screen and (max-width: 900px){
          width: 90%;
          margin: 0 auto;

          .slideTitle{
          font-size: 35px;
          margin-bottom: 0;

        }

          .slideDesc{
              display: none;
            }
            }
        }
  }

`;


export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (

      <Carousel {...settings}>
        <Wrap>
          <div className="content">
            <div className="desc">
              <h3 className="slideTitle">Real Italien Pizza</h3>
              <p className="slideDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis necessitatibus unde expedita nisi modi?</p>
              <Button to={{ pathname: "https://www.brack.ch/" }} target="_blank"
                isBig='true'
              >
                senden
              </Button>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
        </Wrap>

        <Wrap>
          <div className="content">
            <div className="desc">
              <h3 className="slideTitle">Kalte Italienische Vorspeisen</h3>
              <p className="slideDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis necessitatibus unde expedita nisi modi?</p>
              <Button to={{ pathname: "https://www.brack.ch/" }} target="_blank"
                isBig='true'
              >
                senden
              </Button>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1541529086526-db283c563270?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGl0YWxpYW4lMjBmb29kfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
        </Wrap>
        <Wrap>
          <div className="content">
            <div className="desc">
              <h3 className="slideTitle">Exklusive und Hochwertige Italienische Spezialitäten</h3>
              <p className="slideDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis necessitatibus unde expedita nisi modi?</p>
              <Button to={{ pathname: "https://www.brack.ch/" }} target="_blank"
                isBig='true'
              >
                senden
              </Button>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aXRhbGlhbiUyMGZvb2R8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
        </Wrap>
        <Wrap>
          <div className="content">
            <div className="desc">
              <h3 className="slideTitle">Heiss geliebte Sandwiches</h3>
              <p className="slideDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis necessitatibus unde expedita nisi modi?</p>
              <Button to={{ pathname: "https://www.brack.ch/" }} target="_blank"
                isBig='true'
                isBlock="true"
              >
                senden
              </Button>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGl0YWxpYW4lMjBmb29kfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
        </Wrap>

      </Carousel>

    );
  }
}