import React from 'react';
import { Button } from '@/components/ui/button';
import { Waves, Sun } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-20 bg-gradient-to-br from-marine-50 to-marine-100">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Contenu texte */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-marine-900">
              Appartement sur Lagune & Plage avec Piscine
              </h2>
              <p className="text-lg text-marine-700 leading-relaxed">
              Grand Studio cabine 27m² dans résidence posée sur un îlot, vue directement sur la Marina et les montagnes des Albères. <br></br>
              Accès direct à la plage Al Trayou via le pont tournant, en véhicule comme à pied. Une magnifique et large plage de sable blanc vous y attend.<br></br>
              La résidence dispose d'une piscine ouverte chaque année du 15/06 au 15/09, local à vélos, terrain de pétanque, et d'une place de parking privée, et sécurisée.<br></br>
              Idéalement situé à 10 mins à pieds des commerces, restaurants et activités.
              </p>
            </div>
            
            {/* Points forts */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Waves className="w-6 h-6 text-marine-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-marine-900 mb-1">À 3 minutes à pied de la plage</h3>
                  <p className="text-marine-700">Ce logement est situé à proximité de : Plage Pont-tournant.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 text-marine-600 mt-1 flex-shrink-0" aria-hidden="true" role="img">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="24" height="24"><path d="M28 2a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2H4v15.5h.19c.37-.04.72-.17 1-.38l.14-.11A3.98 3.98 0 0 1 8 18c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 18c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 18c.99 0 1.94.35 2.67 1 .35.33.83.5 1.33.5v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1v3h.19c.37-.04.72-.17 1-.38l.14-.11A3.98 3.98 0 0 1 8 23c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 23c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 23c.99 0 1.94.35 2.67 1 .35.33.83.5 1.33.5v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1V28h24zm-6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
                </span>
                <div>
                  <h3 className="font-semibold text-marine-900 mb-1">Vue sur : plage et montagne</h3>
                  <p className="text-marine-700">Profitez du panorama pendant votre séjour.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 text-marine-600 mt-1 flex-shrink-0" aria-hidden="true" role="img">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="24" height="24"><path d="M25 2a1 1 0 0 1 .94.65l.03.1 1 4A1 1 0 0 1 26.11 8L26 8h-9v2h-2V8H5v20h3a5 5 0 0 1-.72-4.66l.1-.26 2.52-6.04-1.8-3.6a1 1 0 0 1 .78-1.43L9 12h14a1 1 0 0 1 .94 1.34l-.05.1L22.62 16H24a5 5 0 0 1 5 4.78V25h-2v-4a3 3 0 0 0-2.82-3H22.5l2.12 5.08A5 5 0 0 1 24 28h3v2H4a1 1 0 0 1-1-.88V3a1 1 0 0 1 .88-1H4zM12.65 22a6.64 6.64 0 0 0-2.91.63l-.5 1.22a3 3 0 0 0-.2.68l-.03.23L9 25a3 3 0 0 0 2.82 3h8.19l.23-.01a3 3 0 0 0 2.6-2.02c-1.7-.12-2.93-.67-4.84-1.9l-.37-.23c-2.14-1.4-3.18-1.84-4.98-1.84zm7.68-4h-8.66l-.92 2.19a9.06 9.06 0 0 1 1.9-.19c2.19 0 3.51.52 5.75 1.95l.38.25c1.74 1.13 2.74 1.62 4.03 1.76l-.04-.11zm1.05-4H10.62l1 2h8.76zm2.84-10H5v2h19.72z"></path></svg>
                </span>
                <div>
                  <h3 className="font-semibold text-marine-900 mb-1">Café à domicile</h3>
                  <p className="text-marine-700">Commencez votre matinée du bon pied grâce aux éléments suivants : cafetière filtre et machine à expresso.</p>
                </div>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-marine-600 hover:bg-marine-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://airbnb.fr/h/capmarine66', '_blank')}
            >
              Voir les disponibilités
            </Button>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTAzNjg4ODAxNDA2MjMyNjEx/original/f3309537-0fe7-43fb-bfdd-d64e37634fed.jpeg?im_w=1200" 
                srcSet="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTAzNjg4ODAxNDA2MjMyNjEx/original/f3309537-0fe7-43fb-bfdd-d64e37634fed.jpeg?im_w=480 480w, https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTAzNjg4ODAxNDA2MjMyNjEx/original/f3309537-0fe7-43fb-bfdd-d64e37634fed.jpeg?im_w=800 800w, https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTAzNjg4ODAxNDA2MjMyNjEx/original/f3309537-0fe7-43fb-bfdd-d64e37634fed.jpeg?im_w=1200 1200w"
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="Intérieur élégant de Cap Marine 66" 
                className="w-full h-48 xs:h-64 sm:h-80 md:h-[500px] object-cover object-center rounded-2xl"
                loading="lazy"
                style={{ imageRendering: 'auto' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-marine-900/20 to-transparent"></div>
              {/* Bulle rectangulaire arrondie centrée en bas, en superposition sur l'image */}
              <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 bottom-4 bg-white/90 px-6 py-3 rounded-xl shadow-lg border border-marine-100 items-center justify-center">
                <span className="text-marine-700 font-semibold text-base text-center">Un des logements préférés des voyageurs sur Airbnb</span>
              </div>
            </div>
            
            {/* Badge flottant */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white rounded-full p-3 sm:p-6 shadow-lg animate-float min-w-[60px] min-h-[60px] flex items-center justify-center">
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-marine-600 leading-tight">4.82</div>
                <div className="text-xs sm:text-sm text-marine-500">★★★★★</div>
                <div className="text-[10px] sm:text-xs text-marine-400">Coup de coeur</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
