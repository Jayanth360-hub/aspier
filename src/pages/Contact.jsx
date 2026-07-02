import PageHero from '../components/ui/PageHero'
import Eyebrow from '../components/Eyebrow'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact ASPIER"
        lead="Have a question about admissions, courses, or campus visits? Send us an enquiry and our team will respond within 1–2 business days."
      />

      <section className="py-16 lg:py-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <Eyebrow index="01">Enquiry form</Eyebrow>
            <h2 className="font-bold text-[1.6rem] font-medium mb-7" style={{ color: '#1C2B3A' }}>Send us a message</h2>
            <ContactForm />
          </div>

          <div className="lg:col-span-6">
            <Eyebrow index="02">Find us</Eyebrow>
            <h2 className="font-bold text-[1.6rem] font-medium mb-7" style={{ color: '#1C2B3A' }}>Visit our campus</h2>

            <div className="border overflow-hidden mb-7" style={{ borderColor: '#DFF0F5', borderRadius: "12px" }}>
              <iframe
                title="ASPIER location in Mysuru"
                src="https://www.google.com/maps?q=Asia+Pacific+Institute+of+Embryology+Mysuru&output=embed"
                className="w-full h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="space-y-5">
              <div className="p-5 border" style={{ borderColor: '#DFF0F5', background: '#EAF9FC', borderRadius: "12px" }}>
                <h3 className="text-[0.72rem] font-bold tracking-widest uppercase mb-2" style={{ color: '#1EB8D0' }}>Address</h3>
                <p className="leading-relaxed text-[0.9rem]" style={{ color: '#3A5068' }}>
                  Asia Pacific Institute Of Embryology<br />
                  #12246/A, Vijayanagar 4th Stage, 2nd Phase<br />
                  Outer Ring Road, Mysuru – 570017
                </p>
              </div>
              <div className="p-5 border" style={{ borderColor: '#DFF0F5', background: '#EAF9FC', borderRadius: "12px" }}>
                <h3 className="text-[0.72rem] font-bold tracking-widest uppercase mb-2" style={{ color: '#1EB8D0' }}>Contact</h3>
                <p className="leading-relaxed text-[0.9rem]" style={{ color: '#3A5068' }}>
                  <a href="https://wa.me/919980061456" className="flex items-center gap-2 mb-2 transition-colors hover:underline" style={{ color: '#25D366' }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    +91 99800 61456 (WhatsApp)
                  </a>
                  <a href="mailto:cepgadmission@gmail.com" className="transition-colors hover:underline" style={{ color: '#1590A8' }}>
                    cepgadmission@gmail.com
                  </a>
                </p>
              </div>
              <div className="p-5 border" style={{ borderColor: '#DFF0F5', background: '#EAF9FC', borderRadius: "12px" }}>
                <h3 className="text-[0.72rem] font-bold tracking-widest uppercase mb-2" style={{ color: '#1EB8D0' }}>Office Hours</h3>
                <p className="text-[0.9rem]" style={{ color: '#3A5068' }}>
                  Monday – Saturday: 9:00 AM – 5:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
