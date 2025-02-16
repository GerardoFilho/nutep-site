import React from "react";
import { Link } from "react-router-dom";
import * as S from "./NewsItem.style";

const NewsItem = ({ id, category, title, content, time }) => {
  return (
    <>
      <S.NewsItemContainer as={Link} to={`/news/${id}`}>
        <S.NewsImagePlaceholder />
        <S.NewsContent>
          <S.NewsCategory>{category}</S.NewsCategory>
          <S.NewsTitle>{title}</S.NewsTitle>
          <S.NewsDescription>{content}</S.NewsDescription>
          <S.NewsTime>{time}</S.NewsTime>
        </S.NewsContent>
      </S.NewsItemContainer>
    </>
  );
};

export default NewsItem;
