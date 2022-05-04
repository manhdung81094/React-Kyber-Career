import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/header.js';
import Footer from './pages/footer.js';
import Content from './pages/index/content'
import Team from './pages/index/team.js'
import Jobs from './pages/index/job.js'
import Detail from './pages/index/detail.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/React-Kyber-Career" element={<Content />} />
          <Route path="/" element={<Content />} />
          <Route path="/team" element={<Team />} />
          <Route path="/culture" element={<Team />} />
          <Route path="/job" element={<Jobs />} />
          <Route path="/blog" element={<Team />} />
          <Route path="/gallery" element={<Team />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
