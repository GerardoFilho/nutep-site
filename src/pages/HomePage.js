import React from "react";
import CarouselSection from "../components/CarouselSection";
import IntroSection from "../components/IntroSection";
import AcoesSection from "../components/AcoesSection";
import DepoimentosSection from "../components/DepoimentosSection";
import NoticiasHomeSection from "../components/NoticiasHomeSection";
import NewsletterSection from "../components/NewsLetterSection";
import MissaoSection from "../components/MissaoSection";

const HomePage = () => {
  return (
    <>
      <CarouselSection />
      <IntroSection />
      <MissaoSection />
      <AcoesSection />
      <DepoimentosSection />
      <NoticiasHomeSection />
      <NewsletterSection />
    </>
  );
};

export default HomePage;
