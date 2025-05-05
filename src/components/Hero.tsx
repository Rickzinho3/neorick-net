
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Monitore seu sistema com <span className="text-neoinfo-purple">precisão</span> e <span className="text-neoinfo-cyan">estilo</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl">
          Uma ferramenta moderna desenvolvida em Python para visualização detalhada de métricas do seu sistema, com interface elegante e informações em tempo real.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-neoinfo-purple hover:bg-opacity-90 text-white py-6 px-8 text-lg">
            Download Gratuito
          </Button>
          <Button variant="outline" className="border-neoinfo-cyan text-neoinfo-cyan hover:bg-neoinfo-cyan/10 py-6 px-8 text-lg">
            Ver Documentação
          </Button>
        </div>
      </div>
      <div className="flex-1 terminal-window max-w-2xl">
        <div className="bg-black px-4 py-2 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <span className="ml-2 text-gray-400 text-xs font-mono">root @ pwsh in henri</span>
        </div>
        <div className="p-6 font-mono text-sm">
          <div className="flex flex-col gap-4">
            <div className="typing-demo text-neoinfo-purple overflow-hidden whitespace-nowrap">
              &gt; python neoinfo.py
            </div>
            <div className="text-center mb-8">
              <pre className="text-left inline-block text-neoinfo-purple text-xl md:text-2xl">
{`
/\\/ __       _ _      __      
/\\/  /__  ___ (_) /__ / _|___  
/    / _ \\/ _ \\/ /  '_/ _/ _ \\ 
/_/\\_\\___/_//_/_/_/\\_/_/ \\___/ 
`}
              </pre>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-neoinfo-purple">USER</p>
                <p className="text-neoinfo-purple">E-MAIL:</p>
                <p className="text-neoinfo-purple">SISTEMA</p>
                <p className="text-neoinfo-purple">CPU</p>
                <p className="text-neoinfo-purple">GPU</p>
                <p className="text-neoinfo-purple">RAM</p>
                <p className="text-neoinfo-purple">FREE RAM</p>
              </div>
              <div>
                <p className="text-white">HENRIQUE</p>
                <p className="text-white">henriqueferreiraa5660@gmail.com</p>
                <p className="text-white">Microsoft Windows 11 Home</p>
                <p className="text-white">13th Gen Intel(R) Core(TM) i5-13420H</p>
                <p className="text-white">NVIDIA GeForce RTX <span className="text-neoinfo-cyan">4050</span></p>
                <p className="text-neoinfo-cyan">8.00 GB</p>
                <p className="text-neoinfo-cyan">3.00 GB</p>
              </div>
            </div>
            
            <div className="mt-4">
              <p className="text-neoinfo-purple mb-2">CPU -=[<span className="text-neoinfo-purple"> /////////// </span><span className="text-gray-600">////////////////////</span> ]=- <span className="text-neoinfo-purple">11.80%</span></p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "11.8%" }}></div>
              </div>
            </div>
            
            <div className="mt-2">
              <p className="text-neoinfo-purple mb-2">MEMORY -=[<span className="text-neoinfo-purple"> /////////////////////////// </span><span className="text-gray-600">////////</span> ]=- <span className="text-neoinfo-purple">66.60%</span></p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "66.6%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
