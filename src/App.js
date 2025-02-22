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

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicos" element={<ServicosPage />} />
          <Route
            path="/noticias"
            element={<NewsListPage newsData={newsData} />}
          />
          <Route path="/noticias/:id" element={<NewsDetailsPage />} />

          <Route path="/unidades" element={<UnidadesAssistenciaisPage />} />
          <Route path="/unidade/:id" element={<UnidadeDetailsPage />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
