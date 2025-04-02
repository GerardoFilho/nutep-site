import styled from "styled-components";

const green = "#067746";
const darkBlue = "#072D4B";
const lightGray = "#ccc";
const dividerGreen = "#48AF66";

export const NewsItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${dividerGreen};
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
}
`;

export const NewsImagePlaceholder = styled.img`
  width: 100%;
  max-width: 550px;
  height: 300px;
  border-radius: 8px;
  flex-shrink: 0;
`;

export const NewsContent = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  letter-spacing: 2px;
`;

export const NewsCategory = styled.p`
  font-size: 14px;
  color: ${green};
  margin-bottom: 20px;
  font-weight: 600;
  @media (max-width: 768px) {
    margin-top: 12px;
  }
`;

export const NewsTitle = styled.h3`
  width: 85%;
  font-size: 28px;
  color: ${green};
  margin-bottom: 20px;
  font-weight: 700;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const NewsDescription = styled.p`
  font-size: 18px;
  color: ${darkBlue};
  line-height: 1.4;
  margin-bottom: 20px;
  width: 80%;
`;

export const NewsTime = styled.span`
  font-size: 14px;
  color: #666;
`;
