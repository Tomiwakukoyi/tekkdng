export default function ScrollProgress({ progress }: { progress: number }) {
  return (
    <div
      className="fixed top-0 left-0 h-1 bg-accent z-50 transition-all duration-300"
      style={{ width: `${progress}%` }}
    />
  )
}
