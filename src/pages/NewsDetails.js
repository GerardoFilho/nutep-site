import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { newsData } from "../data/newsData";

const DetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #fff;
  margin-top: 230px;
`;

const TopSection = styled.div`
  background-color: #cff5d0;
  padding: 40px 20px;
  height: 300px;
`;
const TextTopSection = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  text-align: start;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #067746;
  margin-bottom: 8px;
`;

const Time = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 24px;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  max-width: 800px;
  height: 400px;
  background-color: #ccc;
  margin: 0 auto;
  border-radius: 8px;
`;

const Caption = styled.p`
  font-size: 12px;
  color: #888;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 24px;
  font-style: italic;
`;

const Content = styled.div`
  font-size: 16px;
  color: #333;
  line-height: 1.5;
  padding: 24px 0;
`;

const Teste = styled.div`
  margin-top: 0px;
  contain: layout;
`;

const NewsDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const newsId = Number(id);
  const news = newsData.find((item) => item.id === newsId);

  if (!news) {
    return <p>Notícia não encontrada.</p>;
  }

  return (
    <>
      <TopSection>
        <TextTopSection>
          <Title>{news.title}</Title>
          <Time>{news.time}</Time>
        </TextTopSection>
        <Teste>
          <ImagePlaceholder />
          <Caption>Legenda da foto. S/A.</Caption>
        </Teste>
      </TopSection>

      <DetailContainer>
        <Content>{news.contentFull ? news.contentFull : news.content}</Content>
      </DetailContainer>
    </>
  );
};

export default NewsDetails;
