import { useId } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import { AppStoreLink } from '@/components/AppStoreLink'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoElEspanol from '@/images/logos/elespanol.svg'
import logoUCJC from '@/images/logos/ucjc.svg'
import Girl from '@/images/girl.png'


function BackgroundIllustration(props) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4" />
      <path
        d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
        fill="#A3A3A3"
        stroke="#A3A3A3"
      />
    </svg>
  )
}

export function Hero() {
  return (
    <div className="overflow-hidden py-8 sm:py-16 sm:pb-20 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-3xl sm:leading-tight sm:text-5xl font-medium tracking-tight text-gray-900">
              Conviértete en un periodista 360 con el <b>Máster de Periodismo</b> de EL ESPAÑOL
            </h1>
            <p class="mt-6 text-lg text-gray-600">El Máster en Periodismo EL ESPAÑOL + UCJC te preparará para convertirte en un periodista demandado. Desde el primer día estarás integrado en la redacción de El Español, el medio nativo digital líder. <b>Abierto el plazo de inscripción.</b></p>
            {/* <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <Button href="#" className="hidden lg:block uppercase">
                Más información
              </Button>
               <Button
                href="https://www.youtube.com/watch?v=HGXz2QbfgmM"
                variant="outline"
              >
                <PlayIcon className="h-6 w-6 flex-none" />
                <span className="ml-2.5">Así es el máster</span>
              </Button>
            </div> */}
            
       
            <Button className="uppercase font-bold mt-8 tracking-tight" data-tf-live="01HXC1JBJYHRBXJ2DDGFE5WS83">MÁS INFORMACIÓN</Button><script src="//embed.typeform.com/next/embed.js"></script>

            
          </div>
          <div className="relative mb-20 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="opacity-40 sm:opacity-100 absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="hidden sm:block -mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <Image src={Girl} alt="Girl" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
            <p className="text-center text-sm font-semibold text-gray-900 lg:text-left uppercase">
              Un máster de
            </p>
            <ul
              role="list"
              className="mx-auto mt-4 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 md:justify-start"
            >
              {[
                ['El Español', logoElEspanol, 'h-10'],
                ['UJC', logoUCJC, 'h-10'],
              ].map(([name, logo, className]) => (
                <li key={name} className={clsx('flex', className)}>
                  <Image src={logo} alt={name} unoptimized width={200} />
                </li>
              ))}
            </ul>
            
          </div>
        </div>
      </Container>
    </div>
  )
}
