import styled from "styled-components";

export const SectionApoio = styled.section`
  padding: 40px 0;
  text-align: center;
  background-color: #fff;
  @media (max-width: 768px) {
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  color: #067746;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0 auto 32px;
  line-height: 1.5;
`;

export const ApoioImage = styled.img`
  width: 100%;
  max-width: 530px;
  height: 367px;
  object-fit: cover;
  margin: 0 auto;
  border-radius: 6px;
  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

export const ApoioCaption = styled.p`
  margin-top: 16px;
  font-size: 16px;
  color: #072d4b;
  font-weight: 600;
`;
