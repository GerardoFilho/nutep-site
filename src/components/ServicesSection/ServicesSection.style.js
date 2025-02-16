import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: 40px 65px;
  background-color: #fff;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  color: #062b66;
  margin-bottom: 24px;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`;
