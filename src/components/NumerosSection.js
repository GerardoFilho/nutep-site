import React from "react";
import styled from "styled-components";
import CountUp from "./CountUp";

const CardWrapper = styled.section`
  background-color: #fff;
  border-radius: 27px;
  padding: 75px 65px;
  max-width: 1115px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  height: 440px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  letter-spacing: 2px;
  @media (max-width: 768px) {
    padding: 36px 20px;
    gap: 24px;
    height: 100%;
    margin: 12px;
  }
`;

const Title = styled.h2`
  font-size: 30px;
  color: #48af66;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: #072d4b;
  max-width: 710px;
  margin: 0 auto 32px;
  line-height: 1.4;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const NumbersRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;

const NumberItem = styled.div`
  flex: 1 1 200px;
  min-width: 180px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NumberValue = styled.span`
  font-size: 32px;
  font-weight: 700;
  color: #48af66;
  margin-bottom: 8px;
`;

const NumberDescription = styled.span`
  font-size: 16px;
  color: #333;
  text-align: center;
`;

const NumerosSection = () => {
  return (
    <CardWrapper>
      <div>
        <Title>NÚMEROS QUE FAZEM A DIFERENÇA</Title>
        <Subtitle>
          Um trabalho capaz de mudar a vida de crianças e adolescentes, e de
          suas famílias. Esse é o nosso orgulho.
        </Subtitle>
      </div>

      <NumbersRow>
        <NumberItem>
          <NumberValue>
            +<CountUp endValue={9000} duration={2} />
          </NumberValue>
          <NumberDescription>
            Crianças e adolescentes cadastradas desde 1987
          </NumberDescription>
        </NumberItem>

        <NumberItem>
          <NumberValue>
            +<CountUp endValue={2300} duration={2} />
          </NumberValue>
          <NumberDescription>
            Crianças e adolescentes em acompanhamento em 2024
          </NumberDescription>
        </NumberItem>

        <NumberItem>
          <NumberValue>
            +<CountUp endValue={1200} duration={2} />
          </NumberValue>
          <NumberDescription>
            Média mensal no serviço de audiologia
          </NumberDescription>
        </NumberItem>
      </NumbersRow>
    </CardWrapper>
  );
};

export default NumerosSection;
