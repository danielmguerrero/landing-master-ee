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
