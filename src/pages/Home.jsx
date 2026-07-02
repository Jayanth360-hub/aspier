import Hero from '../sections/home/Hero'
import ConferenceBlock from '../sections/home/ConferenceBlock'
import WhyChoose from '../sections/home/WhyChoose'
import CoursesSection from '../sections/home/CoursesSection'
import VideoTestimonial from '../sections/home/VideoTestimonial'
import FacultyPreview from '../sections/home/FacultyPreview'
import EventsPreview from '../sections/home/EventsPreview'
import TestimonialsGrid from '../sections/home/TestimonialsGrid'
import CTABanner from '../components/ui/CTABanner'

export default function Home() {
  return (
    <>
      <Hero />
      <ConferenceBlock />
      <WhyChoose />
      <CoursesSection />
      <VideoTestimonial />
      <FacultyPreview />
      <EventsPreview />
      <TestimonialsGrid />
      <CTABanner />
    </>
  )
}
