
import React from 'react';

type FooterProps = {
  onDownloadClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onDownloadClick }) => {
  return (
    <footer className="bg-neoinfo-darkgray text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-mono font-bold text-2xl text-neoinfo-purple mb-4">NeoRick</h3>
            <p className="text-gray-300 mb-6">
              Ferramenta de monitoramento de sistema em terminal, com visual moderno e recursos detalhados.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Rickzinho3" className="text-gray-400 hover:text-neoinfo-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="https://www.instagram.com/henrique.ilf" className="text-gray-400 hover:text-neoinfo-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a onClick={() => alert("Rede social ainda não disponível.")} href="" className="text-gray-400 hover:text-neoinfo-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="https://github.com/Rickzinho3/neorick" className="text-gray-300 hover:text-neoinfo-purple transition-colors">Documentação</a></li>
              <li><a href="/neorick-0.2.0.tar.gz" download onClick={onDownloadClick} className="text-gray-300 hover:text-neoinfo-purple transition-colors">Download</a></li>
              <li><a href="mailto:neorick.network@gmail.com?subject=Contato&body=Olá, gostaria de fazer parte do projeto. Tenho familiaridade com..." className="text-gray-300 hover:text-neoinfo-purple transition-colors">Faça parte do projeto</a></li>
              <li><a href="mailto:neorick.network@gmail.com?subject=Contato&body=Olá, gostaria de reportar um bug: " className="text-gray-300 hover:text-neoinfo-purple transition-colors">Reportar Bug</a></li>
              <li><a href="mailto:neorick.network@gmail.com?subject=Contato&body=Olá, gostaria de solicitar um novo recurso: " className="text-gray-300 hover:text-neoinfo-purple transition-colors">Solicitar Recurso</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neoinfo-purple"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span className="text-gray-300">(55) 9898457-5955</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neoinfo-purple"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span className="text-gray-300">neorick.network@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neoinfo-purple"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span className="text-gray-300">Maranhão, MA - Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 NeoRick. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-neoinfo-purple transition-colors text-sm">Termos de Uso</a>
            <a href="#" className="text-gray-400 hover:text-neoinfo-purple transition-colors text-sm">Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-neoinfo-purple transition-colors text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
