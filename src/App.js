import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <Projects />
        <About />
        {/* Add other pages or components here */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
