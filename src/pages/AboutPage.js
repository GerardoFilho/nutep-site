import React from "react";
import styled from "styled-components";

// Exemplo de imagens (substitua pelos caminhos reais):
import SobreImg from "../assets/images/Assistencia-1.png";
import VideoThumb from "../assets/images/Assistencia-2.png";
import Video from "../assets/nutepVideoReduzido.mp4";
import VideoOrImageSection from "../components/VideoOrImageSection";
import FamiliaImg1 from "../assets/images/Assistencia-1.png";
import FamiliaImg2 from "../assets/images/Assistencia-1.png";
import FamiliaImg3 from "../assets/images/Assistencia-1.png";
import MapaBrasil from "../assets/images/Assistencia-1.png";
import PredioAcademico from "../assets/images/Assistencia-1.png";
import RightIcon from "../assets/icons/right-arrow.png";
import LeftIcon from "../assets/icons/left-arrow.png";
import Slider from "react-slick";

/* ========= SEÇÃO 'SOBRE NÓS' ========= */

const SobreWrapper = styled.section`
  background: linear-gradient(135deg, #68ffc1, #07ed4c);
  padding: 40px;
  border-radius: 16px;
  max-width: 1200px;
  margin: 40px auto; /* espaço acima e centralização */
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  color: #072d4b; /* cor do texto do título */
`;

const TextoSobre = styled.div`
  flex: 1; /* texto ocupa espaço */
  min-width: 300px;
`;

const TituloSobre = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: #072d4b; /* para destacar */
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
  max-width: 400px; /* ajuste conforme desejar */
  border-radius: 8px;
  object-fit: cover;
`;

/* ========= SEÇÃO 'CONHEÇA MAIS DO NUTEP' ========= */

const ConhecaWrapper = styled.section`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 40px auto; /* espaçamento e centralização */
  text-align: center;
`;

const TituloConheca = styled.h3`
  font-size: 24px;
  color: #072d4b;
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

const ThumbVideo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Transcricao = styled.div`
  max-width: 800px;
  margin: 24px auto 0;
  text-align: left;
`;

const LabelTranscricao = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #072d4b;
`;

const TextoTranscricao = styled.p`
  font-size: 14px;
  color: #333;
  margin: 8px 0;
`;

const LinkTranscricao = styled.a`
  display: inline-block;
  margin-top: 8px;
  font-size: 14px;
  color: #48af66;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    opacity: 0.8;
  }
`;

// ============ NOVAS SEÇÕES ============

// Seção contendo “Nossos Valores”, “Onde Estamos” e “Programas Acadêmicos”
const InformacoesWrapper = styled.section`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 40px auto;
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2 colunas */
  gap: 32px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* empilha no mobile */
  }
`;

// Card genérico para cada bloco
const InfoCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const InfoTitle = styled.h4`
  font-size: 20px;
  color: #072d4b;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const InfoText = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.5;
`;

// Para bloco com imagem
const ImageWrapper = styled.div`
  margin-top: 16px;
  text-align: center;
  img {
    max-width: 100%;
    border-radius: 8px;
  }
`;

// Seção “Vida nova para as crianças e suas famílias”
const VidaNovaWrapper = styled.section`
  background-color: #cff5d0;
  padding: 40px 20px;
  text-align: center;
`;

const VidaNovaTitle = styled.h3`
  font-size: 24px;
  color: #072d4b;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

// Grid de imagens
const FamiliaGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-top: 24px;
`;

const FamiliaCard = styled.div`
  width: 220px;
  height: 160px;
  background-color: #fff;
  border: 2px solid #48af66;
  border-radius: 8px;
  overflow: hidden;
`;

const FamiliaImgStyled = styled.img`
  width: 100%;
  max-width: 300px;
  height: 300px;
  object-fit: cover;
  border: 2px solid #48af66;
  border-radius: 8px;
`;

const CarouselWrapper = styled.div`
  justify-self: center;
  margin-bottom: 24px;
  max-width: 1200px;
`;

// Cada slide

const SlideCard = styled.div`
  padding: 10px;
  display: flex !important; /* Para alinhar o conteúdo no slick-slide */
  justify-content: center;
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

// Left arrow
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

// Right arrow
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

/* ========= COMPONENTE PRINCIPAL ========== */

function AboutPage() {
  const images = [FamiliaImg1, FamiliaImg2, FamiliaImg3];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // exibir 3 por vez
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      {/* Seção Sobre Nós */}
      <SobreWrapper>
        <TextoSobre>
          <TituloSobre>Sobre Nós</TituloSobre>
          <ParagrafoSobre>
            Sediados em Fortaleza, capital do Ceará, desde 1987 temos como
            missão promover assistência contínua a crianças e adolescentes que
            enfrentam desafios na área do desenvolvimento. Prestamos assistência
            também às famílias, reconhecendo a importância da colaboração delas
            nas conquistas desejadas por todos nós.
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

      {/* Seção Conheça um pouco mais do Nutep */}
      <ConhecaWrapper>
        <TituloConheca>Conheça um pouco mais do Nutep</TituloConheca>
        <ParagrafoConheca>
          Prestamos assistência permanente a mais de duas mil crianças e
          adolescentes, a maior parte delas com diagnósticos de paralisia
          cerebral (PC), transtornos do espectro autista (TEA), síndromes
          congênitas e múltiplas deficiências.
        </ParagrafoConheca>

        <VideoWrapper>
          {/* Exemplo de thumb do vídeo */}
          {/* Seção com imagem estática */}
          {/* <VideoOrImageSection
            mediaType="image"
            mediaSrc={VideoThumb}
            title="Conheça um pouco mais do Nutep"
            description="Prestamos assistência permanente..."
          /> */}

          {/* Seção com vídeo HTML5 local (exemplo .mp4 na pasta public) */}
          <VideoOrImageSection mediaType="video" mediaSrc={Video} />

          {/* Seção com embed do YouTube */}
          {/* <VideoOrImageSection
            mediaType="youtube"
            mediaSrc="https://www.youtube.com/embed/xYth5J7TO9U"
          /> */}
        </VideoWrapper>

        <Transcricao>
          <LabelTranscricao>Transcrição:</LabelTranscricao>
          <TextoTranscricao>
            [BT - 1987] o Nutep vinha abrindo suas tendas solidárias para
            promover ...
          </TextoTranscricao>
          <LinkTranscricao href="#">
            Ler transcrição completa &gt;
          </LinkTranscricao>
        </Transcricao>
      </ConhecaWrapper>
      {/* SEÇÃO VALORES, ONDE ESTAMOS, PROGRAMAS ACADÊMICOS */}
      <InformacoesWrapper>
        {/* NOSSOS VALORES */}
        <InfoCard>
          <InfoTitle>Nossos Valores</InfoTitle>
          <InfoText>
            Orientam todas nossas ações: respeito, compaixão, solidariedade,
            inclusão e transparência. Buscamos promover um mundo mais solidário,
            menos desigual.
          </InfoText>
        </InfoCard>

        {/* ONDE ESTAMOS */}
        <InfoCard>
          <InfoTitle>Onde Estamos</InfoTitle>
          <InfoText>
            Em Fortaleza, somos uma das únicas referências em atendimento
            especializado em reabilitação infantil. Nosso trabalho se estende a
            outras regiões através de parcerias.
          </InfoText>
          <ImageWrapper>
            <img src={MapaBrasil} alt="Mapa do Brasil destacando CE" />
          </ImageWrapper>
        </InfoCard>

        {/* PROGRAMAS ACADÊMICOS */}
        <InfoCard style={{ gridColumn: "1 / span 2" }}>
          {/* aqui ocupamos 2 colunas, se quisermos (depende do design) */}
          <InfoTitle>Programas Acadêmicos</InfoTitle>
          <InfoText>
            O Nutep e a Região do Entorno da Universidade Federal do Ceará
            oferecem oportunidades para profissionais participarem de estágios e
            pesquisas em diversas áreas de saúde.
          </InfoText>
          <ImageWrapper>
            <img src={PredioAcademico} alt="Prédio Acadêmico" />
          </ImageWrapper>
        </InfoCard>
      </InformacoesWrapper>

      {/* SEÇÃO VIDA NOVA */}
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
