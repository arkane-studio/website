import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AlgorithmsPage from './pages/AlgorithmsPage';
import InvestmentsPage from './pages/InvestmentsPage';
import AutomationPage from './pages/AutomationPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black text-white">
        <Navbar />
        <main className="flex-grow bg-black">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/algorithms" element={<AlgorithmsPage />} />
            <Route path="/investments" element={<InvestmentsPage />} />
            <Route path="/automation" element={<AutomationPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
