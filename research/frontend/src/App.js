import { BrowserRouter, Routes, Route} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Header from './components/layouts/Header';
import Nav from './components/layouts/Nav';
import Footer from './components/layouts/Footer';

import Principal from './pages/Principal';
import Laboratorio from './pages/Laboratorio';
import Wanted from './pages/Wanted';
import Contacto from './pages/Contacto';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/laboratorio" element={<Laboratorio />} />
        <Route path="/wanted" element={<Wanted />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
