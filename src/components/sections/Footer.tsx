import React from 'react';
import { Waves, MapPin, Star, ExternalLink, Home, Image, Info, List, Map } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-marine-900 text-white py-16 relative overflow-hidden">
      {/* Vagues animées en fond, couvrant tout le footer */}
      <div className="absolute inset-0 pointer-events-none z-0 w-full h-full">
        {/* Vague 1 */}
        <svg
          viewBox="0 0 1440 320"
          className="absolute left-0 top-0 w-full h-full animate-[wave1_10s_linear_infinite]"
          style={{ opacity: 0.32 }}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient1" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0.45" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient1)"
            d="M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z;
                M0,180 C400,120 1040,200 1440,140 L1440,320 L0,320 Z;
                M0,140 C320,200 1120,120 1440,180 L1440,320 L0,320 Z;
                M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z
              "
            />
          </path>
        </svg>
        {/* Vague 2 */}
        <svg
          viewBox="0 0 1440 320"
          className="absolute left-0 top-0 w-full h-full animate-[wave2_14s_linear_infinite]"
          style={{ opacity: 0.22 }}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient2" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0.28" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient2)"
            d="M0,200 C480,100 960,220 1440,180 L1440,320 L0,320 Z"
          >
            <animate
              attributeName="d"
              dur="14s"
              repeatCount="indefinite"
              values="
                M0,200 C480,100 960,220 1440,180 L1440,320 L0,320 Z;
                M0,220 C500,180 940,120 1440,200 L1440,320 L0,320 Z;
                M0,180 C400,160 1040,240 1440,160 L1440,320 L0,320 Z;
                M0,200 C480,100 960,220 1440,180 L1440,320 L0,320 Z
              "
            />
          </path>
        </svg>
        {/* Vague 3 */}
        <svg
          viewBox="0 0 1440 320"
          className="absolute left-0 top-0 w-full h-full animate-[wave3_18s_linear_infinite]"
          style={{ opacity: 0.16 }}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient3" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0.18" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient3)"
            d="M0,240 C600,320 900,80 1440,240 L1440,320 L0,320 Z"
          >
            <animate
              attributeName="d"
              dur="18s"
              repeatCount="indefinite"
              values="
                M0,240 C600,320 900,80 1440,240 L1440,320 L0,320 Z;
                M0,220 C700,200 800,300 1440,220 L1440,320 L0,320 Z;
                M0,260 C500,180 1000,120 1440,260 L1440,320 L0,320 Z;
                M0,240 C600,320 900,80 1440,240 L1440,320 L0,320 Z
              "
            />
          </path>
        </svg>
      </div>
      <div className="container mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 sm:gap-8 mb-8">
          {/* Logo et description */}
          <div className="lg:col-span-1 flex flex-col items-center text-center gap-4 border-b border-marine-800 pb-6 md:border-0 md:pb-0 md:items-start md:text-left">
            <div className="flex items-center justify-center space-x-2 mb-2 md:mb-4">
              <Waves className="w-6 h-6 md:w-8 md:h-8 text-marine-300" />
              <h3 className="font-playfair text-xl md:text-2xl font-bold">Cap Marine 66</h3>
            </div>
            <p className="text-marine-300 leading-relaxed text-sm md:text-base mb-2 md:mb-4">
              Studio premium à St-Cyprien, Pyrénées-Orientales.<br />
              Vue lagune, plage et montagne. Équipements haut de gamme pour un séjour inoubliable.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-marine-200 text-sm">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">4.82/5</span>
              <span className="text-marine-400">• Coup de coeur voyageurs</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center text-center gap-2 border-b border-marine-800 py-6 md:border-0 md:py-0 md:items-start md:text-left">
            <h4 className="font-semibold text-base md:text-lg mb-2 md:mb-4">Navigation</h4>
            <ul className="space-y-1 md:space-y-2 w-full">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="w-full flex items-center justify-center md:justify-start space-x-1 text-marine-300 hover:text-white transition-colors duration-200 py-2 rounded-md"
                >
                  <Home className="w-4 h-4" />
                  <span>Accueil</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full flex items-center justify-center md:justify-start space-x-1 text-marine-300 hover:text-white transition-colors duration-200 py-2 rounded-md"
                >
                  <Info className="w-4 h-4" />
                  <span>À propos</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('[data-section="gallery"]')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full flex items-center justify-center md:justify-start space-x-1 text-marine-300 hover:text-white transition-colors duration-200 py-2 rounded-md"
                >
                  <Image className="w-4 h-4" />
                  <span>Galerie</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('[data-section="amenities"]')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full flex items-center justify-center md:justify-start space-x-1 text-marine-300 hover:text-white transition-colors duration-200 py-2 rounded-md"
                >
                  <List className="w-4 h-4" />
                  <span>Équipements</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('[data-section="location"]')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full flex items-center justify-center md:justify-start space-x-1 text-marine-300 hover:text-white transition-colors duration-200 py-2 rounded-md"
                >
                  <Map className="w-4 h-4" />
                  <span>Localisation</span>
                </button>
              </li>
              <li>
                <a
                  href="https://airbnb.fr/h/capmarine66"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center md:justify-start space-x-1 text-marine-300 hover:text-white transition-colors duration-200 py-2 rounded-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Réserver</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact et localisation */}
          <div className="flex flex-col items-center text-center gap-2 pt-6 md:pt-0 md:items-start md:text-left">
            <h4 className="font-semibold text-base md:text-lg mb-2 md:mb-4">Localisation</h4>
            <div className="space-y-2 md:space-y-3 w-full">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <MapPin className="w-4 h-4 text-marine-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-marine-300 text-sm">St-Cyprien, Pyrénées-Orientales</p>
                  <p className="text-marine-400 text-xs">France</p>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-6 w-full flex justify-center md:justify-start">
              <a
                href="https://airbnb.fr/h/capmarine66"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center space-x-2 bg-marine-600 hover:bg-marine-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Réserver</span>
              </a>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-marine-700 pt-8">
          {/* Desktop/tablette : compact, Mobile : chaque info sur sa ligne */}
          <div className="hidden sm:flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 w-full">
            <div className="flex items-center space-x-2 text-marine-400 text-sm">
              <span>© {currentYear} Cap Marine 66. Tous droits réservés.</span>
              <span className="text-marine-500">fait avec</span>
              <span className="text-red-500">♥</span>
              <span className="text-marine-500">par {'< >'} <a href="https://404studio.fr" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">404Studio</a></span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-marine-400">
              <span>Hébergement vérifié Airbnb</span>
              <a href="/sitemap.xml" className="sr-only" tabIndex={-1}>Sitemap</a>
              <a href="/robots.txt" className="sr-only" tabIndex={-1}>Robots.txt</a>
            </div>
          </div>
          <div className="flex flex-col sm:hidden items-center text-center text-xs text-marine-400 gap-2 w-full">
            <div>© {currentYear} Cap Marine 66. Tous droits réservés.</div>
            <div className="flex items-center justify-center gap-1">
              <span>fait avec</span>
              <span className="text-red-500">♥</span>
              <span>par <a href="https://404studio.fr" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">{'< >'} 404Studio</a></span>
            </div>
            <div>Hébergement vérifié Airbnb</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
