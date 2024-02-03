import React from 'react';

import Header from "./components/header/header";
import Nav from "./components/nav/Nav";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Portfolio from './components/portfolio/portfolio';
import Testimonial from './components/testimonial/testimonial';
import Contact from './components/contact/contact'; // Corrected casing
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App