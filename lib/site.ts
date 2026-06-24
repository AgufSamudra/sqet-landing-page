export const siteConfig = {
  name: "SQET",
  title: "SQET - Training Quality Management System dan Laboratorium",
  description:
    "SQET adalah provider training dan konsultasi untuk quality, laboratorium, QHSE, ISO, mikrobiologi, food safety, dan productivity di Indonesia.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sqet.co.id",
  locale: "id_ID",
  keywords: [
    "SQET",
    "training laboratorium",
    "training quality",
    "training ISO 17025",
    "training QHSE",
    "training food safety",
    "konsultasi laboratorium",
  ],
  email: "info@sqet.co.id",
  phone: "0857-1059-5265",
  whatsapp: "https://wa.me/6285710595265",
  registrationUrl: "https://bit.ly/Formulir_Pendaftaran_Training_SQET",
  address: "Jl. Pahlawan Karang Asem Barat Citeureup Bogor, Jawa Barat",
};

export const navItems = [
  { label: "Home", href: "#" },
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Galeri", href: "#galeri" },
  { label: "Kategori", href: "#kategori" },
  { label: "Kontak", href: "#kontak" },
];

export const trainingMenu = [
  {
    title: "QHSE",
    items: [
      "ISO Series",
      "Laboratorium",
      "Food",
      "Warehouse",
      "SDM",
      "Produktivitas",
      "Mikrobiologi",
    ],
  },
  {
    title: "Rumah Sakit",
    items: ["Akreditasi", "Keperawatan", "SDM", "Spesialis", "Manajemen"],
  },
];

export const heroSlides = [
  {
    eyebrow: "Welcome to SQET Training",
    title: "Pusat Pelatihan QHSE & Rumah Sakit Terbaik di Indonesia",
    description: "Dapatkan pelatihan laboratorium terlengkap dan terpercaya. Solusi pelatihan quality dan laboratorium dengan pendekatan modern, praktis, dan mudah diterapkan di tempat kerja.",
  },
  {
    eyebrow: "Provider Training No. 1 di Indonesia",
    title: "Solusi Quality Excellence Training",
    description:
      "Pelatihan terjangkau dan berkualitas bersama praktisi berpengalaman lebih dari 25 tahun.",
  },
  {
    eyebrow: "Improving Your Qualities",
    title: "Pusat Pelatihan QHSE",
    description: "Solusi unggulan untuk peningkatan kualitas SDM.",
  },
];

export const services = [
  {
    title: "Public Training",
    description:
      "Pelatihan yang diselenggarakan di hotel berbintang bersama praktisi berpengalaman.",
  },
  {
    title: "In House Training",
    description:
      "Training dilaksanakan di instansi Anda dengan materi yang dapat disesuaikan kebutuhan tim.",
  },
  {
    title: "Konsultasi Laboratorium",
    description:
      "Konsultasi khusus laboratorium dalam jangka waktu dan ruang lingkup yang fleksibel.",
  },
];

export const trainingCategories = [
  "Training Food Safety",
  "Training ISO",
  "Training Laboratorium",
  "Training Mikrobiologi",
  "Training Productivity",
  "Training Purchasing",
  "Training Quality",
];

export const featuredTrainings = [
  {
    title: "Training Umur Simpan Produk",
    date: "12 May, 2026",
    category: "Laboratorium",
    description:
      "Memahami konsep umur simpan, parameter uji, pengolahan data statistik, dan penyimpulan masa simpan produk.",
  },
  {
    title: "Training Industrial Hygiene",
    date: "5 Oct, 2025",
    category: "Food Safety",
    description:
      "Pengendalian hygiene dan sanitasi untuk mendukung keamanan pangan dan audit internal industri.",
  },
  {
    title: "Training GMP - Good Manufacturing Practices",
    date: "5 Oct, 2025",
    category: "Quality",
    description:
      "Penerapan GMP untuk industri makanan, kosmetik, farmasi, dan kemasan agar mutu produk lebih terkendali.",
  },
  {
    title: "Training ISO 17025 : 2017",
    date: "27 Sep, 2023",
    category: "ISO",
    description:
      "Sistem manajemen mutu laboratorium untuk pengujian, kalibrasi, akreditasi, dan dokumentasi teknis.",
  },
];

export const trainingGallery = [
  {
    title: "Internal Audit ISO 22000",
    image: "/training-image/TRAINING-INTERNAL-AUDIT-ISO-22000-ACUAN-ISO-19011-2018.jpg",
    category: "ISO Series",
  },
  {
    title: "ISO 17025",
    image: "/training-image/Training-ISO-17025-4.jpeg",
    category: "Laboratorium",
  },
  {
    title: "K3 Lingkungan Kerja Lab",
    image:
      "/training-image/Training-K3-LINGKUNGAN-KERJA-LAB-GLP-DAN-PENGELOLAAN-LIMBAH-B3-NON-B3-3.jpeg",
    category: "QHSE",
  },
  {
    title: "Manajemen Risiko ISO 31000",
    image:
      "/training-image/TRAINING-MANAJEMEN-RISIKO-ISO-31000-2018-TERINTEGRASI-ISO-9001-2015-1-scaled.jpg",
    category: "ISO Series",
  },
  {
    title: "Pengelolaan Bahan Kimia",
    image: "/training-image/Training-Pengelolaan-Bahan-Kimia-1.jpeg",
    category: "Laboratorium",
  },
  {
    title: "Pengelolaan Bahan Kimia",
    image: "/training-image/Training-Pengelolaan-Bahan-Kimia.jpeg",
    category: "Laboratorium",
  },
  {
    title: "Teknik Analisa Data Laboratorium",
    image: "/training-image/Training-Teknik-Analisa-Data-Laboratorium-4.jpeg",
    category: "Laboratorium",
  },
  {
    title: "TPM Autonomous Maintenance",
    image: "/training-image/Training-TPM-Autonomous-Maintenance.jpeg",
    category: "Produktivitas",
  },
  {
    title: "Uji Mikrobiologi Air",
    image: "/training-image/Training-Uji-Mikrobiologi-Air.jpeg",
    category: "Mikrobiologi",
  },
];

export const stats = [
  {
    value: "Kualitas",
    label: "Kami memberikan training yang berkualitas untuk menunjang SDM berkualitas",
  },
  {
    value: "Fleksibel",
    label: "Atur jadwal sesuka anda, kami siap melayani kapanpun",
  },
  {
    value: "Terjangkau",
    label: "Training berkualitas industri dengan harga yang terjangkau",
  },
  {
    value: "Trainer",
    label: "Trainer kami memiliki pengalaman lapangan lebih dari 25+ Tahun",
  },
  {
    value: "Sertifikat",
    label: "Nama anda akan tercantum dalam website kami sebagai bukti nyata mengikuti training",
  },
];

export const impactStats = [
  { value: "350+", label: "Pelatihan Dilaksanakan" },
  { value: "500+", label: "Peserta Mengikuti" },
  { value: "80+", label: "Materi Pelatihan" },
  { value: "25+", label: "Tahun Pengalaman" },
];

export const programGroups = [
  {
    title: "Training QHSE",
    description:
      "Program pelatihan untuk quality, HSE, ISO, laboratorium, food safety, warehouse, produktivitas, dan mikrobiologi.",
    cta: "Lihat Program QHSE",
    programs: [
      {
        title: "Training Manajemen Laboratorium Kimia",
        description:
          "Penguatan sistem manajemen laboratorium, dokumentasi teknis, pengendalian mutu, dan kesiapan audit.",
        category: "Laboratorium",
        image: "/training-image/Training-Teknik-Analisa-Data-Laboratorium-4.jpeg",
      },
      {
        title: "Training ISO 17025 : 2017",
        description:
          "Sistem manajemen mutu laboratorium untuk pengujian, kalibrasi, akreditasi, dan dokumentasi teknis.",
        category: "ISO",
        image: "/training-image/Training-ISO-17025-4.jpeg",
      },
      {
        title: "Training GMP - Good Manufacturing Practices",
        description:
          "Penerapan GMP untuk industri makanan, kosmetik, farmasi, dan kemasan agar mutu produk lebih terkendali.",
        category: "Food Safety",
        image: "/training-image/Training-Pengelolaan-Bahan-Kimia.jpeg",
      },
      {
        title: "Training K3 Lingkungan Kerja Lab",
        description:
          "Pengelolaan K3, GLP, bahan kimia, serta limbah B3 dan non-B3 di lingkungan kerja laboratorium.",
        category: "QHSE",
        image:
          "/training-image/Training-K3-LINGKUNGAN-KERJA-LAB-GLP-DAN-PENGELOLAAN-LIMBAH-B3-NON-B3-3.jpeg",
      },
      {
        title: "Training Internal Audit ISO 22000",
        description:
          "Penerapan audit internal berbasis ISO 19011 untuk memperkuat sistem manajemen keamanan pangan.",
        category: "ISO Series",
        image: "/training-image/TRAINING-INTERNAL-AUDIT-ISO-22000-ACUAN-ISO-19011-2018.jpg",
      },
      {
        title: "Training Manajemen Risiko ISO 31000",
        description:
          "Identifikasi, analisis, evaluasi, dan mitigasi risiko untuk mendukung sistem manajemen terintegrasi.",
        category: "ISO Series",
        image:
          "/training-image/TRAINING-MANAJEMEN-RISIKO-ISO-31000-2018-TERINTEGRASI-ISO-9001-2015-1-scaled.jpg",
      },
      {
        title: "Training TPM Autonomous Maintenance",
        description:
          "Peningkatan produktivitas, perawatan mandiri, dan stabilitas proses kerja di area operasional.",
        category: "Produktivitas",
        image: "/training-image/Training-TPM-Autonomous-Maintenance.jpeg",
      },
    ],
  },
  {
    title: "Training Rumah Sakit",
    description:
      "Program pelatihan untuk akreditasi, keperawatan, SDM, spesialis, dan manajemen mutu pelayanan rumah sakit.",
    cta: "Lihat Program Rumah Sakit",
    programs: [
      {
        title: "Training Akreditasi Rumah Sakit",
        description:
          "Pendampingan standar akreditasi, kesiapan dokumen, proses audit internal, dan peningkatan mutu layanan.",
        category: "Akreditasi",
        image: "/training-image/TRAINING-INTERNAL-AUDIT-ISO-22000-ACUAN-ISO-19011-2018.jpg",
      },
      {
        title: "Training Manajemen Mutu Pelayanan",
        description:
          "Peningkatan mutu pelayanan, pengendalian proses, indikator kinerja, dan evaluasi layanan kesehatan.",
        category: "Manajemen",
        image: "/training-image/Training-Pengelolaan-Bahan-Kimia-1.jpeg",
      },
      {
        title: "Training SDM Rumah Sakit",
        description:
          "Pengembangan kompetensi SDM rumah sakit agar proses kerja lebih efektif, disiplin, dan terukur.",
        category: "SDM",
        image:
          "/training-image/TRAINING-MANAJEMEN-RISIKO-ISO-31000-2018-TERINTEGRASI-ISO-9001-2015-1-scaled.jpg",
      },
      {
        title: "Training Keperawatan dan Keselamatan Pasien",
        description:
          "Pelatihan praktik keperawatan, budaya keselamatan pasien, komunikasi layanan, dan manajemen risiko klinis.",
        category: "Keperawatan",
        image: "/training-image/Training-Uji-Mikrobiologi-Air.jpeg",
      },
      {
        title: "Training Hak Pasien dan Keluarga",
        description:
          "Pemahaman hak, edukasi pasien, komunikasi efektif, dan penguatan dokumentasi pelayanan kesehatan.",
        category: "Akreditasi",
        image: "/training-image/Training-Pengelolaan-Bahan-Kimia.jpeg",
      },
      {
        title: "Training Manajemen Risiko Klinis",
        description:
          "Pengelolaan risiko klinis, pelaporan insiden, evaluasi tindakan, dan peningkatan keselamatan pasien.",
        category: "Manajemen",
        image: "/training-image/Training-Pengelolaan-Bahan-Kimia-1.jpeg",
      },
      {
        title: "Training Peningkatan Mutu Rumah Sakit",
        description:
          "Penguatan indikator mutu, audit layanan, perbaikan proses, dan budaya kerja berorientasi pasien.",
        category: "Manajemen",
        image: "/training-image/Training-ISO-17025-4.jpeg",
      },
    ],
  },
];

export const partners = [
  { name: "PT Global Mutu Indonesia", initials: "GMI", field: "Manufacturing" },
  { name: "RS Harapan Sehat", initials: "RSH", field: "Healthcare" },
  { name: "Lab Prima Analitika", initials: "LPA", field: "Laboratory" },
  { name: "Nusantara Food Safety", initials: "NFS", field: "Food Safety" },
  { name: "Karya Industri Mandiri", initials: "KIM", field: "QHSE" },
  { name: "Medika Quality Center", initials: "MQC", field: "Hospital Quality" },
];

export const faqs = [
  {
    question: "Apakah training SQET bisa dilakukan secara in house?",
    answer:
      "Bisa. Materi, jadwal, dan lokasi dapat disesuaikan dengan kebutuhan instansi atau perusahaan.",
  },
  {
    question: "Apakah peserta mendapatkan sertifikat?",
    answer:
      "Ya, peserta akan mendapatkan sertifikat sebagai bukti keikutsertaan training SQET.",
  },
  {
    question: "Program apa saja yang tersedia di SQET?",
    answer:
      "SQET menyediakan program QHSE, ISO, laboratorium, food safety, produktivitas, serta program rumah sakit.",
  },
  {
    question: "Bagaimana cara mendaftar training?",
    answer:
      "Pendaftaran dapat dilakukan melalui tombol Daftar Sekarang atau menghubungi tim SQET melalui WhatsApp.",
  },
];

export const testimonials = [
  {
    name: "Rina Prasetya",
    role: "Quality Manager",
    quote:
      "Materi training SQET mudah dipahami, praktis, dan langsung bisa kami terapkan untuk peningkatan sistem mutu.",
  },
  {
    name: "Andi Saputra",
    role: "HSE Coordinator",
    quote:
      "Trainer sangat menguasai lapangan. Diskusinya relevan dengan masalah yang kami hadapi di operasional.",
  },
  {
    name: "dr. Melati Wardani",
    role: "Tim Akreditasi Rumah Sakit",
    quote:
      "Pendekatan SQET membantu tim kami memahami standar dengan lebih terstruktur dan siap diterapkan.",
  },
];

export const trainers = [
  {
    name: "Dr. Arif Hidayat, M.Si.",
    description: "Praktisi quality dan laboratorium dengan pengalaman audit dan pendampingan ISO.",
  },
  {
    name: "Ir. Maya Lestari, M.Kes.",
    description: "Trainer QHSE dan food safety untuk industri manufaktur dan layanan kesehatan.",
  },
  {
    name: "Budi Santoso, S.T., M.M.",
    description: "Konsultan produktivitas, manajemen risiko, dan peningkatan proses operasional.",
  },
];
