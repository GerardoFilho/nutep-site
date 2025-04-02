import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Importando as imagens dos slides (substitua pelos caminhos reais)
import Banner1 from "../assets/images/banner1.png";
import Banner2 from "../assets/images/banner2.png";
import Banner3 from "../assets/images/banner3.png";

const CarouselWrapper = styled.section`
  width: 100%;
  height: 100%;
  background: #cff5d0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: url(${(props) => props.bannerImages}) no-repeat center center /
    cover;
`;

/* Componente original SlideContent, agora com um estilo extra para a imagem interna */
const SlideContent = styled.div`
  height: 520px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #072d4b;
  background: url(${(props) => props.bannerImages}) no-repeat center center /
    cover;
`;

const ArrowButton = styled.div`
  font-size: 32px;
  color: #48af66;
  cursor: pointer;
  z-index: 2;
  &:hover {
    color: #3d9659;
  }
`;

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <ArrowButton
      style={{ left: "20px", position: "absolute", top: "50%" }}
      onClick={onClick}
    >
      <FaArrowLeft />
    </ArrowButton>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <ArrowButton
      style={{ right: "20px", position: "absolute", top: "50%" }}
      onClick={onClick}
    >
      <FaArrowRight />
    </ArrowButton>
  );
};

const CarouselSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <CarouselWrapper>
      <Slider {...settings} style={{ width: "100%" }}>
        <img src={Banner1} alt="Banner 1" />
        <img src={Banner2} alt="Banner 2" />
        <img src={Banner3} alt="Banner 3" />
      </Slider>
    </CarouselWrapper>
  );
};

export default CarouselSection;
