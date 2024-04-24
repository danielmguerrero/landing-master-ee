import { useId } from 'react'
import Image from 'next/image'

import { Container } from '@/components/Container'

import PedroJ from '@/images/teachers/pedroj.jpeg'
import Mellado from '@/images/teachers/mellado.png'
import Arturo from '@/images/teachers/arturo.png'
import Mario from '@/images/teachers/mario.png'


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
    contrast: 'grayscale(1) contrast(1.3) brightness(1.1)',
  },
  {
    name: 'Arturo Criado',
    role: 'Subdirector de Invertia',
    imageUrl: Arturo,
    contrast: 'grayscale(1) brightness(1.1)',
  },
  {
    name: 'Mario Díaz',
    role: 'Director Adjunto EL ESPAÑOL',
    imageUrl: Mario,
    contrast: 'grayscale(1) brightness(1.1)',
  },
]

export function Teachers() {
  let id = useId()

  return (
    <Container className="py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {teachers.map((teacher) => (
          <div key={teacher.name} className="flex flex-col items-center">
            <Image src={teacher.imageUrl} alt={teacher.name} className="rounded-full w-50 h-50 object-cover" style={{ filter: teacher.contrast,  width: '200px', height: '200px'}} />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold">{teacher.name}</h3>
              <p className="text-gray-500">{teacher.role}</p>
            </div>
          </div>
        ))}
      </div>
  
    </Container>
  )
}