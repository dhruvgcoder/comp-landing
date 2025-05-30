import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <main className="flex flex-col min-h-screen bg-black text-white">
        <Hero />
        <Services />
        <Contact />
        <Footer />
      </main>
    </Layout>
  );
}

export default App;