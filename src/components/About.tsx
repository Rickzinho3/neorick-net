
import React from 'react';
import { Button } from "@/components/ui/button";

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 px-6 bg-gradient-to-b from-white to-gray-100 dark:from-neoinfo-dark dark:to-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sobre o <span className="text-neoinfo-purple">NeoInfo</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              O NeoInfo nasceu da necessidade de uma ferramenta de monitoramento de sistema que fosse ao mesmo tempo poderosa e visualmente atraente. Desenvolvido por entusiastas de tecnologia, nosso software combina funcionalidade com estética para proporcionar uma experiência única.
            </p>
            <p className="text-muted-foreground mb-6">
              Utilizando Python e bibliotecas modernas como psutil, WMI e rich, criamos uma solução que permite visualizar detalhadamente o desempenho do seu sistema com uma interface elegante e intuitiva.
            </p>
            <p className="text-muted-foreground mb-8">
              Nossa missão é tornar o monitoramento de sistema acessível a todos, desde usuários comuns até profissionais de TI, fornecendo informações precisas em um formato fácil de entender.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-neoinfo-purple hover:bg-opacity-90 text-white">
                Saiba Mais
              </Button>
              <Button variant="outline" className="border-neoinfo-purple text-neoinfo-purple hover:bg-neoinfo-purple/10">
                Contato
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-neoinfo-darkgray p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                Código Aberto
              </h3>
              <p className="text-muted-foreground">
                NeoInfo é um projeto de código aberto, o que significa que qualquer um pode contribuir para o seu desenvolvimento ou adaptá-lo às suas necessidades específicas.
              </p>
            </div>
            
            <div className="bg-white dark:bg-neoinfo-darkgray p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </span>
                Compatibilidade
              </h3>
              <p className="text-muted-foreground">
                Projetado para funcionar em diferentes sistemas operacionais, garantindo que você possa monitorar seu sistema independentemente da plataforma que utiliza.
              </p>
            </div>
            
            <div className="bg-white dark:bg-neoinfo-darkgray p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </span>
                Baixo Consumo
              </h3>
              <p className="text-muted-foreground">
                Desenvolvido para ser leve e eficiente, o NeoInfo não sobrecarrega seu sistema enquanto o monitora, garantindo um desempenho ótimo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
