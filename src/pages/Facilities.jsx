import PageHero from '../components/ui/PageHero'
import Eyebrow from '../components/Eyebrow'
import CTABanner from '../components/ui/CTABanner'
import { asset } from '../utils/images'

const facilities = [
  { title: 'Embryology Laboratory', img: 'Embryology-Room-.jpg', text: 'A dedicated embryology lab equipped for gamete handling, fertilisation, and embryo culture practice under close faculty supervision.' },
  { title: 'ICSI Laboratory', img: 'Lab-2.jpg', text: 'Micromanipulation workstations for intracytoplasmic sperm injection (ICSI) and biopsy technique training with Singapore-standard equipment.' },
  { title: 'Andrology Laboratory', img: 'Lab.jpg', text: 'A specialised lab for semen analysis, sperm preparation, and male-factor diagnostic workflows.' },
  { title: 'Classrooms', img: 'Library.jpg', text: 'Modern classrooms for lecture-based instruction in reproductive biology, genetics, and clinical theory.' },
  { title: 'Library', img: 'Library.jpg', text: 'A well-stocked reference library supporting coursework, dissertation research, and independent study.' },
  { title: 'PGD/Biopsy Workshop Space', img: 'Embryology-Room-.jpg', text: 'Regular hands-on workshops covering embryo biopsy and pre-implantation genetic diagnosis technique.' },
]

const sports = [
  { label: 'Chess', icon: '♟️' },
  { label: 'Carrom', icon: '🎯' },
  { label: 'Table Tennis', icon: '🏓' },
  { label: 'Badminton', icon: '🏸' },
  { label: 'Volleyball', icon: '🏐' },
  { label: 'Cultural Festivals', icon: '🎉' },
]

const galleryStrip = ['Lab.jpg', 'Lab-2.jpg', 'Carrom-Board-.jpg', 'TableTennis.jpg', 'Pic-3-.jpg', 'Pic-5.jpeg']

export default function Facilities() {
  return (
    <>
      <PageHero
        eyebrow="Campus"
        title="Facilities"
        lead="ASPIER's Mysuru campus brings together purpose-built laboratories, classrooms, and recreational spaces designed for focused, hands-on learning — with Singapore-standard IVF technology."
        image={asset('Lab.jpg')}
        imageAlt="ASPIER laboratory"
      />

      <section className="py-16 lg:py-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Eyebrow index="01">Laboratories & Classrooms</Eyebrow>
          <h2 className="font-bold text-[1.8rem] font-medium mb-8" style={{ color: '#1C2B3A' }}>Purpose-built for embryology training</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f) => (
              <div key={f.title} className="border hover-card" style={{ borderColor: '#DFF0F5', background: '#F4F9FC', borderRadius: "12px", overflow: 'hidden' }}>
                <div className="h-[180px] overflow-hidden">
                  <img src={asset(f.img)} alt={f.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[1.05rem]" style={{ color: '#1C2B3A' }}>{f.title}</h3>
                  <p className="mt-2 text-[0.875rem] leading-relaxed" style={{ color: '#3A5068' }}>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 border-y" style={{ borderColor: '#DFF0F5', background: '#EAF9FC' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Eyebrow index="02">Student Life</Eyebrow>
          <h2 className="font-bold text-[1.8rem] font-medium mb-3" style={{ color: '#1C2B3A' }}>Recreation & Campus Spaces</h2>
          <p className="max-w-2xl mb-8 leading-relaxed" style={{ color: '#3A5068' }}>
            Beyond the lab, students have access to a range of sports and recreational activities, along with annual
            sports events and cultural festivals that round out campus life and foster a vibrant student community.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-10">
            {sports.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2 p-4 border text-center" style={{ borderColor: '#DFF0F5', background: '#FFFFFF', borderRadius: "12px" }}>
                <span className="text-2xl">{s.icon}</span>
                <span className="text-[0.72rem] font-bold tracking-widest uppercase text-[0.65rem]" style={{ color: '#1590A8' }}>{s.label}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryStrip.map((img) => (
              <div key={img} className="h-[140px] overflow-hidden border" style={{ borderColor: '#DFF0F5', borderRadius: '4px' }}>
                <img src={asset(img)} alt="Campus life at ASPIER" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Campus Tour"
        title="See ASPIER's facilities in person"
        lead="Schedule a campus visit or ask our admissions team for a virtual walkthrough of our labs and classrooms."
      />
    </>
  )
}
