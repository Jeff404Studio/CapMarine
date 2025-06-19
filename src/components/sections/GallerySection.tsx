import React from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import AutoScroll from 'embla-carousel-auto-scroll';
import { Star, Home, CheckCircle, LogIn, MessageCircle, MapPin, Tag } from 'lucide-react';

const GallerySection = () => {
  const images = [
    {
      url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTAzNjg4ODAxNDA2MjMyNjEx/original/18b2fede-538d-4c04-9baa-85062473a2e9.jpeg?im_w=720',
      alt: 'Vue principale du salon et terrasse'
    },
    {
      url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTAzNjg4ODAxNDA2MjMyNjEx/original/279a41f7-54d1-402d-bc76-65339cab4449.jpeg?im_w=720',
      alt: 'Vue sur la résidence et la mer'
    },
    {
      url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTAzNjg4ODAxNDA2MjMyNjEx/original/3566cb59-d3b8-48b3-952c-9236e4b9fe1e.jpeg?im_w=720',
      alt: 'Vue panoramique depuis la terrasse'
    },
    {
      url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTAzNjg4ODAxNDA2MjMyNjEx/original/c674a3d0-89db-40f8-b1d1-80baa7711ece.jpeg?im_w=1200',
      alt: 'Espace repas extérieur'
    },
    {
      url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTAzNjg4ODAxNDA2MjMyNjEx/original/1fcea7f4-c22a-4176-898b-e7071e53c827.jpeg?im_w=720',
      alt: 'Terrasse extérieure aménagée'
    },
    {
      url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTAzNjg4ODAxNDA2MjMyNjEx/original/d8cea6f4-2dbd-44e4-a090-5368746d1953.jpeg?im_w=720',
      alt: 'Chambre lumineuse avec lit double'
    },
    {
      url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTAzNjg4ODAxNDA2MjMyNjEx/original/93a814df-27e2-4769-97b7-10e367dc7602.jpeg?im_w=720',
      alt: 'Chambre supplémentaire avec lits simples'
    },
    {
      url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTAzNjg4ODAxNDA2MjMyNjEx/original/4b886690-4c8b-4fa6-a60d-e9bc57a03525.jpeg?im_w=720',
      alt: 'Cuisine moderne équipée'
    },
    {
      url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTAzNjg4ODAxNDA2MjMyNjEx/original/68c72b52-a951-4645-9f00-f54f646e57e0.jpeg?im_w=720',
      alt: 'Salle de bain contemporaine'
    },
    {
      url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTAzNjg4ODAxNDA2MjMyNjEx/original/bf397178-80fb-4588-afc8-145ed9595071.jpeg?im_w=720',
      alt: 'Coin salon confortable'
    },
    {
      url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTAzNjg4ODAxNDA2MjMyNjEx/original/3edcc861-2d64-4dea-8e23-d6b9dba9809a.jpeg?im_w=720',
      alt: 'Détail de la décoration intérieure'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-marine-900 to-marine-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Découvrez notre studio
          </h2>
          <p className="text-lg text-marine-200 max-w-2xl mx-auto">
            Une sélection d'images pour vous donner un aperçu de la beauté et du confort qui vous attendent.
          </p>
        </div>
        
        <div className="mb-12">
          <Carousel
            opts={{
              loop: true,
              align: 'start',
              slidesToScroll: 1,
              dragFree: true,
              containScroll: false,
            }}
            plugins={[AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: false })]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="flex items-center justify-center min-w-full sm:min-w-[50%] md:min-w-[33%] lg:min-w-[24%] max-w-full sm:max-w-[50%] md:max-w-[33%] lg:max-w-[24%]">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-40 xs:h-56 sm:h-72 object-cover rounded-xl shadow-lg"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-white text-marine-800 hover:bg-marine-50 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://airbnb.fr/h/capmarine66', '_blank')}
          >
            Voir toutes les photos sur Airbnb
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
