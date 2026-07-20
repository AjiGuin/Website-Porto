# Mechanical Drafter — Personal Portfolio

Website portfolio pribadi untuk Mechanical Drafter / CAD-CAM Designer. Dibangun dengan **React + TypeScript + Tailwind CSS + Framer Motion + Lucide Icons**, bertema monochrome premium dengan motif "lembar gambar teknik" (dimension lines, title block, blueprint grid) sebagai elemen dekoratif khas.

## Tech Stack

- **React 19 + TypeScript** — komponen modular, type-safe
- **Vite** — dev server & build tool
- **Tailwind CSS** — utility-first styling, design token custom (lihat `tailwind.config.js`)
- **Framer Motion** — animasi scroll reveal, hover, modal, parallax, loading screen
- **Lucide Icons** — ikon UI (ikon sosial media dibuat custom karena lucide-react versi terbaru tidak lagi menyertakan logo brand)

## Menjalankan Proyek

```bash
npm install
npm run dev       # development server, biasanya di http://localhost:5173
npm run build     # build production ke folder dist/
npm run preview   # preview hasil build production
```

Butuh Node.js 18 ke atas.

## Struktur Folder

```
src/
├── components/     # semua komponen UI (per-section + shared component)
├── data/           # SEMUA konten teks/data ada di sini — edit di sini dulu
├── hooks/          # custom hooks (counter animasi, dsb)
├── types/          # TypeScript types
├── App.tsx         # merangkai urutan section & loading screen
├── index.css       # global style, custom utility (dim-line, crop-marks, dsb)
└── main.tsx        # entry point
```

## Cara Kustomisasi Cepat

Semua konten teks dikumpulkan di folder `src/data/`, jadi Anda **tidak perlu menyentuh komponen** untuk mengganti isi:

| File | Isi |
|---|---|
| `src/data/socials.ts` | Nama, judul/role, deskripsi hero, lokasi, path CV, link WhatsApp/Email/GitHub/LinkedIn/Instagram |
| `src/data/skills.ts` | Daftar skill & persentase |
| `src/data/projects.ts` | Semua project portfolio (kategori, software, deskripsi, tahun, dsb) |
| `src/data/experience.ts` | Timeline "Perjalanan Belajar" (About), Pengalaman, Sertifikat, dan angka Statistik |

### Mengganti foto

Semua foto (profil, About, thumbnail project, sertifikat) saat ini masih berupa **placeholder bergaya hatching teknik** (`PlaceholderImage.tsx`) supaya situs tetap terlihat rapi tanpa gambar asli. Untuk mengganti dengan foto asli:

1. Taruh file gambar di folder `public/images/` (buat foldernya).
2. Di komponen terkait (misalnya `Hero.tsx`, `About.tsx`, `Portfolio.tsx`, `Certificates.tsx`), ganti pemanggilan `<PlaceholderImage .../>` dengan:
   ```tsx
   <img src="/images/nama-file.jpg" alt="Deskripsi" className="h-full w-full object-cover" />
   ```

### Mengganti CV

Taruh file PDF CV Anda di `public/` lalu sesuaikan `cvPath` di `src/data/socials.ts` (default: `/cv-rangga-adi-pratama.pdf`).

### Menghubungkan form kontak ke backend sungguhan

Form di `src/components/Contact.tsx` saat ini **hanya simulasi** (delay 1.1 detik lalu menampilkan status terkirim) — belum terhubung ke email/server manapun. Untuk membuatnya benar-benar mengirim pesan, ganti bagian `setTimeout` di `handleSubmit` dengan salah satu opsi berikut:

- **EmailJS** (paling cepat, tanpa backend sendiri) — https://www.emailjs.com/docs/sdk/send/
- **Formspree** — kirim `fetch(...)` ke endpoint form Anda
- **API route sendiri** — jika di-deploy di platform yang mendukung serverless functions (Vercel/Netlify)

### Warna & Font (Design Tokens)

Semua token desain ada di `tailwind.config.js`:

- `ink` `#0D0D0E`, `charcoal`, `graphite` — hitam/abu gelap
- `steel`, `mist`, `haze` — abu-abu teks & garis
- `silver`, `silver-light` — aksen silver tipis
- `paper`, `paper-dim` — putih/background
- Font: `Poppins` (display/heading), `Inter` (body), `IBM Plex Mono` (label teknis/angka)

## Fitur yang Sudah Diimplementasikan

- Loading screen minimalis (compass drawing + progress %)
- Custom cursor elegan (nonaktif otomatis di perangkat sentuh)
- Navbar transparan → solid saat scroll, smooth scroll ke section, menu mobile
- Hero dengan foto lingkaran, parallax ringan saat scroll, title block ala gambar teknik
- About dengan timeline perjalanan belajar
- Skills dengan progress bar + counter persentase animasi saat masuk viewport
- Portfolio dengan filter kategori (animasi sliding pill indicator) + hover zoom thumbnail + modal Preview (gambar besar) & Detail (deskripsi lengkap, software, durasi, skill)
- Experience timeline alternating (desktop) / vertikal (mobile)
- Certificates grid dengan hover lift
- Statistik dengan counter animasi (angka menghitung naik saat discroll ke section)
- Contact form dengan validasi + ikon sosial (WhatsApp, Email, GitHub, LinkedIn, Instagram)
- Footer sederhana dengan tombol back-to-top
- Fully responsive (mobile, tablet, desktop), `prefers-reduced-motion` dihormati, focus state terlihat untuk keyboard navigation

## Deploy

Proyek ini adalah static site hasil build Vite, bisa langsung di-deploy ke:

- **Vercel** — `vercel deploy` (auto-detect Vite)
- **Netlify** — build command `npm run build`, publish directory `dist`
- **GitHub Pages / hosting statis lain** — upload isi folder `dist/` setelah `npm run build`

Jangan lupa ganti meta tag `og:image`, `canonical`, dan domain di `index.html` sesuai domain asli Anda sebelum deploy.
