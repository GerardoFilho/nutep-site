import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import RightIcon from "../assets/icons/right-arrow.png";
import LeftIcon from "../assets/icons/left-arrow.png";
import AcaoImg1 from "../assets/images/acoes1.png";
import AcaoImg2 from "../assets/images/acoes2.png";
import AcaoImg3 from "../assets/images/acoes3.png";
import AcaoImg4 from "../assets/images/Assistencia-1.png";
import AcaoImg5 from "../assets/images/Assistencia-1.png";

const AcoesWrapper = styled.section`
  background-color: #e6f7f0;
  padding: 40px 20px;
  text-align: center;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 285px;
  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;

const Title = styled.h3`
  font-size: 20px;
  color: #072d4b;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #333;
  margin-bottom: 32px;
`;

const AcaoImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: 300px;
  object-fit: cover;
  border: 2px solid #48af66;
  border-radius: 8px;
  @media (max-width: 768px) {
    width: 80%;
    height: 250px;
  }
`;

const InstaLink = styled.a`
  display: inline-block;
  color: #48af66;
  margin-top: 24px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;
const ArrowButton = styled.div`
  font-size: 24px;
  color: #48af66;
  cursor: pointer;
  &:hover {
    color: #3da15a;
  }
`;

const ArrowIcon = styled.img`
  width: 30px;
`;

const CarouselWrapper = styled.div`
  position: relative;
  margin-bottom: 24px;
`;

const Card = styled.div`
  padding: 10px;
  display: flex !important; /* Para alinhar o conteúdo no slick-slide */
  justify-content: center;
`;

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <ArrowButton
      className={className}
      style={{ ...style, left: "0", zIndex: 2 }}
      onClick={onClick}
    >
      <ArrowIcon src={LeftIcon} />
    </ArrowButton>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <ArrowButton
      className={className}
      style={{ ...style, right: "0", zIndex: 2 }}
      onClick={onClick}
    >
      <ArrowIcon src={RightIcon} />
    </ArrowButton>
  );
};

const AcoesSection = () => {
  const imagens = [AcaoImg1, AcaoImg2, AcaoImg3, AcaoImg4, AcaoImg5];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <AcoesWrapper>
      <ContentContainer>
        <Title>Acompanhe as nossas ações</Title>
        <Subtitle>
          Siga-nos pelas redes sociais e fique por dentro da nossa jornada
        </Subtitle>

        <CarouselWrapper>
          <Slider {...settings}>
            {imagens.map((img, index) => (
              <Card key={index}>
                <AcaoImage src={img} alt={`Ação ${index + 1}`} />
              </Card>
            ))}
          </Slider>
        </CarouselWrapper>
      </ContentContainer>
      <InstaLink
        href="https://instagram.com/nutepnarede"
        target="_blank"
        rel="noopener noreferrer"
      >
        &copy; Acesse nosso Instagram!
      </InstaLink>
    </AcoesWrapper>
  );
};

export default AcoesSection;
