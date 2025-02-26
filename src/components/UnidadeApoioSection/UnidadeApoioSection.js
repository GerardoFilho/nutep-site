import React from "react";
import * as S from "./UnidadeApoioSection.style";
import UnidadeApoio from "../../assets/images/UnidadeApoio.png";

const UnidadeApoioSection = () => {
  return (
    <S.SectionApoio>
      <S.Title>Unidade de Apoio</S.Title>
      <S.Subtitle>
        Para além das três Unidades principais, o NUTEP conta com outra Unidade
        de apoio!
      </S.Subtitle>
      <S.ApoioImage src={UnidadeApoio} />
      <S.ApoioCaption>
        Unidade IV – Administração e Recursos Humanos
      </S.ApoioCaption>
    </S.SectionApoio>
  );
};

export default UnidadeApoioSection;
