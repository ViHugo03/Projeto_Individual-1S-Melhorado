import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CadastroPage from './pages/CadastroPage';
import HomePage from './pages/HomePage';
import Sala from './pages/SalaPage';

function App() {
  return (
    <>  
      <Router>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/cadastro" element={<CadastroPage />} />
          <Route exact path="/sala" element={<Sala />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
