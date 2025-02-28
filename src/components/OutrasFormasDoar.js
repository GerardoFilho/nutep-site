// src/components/OutrasFormasDoar.js
import React from "react";
import styled from "styled-components";

// Exemplo de imagens (substitua pelos arquivos reais)
import PixQR from "../assets/images/qrCodePix.png"; // Exemplo de QR code
import DepositoLogo from "../assets/images/BB.png"; // Exemplo de logo do banco
import TelemarketingImg from "../assets/images/telemarketing.png"; // Exemplo de imagem telemarketing

/* Contêiner geral da seção */
const FormasWrapper = styled.section`
  max-width: 860px;
  margin: 40px auto;
  padding: 0 20px;
`;

/* Título da Seção */
const FormasTitle = styled.h3`
  font-size: 24px;
  color: #48af66; /* Ajuste conforme sua paleta */
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 32px;
`;

/* Cada "forma" (Pix, Depósito, Telemarketing) é um row flex */
const FormaRow = styled.div`
  display: flex;
  flex-wrap: wrap; /* permite quebrar em telas pequenas */
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px; /* espaçamento entre os blocos */
  @media (max-width: 768px) {
    text-align: center;
    flex-direction: ${({ reverse }) => (reverse ? "column-reverse" : "column")};
    gap: 16px;
  }
`;

/* Coluna esquerda (texto) */
const FormaText = styled.div`
  flex: 1;
  max-width: 400px;
  margin-right: 24px; /* espaço para separar do lado direito */
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 16px; /* se quebrar, dá um espacinho */
  }
`;

/* Título do bloco (ex.: Pix, Depósito...) */
const FormaHeading = styled.h4`
  font-size: 20px;
  color: #05683d;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

/* Texto descritivo */
const FormaParagraph = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.5;
  margin-bottom: 8px;
`;

/* Destaque (ex.: "Chave-pix: doarnutep@nutep.org.br") */
const Destaque = styled.span`
  font-weight: 600;
  color: #48af66;
`;

const TextContainer = styled.div`
  display: flex;
  margin-top: 8px;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`;

/* Coluna direita (imagem, QR code, etc.) */
const FormaImage = styled.div`
  min-width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }

  img {
    max-width: 150px; /* Ajuste a largura da imagem */
    border-radius: 16px;
    padding: 4px;
    border: ${({ border }) => (border ? "3px solid #48af66" : "none")};
  }

  b {
    font-size: 16px;
    width: 55%;
    min-width: 223px;
    line-height: 1.2em;
  }

  /* Texto extra abaixo da imagem (ex.: legendas) */
  span {
    color: #48af66;
    margin-top: 4px;
    font-weight: 700;
  }
`;

function OutrasFormasDoar() {
  return (
    <FormasWrapper>
      <FormasTitle>Outras Formas de Doar</FormasTitle>

      {/* BLOCO 1: PIX */}
      <FormaRow>
        <FormaText>
          <FormaHeading>Pix</FormaHeading>
          <FormaParagraph>
            Faça doações de <Destaque>qualquer valor</Destaque> e de forma
            prática através do Pix!
          </FormaParagraph>
          <FormaParagraph>
            Chave-pix: <Destaque>doarnutep@nutep.org.br</Destaque>
          </FormaParagraph>
        </FormaText>

        <FormaImage border>
          <img src={PixQR} alt="QR code Pix" />
          <TextContainer>
            <b>Núcleo de Tratamento e Estimulação Precoce (Nutep)</b>
            <span>Chave: doarnutep@nutep.org.br</span>
          </TextContainer>
        </FormaImage>
      </FormaRow>

      {/* BLOCO 2: DEPÓSITO */}
      <FormaRow reverse>
        <FormaImage>
          <img src={DepositoLogo} alt="Banco do Brasil" />
          <TextContainer>
            <b>Banco do Brasil</b>
            <span>CNPJ: 00.000.000/0001-91</span>
          </TextContainer>
        </FormaImage>

        <FormaText>
          <FormaHeading>Depósito</FormaHeading>
          <FormaParagraph>
            Caso prefira, você pode doar através de depósito direto, em Conta
            Corrente ou Poupança!
          </FormaParagraph>
          <FormaParagraph>
            <Destaque>Conta:</Destaque> 16886-6 &nbsp;{" "}
            <Destaque>Agência: </Destaque>4293-5
          </FormaParagraph>
        </FormaText>
      </FormaRow>

      {/* BLOCO 3: TELEMARKETING */}
      <FormaRow>
        <FormaText>
          <FormaHeading>Telemarketing</FormaHeading>
          <FormaParagraph>
            Ligue para <Destaque>(00) 9 0000-0000</Destaque> e contribua com
            qualquer valor para a nossa causa. Juntos, podemos transformar
            vidas!
          </FormaParagraph>
        </FormaText>

        <FormaImage border>
          <img src={TelemarketingImg} alt="Telemarketing" />
          <TextContainer>
            <b>Nome da atendente</b>
            <span>Unidade 1 - Sede</span>
          </TextContainer>
        </FormaImage>
      </FormaRow>
    </FormasWrapper>
  );
}

export default OutrasFormasDoar;
