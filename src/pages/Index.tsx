
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Technologies from '@/components/Technologies';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Notification from '@/components/Notification';
import { useState } from 'react';

const Index = () => {
  const[showNotification, setShowNotification] = useState(false);

  return (
    <div className="min-h-screen bg-neoinfo-dark text-white">
      <Header onDownloadClick={() => setShowNotification(true)}/>
      <main>
        <Hero onDownloadClick={() => setShowNotification(true)}/>
        <Features />
        <Technologies />
        <About />
        <Notification visible={showNotification} onClose={() => setShowNotification(false)}/>
      </main>
      <Footer onDownloadClick={() => setShowNotification(true)}/>
    </div>
  );
};

export default Index;
