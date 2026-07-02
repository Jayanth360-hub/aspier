import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="pt-[160px] pb-24 text-center max-w-xl mx-auto px-5">
      <span className="text-[0.72rem] font-bold tracking-widest uppercase text-evergreen">404</span>
      <h1 className="font-bold text-ink text-[2rem] font-medium mt-3">Page not found</h1>
      <p className="text-sage mt-4">The page you're looking for doesn't exist or has moved.</p>
      <Link to="/" className="text-[0.72rem] font-bold tracking-widest uppercase inline-block mt-8 bg-evergreen text-white px-7 py-3.5 hover: transition-colors">
        Back to home →
      </Link>
    </section>
  )
}
