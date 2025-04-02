import React from "react";
import styled from "styled-components";

const NewsletterWrapper = styled.section`
  background-color: #abe9be;
  border-radius: 16px;
  padding: 72px 48px;
  margin: 40px auto;
  max-width: 1112px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;

const LeftBlock = styled.div`
  flex: 1;
  min-width: 250px;
`;

const RightBlock = styled.div`
  flex: 1;
  min-width: 300px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  color: #072d4b;
  margin-bottom: 8px;
  text-transform: none;
`;

const Highlight = styled.span`
  font-weight: 700;
  font-size: 28px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #fff;
  background-color: #33b97f;
  display: inline-block;
  padding: 16px;
  border-radius: 50px;
  margin-top: 8px;
`;

const RightTitle = styled.h3`
  font-size: 16px;
  color: #072d4b;
  margin-bottom: 4px;
`;

const Form = styled.form`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
`;

const EmailInput = styled.input`
  padding: 10px 16px;
  border: 2px solid #48af66;
  border-radius: 12px;
  font-size: 14px;
  outline: none;
  width: 320px;
`;

const SubmitButton = styled.button`
  padding: 10px 24px;
  background-color: #48af66;
  color: #fff;
  border: none;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    opacity: 0.9;
  }
`;

const NewsletterSection = () => {
  return (
    <NewsletterWrapper>
      <LeftBlock>
        <Title>
          Assine nossa <Highlight>Newsletter!</Highlight>
        </Title>
        <a href="/">
          <Subtitle>Receba notícias, atualizações e muito mais!</Subtitle>{" "}
        </a>
      </LeftBlock>

      <RightBlock>
        <RightTitle>Registre seu email para se manter informado</RightTitle>
        <Form onSubmit={(e) => e.preventDefault()}>
          <EmailInput type="email" placeholder="email@example.com" />
          <SubmitButton>Enviar email</SubmitButton>
        </Form>
      </RightBlock>
    </NewsletterWrapper>
  );
};

export default NewsletterSection;
