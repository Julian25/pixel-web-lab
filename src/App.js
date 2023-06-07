import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTo from "./components/scrollTo";
import Layout from './components/Layout';
import Home from './Pages/Home';
import DesarrolloWeb from "./Pages/DesarrolloWeb";
import Tienda from "./Pages/Tienda";
import Contacto from './Pages/Contacto';


function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollTo />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/servicios/desarrollo-web" element={<DesarrolloWeb />}></Route>
            <Route path="/servicios/tienda" element={<Tienda />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
