// src/pages/ProjetosPage.js
import React from "react";
import styled from "styled-components";

// Exemplos de imagens (substitua pelas reais)
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

/* =========== Seção NOSSOS PROJETOS =========== */
const ProjetosWrapper = styled.section`
  background: linear-gradient(135deg, #68ffc1, #07ed4c);
  padding: 60px 20px;
  border-radius: 16px;
  max-width: 1200px;
  margin: 40px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  color: #072d4b;
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

/* =========== Seção PARCERIAS ACADÊMICAS =========== */
const ParceriasAcademicasWrapper = styled.section`
  background-color: #cff5d0;
  padding: 40px 20px;
  text-align: center;
`;

const ParceriasAcademicasTitle = styled.h3`
  font-size: 24px;
  color: #072d4b;
  text-transform: uppercase;
  margin-bottom: 24px;
`;

// Container para agrupar os logos
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

/* =========== Seção com dois blocos: PARCERIAS ASSISTENCIAIS e APOIO AOS P. DE EXPANSÃO =========== */
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
  color: #072d4b;
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
`;

function ProjetosPage() {
  return (
    <>
      {/* Seção NOSSOS PROJETOS */}
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

      {/* Seção PARCERIAS ACADÊMICAS */}
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

      {/* Seção PARCERIAS ASSISTENCIAIS e APOIO AOS P. DE EXPANSÃO */}
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
    </>
  );
}

export default ProjetosPage;
