import { Link } from 'react-router-dom'
import Eyebrow from '../../components/Eyebrow'
import ScrollRow from '../../components/ui/ScrollRow'
import { courses } from '../../data/content'
import { asset } from '../../utils/images'
import useTilt from '../../hooks/useTilt'

function CourseCard({ c }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(5)
  return (
    <Link
      ref={ref}
      to={c.href}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group snap-start shrink-0 w-[280px] sm:w-[320px] block overflow-hidden transition-all duration-300 hover-card"
      style={{ border: '1px solid #DFF0F5', background: '#fff', borderRadius: '14px' }}
    >
      <div className="overflow-hidden h-[190px] relative">
        <img
          src={asset(c.img)}
          alt={c.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
          style={{ transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(14,37,53,0.25))' }} />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="px-2 py-1 text-[0.65rem] font-bold rounded-md" style={{ background: '#1EB8D0', color: '#fff' }}>
            {c.duration}
          </span>
        </div>
      </div>
      <div className="p-5">
        <span className="text-[0.65rem] font-bold tracking-widest uppercase" style={{ color: '#1EB8D0' }}>Duration: {c.duration}</span>
        <h3 className="mt-2.5 font-bold text-[1rem] leading-snug" style={{ color: '#1C2B3A' }}>{c.name}</h3>
        <p className="mt-2 text-[0.82rem] leading-relaxed" style={{ color: '#3A5068' }}>{c.blurb}</p>
        <span className="inline-block mt-4 text-[0.82rem] font-semibold transition-colors" style={{ color: '#1590A8' }}>
          Know more →
        </span>
      </div>
    </Link>
  )
}

export default function CoursesSection() {
  return (
    <section id="courses" className="py-16 lg:py-24" style={{ background: '#F4F9FC' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <Eyebrow>Programmes</Eyebrow>
            <h2 className="font-bold text-[1.9rem] sm:text-[2.3rem]" style={{ color: '#1C2B3A' }}>Our Courses</h2>
          </div>
          <Link to="/courses" className="hidden sm:block text-[0.875rem] font-semibold pb-0.5 transition-colors" style={{ color: '#1590A8', borderBottom: '2px solid #1EB8D0' }}>
            View all courses
          </Link>
        </div>

        <ScrollRow>
          {courses.map((c) => (
            <CourseCard key={c.id} c={c} />
          ))}
        </ScrollRow>
      </div>
    </section>
  )
}
