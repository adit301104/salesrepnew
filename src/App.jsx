import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Data from './components/Data';

import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Canada from './components/CanadaForms';
import USA from './components/UsaForms';

// Canadian Forms (English)
import CaForm1 from './CaForms/CaForm1';
import CaForm2 from './CaForms/CaForm2';
import CaForm3 from './CaForms/CaForm3';
import CaForm4 from './CaForms/CaForm4';
import CaForm5 from './CaForms/CaForm5';
import CaForm6 from './CaForms/CaForm6';
import CaForm7 from './CaForms/CaForm7';
import CaForm8 from './CaForms/CaForm8';
import CaForm9 from './CaForms/CaForm9';
import CaForm10 from './CaForms/CaForm10';

// Canadian Forms (French)
import CaForm1Fr from './CaForms/CaForm1Fr';
import CaForm2Fr from './CaForms/CaForm2Fr';
import CaForm3Fr from './CaForms/CaForm3Fr';
import CaForm4Fr from './CaForms/CaForm4Fr';
import CaForm5Fr from './CaForms/CaForm5Fr';
import CaForm6Fr from './CaForms/CaForm6Fr';
import CaForm7Fr from './CaForms/CaForm7Fr';
import CaForm8Fr from './CaForms/CaForm8Fr';
import CaForm9Fr from './CaForms/CaForm9Fr';
import CaForm10Fr from './CaForms/CaForm10Fr';

// US Forms (English only)
import USForm1 from './USForms/USForm1';
import USForm2 from './USForms/USForm2';
import USForm3 from './USForms/USForm3';
import USForm4 from './USForms/USForm4';
import USForm5 from './USForms/USForm5';
import USForm6 from './USForms/USForm6';
import USForm7 from './USForms/USForm7';
import USForm8 from './USForms/USForm8';
import USForm9 from './USForms/USForm9';
import USForm10 from './USForms/USForm10';

function App() {
  return (
    <Router>
      <Routes>
        {/* All routes using the Layout (with Sidebar and Header) */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}>
            <Route path="canada" element={<Canada />} />
            <Route path="usa" element={<USA />} />
            <Route index element={<Canada />} />
          </Route>
          <Route path="/home" element={<Home />}>
            <Route path="canada" element={<Canada />} />
            <Route path="usa" element={<USA />} />
            <Route index element={<Canada />} />
          </Route>
          <Route path="/data" element={<Data />} />
          
          {/* Canadian Forms - English */}
          <Route path="/CaForm1" element={<CaForm1 />} />
          <Route path="/CaForm2" element={<CaForm2 />} />
          <Route path="/CaForm3" element={<CaForm3 />} />
          <Route path="/CaForm4" element={<CaForm4 />} />
          <Route path="/CaForm5" element={<CaForm5 />} />
          <Route path="/CaForm6" element={<CaForm6 />} />
          <Route path="/CaForm7" element={<CaForm7 />} />
          <Route path="/CaForm8" element={<CaForm8 />} />
          <Route path="/CaForm9" element={<CaForm9 />} />
          <Route path="/CaForm10" element={<CaForm10 />} />
          
          {/* Canadian Forms - French */}
          <Route path="/CaForm1Fr" element={<CaForm1Fr />} />
          <Route path="/CaForm2Fr" element={<CaForm2Fr />} />
          <Route path="/CaForm3Fr" element={<CaForm3Fr />} />
          <Route path="/CaForm4Fr" element={<CaForm4Fr />} />
          <Route path="/CaForm5Fr" element={<CaForm5Fr />} />
          <Route path="/CaForm6Fr" element={<CaForm6Fr />} />
          <Route path="/CaForm7Fr" element={<CaForm7Fr />} />
          <Route path="/CaForm8Fr" element={<CaForm8Fr />} />
          <Route path="/CaForm9Fr" element={<CaForm9Fr />} />
          <Route path="/CaForm10Fr" element={<CaForm10Fr />} />
          
          {/* US Forms - English */}
          <Route path="/USForm1" element={<USForm1 />} />
          <Route path="/USForm2" element={<USForm2 />} />
          <Route path="/USForm3" element={<USForm3 />} />
          <Route path="/USForm4" element={<USForm4 />} />
          <Route path="/USForm5" element={<USForm5 />} />
          <Route path="/USForm6" element={<USForm6 />} />
          <Route path="/USForm7" element={<USForm7 />} />
          <Route path="/USForm8" element={<USForm8 />} />
          <Route path="/USForm9" element={<USForm9 />} />
          <Route path="/USForm10" element={<USForm10 />} />
        </Route>

        {/* Routes without the Layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* 404 Not Found */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;