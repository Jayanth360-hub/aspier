import { Link } from 'react-router-dom'
import Eyebrow from '../../components/Eyebrow'
import { events } from '../../data/content'
import { asset } from '../../utils/images'

export default function EventsPreview() {
  const [featured, ...rest] = events
  return (
    <section id="events" className="py-16 lg:py-24" style={{ background: '#fff', borderTop: '1px solid #DFF0F5' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <Eyebrow>Recent</Eyebrow>
            <h2 className="font-bold text-[1.9rem] sm:text-[2.3rem]" style={{ color: '#1C2B3A' }}>Announcements</h2>
          </div>
          <Link to="/events" className="hidden sm:block text-[0.875rem] font-semibold pb-0.5" style={{ color: '#1EB8D0', borderBottom: '2px solid #1EB8D0' }}>
            See all →
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <Link
            to={`/events#${featured.id}`}
            className="group lg:col-span-7 relative overflow-hidden block h-[300px] lg:h-auto hover-card"
            style={{ border: '1px solid #DFF0F5', borderRadius: '16px' }}
          >
            <img
              src={asset(featured.img)}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(14,37,53,0.92) 0%, rgba(14,37,53,0.2) 50%, transparent 100%)' }} />
            {/* Teal top bar */}
            <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl" style={{ background: 'linear-gradient(90deg, #1EB8D0, #45CCE2)' }} />
            <div className="absolute bottom-0 p-6 sm:p-8">
              <span className="px-2.5 py-1 text-[0.65rem] font-bold rounded-md mb-3 inline-block tracking-widest uppercase" style={{ background: 'rgba(30,184,208,0.2)', color: '#45CCE2', border: '1px solid rgba(30,184,208,0.4)' }}>
                Featured Event
              </span>
              <h3 className="font-bold text-white text-[1.3rem] sm:text-[1.5rem] leading-snug max-w-md">
                {featured.title}
              </h3>
              <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.65)' }}>
                {featured.date} · {featured.venue}
              </p>
              <span className="inline-block mt-4 text-[0.82rem] font-semibold" style={{ color: '#45CCE2' }}>
                View in detail →
              </span>
            </div>
          </Link>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {rest.map((e) => (
              <Link
                key={e.id}
                to={`/events#${e.id}`}
                className="group flex gap-4 p-4 transition-all duration-300 hover-card"
                style={{ border: '1px solid #DFF0F5', background: '#fff', borderRadius: '12px' }}
              >
                <div className="w-24 h-20 shrink-0 overflow-hidden" style={{ borderRadius: '8px' }}>
                  <img src={asset(e.img)} alt={e.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[0.875rem] font-semibold leading-snug line-clamp-2" style={{ color: '#1C2B3A' }}>{e.title}</h4>
                  <p className="mt-1.5 text-[0.72rem] font-bold tracking-wide uppercase" style={{ color: '#1EB8D0' }}>{e.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
