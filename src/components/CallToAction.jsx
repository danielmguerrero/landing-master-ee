import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from './Button'

export function CallToAction() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Precios y ayudas
          </h2>
          <p className="mt-4 text-bold text-lg text-gray-300">
            Te enviaremos al correo electrónico toda la información sobre precios y ayudas disponibles.
          </p>
          <Button className="uppercase font-bold mt-8 tracking-tight" data-tf-live="01HXC1JBJYHRBXJ2DDGFE5WS83">MÁS INFORMACIÓN</Button><script src="//embed.typeform.com/next/embed.js"></script>
        </div>
      </Container>
    </section>
  )
}
