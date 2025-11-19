import React from "react"

const Header = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(600px_circle_at_10%_10%,#3b82f6,transparent_40%),radial-gradient(600px_circle_at_90%_20%,#22d3ee,transparent_40%)]" />

      <div className="relative px-6 pt-12 pb-10 md:pt-16 md:pb-14">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Edukasi Gizi Santri
            </h1>
            <p className="mt-3 md:mt-4 text-base md:text-lg text-blue-100/90 max-w-2xl md:max-w-none mx-auto md:mx-0">
              Panduan praktis, singkat, dan mudah diterapkan di kehidupan pondok.
            </p>
          </div>

          {/* Ilustrasi dekoratif */}
          <div className="relative hidden md:block">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-cyan-400/10 to-blue-500/10 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <svg
                viewBox="0 0 400 260"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
              >
                <defs>
                  <linearGradient id="bowlGrad" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="leafGrad" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>

                {/* Piring mangkuk */}
                <ellipse cx="200" cy="210" rx="150" ry="18" fill="#0f172a" opacity="0.25" />
                <path d="M80 160c0 44 240 44 240 0v-6H80v6z" fill="url(#bowlGrad)" opacity="0.9" />
                <path d="M80 154c0 20 240 20 240 0s-240-20-240 0z" fill="#e2f0ff" opacity="0.15" />

                {/* Sayuran */}
                <g>
                  <path d="M150 120c20-18 40-18 60 0 0 0-10 16-30 18s-30-18-30-18z" fill="url(#leafGrad)" />
                  <circle cx="230" cy="128" r="16" fill="#f59e0b" />
                  <circle cx="240" cy="120" r="7" fill="#fbbf24" />
                  <path d="M165 120c-8-10-20-12-28-6 8 6 12 18 10 28 8-6 18-12 18-22z" fill="#84cc16" />
                  <path d="M205 114c6-10 22-12 30-6-8 6-12 18-10 28-10-4-20-10-20-22z" fill="#22c55e" />
                </g>

                {/* Botol minum */}
                <g transform="translate(290,90)">
                  <rect x="-16" y="0" width="32" height="70" rx="8" fill="#38bdf8" opacity="0.9" />
                  <rect x="-10" y="-10" width="20" height="12" rx="4" fill="#93c5fd" />
                  <rect x="-12" y="16" width="24" height="8" rx="4" fill="#0ea5e9" opacity="0.6" />
                </g>

                {/* Buah apel */}
                <g transform="translate(115,92)">
                  <circle cx="0" cy="0" r="14" fill="#ef4444" />
                  <path d="M0-14c6 0 10-4 12-8-6 0-10 4-12 8z" fill="#fb7185" />
                  <rect x="-1.5" y="-22" width="3" height="8" rx="1" fill="#166534" />
                  <path d="M-2-22c-6 2-10 8-10 12 6-2 10-8 10-12z" fill="#22c55e" />
                </g>

                {/* Hiasan gelembung */}
                <g fill="#93c5fd" opacity="0.5">
                  <circle cx="70" cy="40" r="4" />
                  <circle cx="100" cy="30" r="3" />
                  <circle cx="330" cy="40" r="4" />
                  <circle cx="350" cy="26" r="2.5" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
