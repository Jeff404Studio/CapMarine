import React from 'react';

const AnnouncementBar = () => {
  const message = (
    <>
      L'appartement est actuellement en vente, par conséquent, il n'est plus disponible sur Airbnb. Consultez l'annonce de vente
      {' '}<a
        href="https://www.leboncoin.fr/ad/ventes_immobilieres/3051886402"
        target="_blank"
        rel="noreferrer noopener"
        className="underline font-semibold"
      >
        ici
      </a>.
    </>
  );

  return (
    <div className="w-full bg-red-600 text-white text-lg md:text-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee">
          <span className="mx-4">{message}</span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;


