import PageHero from '../components/ui/PageHero'
import Eyebrow from '../components/Eyebrow'
import CTABanner from '../components/ui/CTABanner'
import { Link } from 'react-router-dom'
import { asset } from '../utils/images'

const objectives = [
  'Gamete handling and assessment — oocyte retrieval, sperm preparation, and quality evaluation',
  'Sperm function analysis and advanced sperm preparation techniques',
  'In-vitro fertilisation (IVF) procedures and embryo culture methodology',
  'Vitrification of oocytes and embryos — cryopreservation theory and hands-on practice',
  'Embryo biopsy techniques for pre-implantation genetic diagnosis (PGD/PGT)',
  'Laboratory quality management, documentation, and regulatory compliance',
]

const infoCards = [
  {
    title: 'Eligibility',
    text: 'B.Sc (Science / Life Science / Biotechnology), MBBS, BDS, BAMS, BHMS, B.Pharm, Nursing, BVSc, Dairy Science, Fishery Science, or Engineering (Biotechnology / Life Sciences), or any equivalent qualification from a UGC-recognised university.',
  },
  {
    title: 'Semester Structure',
    text: 'Four semesters across two years, combining theoretical coursework in reproductive biology and genetics with progressively hands-on laboratory rotations and a final clinical internship across leading IVF centres in South India.',
  },
  {
    title: 'Research Emphasis',
    text: 'Students complete a University of Mysore-affiliated research project supervised by ASPIER faculty, supporting publication-track and dissertation work in embryology and reproductive genetics.',
  },
  {
    title: 'Career Placements',
    text: 'ASPIER maintains a 100% employment record. Major IVF chains across India conduct campus interviews annually, with graduates placed in fertility centres across India and abroad — many at senior starting positions.',
  },
  {
    title: 'Clinical Internship',
    text: 'Supervised postings at leading IVF and fertility centres in Mysuru, Bangalore, and Chennai — giving students direct exposure to live clinical caseloads alongside practicing embryologists in fully operational labs.',
  },
  {
    title: 'Degree Award',
    text: 'Graduates receive an MSc in Clinical Embryology & Pre-implantation Genetics from the University of Mysore — a NAAC A+ accredited institution — one of India\'s most respected postgraduate qualifications.',
  },
]

export default function MscCourse() {
  return (
    <>
      <PageHero
        eyebrow="Flagship Programme · 2 Years"
        title="MSc in Clinical Embryology & Pre-Implantation Genetics"
        lead="The first and only programme globally that integrates clinical embryology training with hands-on pre-implantation genetic diagnosis (PGD/PGT) — awarded by the University of Mysore."
        image={asset('course-1.png')}
        imageAlt="MSc in Clinical Embryology"
      />

      {/* Highlight strip */}
      <div style={{ background: '#1EB8D0' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-2 lg:grid-cols-4">
          {[
            { value: '2 Years', label: 'Programme Duration' },
            { value: '100%', label: 'Placement Record' },
            { value: 'UoM', label: 'University of Mysore Degree' },
            { value: 'Global #1', label: 'First of its kind worldwide' },
          ].map((h, i) => (
            <div key={h.label} className="py-6 px-5 text-center" style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.2)' : 'none' }}>
              <div className="font-bold text-[1.6rem] font-medium" style={{ color: '#1C2B3A' }}>{h.value}</div>
              <div className="text-[0.72rem] font-bold tracking-widest uppercase text-[0.62rem] mt-1" style={{ color: 'rgba(26,18,0,0.7)' }}>{h.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="py-16 lg:py-20" style={{ background: '#FFFFFF' }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <Eyebrow index="01">Programme Objectives</Eyebrow>
          <h2 className="font-bold text-[1.7rem] font-medium mb-6" style={{ color: '#1C2B3A' }}>What you'll master</h2>
          <ol className="space-y-3">
            {objectives.map((o, i) => (
              <li key={o} className="flex gap-4 pb-3" style={{ borderBottom: '1px solid #DFF0F5' }}>
                <span className="text-[0.72rem] font-bold tracking-widest uppercase w-7 shrink-0" style={{ color: '#1EB8D0' }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ color: '#3A5068' }}>{o}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 lg:py-20 border-y" style={{ borderColor: '#DFF0F5', background: '#EAF9FC' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Eyebrow index="02">Clinical Training</Eyebrow>
            <h2 className="font-bold text-[1.7rem] font-medium mb-5" style={{ color: '#1C2B3A' }}>Internship across South India</h2>
            <p className="leading-[1.85] mb-4" style={{ color: '#3A5068' }}>
              As part of the programme, students complete supervised postings at leading IVF and fertility centres in
              Mysuru, Bangalore, and Chennai. These rotations give students direct exposure to live clinical caseloads,
              working alongside practising embryologists in fully operational labs — well beyond what classroom
              training alone can offer.
            </p>
            <p className="leading-[1.85]" style={{ color: '#3A5068' }}>
              By graduation, students have accumulated hands-on time across multiple centres, multiple equipment
              systems, and a range of real patient cases. ASPIER is also attached to Mysuru Fertility Centre — a
              Singapore-standard IVF unit with time-lapse embryo culture systems — giving students unparalleled
              clinical exposure from day one.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="specimen-frame">
              <img src={asset('CHA_1326-scaled.jpg')} alt="Clinical internship" className="w-full h-[300px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Eyebrow index="03">Programme Details</Eyebrow>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {infoCards.map((card) => (
              <div key={card.title} className="border p-7 hover-card" style={{ borderColor: '#DFF0F5', background: '#F4F9FC', borderRadius: "12px" }}>
                <h3 className="text-[0.72rem] font-bold tracking-widest uppercase mb-3" style={{ color: '#1EB8D0' }}>{card.title}</h3>
                <p className="text-[0.9rem] leading-relaxed" style={{ color: '#3A5068' }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Apply Now"
        title="Applications open for the 2026 MSc intake"
        lead="Limited seats. Talk to our admissions team about eligibility, fees, and the application timeline."
      />
    </>
  )
}
