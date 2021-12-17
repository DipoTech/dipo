import './App.css';
import Nav from './components/header/Nav';
import Hero from './components/hero/Hero';
import Services from './components/serv/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Career from './components/career/Career';

function App() {
  return (
    <div className="App">
    
        <Nav />
        <Hero />
        <Services />
        <About />
        <Career />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
