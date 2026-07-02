import { useState } from 'react'
import PageHero from '../components/ui/PageHero'
import Eyebrow from '../components/Eyebrow'
import Modal from '../components/ui/Modal'
import CTABanner from '../components/ui/CTABanner'
import { faculty } from '../data/content'
import { asset } from '../utils/images'

function FacultyCard({ f, onOpen }) {
  return (
    <div className="border hover-card" style={{ borderColor: '#DFF0F5', background: '#F4F9FC', borderRadius: "12px", overflow: 'hidden' }}>
      <div className="h-[230px] overflow-hidden relative group">
        <img src={asset(f.img)} alt={f.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute bottom-0 inset-x-0 h-1" style={{ background: 'linear-gradient(90deg, #1EB8D0, #45CCE2)' }} />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-[1.05rem] leading-snug" style={{ color: '#1C2B3A' }}>{f.name}</h3>
        <p className="text-[0.72rem] font-bold tracking-widest uppercase mt-1.5 text-[0.62rem] leading-snug" style={{ color: '#1590A8' }}>{f.role}</p>
        <button
          onClick={() => onOpen(f)}
          className="text-[0.72rem] font-bold tracking-widest uppercase inline-block mt-4 pb-0.5 transition-colors hover:opacity-70"
          style={{ color: '#1EB8D0', borderBottom: '1px solid #1EB8D0' }}
        >
          View profile »
        </button>
      </div>
    </div>
  )
}

export default function Faculty() {
  const [active, setActive] = useState(null)

  return (
    <>
      <PageHero
        eyebrow="People"
        title="Faculty"
        lead="ASPIER's faculty combines decades of international clinical practice with dedicated academic mentorship — guiding every student from theory to hands-on laboratory mastery."
      />

      <section className="py-16 lg:py-20" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Eyebrow index="01">Core Faculty</Eyebrow>
          <p className="mb-8 max-w-2xl leading-relaxed" style={{ color: '#3A5068' }}>
            Our core faculty brings together experienced embryologists, geneticists, and reproductive specialists — all personally committed to ASPIER's mission of practical, rigorous embryology education.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty.core.map((f) => (
              <FacultyCard key={f.id} f={f} onOpen={setActive} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 border-t" style={{ background: '#EAF9FC', borderColor: '#DFF0F5' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Eyebrow index="02">Guest Faculty</Eyebrow>
          <p className="mb-8 max-w-2xl leading-relaxed" style={{ color: '#3A5068' }}>
            ASPIER is privileged to draw on a network of distinguished guest faculty — leading clinicians and researchers who contribute specialist knowledge and real-world clinical perspectives.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty.guest.map((f) => (
              <FacultyCard key={f.id} f={f} onOpen={setActive} />
            ))}
          </div>
        </div>
      </section>

      <Modal open={!!active} onClose={() => setActive(null)} maxWidth="max-w-3xl">
        {active && (
          <div className="grid sm:grid-cols-12">
            <div className="sm:col-span-5 h-[260px] sm:h-full">
              <img src={asset(active.img)} alt={active.name} className="w-full h-full object-cover" />
            </div>
            <div className="sm:col-span-7 p-7 sm:p-9">
              <h3 className="font-bold text-[1.5rem] leading-snug" style={{ color: '#1C2B3A' }}>{active.name}</h3>
              <p className="text-[0.72rem] font-bold tracking-widest uppercase mt-2" style={{ color: '#1EB8D0' }}>{active.role}</p>
              <p className="mt-5 leading-[1.8]" style={{ color: '#3A5068' }}>{active.bio}</p>
            </div>
          </div>
        )}
      </Modal>

      <CTABanner
        eyebrow="Learn from the Best"
        title="Train under world-class embryologists at ASPIER"
        lead="Every student benefits from personal mentorship from Dr. Suresh Kattera and our expert faculty team."
      />
    </>
  )
}
