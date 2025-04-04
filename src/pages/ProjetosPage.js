import React, { useEffect } from "react";
import styled from "styled-components";
import ProjetosImg from "../assets/images/Reabilitacao-1.png";
import GovCearaLogo from "../assets/images/governo.png";
import SUSLogo from "../assets/images/sus.png";
import UFCLogo from "../assets/images/ufc.png";
import UECELogo from "../assets/images/uece.png";
import UFMGLogo from "../assets/images/ufmg.png";
import UnicefLogo from "../assets/images/unicef.png";
import FortalezaLogo from "../assets/images/prefeituraFortaleza.png";
import UnimedLogo from "../assets/images/unimed.png";
import BNBLogo from "../assets/images/mnisteriodasaude.png";
import ReceitaLogo from "../assets/images/receitaFederal.png";
import CirclesBackground from "../components/CirclesBackground";
import UnidadeVImg1 from "../assets/images/UniV.png";
import UnidadeVImg2 from "../assets/images/UniV-2.png";
import VideoUnidadeVI from "../assets/videos/NUTEP-UNIDADE-VI.mp4";
import VideoOrImageSection from "../components/VideoOrImageSection";

const ProjetosWrapper = styled.section`
  background: linear-gradient(
    135deg,
    rgba(224, 255, 235, 0.8),
    rgba(255, 255, 255, 0.8)
  );
  padding: 60px 20px;
  border-radius: 16px;
  max-width: 1200px;
  margin: 40px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  color: #09aa64;
  position: relative;
  z-index: 999;
`;

const ProjetosTextBlock = styled.div`
  flex: 1;
  min-width: 300px;
`;

const ProjetosTitle = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const ProjetosParagraph = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.5;
`;

const ProjetosImageWrapper = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
`;

const ProjetosImage = styled.img`
  width: 100%;
  max-width: 350px;
  border-radius: 8px;
  object-fit: cover;
`;

const ParceriasAcademicasWrapper = styled.section`
  background-color: #cff5d0;
  padding: 40px 20px;
  text-align: center;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  margin: auto;
  border-radius: 16px;
  margin-top: 60px;
`;

const ParceriasAcademicasTitle = styled.h3`
  font-size: 24px;
  color: #09aa64;
  text-transform: uppercase;
  margin-bottom: 24px;
`;

const LogosGrid = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;

const LogoItem = styled.div`
  width: 120px; /* Ajuste conforme precisar */
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ParceriasOutrasWrapper = styled.section`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ParceriaBox = styled.div`
  background-color: #cff5d0;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const BoxTitle = styled.h4`
  font-size: 20px;
  color: #09aa64;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const BoxDescription = styled.p`
  font-size: 14px;
  color: #333;
`;

const LogosRow = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

//p
const SectionContainer = styled.section`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #05683d;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 24px;
`;

/* Container para as 2 imagens lado a lado */
const ImagesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.5;
  margin-bottom: 16px;
  text-align: center;
  width: 80%;
`;

const BulletPointsContainer = styled.div`
  margin: 24px auto;
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2 colunas */
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* empilha no mobile */
  }
`;

const BulletItem = styled.div`
  background-color: #fff;
  border: 1px solid #09aa64;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const BulletTitle = styled.h4`
  font-size: 16px;
  color: #05683d;
  margin-bottom: 8px;
`;

const BulletText = styled.p`
  font-size: 14px;
  color: #333;
  line-height: 1.4;
`;

const ImageTop = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  display: block;
  margin: 0 auto 24px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const Highlight = styled.span`
  font-weight: 600;
  color: #48af66; /* Verde */
`;

const ImageBottom = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  display: block;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const BulletDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
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

function ProjetosPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CirclesBackground limitedCircles={true}>
        <ProjetosWrapper>
          <ProjetosTextBlock>
            <ProjetosTitle>Nossos Projetos</ProjetosTitle>
            <ProjetosParagraph>
              Nosso trabalho não para, até porque a demanda por nossos serviços
              não para também de crescer. Estamos constantemente projetando
              iniciativas e ações que contribuam para oferecermos mais e melhor.
              Nossas parcerias colaboram para atingir objetivos capazes de levar
              qualidade de vida a crianças, adolescentes, e suas famílias.
            </ProjetosParagraph>
          </ProjetosTextBlock>
          <ProjetosImageWrapper>
            <ProjetosImage src={ProjetosImg} alt="Imagem dos projetos" />
          </ProjetosImageWrapper>
        </ProjetosWrapper>
      </CirclesBackground>

      <ParceriasAcademicasWrapper>
        <ParceriasAcademicasTitle>
          Parcerias Acadêmicas
        </ParceriasAcademicasTitle>
        <p>Essas são as instituições que apoiam nossos projetos acadêmicos.</p>

        <LogosGrid>
          <LogoItem>
            <LogoImage src={GovCearaLogo} alt="Governo do Estado do Ceará" />
          </LogoItem>
          <LogoItem>
            <LogoImage src={SUSLogo} alt="SUS" />
          </LogoItem>
          <LogoItem>
            <LogoImage src={UFCLogo} alt="UFC" />
          </LogoItem>
          <LogoItem>
            <LogoImage src={UECELogo} alt="UECE" />
          </LogoItem>
          <LogoItem>
            <LogoImage src={UFMGLogo} alt="UFMG" />
          </LogoItem>
          <LogoItem>
            <LogoImage src={UnicefLogo} alt="Unicef" />
          </LogoItem>
        </LogosGrid>
      </ParceriasAcademicasWrapper>

      <ParceriasOutrasWrapper>
        <ParceriaBox>
          <BoxTitle>Parcerias Assistenciais</BoxTitle>
          <BoxDescription>
            Entidades parceiras nas atividades assistenciais do Nutep.
          </BoxDescription>
          <LogosRow>
            <LogoImage src={FortalezaLogo} alt="Prefeitura de Fortaleza" />
            <LogoImage src={UnimedLogo} alt="Unimed" />
          </LogosRow>
        </ParceriaBox>

        <ParceriaBox>
          <BoxTitle>Apoio aos P. de Expansão</BoxTitle>
          <BoxDescription>
            Instituições parceiras nos projetos de expansão.
          </BoxDescription>
          <LogosRow>
            <LogoImage src={BNBLogo} alt="Banco do Nordeste" />
            <LogoImage src={ReceitaLogo} alt="Receita Federal" />
          </LogosRow>
        </ParceriaBox>
      </ParceriasOutrasWrapper>
      <SectionContainer>
        <Title>Projeto de Expansão da Unidade V</Title>

        {/* Imagem principal */}
        <ImageTop src={UnidadeVImg1} alt="Unidade V" />

        <Paragraph>
          A unidade V presta assistência a crianças, adolescentes e jovens com
          transtorno do espectro autista e/ou múltiplas deficiências. Promovemos
          saúde, inclusão e oportunidades para nossas crianças, adolescentes e
          jovens, estamos trabalhando para fazer ainda mais pela nossa
          comunidade.
        </Paragraph>

        <Paragraph>
          <Highlight>
            Atendemos mais de 1000 pacientes com TEA permanentemente.
          </Highlight>
          <br />
          Por isso, temos sido desafiados a expandir cada vez mais nossos
          atendimentos e nossa estrutura.
        </Paragraph>

        {/* Bullet points */}
        <BulletPointsContainer>
          <BulletDiv>
            <BulletItem>
              <BulletTitle>Ampliação da estrutura da Unidade V</BulletTitle>
              <BulletText>Cerca de 10% de espaço adicional.</BulletText>
            </BulletItem>
            <BulletItem>
              <BulletTitle>Aumentar o número de atendimentos</BulletTitle>
              <BulletText>Admissão de novos beneficiários.</BulletText>
            </BulletItem>
            <BulletItem>
              <BulletTitle>Expansão e diversificação de evidências</BulletTitle>
              <BulletText>
                Novas salas de atividades e serviços especializados.
              </BulletText>
            </BulletItem>
          </BulletDiv>
          <div>
            <ImageBottom src={UnidadeVImg2} alt="Unidade V Projeto" />
          </div>
        </BulletPointsContainer>

        {/* Imagem secundária */}
      </SectionContainer>
      <SectionContainer>
        <Title>Projeto de Criação da Unidade VI</Title>

        {/* Imagens lado a lado */}
        <ImagesRow>
          <VideoWrapper>
            <VideoOrImageSection mediaType="video" mediaSrc={VideoUnidadeVI} />
          </VideoWrapper>
        </ImagesRow>

        {/* Texto principal */}
        <Paragraph>
          A ampliação e diversificação da oferta de serviços no NUTEP vem se
          dando, ao longo dos anos, de forma sustentável, amparadas pelas
          conquistas em aumentar e ampliar sua estrutura física e pela ampliação
          do quadro de profissionais. Assim, nosso próximo passo é a criação da
          <Highlight> Unidade VI</Highlight>, que terá como foco:
        </Paragraph>

        {/* Bullet points */}
        <BulletPointsContainer>
          <BulletItem>
            <BulletTitle>Ampliar as ações de assistência</BulletTitle>
            <BulletText>
              A crianças e adolescentes com{" "}
              <Highlight>Paralisia Cerebral (PC) e TEA</Highlight>, entre outras
              necessidades.
            </BulletText>
          </BulletItem>

          <BulletItem>
            <BulletTitle>Oferecer mais possibilidades</BulletTitle>
            <BulletText>
              De procedimentos de habilitação e reabilitação, abrangendo as
              áreas sensorial e motora.
            </BulletText>
          </BulletItem>

          <BulletItem>
            <BulletTitle>Fortalecer o desenvolvimento</BulletTitle>
            <BulletText>
              De capacidades e funções, contribuindo para maior autonomia e
              inclusão social.
            </BulletText>
          </BulletItem>

          <BulletItem>
            <BulletTitle>Novas frentes de atendimento</BulletTitle>
            <BulletText>
              A estrutura da Unidade VI possibilitará a criação de novas salas e
              ampliação de equipes.
            </BulletText>
          </BulletItem>
        </BulletPointsContainer>
      </SectionContainer>
    </>
  );
}

export default ProjetosPage;
