import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: '¿Cuál es el precio del Máster en Periodismo y cuáles son las formas de pago?',
      answer:
        'El precio del Máster en Periodismo es de 9.000€. Ofrecemos diferentes formas de pago, incluyendo pago único, pago fraccionado y financiamiento a través de entidades bancarias.',
    },
    {
      question: '¿Existen ayudas disponibles para el Máster en Periodismo?',
      answer:
        'Sí, ofrecemos diferentes tipos de ayudas para los estudiantes del Máster en Periodismo, como becas académicas, descuentos por mérito y programas de financiamiento.',
    },
    {
      question: '¿Dónde se encuentra ubicado el campus del Máster en Periodismo?',
      answer:
        'Nuestro campus se encuentra en el centro de la ciudad, en una ubicación de fácil acceso y con todas las comodidades necesarias para los estudiantes.',
    },
  ],
  [
    {
      question: '¿Cuál es el horario del Máster en Periodismo?',
      answer:
        'Los seis primeros meses, en el Taller de Periodismo del campus, de lunes a viernes, de 9 a 14.30. Los seis meses siguientes, prácticas en la redacción de EL ESPAÑOL, de lunes a viernes, con horario por determinar.',
    },
    {
      question: '¿Cuándo comienza el Máster en Periodismo?',
      answer:
        'El Máster en Periodismo comienza en octubre de cada año. Las fechas exactas pueden variar, por lo que se recomienda consultar el calendario académico.',
    },
    {
      question: '¿El Máster en Periodismo es propio?',
      answer:
        'Sí, este Master de Periodismo es propio, avalado académicamente por la Universidad Camilo José Cela y profesionalmente por EL ESPAÑOL. Al final el Máster los alumnos recibirán el título.',
    },
  ],
  [
    {
      question: '¿Cómo puedo obtener más información sobre el Máster en Periodismo?',
      answer:
        'Puedes obtener más información sobre el Máster en Periodismo visitando nuestra página web oficial o contactando con nuestro equipo de admisiones. Estaremos encantados de resolver todas tus dudas.',
    },
    {
      question: '¿Cuál es la duración del Máster en Periodismo?',
      answer:
        'El Máster en Periodismo tiene una duración de 1 año académico, dividido en dos semestres. Durante este tiempo, los estudiantes adquieren los conocimientos y habilidades necesarios para destacar en el campo del periodismo.',
    },
    {
      question: '¿Se ofrecen prácticas profesionales durante el Máster en Periodismo?',
      answer:
        'Sí, ofrecemos oportunidades de prácticas profesionales durante el Máster en Periodismo. Trabajamos en colaboración con empresas y medios de comunicación para brindar a los estudiantes una experiencia práctica en el campo del periodismo.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Preguntas frecuentes
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Si tienes alguna pregunta adicional, no dudes en{' '}
            <a
              href="mailto:margarita.gomez@ucjc.edu"
              className="text-gray-900 underline"
            >
              contactar con nosotros
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
