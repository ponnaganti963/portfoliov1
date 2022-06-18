
import './App.css';
import {Routes, Route} from 'react-router-dom';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Invaled from './components/invalid_page';
import Projects from './components/projects/Projects';



function App() {

  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Invaled />} />
    </Routes>
    <Footer /> 
    </>
  );
}

export default App;
