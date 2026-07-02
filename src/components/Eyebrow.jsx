export default function Eyebrow({ index, children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="h-1 w-8 rounded-full" style={{ background: 'linear-gradient(90deg, #1EB8D0, #45CCE2)' }} />
      <span className="text-[0.72rem] font-bold tracking-widest uppercase" style={{ color: '#1EB8D0' }}>
        {children}
      </span>
    </div>
  )
}
