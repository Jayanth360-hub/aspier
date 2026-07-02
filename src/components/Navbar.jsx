import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navStructure } from '../data/content'
import { asset } from '../utils/images'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [openMobileGroup, setOpenMobileGroup] = useState(null)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    setOpenDropdown(null)
    setOpenMobileGroup(null)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none px-3 pt-3 md:px-6 md:pt-4">
      <div
        className="max-w-7xl mx-auto pointer-events-auto transition-all duration-300"
        style={{
          background: 'rgba(135,206,250,0.45)',
          backdropFilter: 'blur(18px) saturate(160%)',
          WebkitBackdropFilter: 'blur(18px) saturate(160%)',
          border: '1px solid rgba(186,230,253,0.7)',
          borderRadius: '999px',
          boxShadow: '0 8px 32px rgba(14,77,92,0.18), inset 0 1px 0 rgba(255,255,255,0.5)',
        }}
      >
      <div className="px-4 md:px-6">
        <div className="flex items-center justify-between h-[60px] md:h-[64px]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div
              className="w-9 h-9 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105"
              style={{ border: '2px solid #1EB8D0', background: 'rgba(234,249,252,0.8)', borderRadius: '8px' }}
            >
              <img src={asset('logo-small.png')} alt="ASPIER" className="w-6 h-6 object-contain" />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-[1rem] tracking-tight" style={{ color: '#1C2B3A' }}>ASPIER</div>
              <div className="text-[0.55rem] font-semibold tracking-widest uppercase" style={{ color: '#1EB8D0' }}>Embryology Institute</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navStructure.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="px-4 py-2 text-[0.875rem] font-medium transition-colors flex items-center gap-1"
                    style={{ color: '#3A5068' }}
                  >
                    {item.label}
                    <span className="text-[0.6rem] mt-px" style={{ color: '#1EB8D0' }}>▾</span>
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-2 w-60">
                      <div
                        className="py-2"
                        style={{
                          background: '#fff',
                          border: '1px solid #DFF0F5',
                          boxShadow: '0 12px 40px rgba(30,184,208,0.12)',
                          borderRadius: '10px',
                        }}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="flex items-center gap-2 px-5 py-2.5 text-[0.875rem] transition-colors"
                            style={{ color: '#3A5068' }}
                            onMouseEnter={e => { e.currentTarget.style.color = '#1EB8D0'; e.currentTarget.style.background = '#EAF9FC' }}
                            onMouseLeave={e => { e.currentTarget.style.color = '#3A5068'; e.currentTarget.style.background = 'transparent' }}
                          >
                            <span style={{ color: '#1EB8D0', fontSize: '0.45rem' }}>◆</span>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className="px-4 py-2 text-[0.875rem] font-medium transition-colors rounded-lg"
                  style={({ isActive }) => ({
                    color: isActive ? '#1EB8D0' : '#3A5068',
                    background: isActive ? '#EAF9FC' : 'transparent',
                  })}
                  onMouseEnter={e => { if (!e.currentTarget.getAttribute('aria-current')) e.currentTarget.style.background = '#F4F9FC' }}
                  onMouseLeave={e => { if (!e.currentTarget.getAttribute('aria-current')) e.currentTarget.style.background = 'transparent' }}
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          {/* Right side: Enroll Now + WhatsApp */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="/contact"
              className="px-5 py-2.5 transition-all duration-300 font-semibold text-[0.875rem] rounded-lg"
              style={{
                background: 'linear-gradient(135deg, #1EB8D0, #1590A8)',
                color: '#fff',
                boxShadow: '0 4px 12px rgba(30,184,208,0.3)',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 20px rgba(30,184,208,0.45)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(30,184,208,0.3)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Enroll Now
            </Link>

            {/* WhatsApp button in navbar */}
            <a
              href="https://wa.me/919980061456"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 font-semibold text-[0.875rem] rounded-lg transition-all duration-300"
              style={{
                background: '#25D366',
                color: '#fff',
                boxShadow: '0 4px 12px rgba(37,211,102,0.35)',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,0.55)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(37,211,102,0.35)'; e.currentTarget.style.transform = 'translateY(0)' }}
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
            style={{ border: '1px solid rgba(186,230,253,0.8)', background: 'rgba(135,206,250,0.4)', borderRadius: '999px' }}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-[#1C2B3A] transition-transform ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[#1C2B3A] transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[#1C2B3A] transition-transform ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>
      </div>

      {/* Mobile menu — floating glass panel, not scrollable */}
      {open && (
        <div
          className="lg:hidden mt-2 px-5 py-5 pointer-events-auto max-w-7xl mx-auto"
          style={{
            background: 'rgba(135,206,250,0.55)',
            backdropFilter: 'blur(18px) saturate(160%)',
            WebkitBackdropFilter: 'blur(18px) saturate(160%)',
            border: '1px solid rgba(186,230,253,0.7)',
            borderRadius: '24px',
            boxShadow: '0 8px 32px rgba(14,77,92,0.18)',
          }}
        >
          {navStructure.map((item) =>
            item.children ? (
              <div key={item.label} style={{ borderBottom: '1px solid #EBF5FA' }}>
                <button
                  onClick={() => setOpenMobileGroup(openMobileGroup === item.label ? null : item.label)}
                  className="w-full flex items-center justify-between py-3 text-[0.95rem]"
                  style={{ color: '#1C2B3A' }}
                >
                  {item.label}
                  <span className="text-[0.7rem]" style={{ color: '#1EB8D0' }}>{openMobileGroup === item.label ? '▴' : '▾'}</span>
                </button>
                {openMobileGroup === item.label && (
                  <div className="pb-3 pl-5 space-y-1">
                    {item.children.map((child) => (
                      <Link key={child.href} to={child.href} className="block py-2 text-[0.875rem]" style={{ color: '#1EB8D0' }}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center gap-2 py-3 text-[0.95rem]"
                style={{ borderBottom: '1px solid #EBF5FA', color: '#1C2B3A' }}
              >
                {item.label}
              </Link>
            )
          )}
          <div className="mt-5 flex flex-col gap-3">
            <Link
              to="/contact"
              className="block text-center py-3 font-semibold text-[0.875rem] rounded-lg"
              style={{ background: 'linear-gradient(135deg, #1EB8D0, #1590A8)', color: '#fff' }}
            >
              Enroll Now
            </Link>
            <a
              href="https://wa.me/919980061456"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-3 font-semibold text-[0.875rem] rounded-lg"
              style={{ background: '#25D366', color: '#fff' }}
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
