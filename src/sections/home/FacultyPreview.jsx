import { Link } from 'react-router-dom'
import Eyebrow from '../../components/Eyebrow'
import ScrollRow from '../../components/ui/ScrollRow'
import { faculty } from '../../data/content'
import { asset } from '../../utils/images'

export default function FacultyPreview() {
  const preview = faculty.core.slice(0, 6)
  return (
    <section id="faculty" className="py-16 lg:py-24" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <Eyebrow>Our Team</Eyebrow>
            <h2 className="font-bold text-[1.9rem] sm:text-[2.3rem]" style={{ color: '#1C2B3A' }}>Faculty</h2>
          </div>
          <Link to="/faculty" className="hidden sm:block text-[0.875rem] font-semibold transition-colors pb-0.5" style={{ color: '#1EB8D0', borderBottom: '2px solid #1EB8D0' }}>
            View all →
          </Link>
        </div>

        <ScrollRow>
          {preview.map((f) => (
            <div
              key={f.id}
              className="snap-start shrink-0 w-[200px] hover-card cursor-pointer"
              style={{ border: '1px solid #DFF0F5', background: '#fff', borderRadius: '14px', overflow: 'hidden' }}
            >
              <div className="h-[200px] overflow-hidden relative">
                <img src={asset(f.img)} alt={f.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute bottom-0 inset-x-0 h-1.5" style={{ background: 'linear-gradient(90deg, #1EB8D0, #45CCE2)' }} />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-[0.95rem] leading-snug" style={{ color: '#1C2B3A' }}>{f.name}</h3>
                <p className="text-[0.72rem] font-semibold tracking-wide uppercase mt-1" style={{ color: '#1EB8D0' }}>{f.role}</p>
                <Link to="/faculty" className="inline-block mt-3 text-[0.78rem] font-semibold transition-colors" style={{ color: '#1590A8' }}>
                  View profile »
                </Link>
              </div>
            </div>
          ))}
        </ScrollRow>

        <div className="mt-8">
          <Link to="/faculty" className="text-[0.875rem] font-semibold pb-0.5 transition-colors" style={{ color: '#1C2B3A', borderBottom: '2px solid #DFF0F5' }}>
            View all Faculty →
          </Link>
        </div>
      </div>
    </section>
  )
}
