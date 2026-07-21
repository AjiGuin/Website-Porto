import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'proj-01',
    title: 'Assembly Frame',
    category: 'SolidWorks',
    software: ['SolidWorks'],
    year: 2026,
    duration: '2 days',
    // Contoh cara menambahkan foto: taruh file di public/images/projects/,
    // lalu aktifkan baris di bawah ini (hapus tanda //).
    image: '/images/projects/proj-01.jpg',
    shortDescription: 'Desain rangka dan assembly sistem frame.',
    fullDescription:
      'Proyek ini mencakup perancangan frame dari tahap sketsa 2D hingga model assembly 3D, dan toleransi pemasangan antar part.',
    skillsUsed: ['Solidworks', 'Assembly Constraint'],
    thumbnailLabel: 'FIG. 01 — FRAME',
  },
  {
    id: 'proj-02',
    title: 'Assembly Bucket Truck',
    category: 'SolidWorks',
    image: '/images/projects/proj-02.jpg',
    software: ['SolidWorks'],
    year: 2026,
    duration: '1 week',
    shortDescription: 'Gambar teknik 2D & 3D lengkap Assembly dengan dimensi dan toleransi untuk bucket pembuangan Gram CNC.',
    fullDescription:
      'Penyusunan gambar kerja (working drawing) 2D dari model bucket, termasuk tampak depan, atas, samping, dan potongan. Dimensi disusun mengikuti ukuran lapangan untuk kebutuhan pembuangan Gram CNC.',
    skillsUsed: ['Solidworks', 'Magang'],
    thumbnailLabel: 'FIG. 02 — BUCKET TRUCK',
  },
  {
    id: 'proj-03',
    title: 'Special Pipe Support  ',
    category: 'SolidWorks',
    image: '/images/projects/proj-03.jpg',
    software: ['SolidWorks'],
    year: 2026,
    duration: '3 days',
    shortDescription: 'Membuat part Pipe Support untuk penyangga Tanki, hingga penyusunan Assembly, dan menjadikan mempecah gambar assembly untuk memperjelas gambar.',
    fullDescription:
      'Model 3D Pipe Support yang dirancang untuk jalur pipa. Dilengkapi analisis simulasi statis untuk memastikan housing mampu menahan beban operasional.',
    skillsUsed: ['Sheet Metal', 'Assembly', 'Solidworks', 'Magang'],
    thumbnailLabel: 'FIG. 03 — SPECIAL PIPE SUPPORT ',
  },
  {
    id: 'proj-04',
    title: 'Program CNC Milling',
    category: 'Mastercam',
    software: ['Mastercam', 'SolidWorks'],
    year: 2026,
    duration: '1 hari',
    shortDescription: 'Toolpath programming untuk proses milling plat adapter berbahan aluminium.',
    fullDescription:
      'Penyusunan toolpath CNC milling 3-axis untuk komponen plat adapter, meliputi facing, contouring, dan drilling. Simulasi lintasan pahat dilakukan untuk menghindari tabrakan dan mengoptimalkan waktu proses sebelum kode-G dikirim ke mesin.',
    skillsUsed: ['Toolpath Strategy', 'G-Code Generation', 'Feed & Speed Calculation', 'Simulation'],
    thumbnailLabel: 'FIG. 04 — ADAPTER PLATE CNC',
  },
];

export const filterCategories: Array<'All' | Project['category']> = [
  'All',
  'AutoCAD',
  'Inventor',
  'SolidWorks',
  'Mastercam',
];
