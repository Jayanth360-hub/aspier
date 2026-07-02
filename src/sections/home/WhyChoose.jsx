import Eyebrow from '../../components/Eyebrow'
import { Link } from 'react-router-dom'

const reasons = [
  {
    icon: '🏆',
    title: '100% Placement Record',
    text: 'Every graduate from ASPIER has been placed in a leading IVF or fertility centre — a track record maintained since our founding in 2015.',
  },
  {
    icon: '🌍',
    title: 'First & Only Global Programme',
    text: 'The first and only programme worldwide that integrates Clinical Embryology with Pre-implantation Genetic Diagnosis (PGD/PGT) as a single MSc.',
  },
  {
    icon: '🔬',
    title: 'Singapore-Standard Labs',
    text: 'Students train in ASPIER\'s attached Mysuru Fertility Centre, featuring time-lapse embryo culture systems and cutting-edge IVF equipment.',
  },
  {
    icon: '🎓',
    title: 'University of Mysore Affiliation',
    text: 'A NAAC A+ accredited university partnership — graduates receive a recognised, century-old institution\'s postgraduate qualification.',
  },
  {
    icon: '👨‍🔬',
    title: 'World-Renowned Mentorship',
    text: 'Dr. Suresh Kattera personally mentors every cohort — a pioneer in IVF with decades of international experience in India, Singapore, and Australia.',
  },
  {
    icon: '📈',
    title: 'High Demand, High Salaries',
    text: 'With over 3,000 fertility centres in India and demand growing, ASPIER graduates command among the highest starting salaries in the field.',
  },
]

export default function WhyChoose() {
  return (
    <section className="py-20 lg:py-28" style={{ background: '#F4F9FC' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-14">
          <Eyebrow>Why ASPIER?</Eyebrow>
          <h2 className="font-bold text-[1.9rem] sm:text-[2.4rem] leading-tight mt-3" style={{ color: '#1C2B3A' }}>
            Why Choose the Asia Pacific Institute of Embryology?
          </h2>
          <p className="mt-4 text-[1rem] leading-relaxed" style={{ color: '#3A5068' }}>
            ASPIER is one of the most sought-after institutes in Asia for advanced training in Clinical Embryology — producing world-class professionals who combine technical expertise, ethical integrity, and innovation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="hover-card p-7 bg-white"
              style={{ border: '1px solid #DFF0F5', borderRadius: '14px' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{ background: '#EAF9FC' }}>
                {r.icon}
              </div>
              <h3 className="font-bold text-[1rem] mb-2.5" style={{ color: '#1C2B3A' }}>{r.title}</h3>
              <p className="text-[0.875rem] leading-relaxed" style={{ color: '#3A5068' }}>{r.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 lg:p-10 rounded-2xl" style={{ background: 'linear-gradient(135deg, #1EB8D0 0%, #1590A8 100%)', boxShadow: '0 12px 40px rgba(30,184,208,0.25)' }}>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h3 className="font-bold text-[1.4rem] mb-3 text-white">
                Course Eligibility
              </h3>
              <p className="text-[0.9rem] leading-relaxed mb-2" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Applicants must hold a Bachelor's degree in any science or health-related discipline from a UGC-recognized university:
              </p>
              <p className="text-[0.85rem] leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                B.Sc (Science / Life Science / Biotechnology), MBBS, BDS, BAMS, BHMS, B.Pharm, Nursing, BVSc, Dairy Science, Fishery Science, or Engineering (Biotechnology / Life Sciences), or any equivalent qualification.
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-end justify-center gap-3">
              <Link
                to="/msc-course"
                className="px-7 py-3.5 font-bold text-[0.875rem] rounded-xl transition-all w-full lg:w-auto text-center"
                style={{ background: '#fff', color: '#1590A8' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.9)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#fff' }}
              >
                View MSc Course →
              </Link>
              <Link
                to="/contact"
                className="px-7 py-3.5 font-bold text-[0.875rem] rounded-xl transition-all w-full lg:w-auto text-center"
                style={{ border: '1px solid rgba(255,255,255,0.6)', color: '#fff' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
