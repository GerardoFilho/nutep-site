import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { newsData } from "../data/newsData";

const NoticiasWrapper = styled.section`
  background-color: #e6f7f0;
  padding: 40px 20px;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: 24px;
  color: #2f8147;
  margin-bottom: 24px;
  text-transform: uppercase;
`;

const CardsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  margin-bottom: 24px;
`;

const CardNoticia = styled.div`
  background-color: #fff;
  width: 260px;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NoticiaImagem = styled.div`
  height: 220px;
  background-color: #ccc;
`;

const NoticiaContent = styled.div`
  padding: 16px;
  text-align: left;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const NoticiaTitle = styled.h4`
  font-size: 14px;
  color: #2f8147;
  margin-bottom: 8px;
  font-weight: 700;
`;

const LerMaisButton = styled(Link)`
  display: inline-block;
  max-width: 132px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background-color: #48af66;
  padding: 6px 12px;
  border-radius: 50px;
  text-decoration: none;
  text-align: center;
  padding: 16px;
  &:hover {
    opacity: 0.9;
  }
`;

const ViewAllButton = styled(Link)`
  display: inline-block;
  margin-top: 16px;
  padding: 12px 24px;
  background-color: #b2ffb8;
  color: #067746;
  border-radius: 24px;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    opacity: 0.9;
  }
`;

const NoticiasHomeSection = () => {
  return (
    <NoticiasWrapper>
      <Container>
        <Title>Últimas Notícias</Title>
        <CardsRow>
          {newsData
            .filter((data) => data.id <= 4)
            .map((noticia) => (
              <CardNoticia key={noticia.id}>
                <img src={noticia.image} alt="Imagem ultima noticia" />
                <NoticiaContent>
                  <NoticiaTitle>{noticia.title}</NoticiaTitle>
                  <LerMaisButton to={`/noticias/${noticia.id}`}>
                    Ler mais &gt;
                  </LerMaisButton>
                </NoticiaContent>
              </CardNoticia>
            ))}
        </CardsRow>

        <ViewAllButton to="/noticias">Veja todas as notícias</ViewAllButton>
      </Container>
    </NoticiasWrapper>
  );
};

export default NoticiasHomeSection;
