import { useId } from 'react'

import { Container } from '@/components/Container'
import { AcademicCapIcon, ClockIcon, BoltIcon, BuildingOfficeIcon, LanguageIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Inicio',
    description: 'Octubre de 2024',
    icon: BoltIcon,
  },
  {
    name: 'Duración',
    description: '12 meses',
    icon: ClockIcon,
  },
  {
    name: 'Créditos',
    description: '90 créditos ECTS',
    icon: AcademicCapIcon,
  },
  {
    name: 'Modalidad',
    description: 'Presencial',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: 'Idioma',
    description: 'Castellano',
    icon: LanguageIcon,
  },
  {
    name: 'Campus',
    description: 'UCJC Castellana (Madrid)',
    icon: BuildingOfficeIcon,
  },
]


export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="sm:pb-20 pb-12 sm:pb-16"
    >
      <Container>

        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-2 gap-6 text-sm sm:grid-cols-3 md:gap-y-10 lg:max-w-none lg:grid-cols-6"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 p-6"
            >
              <feature.icon className="h-8 w-8" />
              <div className="mt-4 font-semibold text-gray-900">
                {feature.name}
              </div>
              <p className="text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
        <div className='flex justify-center mt-8'>
        <span className="inline-flex items-center rounded-md bg-blue-50 px-4 py-3 text-xs font-medium uppercase">
              Prácticas garantizadas
            </span>
            <p className="text-gray-600 ml-4 pt-2 text-sm">Harás seis meses de prácticas en la redacción de EL ESPAÑOL, tras un periodo similar en el Taller de Periodismo de la Universidad.</p>
        </div>
        
      </Container>
      
    </section>
  )
}
