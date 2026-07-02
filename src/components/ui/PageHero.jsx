export default function PageHero({ eyebrow, title, lead, image, imageAlt, bg = 'teal' }) {
  const isDark = bg === 'dark'
  return (
    <section
      className="relative pt-[84px] md:pt-[92px] overflow-hidden"
      style={isDark
        ? { background: 'linear-gradient(135deg, #0E2535 0%, #1E4A62 100%)' }
        : { background: 'linear-gradient(135deg, #EAF9FC 0%, #F4F9FC 100%)', borderBottom: '1px solid #DFF0F5' }
      }
    >
      {/* Pattern */}
      <div className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(30,184,208,0.8) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      {/* Teal left bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: 'linear-gradient(180deg, transparent, #1EB8D0, transparent)' }} />

      <div className={`relative max-w-7xl mx-auto px-5 md:px-8 py-16 lg:py-20 ${image ? 'grid lg:grid-cols-12 gap-10 items-center' : ''}`}>
        <div className={image ? 'lg:col-span-7' : ''}>
          {eyebrow && (
            <span className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 text-[0.72rem] font-bold tracking-widest uppercase rounded-lg"
              style={{ border: '1px solid rgba(30,184,208,0.4)', color: '#1590A8', background: 'rgba(30,184,208,0.08)' }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#1EB8D0' }} />
              {eyebrow}
            </span>
          )}
          <h1
            className="text-[2rem] sm:text-[2.6rem] lg:text-[3rem] font-bold leading-[1.1] tracking-tight"
            style={{ color: isDark ? '#fff' : '#1C2B3A' }}
          >
            {title}
          </h1>
          {lead && (
            <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed"
              style={{ color: isDark ? 'rgba(255,255,255,0.75)' : '#3A5068' }}>
              {lead}
            </p>
          )}
        </div>
        {image && (
          <div className="lg:col-span-5">
            <div className="overflow-hidden" style={{ borderRadius: '16px', border: '1px solid #DFF0F5' }}>
              <img src={image} alt={imageAlt || title} className="w-full h-[280px] lg:h-[320px] object-cover" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
