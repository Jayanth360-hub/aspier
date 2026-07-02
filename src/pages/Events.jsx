import PageHero from '../components/ui/PageHero'
import CTABanner from '../components/ui/CTABanner'
import { events } from '../data/content'
import { asset } from '../utils/images'

export default function Events() {
  return (
    <>
      <PageHero
        eyebrow="ASPIER Calendar"
        title="Events"
        lead="Conferences, webinars, and workshops — from national gatherings with the University of Mysore to hands-on training sessions for our own students."
      />

      <section className="py-16 lg:py-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e) => (
            <article key={e.id} id={e.id} className="scroll-mt-28 border hover-card" style={{ borderColor: '#DFF0F5', background: '#F4F9FC', borderRadius: "12px", overflow: 'hidden' }}>
              <div className="h-[190px] overflow-hidden">
                <img src={asset(e.img)} alt={e.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[1.05rem] leading-snug" style={{ color: '#1C2B3A' }}>{e.title}</h3>
                <p className="text-[0.72rem] font-bold tracking-widest uppercase mt-2 text-[0.62rem] leading-relaxed" style={{ color: '#1EB8D0' }}>
                  {e.date} &middot; {e.venue}
                </p>
                <p className="mt-3 text-[0.875rem] leading-relaxed" style={{ color: '#3A5068' }}>{e.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABanner
        eyebrow="Stay Updated"
        title="Be the first to know about upcoming ASPIER events"
        lead="Register your interest and we'll notify you about conferences, workshops, and training programmes."
        cta="Get in Touch"
      />
    </>
  )
}
