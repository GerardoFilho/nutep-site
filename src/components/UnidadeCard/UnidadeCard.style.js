import styled from "styled-components";

const green = "#48AF66";
const white = "#fff";

export const CardContainer = styled.div`
  width: 100%;
  border: 2px solid ${green};
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const InfoBar = styled.div`
  background: linear-gradient(
    135deg,
    #68ffc1 0%,
    #57f794 27%,
    #49f081 64%,
    #07ed4c 100%
  );
  color: ${white};
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UnitTitle = styled.h3`
  font-size: 24px;
  margin: 0;
  font-weight: 600;
  color: #071638;
`;

export const SeeMore = styled.a`
  color: #071638;
  font-size: 14px;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`;

export const TourButton = styled.button`
  margin: 16px;
  padding: 10px 16px;
  border: 2px solid ${green};
  background-color: transparent;
  color: ${green};
  font-size: 14px;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${green};
    color: ${white};
  }
`;
