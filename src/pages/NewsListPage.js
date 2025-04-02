import React, { useEffect } from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar/SearchBar";
import NewsItem from "../components/NewsItem/NewsItem";
import ConhecaServicosSection from "../components/ConhecaServicosSection/ConhecaServicosSection";

const NewsListContainer = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoadMoreButton = styled.button`
  margin-top: 24px;
  padding: 12px 24px;
  background-color: #48af66;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #3da15a;
  }
`;

const NewsListPage = ({ newsData }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ConhecaServicosSection
        title="PORTAL DE NOTÍCIAS"
        description={
          "Veja aqui as nossas novidades, e o que está acontecendo de significativo no Nutep."
        }
      />
      <NewsListContainer>
        <SearchBar />
        <br />
        <br />

        {newsData.map((news) => (
          <NewsItem
            key={news.id}
            id={news.id}
            category={news.category}
            image={news.image}
            title={news.title}
            content={news.content}
          />
        ))}

        <LoadMoreButton>Veja mais notícias +</LoadMoreButton>
      </NewsListContainer>
    </>
  );
};

export default NewsListPage;
