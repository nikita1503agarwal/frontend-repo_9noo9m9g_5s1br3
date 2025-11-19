import React, { useMemo, useState } from "react"

const SectionCard = ({ icon, title, items, accent = "blue" }) => {
  const [copied, setCopied] = useState(false)

  const accentClasses = {
    blue: "from-blue-500/20 to-cyan-500/10 border-blue-400/30 hover:border-blue-300/50",
    emerald: "from-emerald-500/20 to-teal-500/10 border-emerald-400/30 hover:border-emerald-300/50",
    amber: "from-amber-500/20 to-yellow-500/10 border-amber-400/30 hover:border-amber-300/50",
    rose: "from-rose-500/20 to-pink-500/10 border-rose-400/30 hover:border-rose-300/50",
    violet: "from-violet-500/20 to-fuchsia-500/10 border-violet-400/30 hover:border-violet-300/50",
  }

  const summaryText = useMemo(() => {
    const bullets = items.map((t, i) => `${i + 1}. ${t}`).join("\n")
    return `${title}\n\n${bullets}`
  }, [title, items])

  const copySummary = async () => {
    try {
      await navigator.clipboard.writeText(summaryText)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (e) {
      // Fallback: do nothing if clipboard fails
    }
  }

  return (
    <div
      className={`relative h-full rounded-2xl border backdrop-blur bg-gradient-to-br ${accentClasses[accent]} p-5 md:p-6 shadow-lg shadow-black/10 transition-all duration-200 hover:shadow-xl hover:shadow-black/20`}
    >
      <div className="flex items-start gap-3 md:gap-4">
        <button
          type="button"
          onClick={copySummary}
          title={copied ? "Tersalin" : "Klik untuk salin ringkasan"}
          aria-label={copied ? "Ringkasan tersalin" : `Salin ringkasan: ${title}`}
          className={`relative flex-shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white text-xl transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 hover:scale-105 active:scale-95 cursor-pointer`}
        >
          <span className={`transition-opacity ${copied ? "opacity-0" : "opacity-100"}`}>{icon}</span>
          {copied && (
            <span className="absolute inset-0 grid place-items-center text-xs font-semibold text-emerald-200">
              ✓
            </span>
          )}
        </button>
        <h3 className="text-white font-semibold text-lg md:text-xl leading-tight">
          {title}
        </h3>
      </div>
      <ul className="mt-3 md:mt-4 space-y-2.5 md:space-y-3">
        {items.map((text, idx) => (
          <li key={idx} className="text-sm md:text-base leading-relaxed text-blue-100/90">
            {text}
          </li>
        ))}
      </ul>
      <div className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-200 ${
        accent === "blue"
          ? "from-blue-400/10 to-cyan-400/0"
          : accent === "emerald"
          ? "from-emerald-400/10 to-teal-400/0"
          : accent === "amber"
          ? "from-amber-400/10 to-yellow-400/0"
          : accent === "rose"
          ? "from-rose-400/10 to-pink-400/0"
          : "from-violet-400/10 to-fuchsia-400/0"
      } group-hover:opacity-100`} />
    </div>
  )
}

export default SectionCard
