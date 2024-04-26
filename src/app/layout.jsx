import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: {
    template: '%s - EL ESPAÑOL',
    default: 'Máster de Periodismo de EL ESPAÑOL y la Universidad Camilo José Cela',
  },
  description:
    'El Máster en Periodismo EL ESPAÑOL y la UCJC te preparará para ser un referente. Desde el primer día estarás integrado en la redacción de El Español, el medio nativo digital líder.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      <body>{children}</body>
    </html>
  )
}
