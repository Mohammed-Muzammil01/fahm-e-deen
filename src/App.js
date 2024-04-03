import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Atf from './pages/atf';
import Teachers from './pages/Teachers';
import Blog from './pages/Blog';
import Mission from './pages/Mission';
import Faqs from './pages/Faqs';
import Courses from './pages/Courses';


function App() {
  return (
    <>
      <Header />

      <Navbar />

      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/atf" element={<Atf />} />
          <Route exact path="/teachers" element={<Teachers />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/faqs" element={<Faqs />} />
          <Route exact path="/mission" element={<Mission />} />
          <Route exact path="/blog" element={<Blog />} />
      
        </Routes>
    </Router>

      <footer id="main-footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
