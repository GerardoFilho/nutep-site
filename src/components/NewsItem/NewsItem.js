import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const green = "#067746";
const darkBlue = "#072D4B";
const lightGray = "#ccc";
const dividerGreen = "#48AF66";

const NewsItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${dividerGreen};
`;

const NewsImagePlaceholder = styled.div`
  width: 550px;
  height: 300px;
  background-color: ${lightGray};
  border-radius: 8px;
  flex-shrink: 0;
`;

const NewsContent = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  letter-spacing: 2px;
`;

const NewsCategory = styled.p`
  font-size: 14px;
  color: ${green};
  margin-bottom: 20px;
  font-weight: 600;
`;

const NewsTitle = styled.h3`
  width: 85%;
  font-size: 28px;
  color: ${green};
  margin-bottom: 20px;
  font-weight: 700;
`;

const NewsDescription = styled.p`
  font-size: 18px;
  color: ${darkBlue};
  line-height: 1.4;
  margin-bottom: 20px;
  width: 80%;
`;

const NewsTime = styled.span`
  font-size: 14px;
  color: #666;
`;

const NewsItem = ({ id, category, title, content, time }) => {
  return (
    <>
      <NewsItemContainer as={Link} to={`/news/${id}`}>
        <NewsImagePlaceholder />
        <NewsContent>
          <NewsCategory>{category}</NewsCategory>
          <NewsTitle>{title}</NewsTitle>
          <NewsDescription>{content}</NewsDescription>
          <NewsTime>{time}</NewsTime>
        </NewsContent>
      </NewsItemContainer>
    </>
  );
};

export default NewsItem;
