import React from "react"

const SectionCard = ({ icon, title, items, accent = "blue" }) => {
  const accentClasses = {
    blue: "from-blue-500/20 to-cyan-500/10 border-blue-400/30",
    emerald: "from-emerald-500/20 to-teal-500/10 border-emerald-400/30",
    amber: "from-amber-500/20 to-yellow-500/10 border-amber-400/30",
    rose: "from-rose-500/20 to-pink-500/10 border-rose-400/30",
    violet: "from-violet-500/20 to-fuchsia-500/10 border-violet-400/30",
  }

  return (
    <div className={`relative h-full rounded-2xl border backdrop-blur bg-gradient-to-br ${accentClasses[accent]} p-5 md:p-6 shadow-lg shadow-black/10`}>
      <div className="flex items-start gap-3 md:gap-4">
        <div className="flex-shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white text-xl">
          {icon}
        </div>
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
    </div>
  )
}

export default SectionCard
