import React from 'react';
import { Waves, Eye, Tv, Car, WashingMachine, Utensils, WavesLadder } from 'lucide-react';

const AmenitiesSection = () => {
  const amenities = [
    { icon: Eye, title: 'Vues panoramiques', description: 'Vue mer, plage, canal, port et montagne' },
    { icon: Waves, title: 'Salle de bain complète', description: 'Baignoire, douche extérieure, sèche-cheveux, eau chaude' },
    { icon: WashingMachine, title: 'Lave-linge gratuit', description: 'Machine à laver disponible dans le logement' },
    { icon: Utensils, title: 'Cuisine équipée', description: 'Réfrigérateur, micro-ondes, plaques, vaisselle, etc.' },
    { icon: Car, title: 'Parking gratuit', description: 'Place de stationnement sécurisée sur place' },
    { icon: Tv, title: 'Télévision', description: 'TV écran plat pour vos moments de détente' },
    { icon: Waves, title: 'Front de mer', description: 'Accès direct à la plage et au bord de l\'eau' },
    { icon: WavesLadder, title: 'Piscine commune', description: 'Profitez d\'une piscine partagée pendant votre séjour' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-marine-900 mb-6">
            Équipements & Services
          </h2>
          <p className="text-lg text-marine-600 max-w-2xl mx-auto">
            Tous les conforts modernes pour un séjour parfait dans un cadre d'exception
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {amenities.map((amenity, index) => (
            <div 
              key={index} 
              className="group text-center p-6 rounded-xl hover:bg-marine-50 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-marine-100 rounded-full mb-4 group-hover:bg-marine-200 transition-colors duration-300">
                <amenity.icon className="w-8 h-8 text-marine-600" />
              </div>
              <h3 className="font-semibold text-marine-900 mb-2 text-lg">
                {amenity.title}
              </h3>
              <p className="text-marine-600 text-sm leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-2 bg-marine-50 rounded-full px-6 py-3">
            <span className="text-marine-600 font-medium">Et bien plus encore...</span>
            <Waves className="w-5 h-5 text-marine-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
