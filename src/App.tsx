import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
