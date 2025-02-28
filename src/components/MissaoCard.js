import React from "react";
import styled from "styled-components";

const CirclesOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  background-color: rgba(255, 0, 255, 0.1);
  border-radius: 16px;
  padding: ${({ order }) =>
    order === "reverse" ? "12px 40px 12px 12px" : "12px 12px 12px 40px"};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  flex-direction: ${({ order }) =>
    order === "reverse" ? "row-reverse" : "row"};
  @media (max-width: 768px) {
    width: 90%;
    padding: 40px;
    margin-top: 12px;
  }
`;

const TextBlock = styled.div`
  flex: 1;
  min-width: 280px;
`;

const Title = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
  color: #0c513f;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.4;
  color: #071638;
`;

const Span = styled.span`
  line-height: 1.4;
  color: #071638;
`;

const ImageBlock = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
    display: flex;
    justify-content: ${({ order }) =>
      order === "reverse" ? "flex-start" : "flex-end"};
  }
`;

const MissaoImage = styled.img`
  width: fit-content;
  max-width: 480px;
  height: 300px;
  border: 4px solid #48af66;
  border-radius: 12px;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const MissaoCard = ({
  order = "normal",
  title,
  description,
  signed,
  image,
}) => {
  return (
    <>
      <CirclesOverlay />
      <ContentContainer order={order}>
        <TextBlock>
          <Title>{title}</Title>
          <Description>{description}</Description>
          {signed && (
            <>
              <br />
              <Span>{signed}</Span>
            </>
          )}
        </TextBlock>

        <ImageBlock order={order}>
          <MissaoImage src={image} alt="Missão Nutep" />
        </ImageBlock>
      </ContentContainer>
    </>
  );
};

export default MissaoCard;
