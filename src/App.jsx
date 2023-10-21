import { Inicio, Servicios, Portafolio, Blog, Contacto, Whatsbot, Carrito, Brandbot, Webbot } from "@/pages";
import { Layout } from "@/layout";
import React, { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { INICIO, SERVICIOS, PORTAFOLIO, BLOG, CONTACTO, WHATSBOT, CARRITO, BRANDBOT, WEBBOT } from "@/routes/paths";
import "./styles/App.css";

function App() {

  const Wrapper = ({children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <BrowserRouter>
    <Wrapper>
      <Layout>
        <Routes>
          <Route path={INICIO} element={<Inicio />} />
          <Route path={`${INICIO}/inicio`} element={<Inicio />} />
          <Route path={SERVICIOS} element={<Servicios />} />
          <Route path={PORTAFOLIO} element={<Portafolio />} />
          <Route path={BLOG} element={<Blog />} />
          <Route path={CONTACTO} element={<Contacto />} />
          <Route path={WHATSBOT} element={<Whatsbot />} />
          <Route path={CARRITO} element={<Carrito />} />
          <Route path={BRANDBOT} element={<Brandbot />} />
          <Route path={WEBBOT} element={<Webbot />} />
        </Routes>
      </Layout>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;