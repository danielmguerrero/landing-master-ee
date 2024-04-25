import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Teachers } from '@/components/Teachers'
import { Video } from '@/components/Video'

export default function Home() {
  return (
    <>
      <Hero />
      <SecondaryFeatures />  
      <PrimaryFeatures /> 
      <Teachers />  
      <Video />
      <CallToAction />
      <Reviews />
      <Faqs />
    </>
  )
}
