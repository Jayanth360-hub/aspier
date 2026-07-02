import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import Eyebrow from '../components/Eyebrow'
import CTABanner from '../components/ui/CTABanner'
import { asset } from '../utils/images'

const milestones = [
  { year: '2015', text: 'ASPIER founded in Mysuru, pioneering an integrated MSc in Clinical Embryology & PGD under the University of Mysore.' },
  { year: '2016–2021', text: 'Six successive graduating batches enter fertility centres across India and abroad, each with 100% placement.' },
  { year: '2023', text: 'Intensive Hands-On Training certificate course launched for working professionals seeking practical upskilling.' },
  { year: '2024', text: 'ASPIER & University of Mysore co-host a national conference on recent advances in ART at Vigyan Bhavan, Mysore.' },
  { year: 'Today', text: 'Over 500 graduates placed globally, a sustained 100% employment record, and growing international recognition.' },
]

const achievements = [
  'First and only globally integrated Clinical Embryology + PGD/PGT MSc programme',
  '100% employment record sustained since the institute\'s founding in 2015',
  'Over 500 graduates placed across leading IVF and fertility centres in India and abroad',
  'Attached to Mysuru Fertility Centre — Singapore-standard IVF unit with time-lapse embryo culture',
  'University of Mysore-recognized research centre on campus',
  'Co-host of national conferences on Assisted Reproductive Technology with the University of Mysore',
]

export default function Aspier() {
  return (
    <>
      <PageHero
        eyebrow="Our Institute"
        title="The Asia Pacific Institute of Embryology"
        lead="Founded in 2015, ASPIER set out to do something no institute had done before: train embryologists with equal depth in clinical embryology and pre-implantation genetics."
        image={asset('about-4-scaled.jpg')}
        imageAlt="ASPIER laboratory"
      />

      <section className="py-16 lg:py-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-5 leading-[1.85]" style={{ color: '#3A5068' }}>
            <Eyebrow index="01">Vision</Eyebrow>
            <p>
              ASPIER exists to close the gap between scientific theory and clinical practice in reproductive
              medicine. Most embryology training stops at fertilisation and culture — ASPIER goes further,
              integrating Pre-implantation Genetic Diagnosis (PGD/PGT) directly into its curriculum, so
              graduates leave equipped for the full scope of a modern IVF laboratory.
            </p>
            <p>
              The institute is attached to Mysuru Fertility Centre, a working IVF unit featuring
              Singapore-standard technology including time-lapse embryo culture systems, giving students
              clinical exposure that few training programmes anywhere can match. With over 3,000 fertility
              centres in India alone, skilled embryologists are in high demand — and ASPIER graduates are
              consistently preferred for their strong technical foundation and hands-on expertise.
            </p>

            <Eyebrow index="02">History</Eyebrow>
            <p>
              ASPIER was established in 2015 under the mentorship of Dr. Suresh Kattera, a globally
              experienced embryologist who has practiced and taught across India, Singapore, and Australia.
              The institute partnered with the University of Mysore to launch the first integrated MSc
              programme of its kind, and has since grown to include certificate courses in Andrology and
              Vitrification — short-format options for working professionals.
            </p>
            <p>
              In essence, ASPIER provides a holistic educational environment that balances rigorous scientific
              training with personal development — producing world-class embryologists who combine technical
              expertise, ethical integrity, and innovation.
            </p>

            <Eyebrow index="03">Achievements</Eyebrow>
            <ul className="space-y-3">
              {achievements.map((a) => (
                <li key={a} className="flex gap-3">
                  <span style={{ color: '#1EB8D0', marginTop: '4px' }}>◆</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="border mb-6" style={{ borderColor: '#DFF0F5', borderRadius: "12px", overflow: 'hidden' }}>
              {milestones.map((m, i) => (
                <div key={m.year} className="p-5" style={{ borderBottom: i !== milestones.length - 1 ? '1px solid #DFF0F5' : 'none', background: i % 2 ? '#EAF9FC' : '#FFFFFF' }}>
                  <span className="label-tag" style={{ color: '#1EB8D0' }}>{m.year}</span>
                  <p className="mt-2 text-[0.88rem] leading-snug" style={{ color: '#3A5068' }}>{m.text}</p>
                </div>
              ))}
            </div>
            <div className="specimen-frame">
              <img src={asset('about-9-scaled.jpg')} alt="ASPIER campus" className="w-full h-[220px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 lg:py-20" style={{ background: '#1C2B3A' }}>
        <div className="absolute inset-0 dot-grid opacity-[0.06] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative text-center">
          <span className="label-tag" style={{ color: '#1EB8D0' }}>Admissions Open</span>
          <h2 className="mt-4 font-bold text-white text-[1.9rem] sm:text-[2.4rem] font-medium">
            Apply to ASPIER for the 2026 intake
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Limited seats available. Our admissions team is ready to guide you through eligibility and the application process.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="text-[0.72rem] font-bold tracking-widest uppercase inline-block px-8 py-4 font-semibold transition-all"
              style={{ background: '#1EB8D0', color: '#1C2B3A', borderRadius: "10px" }}
              onMouseEnter={e => { e.currentTarget.style.background = '#45CCE2' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#1EB8D0' }}
            >
              Apply Now →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
