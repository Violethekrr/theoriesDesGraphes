import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./components/layout";
import Accueil from "./pages/Accueil";
import Algorithmique from "./pages/Algorithmique";
import Fondations from "./pages/Fondations";
import Typologie from "./pages/Typologie";
import Proprietes from "./pages/Proprietes";
import Interactive from "./pages/Interactive";
import Applications from "./pages/Applications";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/fondations" element={<Fondations />} />
          <Route path="/typologies" element={<Typologie />} />
          <Route path="/proprietes" element={<Proprietes />} />
          <Route path="/algorithmique" element={<Algorithmique />} />
          <Route path="/applications" element={<Applications/>} />
          <Route path="/interaction" element={<Interactive />} />
        </Routes>
      </Layout>
    </Router>
   

  );
};

export default App;
