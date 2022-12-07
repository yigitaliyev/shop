import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Nabor from "../rasmlar/nabor37pcs.jpg"
import Nabor21 from "../rasmlar/nabor46.jpg"
import Nabor46 from "../rasmlar/nabor40.jpg"

export default class Corusel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      
    };
    return (
      <Wrapper>
      
        <Slider {...settings}>
            <div>
                <img src={Nabor} alt="" srcset="" />
                <h2>Bizda naborlar chegirmada</h2>
            </div>
            <div>
                <img src={Nabor21} alt="" srcset="" />
                <h2>Bizda naborlar chegirmada</h2>
                
            </div>
            <div>
                <img src={Nabor46} alt="" srcset="" />
                <h2>Bizda naborlar chegirmada</h2>
               
            </div>
        </Slider>
        </Wrapper>
    );
  }
}

const Wrapper  = styled.div`
    width:  100% ;
    height: 500px;
    /* background-color: red; */
    /* position: relative; */
    padding:  100px;
    border: 2px solid #9e9e9e;
    text-align: center;
    align-items: center;
     
    div{
        width: 100%;
        /* display: flex; */
    }
    
    img{
        margin: auto;
        width: 400px;
        height: 320px;
        object-fit: cover;
      }
    @media(max-width:412px ){
      width:  100% ;
      height: 250px;
    /* background-color: red; */
    /* position: relative; */
    padding:  30px 50px;
    border: 2px solid #9e9e9e;
    text-align: center;
    align-items: center;
     
    div{
        width: 100%;
        /* display: flex; */
    }
    
    img{
        margin: auto;
        width: 200px;
        height: 150px;
        object-fit: cover;
      }
    }
`;