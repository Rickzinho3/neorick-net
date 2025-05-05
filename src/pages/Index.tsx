
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Technologies from '@/components/Technologies';
import About from '@/components/About';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-neoinfo-dark text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Technologies />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
