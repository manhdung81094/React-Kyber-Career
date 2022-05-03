import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './pages/header.js';
import Footer from './pages/footer.js';
import Content from './pages/index/content'
import Team from './pages/index/team'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
