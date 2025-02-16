import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./style/globalStyle.css";
import ServicosPage from "./pages/ServicosPage";
import UnidadesAssistenciais from "./pages/UnidadesAssistenciais";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NewsList from "./components/NewsList/NewsList";
import { newsData } from "./data/newsData";
import NewsDetails from "./pages/NewsDetails";
import UnidadeDetails from "./pages/UnidadeDetails";

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<ServicosPage />} />
          <Route path="/news" element={<NewsList newsData={newsData} />} />
          <Route path="/news/:id" element={<NewsDetails />} />

          <Route path="/unidades" element={<UnidadesAssistenciais />} />
          <Route path="/unidade/:id" element={<UnidadeDetails />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
