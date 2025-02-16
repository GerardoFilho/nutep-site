import styled from "styled-components";

export const FormWrapper = styled.section`
  background-color: #cff5d0;
  border-radius: 16px;
  padding: 40px;
  max-width: 1000px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const FormTitle = styled.h2`
  color: #48af66;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

export const FormSubtitle = styled.p`
  font-size: 14px;
  color: #333;
  margin-bottom: 32px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1 1 250px;
  min-width: 250px;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1 1 400px;
  min-width: 300px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #072d4b;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  padding: 12px;
  border: 2px solid #48af66;
  border-radius: 8px;
  outline: none;
  font-size: 14px;
  color: #333;
`;

export const PhoneWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const CountrySelect = styled.select`
  width: 80px;
  padding: 12px;
  border: 2px solid #48af66;
  border-radius: 8px;
  outline: none;
  font-size: 14px;
`;

export const PhoneInput = styled(Input)`
  flex: 1;
`;

export const TextArea = styled.textarea`
  padding: 12px;
  border: 2px solid #48af66;
  border-radius: 8px;
  outline: none;
  font-size: 14px;
  min-height: 140px;
  resize: vertical;
  color: #333;
`;

export const SubmitButton = styled.button`
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
