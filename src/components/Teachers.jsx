import { useId } from 'react'
import Image from 'next/image'

import { Container } from '@/components/Container'

import PedroJ from '@/images/teachers/pedroj.jpeg'
import Mellado from '@/images/teachers/mellado.png'
import Arturo from '@/images/teachers/arturo.png'
import Mario from '@/images/teachers/mario.png'
import Peral from '@/images/teachers/peral.png'
import Puri from '@/images/teachers/puri.png'
import Lina from '@/images/teachers/lina.jpg'
import Mazariegos from '@/images/teachers/mazariegos.jpg'


const teachers = [
  {
    name: 'Pedro J. Ramírez',
    role: 'Presidente y director de EL ESPAÑOL',
    imageUrl: PedroJ,
    contrast: 'brightness(1.1)',
  },
  {
    name: 'Miguel Ángel Mellado',
    role: 'Director del Máster',
    imageUrl: Mellado,
    contrast: 'grayscale(1) contrast(1.3) brightness(1.2)',
  },
  {
    name: 'María Peral',
    role: 'Adjunta al Director de EL ESPAÑOL - Experta en Tribunales',
    imageUrl: Peral,
    contrast: 'grayscale(1) contrast(1.1) brightness(1)',
  },
  {
    name: 'Arturo Criado',
    role: 'Subdirector de Invertia',
    imageUrl: Arturo,
    contrast: 'grayscale(1) brightness(1.2)',
  },
  {
    name: 'Mario Díaz',
    role: 'Director Adjunto de EL ESPAÑOL',
    imageUrl: Mario,
    contrast: 'grayscale(1) brightness(1.1)',
  },
  {
    name: 'Puri Beltrán',
    role: 'Autora de "En la Sabana", pódcast diario de EL ESPAÑOL',
    imageUrl: Puri,
    contrast: 'grayscale(1.1) brightness(1.3)',
  },
  {
    name: 'Lina Smith',
    role: 'Jefa de Arte EL ESPAÑOL',
    imageUrl: Lina,
    contrast: 'grayscale(1) brightness(1.3)',
  },
  {
    name: 'Álvaro Mazariegos',
    role: 'Director Audiencias EL ESPAÑOL',
    imageUrl: Mazariegos,
    contrast: 'grayscale(1) brightness(1.1)',
  },
]

export function Teachers() {
  let id = useId()

  return (
  <section id="teachers">
    <Container className="py-16">
      <div className="mb-16 text-center">
      <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Tus profesores, los mejores periodistas y profesionales del sector 
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            With typical market returns, you have to start young to secure your
            future. With Pocket, it’s never too late to build your nest egg!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {teachers.map((teacher) => (
          <div key={teacher.name} className="flex flex-col items-center">
            <Image src={teacher.imageUrl} alt={teacher.name} className="rounded-full w-50 h-50 object-cover" style={{ filter: teacher.contrast,  width: '150px', height: '150px'}} />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold">{teacher.name}</h3>
              <p className="text-gray-500">{teacher.role}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
    </section>
  )
}