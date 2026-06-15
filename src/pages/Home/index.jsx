import HeroSection from './HeroSection'
import WhyChooseUs from './WhyChooseUs'
import HairProblems from './HairProblems'
import Treatments from './Treatments'
import Testimonials from './Testimonials'
import FAQs from './FAQs'
import FinalCTA from './FinalCTA'

export default function Home({ onBookClick }) {
  return (
    <main>
      <HeroSection onBookClick={onBookClick} />
      <WhyChooseUs onBookClick={onBookClick} />
      <HairProblems onBookClick={onBookClick} />
      <Treatments onBookClick={onBookClick} />
      <Testimonials onBookClick={onBookClick} />
      <FAQs onBookClick={onBookClick} />
      <FinalCTA onBookClick={onBookClick} />
    </main>
  )
}
