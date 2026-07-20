import type { Certificate, ExperienceEntry, StatItem, TimelineEntry } from '../types';

// Compact timeline shown inside the About section
export const learningTimeline: TimelineEntry[] = [
  {
    id: 'lt-01',
    year: '2023',
    title: 'Mengenal Gambar Teknik',
    description: 'Mulai belajar dasar gambar teknik manual dan proyeksi ortografik di bangku sekolah.',
  },
  {
    id: 'lt-02',
    year: '2023',
    title: 'Masuk Dunia CAD 2D',
    description: 'Belajar AutoCAD secara otodidak, mulai dari perintah dasar hingga gambar kerja lengkap.',
  },
  {
    id: 'lt-03',
    year: '2024',
    title: 'Transisi ke Pemodelan 3D',
    description: 'Memperdalam Autodesk Inventor dan SolidWorks untuk kebutuhan assembly dan simulasi sederhana.',
  },
  {
    id: 'lt-04',
    year: '2025',
    title: 'Merambah CNC Programming',
    description: 'Mempelajari Mastercam untuk membuat program G-Code CNC.',
  },
];

// Fuller timeline for the dedicated Experience section
export const experience: ExperienceEntry[] = [
  {
    id: 'exp-01',
    period: '2025 — Now',
    role: 'Freelance Mechanical Drafter',
    organization: 'Klien Independen',
    description:
      'Mengerjakan gambar kerja, model 3D, dan dokumen produksi untuk berbagai klien di bidang manufaktur skala kecil hingga menengah.',
    tags: ['AutoCAD', 'Inventor', 'Technical Drawing'],
  },
  {
    id: 'exp-02',
    period: '13 April 2026 — 13 July 2026',
    role: 'Junior Drafter (PKL)',
    organization: 'PT. Linggajaya Putra Mandiri',
    description:
      'Membantu tim produksi menerjemahkan sketsa lapangan menjadi gambar teknik siap potong, serta menyusun program CNC sederhana untuk part repetitif.',
    tags: ['Mastercam', 'CNC Programming', 'Solidworks'],
  },
  {
    id: 'exp-03',
    period: '? — ?',
    role: 'Proyek Akhir & Sertifikasi CAD',
    organization: 'Program Pelatihan Vokasi',
    description:
      'Menyelesaikan proyek akhir berupa rancangan mesin sederhana lengkap dengan assembly, BOM, dan gambar kerja sebagai syarat kelulusan.',
    tags: ['SolidWorks', 'Assembly Design'],
  },
  {
    id: 'exp-04',
    period: '2023 — Now',
    role: 'Belajar Mandiri CAD/CAM',
    organization: 'Otodidak & Kursus Daring',
    description:
      'Menghabiskan ratusan jam berlatih membuat gambar teknik dan model 3D melalui studi kasus dan tutorial daring.',
    tags: ['AutoCAD', 'Inventor', 'Mastercam', 'Solidworks'],
  },
];

export const certificates: Certificate[] = [
  {
    id: 'cert-01',
    title: 'AutoCAD Certified User',
    issuer: 'Autodesk Certification',
    year: '2022',
    credentialLabel: 'CRED. NO. AC-2201',
  },
  {
    id: 'cert-02',
    title: 'Autodesk Inventor Professional',
    issuer: 'Autodesk Certification',
    year: '2023',
    credentialLabel: 'CRED. NO. AI-2309',
  },
  {
    id: 'cert-03',
    title: 'SolidWorks Associate — Mechanical Design',
    issuer: 'Dassault Systèmes',
    year: '2023',
    credentialLabel: 'CRED. NO. SW-2314',
  },
  {
    id: 'cert-04',
    title: 'Dasar Pemrograman CNC',
    issuer: 'Balai Latihan Kerja',
    year: '2024',
    credentialLabel: 'CRED. NO. CNC-2402',
  },
  {
    id: 'cert-05',
    title: 'Geometric Dimensioning & Tolerancing (GD&T)',
    issuer: 'Pelatihan Teknik Manufaktur',
    year: '2024',
    credentialLabel: 'CRED. NO. GDT-2417',
  },
  {
    id: 'cert-06',
    title: 'Technical Drawing Standard ISO',
    issuer: 'Sertifikasi Kompetensi',
    year: '2021',
    credentialLabel: 'CRED. NO. TD-2108',
  },
];

export const stats: StatItem[] = [
  { id: 'stat-01', value: 50, suffix: '+', label: 'Drawing Diselesaikan' },
  { id: 'stat-02', value: 20, suffix: '+', label: 'Proyek Rampung' },
  { id: 'stat-03', value: 5, suffix: '+', label: 'Software Dikuasai' },
  { id: 'stat-04', value: 1000, suffix: '+', label: 'Jam Berlatih' },
];
