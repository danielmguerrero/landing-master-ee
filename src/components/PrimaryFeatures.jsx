'use client'

import { Fragment, useEffect, useId, useRef, useState } from 'react'

import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'


const faqs = [
  {
    question: "MÓDULO I - EN LA REDACCIÓN. Así funciona un periódico",
    answer: "En este módulo exploraremos cómo se escribe y titula en diferentes géneros periodísticos, desentrañando los secretos y habilidades necesarios para cada uno. También analizaremos cómo un medio de comunicación puede posicionar su contenido a través de estrategias de SEO (Optimización de Motores de Búsqueda) para alcanzar una mayor audiencia. Además, abordaremos métodos efectivos para monetizar una empresa periodística, considerando diversas opciones y enfoques."
  },
  {
    question: "MÓDULO II - PERIODISMO DE INVESTIGACIÓN",
    answer: "Nos centramos en las diversas fuentes utilizadas en el periodismo contemporáneo, incluyendo el periodismo de datos, el enfoque contra la desinformación (antibulos) y el énfasis en la transparencia informativa. Se analiza el papel crucial de estas fuentes en la generación de contenido periodístico de calidad y en la construcción de una narrativa confiable y precisa. Además, se examinan los principios éticos fundamentales que guían la práctica del periodismo, explorando cuestiones relacionadas con la objetividad, la veracidad y la responsabilidad profesional en la difusión de información."
  },
  {
    question: "MÓDULO III - PERIODISMO MULTIMEDIA DIGITAL. Nuevos y viejos formatos",
    answer: "En este módulo adquirirás el dominio de formatos y herramientas para ser un periodista multimedia. Dividido en cuatro partes con clases muy prácticas: Podcast, Inteligencia Artificial, Redes Sociales e Influencers y la Cámara, desde el vídeo a los drones."
  },
  {
    question: "MÓDULO IV - TELEVISIÓN Y RADIO",
    answer: "Dedicado exclusivamente a la Radio y la Televisión. Producción y redacción de contenidos audiovisuales, destacando la importancia de habilidades como la locución y la improvisación. Una inmersión con profesionales de estos medios en el MediaLab de la UCJC."
  },
  {
    question: "MÓDULO V - EMPLEABILIDAD. Nuevas ventanas de trabajo",
    answer: "Conocerás en cinco intensas Máster Class, dirigidas por comunicadores relevantes, cómo se puede triunfar en la profesión sin trabajar en una redacción."
  },
  {
    question: "MÓDULO VI - PRÁCTICAS",
    answer: "Seis meses de prácticas remuneradas en EL ESPAÑOL. Tras finalizar el Máster con el periodo de prácticas, serán contratados al menos dos de los mejores alumnos."
  },
  {
    question: "MÓDULO VII - TRABAJO FIN DE MÁSTER",
    answer: "El TFM consistirá en un gran reportaje exclusivo, en formato libre, que será publicado en EL ESPAÑOL si tiene el nivel periodístico adecuado."
  },

]

export function PrimaryFeatures() {
  return (
    <section id="features" className="bg-gray-900 pb-2 sm:py-18">
      <Container>
        <div className="flex flex-col items-center mb-16">
        <div className="mt-16 divide-gray-600 grid max-w-xl">
          <div className="pr-4">
            <h2 className="text-4xl font-medium tracking-tight text-white">Aprenderás todo lo necesario para trabajar en una redacción</h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-600">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-yellow-300">
                          <span className="text-base font-semibold leading-7">{faq.question}</span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            ) : (
                              <PlusSmallIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-300">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
        </div>


      </Container>
      
    </section>
  )
}
