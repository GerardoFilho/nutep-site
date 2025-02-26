import React, { useEffect } from "react";
import CarouselSection from "../components/CarouselSection";
import IntroSection from "../components/IntroSection";
import AcoesSection from "../components/AcoesSection";
import DepoimentosSection from "../components/DepoimentosSection";
import NoticiasHomeSection from "../components/NoticiasHomeSection";
import NewsletterSection from "../components/NewsLetterSection";
import MissaoSection from "../components/MissaoSection";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
