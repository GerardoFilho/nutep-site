import styled from "styled-components";
import { ReactComponent as LogoFooter } from "../../assets/icons/logo-footer.svg";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #fff;
  color: #072d4b;
  border-top: 1px solid #eee;
`;

export const FooterContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 20px;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
`;

export const LogoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledLogo = styled(LogoFooter)`
  width: 120px;
  height: auto;
  margin-bottom: 16px;
`;

export const LogoSubtitle = styled.p`
  font-size: 14px;
  color: #48af66;
  margin-top: 8px;
`;

export const ColumnTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const TextParagraph = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 16px;
`;

export const SocialsWrapper = styled.div`
  margin-top: 16px;
`;

export const SocialTitle = styled.h5`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #072d4b;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    opacity: 0.8;
  }
`;

export const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const LinkItem = styled.li`
  margin-bottom: 8px;

  a {
    color: #072d4b;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ContactInfo = styled.div`
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 24px;
`;

export const PolicyButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  background-color: transparent;
  color: #48af66;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 16px;
  border: 2px solid #48af66;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #48af66;
    color: #fff;
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #cff5d0;
  padding: 16px 20px;
  text-align: center;
  font-size: 14px;
  color: #48af66;
`;
