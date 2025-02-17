import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CarouselWrapper = styled.section`
  width: 100%;
  height: 400px;
  background: #cff5d0;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const SlideContent = styled.div`
  height: 300px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #072d4b;
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
      <Slider {...settings} style={{ width: "80%" }}>
        <SlideContent>Slide 1</SlideContent>
        <SlideContent>Slide 2</SlideContent>
        <SlideContent>Slide 3</SlideContent>
      </Slider>
    </CarouselWrapper>
  );
};

export default CarouselSection;
