import React, { useEffect } from "react";
import ConhecaServicosSection from "../components/ConhecaServicosSection/ConhecaServicosSection.js";
import UnidadesSection from "../components/UnidadesSection/UnidadesSection.js";
import UnidadeApoioSection from "../components/UnidadeApoioSection/UnidadeApoioSection.js";

const UnidadesAssistenciaisPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const descricao =
    "Ocupamos quatro Unidades Assistenciais, construídas e equipadas para promover nossas ações assistenciais específicas, e estamos trabalhando na construção de mais uma. Além delas, contamos também com uma Unidade de Apoio Administrativo. Todas se encontram no mesmo entorno onde surgimos, no bairro Rodolfo Teófilo.";
  return (
    <>
      <ConhecaServicosSection
        title="UNIDADES ASSISTENCIAIS E DE APOIO"
        description={descricao}
      />
      <UnidadesSection />
      <UnidadeApoioSection />
    </>
  );
};

export default UnidadesAssistenciaisPage;
