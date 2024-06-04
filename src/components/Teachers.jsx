import { useId } from 'react'
import Image from 'next/image'

import { Container } from '@/components/Container'

import PedroJ from '@/images/teachers/pedroj.jpeg'
import Mellado from '@/images/teachers/mellado.png'
import Mario from '@/images/teachers/mario.png'
import Peral from '@/images/teachers/peral.png'
import Puri from '@/images/teachers/puri.png'
import Lina from '@/images/teachers/lina.png'
import Mazariegos from '@/images/teachers/mazariegos.jpg'
import Somoano from '@/images/teachers/somoano.jpg'
import Iglesias from '@/images/teachers/iglesias.png'
import Maldonado from '@/images/teachers/maldonado.png'
import Cerdan from '@/images/teachers/manuel-cerdan.png'


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
    name: 'Julio Somoano',
    role: 'Ex director de Informativos de TVE. Especialista en Radio y TV',
    imageUrl: Somoano,
    contrast: 'grayscale(1) brightness(1.2)',
  },
  {
    name: 'Alberto Iglesias',
    role: 'Especialista en IA en información',
    imageUrl: Iglesias,
    contrast: 'grayscale(1) brightness(1.1)',
  },
  {
    name: 'Puri Beltrán',
    role: 'Autora de "En la Sabana", pódcast diario de EL ESPAÑOL',
    imageUrl: Puri,
    contrast: 'grayscale(1.1) brightness(1.3)',
  },
  {
    name: 'Manuel Cerdán',
    role: 'Doctor en Periodismo, especialista en Investigación',
    imageUrl: Cerdan,
    contrast: 'grayscale(1) contrast(1.1) brightness(1.3)',
  },
  {
    name: 'Lorena G. Maldonado',
    role: 'Periodista de EL ESPAÑOL',
    imageUrl: Maldonado,
    contrast: 'grayscale(1.1) brightness(1)',
  }
  
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
          Una combinación de profesionales en activo. La suma de la experiencia y el conocimiento en las nuevas técnicas y herramientas del periodismo actual.
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