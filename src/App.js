import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./style/globalStyle.css";
import ServicosPage from "./pages/ServicosPage";
import UnidadesAssistenciais from "./pages/UnidadesAssistenciais";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<ServicosPage />} />

          <Route path="/unidades" element={<UnidadesAssistenciais />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
