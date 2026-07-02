import { useState } from 'react'
import Modal from '../../components/ui/Modal'
import { asset } from '../../utils/images'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function VideoTestimonial() {
  const [open, setOpen] = useState(false)
  const [ref, inView] = useScrollReveal(0.1)

  return (
    <section style={{ background: '#F4F9FC', borderTop: '1px solid #DFF0F5' }} className="py-16 lg:py-24">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 items-center"
        style={{ opacity: 0, animation: inView ? 'slideUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards' : 'none' }}
      >
        <div className="lg:col-span-6">
          <button
            onClick={() => setOpen(true)}
            className="group relative w-full h-[320px] sm:h-[380px] overflow-hidden block hover-card"
            style={{ borderRadius: '18px', border: '1px solid #DFF0F5' }}
          >
            <img
              src={asset('about-6-scaled.jpg')}
              alt="ASPIER inspiration video"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 transition-colors duration-300" style={{ background: 'rgba(14,37,53,0.2)' }} />
            <span className="absolute inset-0 flex items-center justify-center">
              <span
                className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #1EB8D0, #1590A8)', boxShadow: '0 0 0 12px rgba(30,184,208,0.2)', animation: 'pulseGlow 2s ease-in-out infinite' }}
              >
                <span className="ml-1 w-0 h-0 border-y-[12px] border-y-transparent border-l-[20px]" style={{ borderLeftColor: '#fff' }} />
              </span>
            </span>
            {/* Teal corner accents */}
            <div className="absolute top-4 left-4 w-7 h-7" style={{ borderTop: '2.5px solid #1EB8D0', borderLeft: '2.5px solid #1EB8D0', borderRadius: '2px 0 0 0' }} />
            <div className="absolute bottom-4 right-4 w-7 h-7" style={{ borderBottom: '2.5px solid #1EB8D0', borderRight: '2.5px solid #1EB8D0', borderRadius: '0 0 2px 0' }} />
          </button>
        </div>

        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-4" style={{ background: '#EAF9FC', color: '#1590A8' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#1EB8D0' }} />
            <span className="text-[0.72rem] font-bold tracking-widest uppercase">ASPIER</span>
          </div>
          <h2 className="font-bold text-[1.9rem] sm:text-[2.3rem] leading-tight" style={{ color: '#1C2B3A' }}>
            Shaping Tomorrow&rsquo;s Embryologists Today
          </h2>
          <p className="mt-5 leading-[1.85] text-[0.95rem]" style={{ color: '#3A5068' }}>
            ASPIER is a global leader in Clinical Embryology and Pre-implantation Genetics, offering advanced
            certificate and master&rsquo;s programmes with strong scientific and hands-on training. It was the
            first to introduce a two-year integrated MSc programme in collaboration with the University of
            Mysore. With over 500 successful graduates, ASPIER is trusted for producing skilled and globally
            employable embryology professionals.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/aspier"
              className="px-6 py-3 font-bold text-[0.875rem] rounded-xl transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #1EB8D0, #1590A8)', color: '#fff', boxShadow: '0 6px 20px rgba(30,184,208,0.25)' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 10px 28px rgba(30,184,208,0.4)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 6px 20px rgba(30,184,208,0.25)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              About ASPIER
            </a>
            <button
              onClick={() => setOpen(true)}
              className="px-6 py-3 font-semibold text-[0.875rem] rounded-xl transition-all duration-300"
              style={{ border: '2px solid #1EB8D0', color: '#1590A8' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#EAF9FC' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
            >
              ▶ Watch Video
            </button>
          </div>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="aspect-video bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Afikw9DeO2U"
            title="ASPIER inspiration video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Modal>
    </section>
  )
}
