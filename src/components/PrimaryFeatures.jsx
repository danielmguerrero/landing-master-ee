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
    answer: "Redes sociales: más allá del entretenimiento. Periodismo e influencers."
  },
  {
    question: "MÓDULO IV - TELEVISIÓN, RADIO Y CÁMARA",
    answer: "Producción y redacción de contenido para medios audiovisuales, destacando la importancia de habilidades como la locución y la improvisación. Se explora el papel crucial de la cámara como aliado del periodista, resaltando su uso adecuado y la autonomía necesaria para su manejo. Además, se analiza el cine como un género periodístico en sí mismo, examinando su capacidad para informar y generar conciencia sobre diversos temas de interés periodístico a través de películas documentales y de ficción."
  },
  {
    question: "MÓDULO V - EMPLEABILIDAD. Nuevas ventanas de trabajo",
    answer: "Ser periodista sin trabajar en una redacción. Así se inventaron los mejores."
  },
  {
    question: "MÓDULO VI - PRÁCTICAS",
    answer: "Seis meses de prácticas remuneradas en EL ESPAÑOL."
  },
  {
    question: "MÓDULO VII - TRABAJO FIN DE MÁSTER",
    answer: "Redes sociales: más allá del entretenimiento. Periodismo e influencers."
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
