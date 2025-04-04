import React, { useEffect } from "react";
import styled from "styled-components";
import FamiliaImg from "../assets/images/Medico-1.png";
import OrganogramaImg from "../assets/images/Organograma.png";
import EquipeImg1 from "../assets/images/diaadia1.png";
import EquipeImg2 from "../assets/images/diaadia2.png";
import EquipeImg3 from "../assets/images/diaadia3.png";
import RightIcon from "../assets/icons/right-arrow.png";
import LeftIcon from "../assets/icons/left-arrow.png";

import Slider from "react-slick";
import CirclesBackgroundMissao from "../components/CirclesBackgroundMissao";

const FamiliaSection = styled.section`
  background: linear-gradient(
    135deg,
    rgba(224, 255, 235, 0.8),
    rgba(255, 255, 255, 0.8)
  );
  padding: 60px 20px;
  border-radius: 16px;
  max-width: 1200px;
  margin: 40px auto; /* espaço em cima/baixo e centralizado */
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  color: #09aa64;
  position: relative;
  z-index: 999;
`;

const FamiliaTextBlock = styled.div`
  flex: 1;
  min-width: 300px;
`;

const FamiliaTitle = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const FamiliaParagraph = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.5;
`;

const FamiliaImageWrapper = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
`;

const FamiliaImage = styled.img`
  width: 100%;
  max-width: 350px;
  border-radius: 8px;
  object-fit: cover;
`;

const OrganogramaSection = styled.section`
  padding: 40px 20px;
  text-align: center;
  max-width: 1200px;
  margin: 40px auto;
`;

const OrganogramaTitle = styled.h3`
  font-size: 24px;
  color: #09aa64;
  text-transform: uppercase;
  margin-bottom: 32px;
`;

const OrganogramaImage = styled.img`
  width: 100%;
  max-width: 800px;
  border-radius: 8px;
`;

const EquipeWrapper = styled.section`
  background-color: #cff5d0;
  padding: 40px 20px;
  text-align: center;
`;

const EquipeTitle = styled.h3`
  font-size: 24px;
  color: #09aa64;
  text-transform: uppercase;
  margin-bottom: 24px;
`;

const CarouselWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SlideItem = styled.div`
  display: flex !important; /* força o slick-slide a respeitar o flex */
  justify-content: center;
`;

const EquipeCard = styled.div`
  width: 400px;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
`;

const EquipeCardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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

function OrganogramaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const imagens = [EquipeImg1, EquipeImg2, EquipeImg3];
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
    <>
      <CirclesBackgroundMissao height={"1060px"} scrollNumber={0}>
        <FamiliaSection>
          <FamiliaTextBlock>
            <FamiliaTitle>Nossa Família</FamiliaTitle>
            <FamiliaParagraph>
              Profissionalismo é a nossa palavra de ordem. Por serem muitas as
              situações que chegam até nós, estamos prontos a atender diferentes
              ações e a qualidade que nosso público merece.
            </FamiliaParagraph>
          </FamiliaTextBlock>
          <FamiliaImageWrapper>
            <FamiliaImage src={FamiliaImg} alt="Nossa Família" />
          </FamiliaImageWrapper>
        </FamiliaSection>
      </CirclesBackgroundMissao>

      <OrganogramaSection>
        <OrganogramaTitle>Organograma Institucional</OrganogramaTitle>
        <OrganogramaImage src={OrganogramaImg} alt="Organograma" />
      </OrganogramaSection>

      <EquipeWrapper>
        <EquipeTitle>Veja nossa equipe no dia-a-dia</EquipeTitle>

        <CarouselWrapper>
          <Slider {...settings}>
            {imagens.map((img, index) => (
              <SlideItem key={index}>
                <EquipeCard>
                  <EquipeCardImg src={img} alt={`Equipe ${index + 1}`} />
                </EquipeCard>
              </SlideItem>
            ))}
          </Slider>
        </CarouselWrapper>
      </EquipeWrapper>
    </>
  );
}

export default OrganogramaPage;
