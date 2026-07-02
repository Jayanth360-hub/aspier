import { useState } from 'react'
import Eyebrow from '../../components/Eyebrow'
import Modal from '../../components/ui/Modal'
import { asset } from '../../utils/images'

const testimonials = [
  { name: 'Yogalakshmi', batch: '2019 Batch', img: '2019-Batch.jpg', yt: 'EApzmAngseM' },
  { name: 'Shantanu', batch: '2020 Batch', img: '2020-Batch.jpg', yt: '3iJzfSkVG2I' },
  { name: 'Naveen', batch: '2018 Batch', img: '2018.jpg', yt: 'J0Wp6Hxmf3w' },
  { name: 'Kartavya Kumar', batch: '2021 Batch', img: '2021-Batch.jpg', yt: 'B67m5WE2Z_A' },
  { name: 'Kanaga', batch: '2017 Batch', img: '2017-Batch.jpg', yt: '1mNQDRj9p_k' },
  { name: 'Dimple', batch: '2016 Batch', img: '2016-Batch.jpg', yt: 'NKdDMxvADvc' },
]

export default function TestimonialsGrid() {
  const [active, setActive] = useState(null)

  return (
    <section className="py-16 lg:py-24" style={{ background: '#fff', borderTop: '1px solid #DFF0F5' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Eyebrow>In their words</Eyebrow>
        <h2 className="font-bold text-[1.9rem] sm:text-[2.3rem] mb-10" style={{ color: '#1C2B3A' }}>Testimonials</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(t)}
              className="group relative h-[160px] overflow-hidden text-left hover-card"
              style={{
                border: '1px solid #DFF0F5',
                borderRadius: '14px',
              }}
            >
              <img src={asset(t.img)} alt={t.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0" style={{ background: 'rgba(14,37,53,0.3)' }} />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, #1EB8D0, #1590A8)', boxShadow: '0 0 0 4px rgba(30,184,208,0.25)', animation: 'pulseGlow 2s ease-in-out infinite' }}>
                  <span className="ml-1 w-0 h-0 border-y-[7px] border-y-transparent border-l-[11px]" style={{ borderLeftColor: '#fff' }} />
                </span>
              </span>
              <div className="absolute bottom-0 inset-x-0 p-2.5" style={{ background: 'linear-gradient(to top, rgba(14,37,53,0.75), transparent)' }}>
                <p className="text-white text-[0.75rem] font-bold leading-tight">{t.name}</p>
                <p className="text-[0.62rem] font-semibold" style={{ color: '#45CCE2' }}>{t.batch}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)}>
        {active && (
          <div className="aspect-video bg-black">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${active.yt}`}
              title={`${active.name} testimonial`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </Modal>
    </section>
  )
}
