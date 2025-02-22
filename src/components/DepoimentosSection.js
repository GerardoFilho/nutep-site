import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import RightIcon from "../assets/icons/right-arrow.png";
import LeftIcon from "../assets/icons/left-arrow.png";
import WppImg from "../assets/images/wppPerfil2.png";
import WppImg2 from "../assets/images/wppPerfil.png";
import WppImg3 from "../assets/images/wppPerfil3.png";
import WppImg4 from "../assets/images/wppPerfil4.png";

const WppImages = [WppImg, WppImg2, WppImg3, WppImg4];

const DepoimentosWrapper = styled.section`
  background: linear-gradient(135deg, #68ffc1, #07ed4c);
  padding: 60px 20px;
  color: #fff;
  text-align: center;
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: 28px;
  color: #2f8147;
  text-transform: uppercase;
  margin-bottom: 40px;
`;

const CarouselWrapper = styled.div`
  /* Para espaçamento */
`;

const ArrowIcon = styled.img`
  width: 35px;
`;

const DepoimentoCard = styled.div`
  background-color: #fff;
  color: #333;
  max-width: 260px;
  height: 330px;
  margin: 0 auto; /* Centraliza no slide */
  padding: 24px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const FotoWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 16px;
  background: url(${(props) => props.wppImage}) no-repeat center center / cover;
  border-radius: 50%;
  overflow: hidden;
`;

const Nome = styled.h4`
  font-size: 16px;
  color: #072d4b;
  margin-bottom: 4px;
  font-weight: bold;
`;

const Subinfo = styled.span`
  font-size: 12px;
  color: #48af66;
  display: block;
  margin-bottom: 12px;
`;

const TextoDepoimento = styled.p`
  font-size: 14px;
  line-height: 1.4;
`;

/* Setas customizadas (opcional) */
const ArrowButton = styled.div`
  font-size: 24px;
  color: #072d4b;
  cursor: pointer;
  display: block;
  ${(props) => props.side === "left" && "left: -35px;"}
  ${(props) => props.side === "right" && "right: -20px;"}
  z-index: 2;

  &:hover {
    color: #333;
  }
  @media (max-width: 768px) {
    ${(props) => props.side === "left" && "left: 8px;"}
    ${(props) => props.side === "right" && "right: 24px;"}
  }
`;

const PrevArrow = (props) => {
  const { className, onClick } = props;
  console.log(props.style);
  return (
    <ArrowButton className={className} onClick={onClick} side="left">
      <ArrowIcon src={LeftIcon} />
    </ArrowButton>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <ArrowButton className={className} onClick={onClick} side="right">
      <ArrowIcon src={RightIcon} />
    </ArrowButton>
  );
};

const DepoimentosSection = () => {
  const depoimentos = [
    {
      id: 1,
      nome: "Francisca Rosilane",
      subtitulo: "41 anos",
      texto:
        "São três anos que eu frequento aqui. Não tenho nada a desagradar a eles. Só agradecer mesmo pelo acolhimento. A minha filha, a mim também, né? Então, só gratidão mesmo a eles. Amém.",
    },
    {
      id: 2,
      nome: "Antônia Estelide",
      subtitulo: "42 anos",
      texto:
        "Excepcionais. Até hoje eu não tenho nada o que reclamar. Só gratidão. Por todo o empenho que tiveram desde o início com ele. Já passou por vários profissionais. ",
    },
    {
      id: 3,
      nome: "Ana Karla Cavalcanti",
      subtitulo: "39 anos",
      texto:
        "Maravilhosos, muito atenciosos, inclusive eles brigam até com a própria mãe, né? Porque a gente fica meio que insegura, mas eles são maravilhosos, assim, não tem o que falar.",
    },
    {
      id: 4,
      nome: "Maria Lúxilea",
      subtitulo: "62 anos",
      texto:
        "Eu não tenho o que dizer, porque a gente já chega aqui na recepção, o pessoal já está ouvindo a gente. Gente, eu não tenho palavras, não. Só gratidão, gratidão, gratidão por esse espaço maravilhoso.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Exibe 3 depoimentos por vez em desktop
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <DepoimentosWrapper>
      <Container>
        <Title>Veja o que dizem sobre nós</Title>

        <CarouselWrapper>
          <Slider {...settings}>
            {depoimentos.map((dep, index) => (
              <DepoimentoCard key={dep.id}>
                <FotoWrapper wppImage={WppImages[index]} />
                <Nome>{dep.nome}</Nome>
                <Subinfo>{dep.subtitulo}</Subinfo>
                <TextoDepoimento>{dep.texto}</TextoDepoimento>
              </DepoimentoCard>
            ))}
          </Slider>
        </CarouselWrapper>
      </Container>
    </DepoimentosWrapper>
  );
};

export default DepoimentosSection;
