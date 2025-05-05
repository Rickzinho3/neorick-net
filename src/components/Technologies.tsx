
import React from 'react';
import { Separator } from "@/components/ui/separator";

const Technologies: React.FC = () => {
  return (
    <section id="tecnologias" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Construído com <span className="text-neoinfo-purple">Tecnologias Modernas</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="order-2 md:order-1">
            <div className="terminal-window h-full">
              <div className="bg-black px-4 py-2 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-gray-400 text-xs font-mono">requirements.txt</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <pre className="text-neoinfo-cyan whitespace-pre-wrap">
{`# NeoInfo - Requisitos
python>=3.8.0
psutil==5.9.0
wmi==1.5.1
rich==12.5.1
colorama==0.4.6
py-cpuinfo==8.0.0
GPUtil==1.4.0
matplotlib==3.5.3
`}
                </pre>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold">Python</h3>
              </div>
              <p className="text-muted-foreground">
                A base de todo o projeto, Python oferece uma sintaxe limpa e bibliotecas poderosas para desenvolvimento rápido e eficiente. Utilizamos Python 3.8+ para garantir compatibilidade com as tecnologias mais recentes.
              </p>
            </div>
            
            <Separator className="my-6" />
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold">psutil</h3>
              </div>
              <p className="text-muted-foreground">
                Uma biblioteca multiplataforma para recuperar informações sobre processos em execução e utilização do sistema. Utilizamos para coletar dados sobre CPU, memória, discos e rede em tempo real.
              </p>
            </div>
            
            <Separator className="my-6" />
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold">WMI</h3>
              </div>
              <p className="text-muted-foreground">
                Windows Management Instrumentation (WMI) é usado para acessar informações detalhadas do hardware em sistemas Windows, permitindo coletar dados específicos não disponíveis através de outras bibliotecas.
              </p>
            </div>
            
            <Separator className="my-6" />
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-pink-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold">Rich</h3>
              </div>
              <p className="text-muted-foreground">
                Biblioteca para formatação de texto rica no terminal, permitindo criar interfaces de linha de comando elegantes com cores, estilos, tabelas e muito mais, proporcionando uma experiência visual impressionante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
