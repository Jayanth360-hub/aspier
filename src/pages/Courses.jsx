import PageHero from '../components/ui/PageHero'
import Eyebrow from '../components/Eyebrow'
import CTABanner from '../components/ui/CTABanner'
import ContactForm from '../components/ContactForm'
import { asset } from '../utils/images'

const certs = [
  {
    id: 'cce',
    name: 'Certificate Course in Clinical Embryology',
    duration: '2 Weeks',
    img: 'course-2.jpg',
    eyebrow: 'Hands-On · 2 Weeks',
    text: 'A focused, two-week immersion into the fundamentals of clinical embryology — gamete handling, fertilisation, and embryo culture — designed for working lab professionals and recent graduates seeking practical, hands-on exposure under expert supervision.',
    topics: ['Oocyte retrieval and assessment', 'IVF insemination and fertilisation check', 'Embryo culture and grading', 'Embryo transfer preparation'],
  },
  {
    id: 'andrology',
    name: 'Certificate Course in Andrology',
    duration: '1 Week',
    img: 'about-8-scaled.jpg',
    eyebrow: 'Focused Training · 1 Week',
    text: 'A one-week intensive covering semen analysis, sperm preparation techniques, and male-factor diagnostics — equipping participants with the core andrology skills used daily in fertility laboratories.',
    topics: ['WHO semen analysis', 'Sperm morphology assessment', 'Sperm preparation — density gradient & swim-up', 'Male-factor case evaluation'],
  },
  {
    id: 'vitrification',
    name: 'Vitrification Course',
    duration: '3 Days',
    img: 'DSC_1411-scaled.jpg',
    eyebrow: 'Practical Workshop · 3 Days',
    text: 'A concentrated, three-day hands-on workshop in oocyte and embryo vitrification technique — one of the most technically demanding skills in the IVF laboratory, taught through guided practical sessions at ASPIER\'s fully equipped lab.',
    topics: ['Principles of vitrification vs slow freezing', 'Oocyte vitrification protocol', 'Embryo vitrification and warming', 'Survival assessment post-warming'],
  },
]

export default function Courses() {
  return (
    <>
      <PageHero
        eyebrow="Short-format Programmes"
        title="Certification Courses"
        lead="Focused, hands-on certificate programmes for professionals and graduates who want practical laboratory skill without a full two-year commitment."
      />

      <section className="py-16 lg:py-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-20 lg:space-y-28">
          {certs.map((c, i) => (
            <div key={c.id} className="grid lg:grid-cols-12 gap-10 items-center">
              <div className={`lg:col-span-6 ${i % 2 ? 'lg:order-2' : ''}`}>
                <div className="specimen-frame">
                  <img src={asset(c.img)} alt={c.name} className="w-full h-[340px] object-cover" />
                </div>
              </div>
              <div className={`lg:col-span-6 ${i % 2 ? 'lg:order-1' : ''}`}>
                <span className="label-tag" style={{ color: '#1EB8D0' }}>{c.eyebrow}</span>
                <h2 className="mt-3 font-bold text-[1.7rem] sm:text-[1.9rem] font-medium leading-tight" style={{ color: '#1C2B3A' }}>
                  {c.name}
                </h2>
                <p className="mt-5 leading-[1.8]" style={{ color: '#3A5068' }}>{c.text}</p>
                <ul className="mt-5 space-y-2">
                  {c.topics.map(t => (
                    <li key={t} className="flex gap-2 text-[0.875rem]" style={{ color: '#3A5068' }}>
                      <span style={{ color: '#1EB8D0', marginTop: '3px' }}>◆</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#apply"
                  className="text-[0.72rem] font-bold tracking-widest uppercase inline-block mt-7 px-7 py-3.5 font-semibold transition-all"
                  style={{ background: '#1EB8D0', color: '#1C2B3A', borderRadius: "10px" }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#1590A8'; e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#1EB8D0'; e.currentTarget.style.color = '#1C2B3A' }}
                >
                  Apply Now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="apply" className="py-16 lg:py-24 border-t scroll-mt-24" style={{ borderColor: '#DFF0F5', background: '#EAF9FC' }}>
        <div className="max-w-xl mx-auto px-5 md:px-8">
          <Eyebrow>Get Started</Eyebrow>
          <h2 className="mt-3 font-bold text-[1.7rem] font-medium mb-8" style={{ color: '#1C2B3A' }}>Apply for a certificate course</h2>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
