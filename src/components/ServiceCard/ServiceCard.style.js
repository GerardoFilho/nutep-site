import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  margin: 16px;
  color: #072d4b;
  font-weight: 600;
`;

export const IconWrapper = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 28px;
  height: 28px;
  background-color: #62b66d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #4fa359;
  }
`;

export const TitleIconSection = styled.div`
  padding: 8px;
`;
