import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Car, Waves } from 'lucide-react';

const LocationSection = () => {
  const nearbyAttractions = [
    { name: 'Plage principale', distance: '2 min à pied', icon: Waves },
    { name: 'Centre-ville', distance: '5 min en voiture', icon: Car },
    { name: 'Restaurants locaux', distance: '3 min à pied', icon: Clock },
    { name: 'Commerces', distance: '10 min en voiture', icon: MapPin },
  ];

  return (
    <section className="py-20 bg-marine-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-marine-900 mb-6">
            Emplacement privilégié
          </h2>
          <p className="text-lg text-marine-600 max-w-2xl mx-auto">
            Idéalement situé dans les Pyrénées-Orientales, Cap Marine 66 vous offre un accès direct aux merveilles de la région
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Carte/Image de localisation */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&h=500" 
                alt="Région des Pyrénées-Orientales" 
                className="w-full h-40 xs:h-56 sm:h-80 md:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-marine-900/30 to-transparent"></div>
            </div>
            
            {/* Badge de localisation */}
            <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg">
              <MapPin className="w-6 h-6 text-marine-600" />
            </div>
          </div>
          
          {/* Informations */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-marine-900 mb-4">
                Au cœur des Pyrénées-Orientales
              </h3>
              <p className="text-marine-700 leading-relaxed mb-6">
                Profitez d'un emplacement exceptionnel qui combine la tranquillité d'un cadre naturel 
                préservé avec la proximité des commodités et attractions touristiques de la région.
              </p>
            </div>
            
            {/* Proximités */}
            <div className="space-y-4">
              <h4 className="font-semibold text-marine-900 text-lg mb-4">À proximité :</h4>
              {nearbyAttractions.map((attraction, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center justify-center w-10 h-10 bg-marine-100 rounded-full">
                    <attraction.icon className="w-5 h-5 text-marine-600" />
                  </div>
                  <div>
                    <span className="font-medium text-marine-900">{attraction.name}</span>
                    <span className="text-marine-600 ml-2">• {attraction.distance}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full bg-marine-600 hover:bg-marine-700 text-white font-semibold py-3 rounded-full transition-all duration-300"
                onClick={() => window.open('https://airbnb.fr/h/capmarine66', '_blank')}
              >
                Réserver votre séjour
              </Button>
              
              <p className="text-sm text-marine-500 text-center">
                Réservation instantanée • Annulation flexible 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
