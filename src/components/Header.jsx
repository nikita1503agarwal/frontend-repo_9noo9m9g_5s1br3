import React from "react"

const Header = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(600px_circle_at_10%_10%,#3b82f6,transparent_40%),radial-gradient(600px_circle_at_90%_20%,#22d3ee,transparent_40%)]" />
      <div className="relative px-6 pt-12 pb-10 md:pt-16 md:pb-14 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          Edukasi Gizi Santri
        </h1>
        <p className="mt-3 md:mt-4 text-base md:text-lg text-blue-100/90 max-w-2xl mx-auto">
          Panduan praktis, singkat, dan mudah diterapkan di kehidupan pondok.
        </p>
      </div>
    </header>
  )
}

export default Header
