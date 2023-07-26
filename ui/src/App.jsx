import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CadastroPage from './pages/CadastroPage';
import HomePage from './pages/HomePage';
import SobreNosPage from './pages/SobreNosPage';

function App() {
  return (
    <>  
      <Router>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/cadastro" element={<CadastroPage />} />
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/sobrenos" element={<SobreNosPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
