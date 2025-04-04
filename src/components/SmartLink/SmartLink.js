import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Exemplo de um link que, ao clicar:
//  - Se estiver na mesma rota, scroll to top
//  - Senão, navega e faz scroll to top
function SmartLink({ to, children, ...rest }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();

    if (location.pathname === to) {
      // Se já estou na rota, apenas scroll para o topo
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Se não estou na rota, navegue e depois role ao topo
      navigate(to);
      // Opcionalmente, se quiser rolar ao topo após a navegação
      // window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

export default SmartLink;
