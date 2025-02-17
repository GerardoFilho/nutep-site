import React from "react";
import MissaoCard from "./MissaoCard";
import styled from "styled-components";
import Retangulo from "../assets/images/Rectangle.png";
import NumerosSection from "./NumerosSection";

const MissaoWrapper = styled.section`
  background: linear-gradient(135deg, #68ffc1, #07ed4c);
  position: relative;
  padding: 0 0 60px 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 1060px;
  @media (max-width: 768px) {
    height: 100%;
  }
`;

const MissaoSection = () => {
  return (
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
  );
};

export default MissaoSection;
