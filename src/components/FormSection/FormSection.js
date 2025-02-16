import React from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

const FormWrapper = styled.section`
  background-color: #cff5d0;
  border-radius: 16px;
  padding: 40px;
  max-width: 1000px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const FormTitle = styled.h2`
  color: #48af66;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const FormSubtitle = styled.p`
  font-size: 14px;
  color: #333;
  margin-bottom: 32px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: space-between;
  align-items: flex-start;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1 1 250px;
  min-width: 250px;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1 1 400px;
  min-width: 300px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #072d4b;
  margin-bottom: 4px;
`;

const Input = styled.input`
  padding: 12px;
  border: 2px solid #48af66;
  border-radius: 8px;
  outline: none;
  font-size: 14px;
  color: #333;
`;

const PhoneWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const CountrySelect = styled.select`
  width: 80px;
  padding: 12px;
  border: 2px solid #48af66;
  border-radius: 8px;
  outline: none;
  font-size: 14px;
`;

const PhoneInput = styled(Input)`
  flex: 1;
`;

const TextArea = styled.textarea`
  padding: 12px;
  border: 2px solid #48af66;
  border-radius: 8px;
  outline: none;
  font-size: 14px;
  min-height: 140px;
  resize: vertical;
  color: #333;
`;

const SubmitButton = styled.button`
  align-self: flex-end;
  padding: 12px 24px;
  background-color: #48af66;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #3da15a;
  }
`;

const FormSection = () => {
  return (
    <FormWrapper>
      <FormTitle>MANDE UMA MENSAGEM</FormTitle>
      <FormSubtitle>Alguma dúvida? Entre em contato com a gente!</FormSubtitle>

      <FormContainer onSubmit={(e) => e.preventDefault()}>
        <LeftColumn>
          <FormField>
            <Label>Nome</Label>
            <Input type="text" placeholder="Digite seu nome" />
          </FormField>

          <FormField>
            <Label>Telefone</Label>
            <PhoneWrapper>
              <CountrySelect defaultValue="+55">
                <option value="+55">+55</option>
                <option value="+1">+1</option>
                <option value="+33">+33</option>
              </CountrySelect>
              <PhoneInput type="text" placeholder="85 90000 0000" />
            </PhoneWrapper>
          </FormField>

          <FormField>
            <Label>Email</Label>
            <Input type="email" placeholder="Digite seu e-mail" />
          </FormField>
        </LeftColumn>

        <RightColumn>
          <FormField>
            <Label>Deixe sua mensagem</Label>
            <TextArea placeholder="Digite sua mensagem" />
          </FormField>

          <SubmitButton type="submit">
            Enviar mensagem
            <FaArrowRight />
          </SubmitButton>
        </RightColumn>
      </FormContainer>
    </FormWrapper>
  );
};

export default FormSection;
