import React, { useEffect } from "react";
import styled from "styled-components";

import SobreImg from "../assets/images/sobrenos.png";
import Video from "../assets/nutepVideoReduzido.mp4";
import VideoOrImageSection from "../components/VideoOrImageSection";
import FamiliaImg1 from "../assets/images/vidanova1.png";
import FamiliaImg2 from "../assets/images/vidanova2.png";
import FamiliaImg3 from "../assets/images/vidanova3.png";
import MapaBrasil from "../assets/images/Brasil.png";
import PredioAcademico from "../assets/images/Programas-academicos.png";
import RightIcon from "../assets/icons/right-arrow.png";
import LeftIcon from "../assets/icons/left-arrow.png";
import Slider from "react-slick";
import CirclesBackground from "../components/CirclesBackground";

const SobreWrapper = styled.section`
  background: linear-gradient(
    135deg,
    rgba(224, 255, 235, 0.8),
    rgba(255, 255, 255, 0.8)
  );
  padding: 40px;
  border-radius: 16px;
  max-width: 1200px;
  margin: 40px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  color: #072d4b;
  position: relative;
  z-index: 999;
`;

const TextoSobre = styled.div`
  flex: 1;
  min-width: 300px;
`;

const TituloSobre = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: #09aa64;
`;

const ParagrafoSobre = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.5;
  margin-bottom: 16px;
`;

const ImagemSobreWrapper = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
`;

const ImagemSobre = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  object-fit: cover;
`;

const ConhecaWrapper = styled.section`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 40px auto;
  text-align: center;
`;

const TituloConheca = styled.h3`
  font-size: 24px;
  color: #09aa64;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const ParagrafoConheca = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.5;
  max-width: 800px;
  margin: 0 auto 24px;
`;

const VideoWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto; /* centraliza */
  aspect-ratio: 16 / 9; /* se quiser manter proporção de vídeo */
  background: #ccc;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

const Transcricao = styled.div`
  max-width: 800px;
  margin: 24px auto 0;
  text-align: left;
`;

const LabelTranscricao = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #09aa64;
`;

const TextoTranscricao = styled.p`
  font-size: 14px;
  color: #333;
  margin: 8px 0;
`;

const DivTranscricao = styled.div`
  background-color: #ddffe0;
  padding: 16px;
  border-radius: 16px;
`;

const LinkTranscricao = styled.a`
  display: inline-block;
  margin-top: 8px;
  font-size: 14px;
  color: #09aa64;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    opacity: 0.8;
  }
`;

const InformacoesWrapper = styled.section`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 40px auto;
  display: flex;
  gap: 32px;
  flex-direction: column;
  @media (max-width: 768px) {
  }
`;

const InfoCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CardSection = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InfoTitle = styled.h4`
  font-size: 28px;
  color: #09aa64;
  text-transform: uppercase;
  margin-bottom: 16px;
`;
const BoldText = styled.b`
  color: #09aa64;
`;

const InfoText = styled.p`
  font-size: 20px;
  color: #333;
  line-height: 1.5;
`;

const ImageWrapper = styled.div`
  margin-top: 16px;
  text-align: center;
  img {
    width: 100%;
    max-width: 400px;
    border-radius: 8px;
  }
`;

const VidaNovaWrapper = styled.section`
  background-color: #cff5d0;
  padding: 40px 20px;
  text-align: center;
`;

const VidaNovaTitle = styled.h3`
  font-size: 24px;
  color: #09aa64;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const FamiliaImgStyled = styled.img`
  width: 100%;
  max-width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  @media (max-width: 768px) {
    width: 80%;
    height: 250px;
  }
`;

const CarouselWrapper = styled.div`
  justify-self: center;
  margin-bottom: 24px;
  max-width: 1200px;
  @media (max-width: 768px) {
    max-width: 400px;
  }
`;

const SlideCard = styled.div`
  padding: 10px;
  display: flex !important; /* Para alinhar o conteúdo no slick-slide */
  justify-content: center;
`;

const ArrowButton = styled.div`
  font-size: 24px;
  color: #09aa64;
  cursor: pointer;
  &:hover {
    color: #3da15a;
  }
  @media (max-width: 768px) {
    ${(props) => props.side === "left" && "left: 8px;"}
    ${(props) => props.side === "right" && "right: 20px;"}
  }
`;

const ArrowIcon = styled.img`
  width: 30px;
`;

const PrevArrow = (props) => {
  const { className, onClick } = props;
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

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [FamiliaImg1, FamiliaImg2, FamiliaImg3];
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
      <CirclesBackground height={"1060px"} limitedCircles={true}>
        <SobreWrapper>
          <TextoSobre>
            <TituloSobre>Sobre Nós</TituloSobre>
            <ParagrafoSobre>
              Sediados em Fortaleza, capital do Ceará, desde 1987 temos como
              missão promover assistência contínua a crianças e adolescentes que
              enfrentam desafios na área do desenvolvimento. Prestamos
              assistência também às famílias, reconhecendo a importância da
              colaboração delas nas conquistas desejadas por todos nós.
            </ParagrafoSobre>
            <ParagrafoSobre>
              Como instituição filantrópica que detém certificado de Entidade
              Beneficente de Assistência Social – CEBAS-Saúde, mantemos convênio
              com o Sistema Único de Saúde – SUS.
            </ParagrafoSobre>
          </TextoSobre>
          <ImagemSobreWrapper>
            <ImagemSobre src={SobreImg} alt="Sobre Nutep" />
          </ImagemSobreWrapper>
        </SobreWrapper>
      </CirclesBackground>

      <ConhecaWrapper>
        <TituloConheca>Conheça um pouco mais do Nutep</TituloConheca>
        <ParagrafoConheca>
          Prestamos assistência permanente a mais de duas mil crianças e
          adolescentes, a maior parte delas com diagnósticos de paralisia
          cerebral (PC), transtornos do espectro autista (TEA), síndromes
          congênitas e múltiplas deficiências.
        </ParagrafoConheca>

        <VideoWrapper>
          <VideoOrImageSection mediaType="video" mediaSrc={Video} />
        </VideoWrapper>

        <Transcricao>
          <LabelTranscricao>Transcrição:</LabelTranscricao>
          <DivTranscricao>
            <TextoTranscricao>
              [BT - 1987] o Nutep vinha abrindo suas tendas solidárias para
              promover ...
            </TextoTranscricao>
          </DivTranscricao>
          <LinkTranscricao href="#">
            Ler transcrição completa &gt;
          </LinkTranscricao>
        </Transcricao>
      </ConhecaWrapper>
      <InformacoesWrapper>
        <InfoCard>
          <CardSection>
            <InfoTitle>Nossos Valores</InfoTitle>
            <InfoText>
              Orientam todas nossas ações: respeito, compaixão, solidariedade,
              inclusão e transparência. Buscamos promover um mundo mais
              solidário, menos desigual.
            </InfoText>
          </CardSection>
        </InfoCard>

        <InfoCard>
          <ImageWrapper>
            <img src={MapaBrasil} alt="Mapa do Brasil destacando CE" />
          </ImageWrapper>
          <CardSection>
            <InfoTitle>Onde Estamos</InfoTitle>
            <InfoText>
              Em Fortaleza, somos um dos únicos serviços de intervenção precoce,
              habilitação e reabilitação de crianças e adolescentes capacitado a
              atender todos os transtornos do desenvolvimento, por meio do SUS.
            </InfoText>
            <br />
            <InfoText>
              Contamos também com a única oficina ortopédica credenciada pelo
              Ministério da Saúde no Estado do Ceará, para oferta de recursos de
              tecnologia assistiva.
            </InfoText>
          </CardSection>
        </InfoCard>

        <InfoCard>
          <CardSection>
            <InfoTitle>Programas Acadêmicos</InfoTitle>
            <InfoText>
              O Nutep é um Projeto de Extensão da Universidade Federal do Ceará
              (UFC) desenvolvendo parcerias em diversos projetos acadêmicos.
            </InfoText>
            <InfoText>
              É também referência no Estado do Ceará para{" "}
              <BoldText>formação profissional</BoldText>, através dos programas
              de capacitação ofertados pelo Centro de Estudos. É ainda um{" "}
              <BoldText>campo de treinamento</BoldText> para alunos de graduação
              e pós-graduação.
            </InfoText>
          </CardSection>
          <ImageWrapper>
            <img src={PredioAcademico} alt="Prédio Acadêmico" />
          </ImageWrapper>
        </InfoCard>
      </InformacoesWrapper>

      <VidaNovaWrapper>
        <VidaNovaTitle>
          Vida nova para as crianças e suas famílias
        </VidaNovaTitle>
        <p>
          Combinando forças da equipe de saúde e da educação, gera-se um ciclo
          de esperança para quem precisa.
        </p>
        <CarouselWrapper>
          <Slider {...settings}>
            {images.map((img, index) => (
              <SlideCard key={index}>
                <FamiliaImgStyled src={img} alt={`Família ${index + 1}`} />
              </SlideCard>
            ))}
          </Slider>
        </CarouselWrapper>
      </VidaNovaWrapper>
    </>
  );
}

export default AboutPage;
