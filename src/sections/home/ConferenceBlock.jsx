import { asset } from '../../utils/images'

export default function ConferenceBlock() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-14 lg:py-20">
      <div className="relative overflow-hidden" style={{ borderRadius: '20px' }}>
        <img
          src={asset('UOM-Conf-2024-Gallery-9.jpeg')}
          alt="National Conference on Recent Advances in ART"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0E2535 0%, rgba(14,37,53,0.92) 50%, rgba(21,144,168,0.8) 100%)' }} />
        {/* Teal accent lines */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl" style={{ background: 'linear-gradient(180deg, transparent, #1EB8D0, transparent)' }} />
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, #1EB8D0, transparent)' }} />

        <div className="relative px-6 py-12 sm:px-12 sm:py-16 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="text-[0.72rem] font-bold tracking-widest uppercase" style={{ color: '#45CCE2' }}>National Conference on</span>
            <h2 className="mt-3 font-bold text-white text-[1.7rem] sm:text-[2.1rem] leading-tight">
              Current Updates &amp; Recent Advances in ART
            </h2>
            <p className="mt-4 leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Organized by Asia Pacific Institute of Embryology (ASPIER) &amp; The University of Mysore (UOM)
              · 16th &amp; 17th November 2024 · Vigyan Bhavan, University of Mysore, Mysore – Karnataka
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href="/events"
              className="text-center px-6 py-3.5 font-bold text-[0.875rem] rounded-xl transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #1EB8D0, #1590A8)', color: '#fff', boxShadow: '0 8px 24px rgba(30,184,208,0.3)' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(30,184,208,0.5)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(30,184,208,0.3)' }}
            >
              Register Now
            </a>
            <a
              href="https://embryologytraining.com/wp-content/uploads/2024/09/ASPIER-UOM-Conference-Nov-16-17-2024.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-center px-6 py-3.5 font-semibold text-[0.875rem] rounded-xl transition-all duration-300"
              style={{ border: '1px solid rgba(30,184,208,0.5)', color: '#45CCE2' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(30,184,208,0.1)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
            >
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
