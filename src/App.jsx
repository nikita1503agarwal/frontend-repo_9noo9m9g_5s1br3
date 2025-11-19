import React from "react"
import Header from "./components/Header"
import SectionCard from "./components/SectionCard"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_400px_at_20%_10%,rgba(59,130,246,.25),transparent_60%),radial-gradient(800px_400px_at_80%_0%,rgba(34,211,238,.22),transparent_60%)]" />

      <Header />

      <main className="px-5 md:px-8 max-w-6xl mx-auto">
        {/* 1. Edukasi Gizi */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Apa itu Gizi & Dasar-Dasarnya</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <SectionCard
              icon="ℹ️"
              title="Apa itu gizi?"
              items={[
                "Gizi adalah zat dari makanan yang dibutuhkan tubuh untuk tumbuh, bergerak, dan berpikir.",
                "Ada makro (karbo, protein, lemak) dan mikro (vitamin, mineral).",
                "Kualitas gizi memengaruhi energi, fokus, dan daya tahan tubuh.",
                "Makan bervariasi membantu memenuhi kebutuhan gizi harian.",
              ]}
              accent="blue"
            />

            <SectionCard
              icon="🍚"
              title="Fungsi karbo, protein, lemak"
              items={[
                "Karbohidrat: sumber energi utama untuk aktivitas dan belajar.",
                "Protein: membangun dan memperbaiki sel otot, hormon, dan enzim.",
                "Lemak: cadangan energi, bantu serap vitamin A, D, E, K.",
                "Seimbangkan: setengah piring karbo, seperempat protein, seperempat sayur/buah.",
              ]}
              accent="emerald"
            />

            <SectionCard
              icon="🥦"
              title="Pentingnya sayur & buah"
              items={[
                "Kaya vitamin, mineral, dan serat untuk pencernaan lancar.",
                "Bantu imun tubuh, kulit sehat, dan mencegah sembelit.",
                "Minimal 2 porsi sayur + 1–2 porsi buah per hari.",
                "Pilih yang mudah didapat di kantin/warung sekitar pondok.",
              ]}
              accent="amber"
            />

            <SectionCard
              icon="💧"
              title="Minum air cukup"
              items={[
                "Target 6–8 gelas per hari; lebih saat cuaca panas/olahraga.",
                "Air putih bantu fokus, cegah pusing, dan jaga stamina.",
                "Cek warna urin: kuning pucat menandakan cukup.",
                "Kurangi minuman manis berlebihan agar tidak cepat ngantuk.",
              ]}
              accent="violet"
            />

            <SectionCard
              icon="🍜"
              title="Bahaya sering makan mi instan"
              items={[
                "Tinggi garam dan rendah protein-serat, bikin cepat lapar.",
                "Sering konsumsi bisa memicu jerawat dan gangguan pencernaan.",
                "Jika terpaksa, tambah telur, sayur, dan batasi bumbunya.",
                "Jangan jadikan menu harian—cukup sesekali saja.",
              ]}
              accent="rose"
            />

            <SectionCard
              icon="📚"
              title="Pengaruh kurang gizi terhadap belajar & ibadah"
              items={[
                "Kurang gizi bikin mudah lelah, sulit fokus, dan cepat mengantuk.",
                "Daya tahan tubuh menurun—mudah sakit dan absen kegiatan.",
                "Ibadah malam dan hafalan jadi berat karena energi kurang.",
                "Makan teratur dan bergizi memudahkan disiplin harian.",
              ]}
              accent="blue"
            />
          </div>
        </section>

        {/* 2. Panduan Makan Seimbang */}
        <section className="mt-8 md:mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Panduan Makan Seimbang Santri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <SectionCard
              icon="🍽️"
              title="Contoh makan pagi–siang–malam"
              items={[
                "Pagi: nasi + telur dadar + tumis sayur + buah pisang.",
                "Siang: nasi + ayam/tempe + sayur bening + sambal sedikit.",
                "Malam: nasi + ikan/ati ampela + cah sayur + potong buah.",
                "Kalau lapar malam, pilih bubur kacang hijau atau susu hangat.",
              ]}
              accent="emerald"
            />

            <SectionCard
              icon="🥣"
              title="Porsi praktis harian"
              items={[
                "Nasi: 1–1,5 centong per makan; sayur: 1 mangkuk kecil.",
                "Protein: 1–2 potong tempe/tahu atau 1 butir telur/1 potong ayam.",
                "Buah: 1 potong sedang (apel/pir) atau 1 pisang sedang.",
                "Air: minimal 1 gelas tiap selesai shalat fardhu.",
              ]}
              accent="amber"
            />

            <SectionCard
              icon="🍗"
              title="Pilihan lauk murah"
              items={[
                "Tempe, tahu, telur, ikan pindang, ati ampela, kacang-kacangan.",
                "Olahan tumis/cah lebih hemat minyak daripada goreng.",
                "Tambahkan sambal secukupnya agar tetap selera.",
                "Beli sayur yang sedang musim agar lebih murah.",
              ]}
              accent="violet"
            />

            <SectionCard
              icon="🧁"
              title="Jajanan yang aman"
              items={[
                "Pilih jajanan yang dimasak matang dan tertutup.",
                "Utamakan buah potong, roti isi telur, atau bubur kacang hijau.",
                "Batasi gorengan harian; cukup 1–2 buah bila perlu.",
                "Hindari minuman berwarna mencolok dan terlalu manis.",
              ]}
              accent="rose"
            />

            <SectionCard
              icon="📅"
              title="Menu harian sederhana"
              items={[
                "Senin–Rabu: ganti-ganti sumber protein (telur, tempe, ikan).",
                "Kamis: perbanyak sayur bening/capcay; Jumat: buah wajib.",
                "Akhir pekan: sup sederhana + nasi + telur rebus.",
                "Selalu sediakan botol minum sendiri.",
              ]}
              accent="blue"
            />
          </div>
        </section>

        {/* 3. Info Kesehatan Santri */}
        <section className="mt-8 md:mt-12 mb-10 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Info Kesehatan Santri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <SectionCard
              icon="💪"
              title="Tips jaga stamina"
              items={[
                "Tidur 7–8 jam, kurangi begadang yang tidak perlu.",
                "Minum air cukup dan bergerak tiap 1–2 jam belajar.",
                "Makan teratur; jangan hanya kopi dan mi instan.",
                "Jemur pagi 10–15 menit untuk vitamin D.",
              ]}
              accent="emerald"
            />

            <SectionCard
              icon="🩸"
              title="Cegah anemia"
              items={[
                "Konsumsi sumber zat besi: hati ayam, daging, sayur hijau, kacang.",
                "Padukan dengan vitamin C (jeruk, jambu) agar penyerapannya baik.",
                "Batasi teh/kopi setelah makan karena menghambat penyerapan.",
                "Periksa darah bila sering pusing/pucat/lemas.",
              ]}
              accent="amber"
            />

            <SectionCard
              icon="🧠"
              title="Makanan untuk fokus belajar"
              items={[
                "Karbo kompleks (nasi, roti gandum) + protein (telur/tempe).",
                "Tambahkan kacang tanah/almond dan buah kaya air seperti jeruk.",
                "Sarapan ringan tapi lengkap sebelum kelas pagi.",
                "Hindari gula berlebih agar tidak mengantuk di jam siang.",
              ]}
              accent="violet"
            />

            <SectionCard
              icon="⏰"
              title="Waktu makan yang baik"
              items={[
                "Pagi 06–07, siang 12–13, malam 18–19; sesuaikan jadwal pondok.",
                "Jangan lewatkan makan malam agar tidak lapar tengah malam.",
                "Ngemil sehat di sela-sela: buah, roti, kacang rebus.",
                "Minum 1 gelas air setelah tiap shalat wajib.",
              ]}
              accent="rose"
            />

            <SectionCard
              icon="🥤"
              title="Kurangi gula & minyak"
              items={[
                "Batasi minuman manis kemasan; pilih air putih/infused water.",
                "Kurangi gorengan harian; pilih tumis, kukus, atau rebus.",
                "Baca label: pilih yang gula <10g per sajian jika memungkinkan.",
                "Gunakan sambal secukupnya, bukan satu plastik penuh.",
              ]}
              accent="emerald"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
