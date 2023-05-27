import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Style from './styles/main.css';
function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <About />
      <Portfolio />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
