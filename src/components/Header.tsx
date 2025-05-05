
import React from 'react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 flex justify-between items-center w-full">
      <div className="flex items-center">
        <h1 className="font-mono font-bold text-2xl text-neoinfo-purple">NeoInfo</h1>
      </div>
      <nav className="hidden md:flex space-x-6 items-center">
        <a href="#recursos" className="text-foreground hover:text-neoinfo-purple transition-colors">Recursos</a>
        <a href="#tecnologias" className="text-foreground hover:text-neoinfo-purple transition-colors">Tecnologias</a>
        <a href="#sobre" className="text-foreground hover:text-neoinfo-purple transition-colors">Sobre</a>
        <Button className="bg-neoinfo-purple hover:bg-opacity-90 text-white">Download</Button>
      </nav>
      <div className="md:hidden">
        <Button variant="ghost" className="text-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </Button>
      </div>
    </header>
  );
};

export default Header;
