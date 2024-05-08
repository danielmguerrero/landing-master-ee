'use client'

import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import Image from 'next/image'

import LogoElEspanol from '@/images/logos/elespanol.svg'


function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink(props) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    />
  )
}

export function Header() {
  return (
    <header className='sticky top-0 bg-white/95 shadow-md z-50'>
  <nav>
    <Container className="relative z-50 flex justify-between py-2">
      <div className="relative z-10 flex items-center gap-16">
        <Link href="/" aria-label="Home">
        <Image src={LogoElEspanol} unoptimized width={120} />
        </Link>
        <div className="hidden lg:flex lg:gap-10">
          <NavLinks />
        </div>
      </div>
      <div className="flex items-center gap-6">
      <Button className="uppercase tracking-tight" data-tf-live="01HXC1JBJYHRBXJ2DDGFE5WS83">MÁS INFORMACIÓN</Button><script src="//embed.typeform.com/next/embed.js"></script>
      </div>
    </Container>
  </nav>
</header>
  )
}
