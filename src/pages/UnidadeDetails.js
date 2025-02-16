import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { unidadesData } from "../data/unidadesData";
import FormSection from "../components/FormSection/FormSection";

const HeroImage = styled.div`
  width: 100%;
  height: 300px;
  background: ${(props) => `url(${props.src}) center/cover no-repeat`};
  position: relative;
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
`;

const DetailContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Title = styled.h2`
  color: #48af66;
  font-size: 24px;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 24px;
  line-height: 1.5;
`;

const LocationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 40px;
`;

const LocalInfo = styled.div`
  flex: 1;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LocalTitle = styled.h3`
  color: #48af66;
  font-size: 20px;
  margin-bottom: 8px;
`;

const ContactLine = styled.p`
  font-size: 14px;
  color: #072d4b;
  margin-bottom: 8px;
`;

const TourButton = styled.button`
  width: fit-content;
  padding: 8px 16px;
  background-color: #48af66;
  border: none;
  color: #fff;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const MapContainer = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 400px;
  height: 250px;
  border-radius: 8px;
  overflow: hidden;
`;

const MapIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const UnidadeDetails = () => {
  const { id } = useParams();
  const unidadeId = Number(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const unidade = unidadesData.find((item) => item.id === unidadeId);

  if (!unidade) {
    return <p>Unidade não encontrada.</p>;
  }

  return (
    <>
      <HeroImage
        src={unidade.imagemDetalhe || "https://via.placeholder.com/1200x400"}
      />

      <DetailContainer>
        <Title>{unidade.tituloPagina}</Title>
        <Description>{unidade.descricao}</Description>

        <LocationWrapper>
          <MapContainer>
            <MapIframe
              src={unidade.mapa}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </MapContainer>
          <LocalInfo>
            <LocalTitle>Localização</LocalTitle>
            <ContactLine>
              <strong>{unidade.nome}</strong>
            </ContactLine>
            <ContactLine>Telefone: {unidade.telefone}</ContactLine>
            <ContactLine>{unidade.endereco}</ContactLine>
            <TourButton>Fazer tour virtual &gt;</TourButton>
          </LocalInfo>
        </LocationWrapper>

        <FormSection />
      </DetailContainer>
    </>
  );
};

export default UnidadeDetails;
