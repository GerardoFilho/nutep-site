import React from "react";
import { FaArrowRight } from "react-icons/fa";
import * as S from "./FormSection.style";

const FormSection = () => {
  return (
    <S.FormWrapper>
      <S.FormTitle>MANDE UMA MENSAGEM</S.FormTitle>
      <S.FormSubtitle>
        Alguma dúvida? Entre em contato com a gente!
      </S.FormSubtitle>

      <S.FormContainer onSubmit={(e) => e.preventDefault()}>
        <S.LeftColumn>
          <S.FormField>
            <S.Label>Nome</S.Label>
            <S.Input type="text" placeholder="Digite seu nome" />
          </S.FormField>

          <S.FormField>
            <S.Label>Telefone</S.Label>
            <S.PhoneWrapper>
              <S.CountrySelect defaultValue="+55">
                <option value="+55">+55</option>
                <option value="+1">+1</option>
                <option value="+33">+33</option>
              </S.CountrySelect>
              <S.PhoneInput type="text" placeholder="85 90000 0000" />
            </S.PhoneWrapper>
          </S.FormField>

          <S.FormField>
            <S.Label>Email</S.Label>
            <S.Input type="email" placeholder="Digite seu e-mail" />
          </S.FormField>
        </S.LeftColumn>

        <S.RightColumn>
          <S.FormField>
            <S.Label>Deixe sua mensagem</S.Label>
            <S.TextArea placeholder="Digite sua mensagem" />
          </S.FormField>

          <S.SubmitButton type="submit">
            Enviar mensagem
            <FaArrowRight />
          </S.SubmitButton>
        </S.RightColumn>
      </S.FormContainer>
    </S.FormWrapper>
  );
};

export default FormSection;
