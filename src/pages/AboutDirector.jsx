import Eyebrow from '../components/Eyebrow'
import CTABanner from '../components/ui/CTABanner'
import { asset } from '../utils/images'

const credentials = [
  { label: 'Qualification', value: 'PhD in Reproductive Biology' },
  { label: 'Experience', value: '30+ Years in IVF' },
  { label: 'Countries', value: 'India · Singapore · Australia' },
  { label: 'Graduates Mentored', value: '500+' },
]

const expertise = [
  'Clinical Embryology & Embryo Culture Technique',
  'Micromanipulation (ICSI & Embryo Biopsy)',
  'Pre-implantation Genetic Diagnosis (PGD/PGT)',
  'IVF Laboratory Management & Quality Control',
  'Andrology & Sperm Function Analysis',
  'Vitrification of Oocytes & Embryos',
]

export default function AboutDirector() {
  return (
    <>
      <section className="pt-[112px] pb-16 lg:pt-[136px] lg:pb-24" style={{ background: 'linear-gradient(135deg, #EAF9FC 0%, #FFFFFF 100%)' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="specimen-frame">
              <img
                src={asset('about-7-scaled.jpg')}
                alt="Dr. Suresh Kattera"
                className="w-full h-[440px] object-cover"
              />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {credentials.map(c => (
                <div key={c.label} className="p-4 border text-center" style={{ borderColor: '#DFF0F5', background: '#F4F9FC', borderRadius: "12px" }}>
                  <div className="font-bold text-[1rem] font-medium" style={{ color: '#1C2B3A' }}>{c.value}</div>
                  <div className="text-[0.72rem] font-bold tracking-widest uppercase text-[0.6rem] mt-1" style={{ color: '#1590A8' }}>{c.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <Eyebrow>About the Director</Eyebrow>
            <h1 className="font-bold text-ink text-[2.1rem] sm:text-[2.6rem] font-medium leading-tight" style={{ color: '#1C2B3A' }}>
              Dr. Suresh Kattera
            </h1>
            <p className="text-[0.72rem] font-bold tracking-widest uppercase mt-2" style={{ color: '#1EB8D0' }}>PhD &middot; Director, ASPIER</p>

            <div className="mt-6 space-y-5 leading-[1.85]" style={{ color: '#3A5068' }}>
              <p>
                Dr. Suresh Kattera is a <strong style={{ color: '#1C2B3A' }}>world-renowned embryologist and pioneer in IVF</strong>, with
                decades of international experience spanning clinical embryology, reproductive research, and academic
                teaching across India, Singapore, and Australia. He holds a PhD in Reproductive Biology and has worked
                at the forefront of assisted reproductive technology throughout his career.
              </p>
              <p>
                Over the course of his career, Dr. Kattera has led embryology and andrology laboratories at leading
                fertility centres internationally, contributing to advances in embryo culture technique,
                micromanipulation, and pre-implantation genetic diagnosis. His clinical work has directly shaped how
                complex IVF cases — including those requiring genetic screening — are managed in laboratory practice.
              </p>
              <p>
                In <strong style={{ color: '#1C2B3A' }}>2015</strong>, he founded the Asia Pacific Institute of Embryology in Mysuru, designing
                a curriculum that integrates clinical embryology with PGD/PGT — a combination not previously offered
                as a single, hands-on postgraduate programme anywhere in the world. Under his mentorship, ASPIER has
                maintained a 100% employment record and produced over 500 graduates now practicing across India and
                abroad.
              </p>
              <p>
                Dr. Kattera continues to personally mentor every ASPIER cohort, overseeing laboratory training in
                embryo culture, biopsy, and vitrification technique, and remains an active voice at national and
                international conferences on reproductive science.
              </p>

              <Eyebrow index="Areas of Expertise">Areas of Expertise</Eyebrow>
              <ul className="grid sm:grid-cols-2 gap-2">
                {expertise.map(e => (
                  <li key={e} className="flex gap-2 items-start text-[0.875rem]">
                    <span style={{ color: '#1EB8D0', marginTop: '3px' }}>◆</span>
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Mentorship"
        title="Learn directly from Dr. Suresh Kattera's three decades of IVF practice"
        lead="Every ASPIER cohort is personally mentored through hands-on laboratory training in embryo culture, biopsy, and vitrification."
      />
    </>
  )
}
