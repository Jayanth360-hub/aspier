import { Link } from 'react-router-dom'
import { asset } from '../utils/images'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'ASPIER', href: '/aspier' },
  { label: 'Faculty', href: '/faculty' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
]

const courseLinks = [
  { label: 'MSc Clinical Embryology & PGD', href: '/msc-course' },
  { label: 'Certificate — Clinical Embryology', href: '/courses' },
  { label: 'Certificate — Andrology', href: '/courses' },
  { label: 'Vitrification Course', href: '/courses' },
]

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M4 4l4.5 5.5L4 20h2.5l3.5-4.5 3.5 4.5H20l-4.8-6 4.3-5.5H17l-3.2 4-3-4H4zM6.5 6h2l9 12h-2L6.5 6z"/>
  </svg>
)
const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon fill="#1C2B3A" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
)
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/embryologytraining/', Icon: FacebookIcon, hoverBg: '#1877F2' },
  { label: 'Twitter / X', href: 'https://twitter.com/AspierMysore', Icon: TwitterIcon, hoverBg: '#000000' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCsxSphGvpGm_7O2oOCccfxQ', Icon: YouTubeIcon, hoverBg: '#FF0000' },
  { label: 'Instagram', href: 'https://www.instagram.com/aspier_mysore/', Icon: InstagramIcon, hoverBg: '#E1306C' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/asia-pacific-institute-of-embryology-98a226130/', Icon: LinkedInIcon, hoverBg: '#0A66C2' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0E2535', color: 'rgba(255,255,255,0.75)', borderTop: '3px solid #1EB8D0' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-12 py-16" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>

          {/* Brand column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-11 h-11 flex items-center justify-center"
                style={{ border: '2px solid #1EB8D0', background: 'rgba(30,184,208,0.1)', borderRadius: '10px' }}
              >
                <img src={asset('logo-small.png')} alt="ASPIER" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <div className="text-[1.05rem] text-white font-bold tracking-tight">ASPIER</div>
                <div className="text-[0.58rem] font-bold tracking-widest uppercase" style={{ color: '#1EB8D0' }}>Embryology Institute</div>
              </div>
            </div>

            <p className="text-[0.875rem] leading-[1.85] max-w-sm mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Asia's leading training institute for Clinical Embryology and Pre-implantation
              Genetics. Affiliated with the University of Mysore. Established 2015.
            </p>

            <div>
              <p className="text-[0.62rem] font-semibold tracking-widest uppercase mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>Follow us</p>
              <div className="flex items-center gap-3">
                {socials.map(({ label, href, Icon, hoverBg }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    title={label}
                    className="w-10 h-10 flex items-center justify-center transition-all duration-250"
                    style={{
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: 'rgba(255,255,255,0.6)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = hoverBg
                      e.currentTarget.style.borderColor = hoverBg
                      e.currentTarget.style.color = '#fff'
                      e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)'
                      e.currentTarget.style.boxShadow = `0 8px 20px ${hoverBg}55`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                      e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                      e.currentTarget.style.transform = 'translateY(0) scale(1)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h4 className="text-[0.72rem] font-bold tracking-widest uppercase mb-6" style={{ color: '#1EB8D0' }}>Quick links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="text-[0.875rem] flex items-center gap-2 transition-all duration-200"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#1EB8D0'; e.currentTarget.style.paddingLeft = '4px' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.paddingLeft = '0' }}
                  >
                    <span style={{ color: 'rgba(30,184,208,0.5)', fontSize: '0.45rem' }}>◆</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="md:col-span-4">
            <h4 className="text-[0.72rem] font-bold tracking-widest uppercase mb-6" style={{ color: '#1EB8D0' }}>Our courses</h4>
            <ul className="space-y-3 mb-8">
              {courseLinks.map((l, i) => (
                <li key={l.label + i}>
                  <Link
                    to={l.href}
                    className="text-[0.875rem] leading-snug flex items-start gap-2 transition-all duration-200"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#1EB8D0'; e.currentTarget.style.paddingLeft = '4px' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.paddingLeft = '0' }}
                  >
                    <span style={{ color: 'rgba(30,184,208,0.5)', fontSize: '0.45rem', marginTop: '5px', flexShrink: 0 }}>◆</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="block text-center py-3 font-bold text-[0.875rem] rounded-xl transition-all duration-250"
              style={{ border: '2px solid #1EB8D0', color: '#1EB8D0' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1EB8D0'; e.currentTarget.style.color = '#0E2535'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(30,184,208,0.35)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1EB8D0'; e.currentTarget.style.boxShadow = 'none' }}
            >
              Apply for 2026 intake →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[0.78rem]" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} Asia Pacific Institute of Embryology (ASPIER). All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://embryologytraining.com/privacy-policy-2/"
              target="_blank" rel="noreferrer"
              className="text-[0.78rem] transition-colors"
              style={{ color: 'rgba(255,255,255,0.3)' }}
              onMouseEnter={e => e.currentTarget.style.color = '#1EB8D0'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
            >
              Privacy Policy
            </a>
            <Link
              to="/contact"
              className="text-[0.78rem] transition-colors"
              style={{ color: 'rgba(255,255,255,0.3)' }}
              onMouseEnter={e => e.currentTarget.style.color = '#1EB8D0'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
