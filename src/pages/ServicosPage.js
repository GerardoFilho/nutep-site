import React from "react";
import ConhecaServicosSection from "../components/ConhecaServicosSection/ConhecaServicosSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import {
  medicalServices,
  orthopedicWorkshop,
  rehabilitationServices,
  socialAssistanceServices,
} from "../data/servicesData";

const servicosPage = () => {
  const descricao =
    "Disponibilizamos uma grande variedade de serviços especializados em intervenção precoce e reabilitação, tendo à frente profissionais que desenvolvem atividades específicas, sempre considerando a interdisciplinaridade e o Programa Terapêutico Singular (PTA) como eixos fundamentais de atuação.";
  return (
    <>
      <ConhecaServicosSection
        title="CONHEÇA NOSSOS SERVIÇOS"
        description={descricao}
      />

      <ServicesSection
        id="servicosMedicos"
        title="Serviços Médicos"
        servicesList={medicalServices}
      />

      <ServicesSection
        id="servicosReabilitacao"
        title="Serviços de Reabilitação"
        servicesList={rehabilitationServices}
      />

      <ServicesSection
        id="servicosAssistencia"
        title="Serviços de Assistência Social"
        servicesList={socialAssistanceServices}
      />

      <ServicesSection
        id="oficinaOrtopedica"
        title="Oficina Ortopédica"
        servicesList={orthopedicWorkshop}
      />
    </>
  );
};

export default servicosPage;
