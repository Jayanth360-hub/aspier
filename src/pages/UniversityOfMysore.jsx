import PageHero from '../components/ui/PageHero'
import CTABanner from '../components/ui/CTABanner'
import Eyebrow from '../components/Eyebrow'
import { asset } from '../utils/images'

const highlights = [
  { label: 'Founded', value: '1916' },
  { label: 'Accreditation', value: 'NAAC A+' },
  { label: 'Affiliated Colleges', value: '200+' },
  { label: 'Departments', value: '100+' },
]

export default function UniversityOfMysore() {
  return (
    <>
      <PageHero
        eyebrow="Academic Partner"
        title="University of Mysore"
        lead="ASPIER's MSc programme is conducted in academic affiliation with the University of Mysore — one of India's oldest and most respected public universities, with over a century of excellence."
        image={asset('about-6-scaled.jpg')}
        imageAlt="University of Mysore campus"
      />

      {/* Stats strip */}
      <div style={{ background: '#1EB8D0' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <div key={h.label} className="py-6 px-5 text-center" style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.2)' : 'none' }}>
              <div className="font-bold text-[1.7rem] font-medium" style={{ color: '#1C2B3A' }}>{h.value}</div>
              <div className="text-[0.72rem] font-bold tracking-widest uppercase text-[0.62rem] mt-1" style={{ color: 'rgba(26,18,0,0.7)' }}>{h.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="py-16 lg:py-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-6 leading-[1.85]" style={{ color: '#3A5068' }}>
            <Eyebrow index="01">About the University</Eyebrow>
            <p>
              Established in <strong style={{ color: '#1C2B3A' }}>1916</strong>, the University of Mysore is one of the
              earliest universities in India and the first to be established outside the erstwhile British India
              administration, founded under the patronage of the Mysore royal family. Over more than a century, it has
              grown into a major centre of higher education and research in South India.
            </p>
            <p>
              The university holds <strong style={{ color: '#1C2B3A' }}>NAAC A+ accreditation</strong>, reflecting its
              sustained commitment to quality in teaching, research, infrastructure, and governance. It is affiliated
              with over 200 colleges and hosts a wide network of postgraduate departments spanning the sciences,
              humanities, and professional disciplines.
            </p>
            <Eyebrow index="02">The ASPIER Partnership</Eyebrow>
            <p>
              ASPIER's two-year MSc in Clinical Embryology &amp; Pre-implantation Genetics is conducted under the
              academic framework of the University of Mysore, giving graduates a recognised postgraduate qualification
              backed by a century-old institution. The affiliation also enables ASPIER students to access the
              university's research infrastructure, examination systems, and academic governance standards.
            </p>
            <p>
              This partnership reflects the university's continued commitment to advancing specialised, high-impact
              scientific education — and has been central to ASPIER's ability to pioneer a programme that did not
              previously exist anywhere else in the world.
            </p>
            <p>
              In November 2024, ASPIER and the University of Mysore jointly organised a national conference on
              recent advances in Assisted Reproductive Technology (ART) at Vigyan Bhavan, Mysore — bringing together
              leading clinicians, researchers, and embryologists from across India.
            </p>

            <div className="pt-4">
              <a
                href="https://uni-mysore.ac.in/"
                target="_blank"
                rel="noreferrer"
                className="text-[0.72rem] font-bold tracking-widest uppercase inline-block px-7 py-3.5 font-semibold transition-all"
                style={{ background: '#1EB8D0', color: '#1C2B3A', borderRadius: "10px" }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1590A8'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#1EB8D0'; e.currentTarget.style.color = '#1C2B3A' }}
              >
                Visit official UoM site →
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="specimen-frame mb-6">
              <img src={asset('about-12-scaled.jpg')} alt="University of Mysore" className="w-full h-[320px] object-cover" />
            </div>
            <div className="p-6 border" style={{ borderColor: '#DFF0F5', background: '#EAF9FC', borderRadius: "12px" }}>
              <h3 className="font-bold text-[1.05rem] mb-3" style={{ color: '#1C2B3A' }}>University Highlights</h3>
              <ul className="space-y-3 text-[0.875rem]" style={{ color: '#3A5068' }}>
                {[
                  'One of India\'s oldest universities, est. 1916',
                  'NAAC A+ accredited institution',
                  'Host of the UoM-ASPIER national ART conference 2024',
                  'University of Mysore-recognized research centre at ASPIER',
                  'Examination and governance standards backing the MSc degree',
                ].map(item => (
                  <li key={item} className="flex gap-3">
                    <span style={{ color: '#1EB8D0' }}>◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Affiliated Programme"
        title="Earn a University of Mysore postgraduate qualification"
        lead="Apply to ASPIER's MSc in Clinical Embryology & Pre-implantation Genetics, conducted under the University of Mysore."
      />
    </>
  )
}
