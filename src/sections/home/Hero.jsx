import { Link } from 'react-router-dom'
import Carousel from '../../components/ui/Carousel'
import { asset } from '../../utils/images'
import HospitalHeroImage from '../../components/HospitalHero'

const slides = [
  {
    type: 'hospital-ai',
    eyebrow: 'Est. 2015 · Mysuru, India',
    title: 'Asia Pacific Institute of Embryology',
    lead: 'Asia\'s leading teaching institute for Clinical Embryology, affiliated with the University of Mysore.',
    cta: 'Enroll Now',
    href: '/contact',
  },
  {
    img: 'slider-3.png',
    eyebrow: 'Academic Partnership',
    title: 'Affiliated to the University of Mysore',
    lead: 'A NAAC A+ accredited university partnership since the founding of ASPIER\'s flagship MSc programme.',
    cta: 'Get Started',
    href: '/university-of-mysore',
  },
  {
    img: 'Lab.jpg',
    eyebrow: 'Infrastructure',
    title: 'State-of-the-art Infrastructure',
    lead: 'An array of sophisticated, elaborate equipment to aid hands-on student training.',
    cta: 'Explore Facilities',
    href: '/facilities',
  },
  {
    img: 'ICSI-Lab.jpg',
    eyebrow: 'Laboratories',
    title: 'Well-equipped Labs',
    lead: 'Purpose-built laboratories so every student gets real, hands-on clinical experience.',
    cta: 'Explore Facilities',
    href: '/facilities',
  },
]

function Slide({ s }) {
  const isAI = s.type === 'hospital-ai'

  return (
    <div className="relative" style={{ height: '62vw', minHeight: '420px', maxHeight: '620px' }}>
      {/* Background: AI hospital SVG or photo */}
      {isAI ? (
        <div className="absolute inset-0 w-full h-full">
          <HospitalHeroImage className="absolute inset-0 w-full h-full" />
          {/* Gradient overlay for text readability */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(105deg, rgba(14,37,53,0.82) 0%, rgba(14,37,53,0.50) 52%, rgba(14,37,53,0.08) 100%)' }}
          />
        </div>
      ) : (
        <>
          <img src={asset(s.img)} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(14,37,53,0.90) 0%, rgba(14,37,53,0.60) 55%, rgba(14,37,53,0.15) 100%)' }} />
        </>
      )}

      {/* Teal accent line left */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: 'linear-gradient(180deg, transparent, #1EB8D0, transparent)' }} />

      <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex items-center">
        <div className="max-w-xl">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-[0.72rem] font-bold tracking-widest uppercase rounded-md"
            style={{ border: '1px solid rgba(30,184,208,0.5)', color: '#45CCE2', background: 'rgba(30,184,208,0.12)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#1EB8D0', animation: 'pulseGlow 2s ease-in-out infinite' }} />
            {s.eyebrow}
          </span>
          <h1
            className="font-bold text-white leading-[1.1] text-[1.8rem] sm:text-[2.3rem] lg:text-[2.8rem] tracking-tight"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
          >
            {s.title}
          </h1>
          <p className="mt-4 leading-relaxed max-w-md text-[0.95rem]" style={{ color: 'rgba(255,255,255,0.78)' }}>{s.lead}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to={s.href}
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-[0.875rem] rounded-xl transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #1EB8D0, #1590A8)', color: '#fff', boxShadow: '0 8px 24px rgba(30,184,208,0.35)' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(30,184,208,0.5)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(30,184,208,0.35)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {s.cta} <span>→</span>
            </Link>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-[0.875rem] rounded-xl transition-all duration-300"
              style={{ border: '1px solid rgba(255,255,255,0.4)', color: '#fff', background: 'rgba(255,255,255,0.1)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
            >
              View Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero-carousel" className="relative pt-[84px] md:pt-[92px]">
      <Carousel>
        {slides.map((s) => (
          <Slide key={s.title} s={s} />
        ))}
      </Carousel>

      {/* Stat strip */}
      <div style={{ background: '#fff', borderBottom: '1px solid #DFF0F5', borderTop: '1px solid #DFF0F5' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-2 lg:grid-cols-4">
          {[
            { value: '100%', label: 'Placement record' },
            { value: '500+', label: 'Graduates placed' },
            { value: '10+', label: 'Years training embryologists' },
            { value: '01', label: 'Programme of its kind, globally' },
          ].map((s, i) => (
            <div key={s.label} className="py-6 px-5 sm:px-6 cursor-default group"
              style={{ borderRight: i < 3 ? '1px solid #DFF0F5' : 'none' }}>
              <div className="font-bold text-[1.9rem] leading-none" style={{ color: '#1EB8D0' }}>{s.value}</div>
              <div className="mt-1.5 text-[0.72rem] font-semibold tracking-wide uppercase leading-snug" style={{ color: '#6B8A9E' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
