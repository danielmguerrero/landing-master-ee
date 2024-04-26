import Image from 'next/image'
import Link from 'next/link'


import { Container } from '@/components/Container'
import logoElEspanol from '@/images/logos/elespanol.svg'

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>

        <div className="flex flex-col items-center justify-center py-8">

            <a>
              <Image
                src={logoElEspanol}
                alt="El Español"
                width={120}
                height={30}
              />
            </a>

          <p className="text-sm text-gray-600 mt-4">
            © {new Date().getFullYear()} El Español. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  )
}
