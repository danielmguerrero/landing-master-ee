import React from 'react';
import { Container } from './Container';


export function Video() {
  return (
    
    <section id="video" className="bg-black pb-0 sm:pb-16">
      <Container>
      <div className="text-center">
      <div className="pt-16 mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-100">
            Así fue la última promoción 
          </h2>
          <p className="mt-2 text-lg text-gray-400">
          La promoción 23/24 ha sido un gran éxito en el estreno de esta aventura promovida por EL ESPAÑOL para formar cantera para el diario líder de la prensa nacional y para el periodismo en general.
          </p>
        </div>
      </div>
      <div className="py-16 hidden sm:block">
          <div className="flex items-center justify-center">
            <iframe
              width="100%"
              height="480"
              src="https://www.youtube.com/embed/HGXz2QbfgmM?autoplay=true&mute=1&loop=1&playlist=HGXz2QbfgmM&controls=0&showinfo=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
      </div>
      <div className="py-16 sm:hidden">
          <div className="flex items-center justify-center">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/HGXz2QbfgmM?autoplay=true&mute=1&loop=1&playlist=HGXz2QbfgmM&controls=0&showinfo=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
      </div>
      </Container>
    </section>
    
  )
}