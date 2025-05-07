
import React from 'react';
import  { FaAccessibleIcon, FaAffiliatetheme, FaFeatherAlt, FaStoreAltSlash, FaTools } from 'react-icons/fa';

const Features: React.FC = () => {
  return (
    <section id="recursos" className="py-16 px-6 bg-neoinfo-dark">
      <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
              Recursos <span className="text-neoinfo-purple">Poderosos</span>
            </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-neoinfo-darkgray p-6 rounded-lg border border-gray-700 hover:border-neoinfo-purple transition-colors">
            <div className="h-12 w-12 rounded-lg bg-neoinfo-purple/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neoinfo-purple">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <rect x="6" y="8" width="12" height="3" />
                <path d="M6 16h12" />
                <path d="M6 19h12" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Monitoramento em Tempo Real</h3>
            <p className="text-gray-300">Acompanhe o uso de CPU, memória RAM, GPU e armazenamento com atualizações rápidas diretamente no terminal, utilizando barras visuais estilizadas.</p>
          </div>
          
          <div className="bg-neoinfo-darkgray p-6 rounded-lg border border-gray-700 hover:border-neoinfo-purple transition-colors">
            <div className="h-12 w-12 rounded-lg bg-neoinfo-purple/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neoinfo-purple">
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                <path d="M22 12A10 10 0 0 0 12 2v10z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Visual estilizado</h3>
            <p className="text-gray-300">Inspirado no Neofetch, o NeoRick combina informações detalhadas do sistema com uma apresentação visual atrativa, sem depender de interface gráfica.</p>
          </div>
          
          <div className="bg-neoinfo-darkgray p-6 rounded-lg border border-gray-700 hover:border-neoinfo-purple transition-colors">
            <div className="h-12 w-12 rounded-lg bg-neoinfo-purple/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neoinfo-purple">
                <path d="M12 3v18" />
                <rect width="18" height="12" x="3" y="6" rx="2" />
                <path d="M3 12h18" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Detecção de Hardware</h3>
            <p className="text-gray-300">Exibe automaticamente os principais componentes do sistema, incluindo nome do processador, GPU, arquitetura, rede, armazenamento e muito mais.</p>
          </div>
          
          <div className="bg-neoinfo-darkgray p-6 rounded-lg border border-gray-700 hover:border-neoinfo-purple transition-colors">
            <div className="h-12 w-12 rounded-lg bg-neoinfo-purple/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neoinfo-purple">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Alertas Inteligentes (em planejamento)</h3>
            <p className="text-gray-300">Planejo implementar alertas simples para informar sobre picos de uso ou possíveis gargalos no sistema, diretamente no terminal.</p>
          </div>
          
          <div className="bg-neoinfo-darkgray p-6 rounded-lg border border-gray-700 hover:border-neoinfo-purple transition-colors">
            <div className="h-12 w-12 rounded-lg bg-neoinfo-purple/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neoinfo-purple">
                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                <path d="M3 15v4a2 2 0 0 0 2 2h16v-4" />
                <path d="M18 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                <path d="M6 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Histórico de Desempenho</h3>
            <p className="text-gray-300">O sistema conta com um módulo de histórico de uso, que registra e organiza as atividades realizadas ao longo do tempo. Essa funcionalidade permite acompanhar o desempenho da aplicação de forma contínua.</p>
          </div>
          
          <div className="bg-neoinfo-darkgray p-6 rounded-lg border border-gray-700 hover:border-neoinfo-purple transition-colors">
            <div className="h-12 w-12 rounded-lg bg-neoinfo-purple/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neoinfo-purple">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M3 9h18" />
                <path d="M3 15h18" />
                <path d="M9 3v18" />
                <path d="M15 3v18" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Exportação de Relatórios</h3>
            <p className="text-gray-300">É possível gerar relatórios completos com base nas informações registradas, no formato PDF. Essa funcionalidade facilita a documentação, análise e compartilhamento de dados, atendendo a demandas de auditoria, controle interno e apresentação de resultados.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
