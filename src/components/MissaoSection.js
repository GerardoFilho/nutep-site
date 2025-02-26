import React from "react";
import MissaoCard from "./MissaoCard";
import styled from "styled-components";
import Retangulo from "../assets/images/Rectangle.png";
import NumerosSection from "./NumerosSection";
import CirclesBackgroundMissao from "./CirclesBackgroundMissao";

const MissaoWrapper = styled.section`
  position: relative;
  padding: 0 0 60px 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 768px) {
    height: 100%;
  }
`;

const MissaoSection = () => {
  return (
    <CirclesBackgroundMissao height={"1060px"}>
      <MissaoWrapper>
        <img src={Retangulo} alt="retangulo" />
        <MissaoCard
          title="NOSSA MISSÃO"
          description="Prestar assistência especializada a crianças e adolescentes na área do neurodesenvolvimento, mediante as ações de intervenção precoce, habilitação, reabilitação, atenção às famílias e inclusão social."
        />
        <MissaoCard
          order="reverse"
          title="CUIDADO QUE TRANSFORMA"
          description="“Conhecer o NUTEP é entrar em um mundo de esforços e expectativas, de frustrações e recompensas, de batalhas perdidas e guerras ganhas, um mundo de insistência, de persistência, de pura teimosia, dimensionado na marcha lenta do dia a dia, movido pela força de vontade das mães e pais, dos cuidadores e profissionais.”"
          signed="Angela Barros Leal – Jornalista"
        />
        <div>
          <NumerosSection />
        </div>
      </MissaoWrapper>
    </CirclesBackgroundMissao>
  );
};

export default MissaoSection;
