import { useId } from 'react'

import { Container } from '@/components/Container'
import { AcademicCapIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Inicio',
    description: 'Octubre de 2024',
    icon: AcademicCapIcon,
  },
  {
    name: 'Duración',
    description: '1 curso (9 meses)',
    icon: AcademicCapIcon,
  },
  {
    name: 'Créditos',
    description: '90 créditos ECTS',
    icon: AcademicCapIcon,
  },
  {
    name: 'Modalidad',
    description: 'Presencial',
    icon: AcademicCapIcon,
  },
  {
    name: 'Idioma',
    description: 'Español',
    icon: AcademicCapIcon,
  },
  {
    name: 'Campus',
    description: 'UCJC Castellana (Madrid)',
    icon: AcademicCapIcon,
  },
]


export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="pb-20 sm:pb-16"
    >
      <Container>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-6 text-sm sm:mt-20 sm:grid-cols-3 md:gap-y-10 lg:max-w-none lg:grid-cols-6"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 p-6"
            >
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-4 font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
