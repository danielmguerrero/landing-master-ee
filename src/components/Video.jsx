import React from 'react';
import { Container } from './Container';


export function Video() {
  return (
    
    <section id="video" className="bg-black">
      <Container>
      <div className="container py-8">
          <div className="flex items-center justify-center">
            <iframe
              width="100%"
              height="400"
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