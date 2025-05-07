
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { FaDownload } from 'react-icons/fa';

type HeaderProps = {
    onDownloadClick: () => void;
};

const Header: React.FC<HeaderProps> = ({ onDownloadClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 px-6 flex justify-between items-center w-full bg-neoinfo-darkgray/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex items-center">
        <h1 className="font-mono font-bold text-2xl text-neoinfo-purple">NeoRick</h1>
      </div>
      <nav className="hidden md:flex space-x-6 items-center">
        <a href="#recursos" className="text-white hover:text-neoinfo-purple transition-colors">Recursos</a>
        <a href="#tecnologias" className="text-white hover:text-neoinfo-purple transition-colors">Tecnologias</a>
        <a href="#sobre" className="text-white hover:text-neoinfo-purple transition-colors">Sobre</a>
        <a href="/neorick-0.2.0.tar.gz" download><Button onClick={onDownloadClick} className="bg-neoinfo-purple hover:bg-opacity-90 text-white"><FaDownload/> Download</Button></a>
      </nav>
      
      <div className="md:hidden">
        <Button 
          variant="ghost" 
          className="text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </Button>
      </div>
      
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-neoinfo-darkgray border-t border-gray-800 py-4 px-6 md:hidden">
          <div className="flex flex-col space-y-4">
            <a href="#recursos" className="text-white hover:text-neoinfo-purple transition-colors">Recursos</a>
            <a href="#tecnologias" className="text-white hover:text-neoinfo-purple transition-colors">Tecnologias</a>
            <a href="#sobre" className="text-white hover:text-neoinfo-purple transition-colors">Sobre</a>
            <a href="/neorick-0.2.0.tar.gz" download><Button onClick={onDownloadClick} className="bg-neoinfo-purple hover:bg-opacity-90 text-white w-full"><FaDownload/> Download</Button></a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
