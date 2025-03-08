import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./style/globalStyle.css";
import ServicosPage from "./pages/ServicosPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { newsData } from "./data/newsData";
import UnidadesAssistenciaisPage from "./pages/UnidadesAssistenciaisPage";
import UnidadeDetailsPage from "./pages/UnidadeDetailsPage";
import NewsDetailsPage from "./pages/NewsDetailsPage";
import NewsListPage from "./pages/NewsListPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import OrganogramaPage from "./pages/OrganogramaPage";
import ProjetosPage from "./pages/ProjetosPage";
import DoacoesPage from "./pages/DoacoesPage";
import HistoriaPage from "./pages/HistoriaPage";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/historia" element={<HistoriaPage />} />
          <Route path="/quem-somos" element={<AboutPage />} />
          <Route path="/servicos" element={<ServicosPage />} />
          <Route path="/projetos" element={<ProjetosPage />} />
          <Route path="/organograma" element={<OrganogramaPage />} />
          <Route
            path="/noticias"
            element={<NewsListPage newsData={newsData} />}
          />
          <Route path="/noticias/:id" element={<NewsDetailsPage />} />

          <Route path="/unidades" element={<UnidadesAssistenciaisPage />} />
          <Route path="/unidade/:id" element={<UnidadeDetailsPage />} />
          <Route path="/doacoes" element={<DoacoesPage />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
