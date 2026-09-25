import { Testimonial, NewsArticle, FaqItem, Concentration } from '../types';

export const CONCENTRATIONS: Concentration[] = [
  {
    id: 'biblika',
    name: 'Biblika & Eksegesis Alkitabiah',
    description: 'Mendalami bahasa asli (Ibrani & Yunani), hermeneutika mendalam, dan eksposisi teks Perjanjian Lama & Baru berakar pada ortodoksi Reformed-Injili.',
    focusCourses: ['Bahasa Yunani PB I-II', 'Bahasa Ibrani PL I-II', 'Hermeneutika Alkitabiah', 'Teologi Biblika PL & PB'],
    career: 'Dosen Teologi, Pengkhotbah Ekspositori, Peneliti Biblika'
  },
  {
    id: 'pastoral',
    name: 'Konseling Pastoral & Keluarga',
    description: 'Mengintegrasikan kebenaran firman Tuhan dengan pemahaman psikologis untuk memulihkan jiwa, konseling pranikah, dan pemulihan trauma komunitas.',
    focusCourses: ['Dasar Konseling Kristen', 'Konseling Krisis & Duka', 'Pelayanan Keluarga & Remaja', 'Psikologi Perkembangan'],
    career: 'Konselor Pastoral, Pembimbing Rohani Lembaga, Pendeta Keluarga'
  },
  {
    id: 'kepemimpinan',
    name: 'Kepemimpinan Gerejawi & Organisasi',
    description: 'Mempersiapkan gembala dan pemimpin rohani dengan karakter pelayan, manajemen lembaga gerejawi modern, serta integritas etika Kristen.',
    focusCourses: ['Teologi Kepemimpinan Hamba', 'Manajemen Organisasi Pelayanan', 'Etika Jabatan Gereja', 'Homiletika & Komunikasi'],
    career: 'Gembala Sidang, Direktur Yayasan Rohani, Koordinator Sinode'
  },
  {
    id: 'misiologi',
    name: 'Misiologi & Penanaman Jemaat',
    description: 'Memperluas Kerajaan Allah melalui perintisan jemaat baru, misi lintas budaya holistik, dan keterlibatan kontekstual di masyarakat urban maupun pelosok.',
    focusCourses: ['Teologi Misi Integratif', 'Antropologi Budaya & Kontekstualisasi', 'Metodologi Church Planting', 'Misi Perkotaan & Desa'],
    career: 'Misionaris Lintas Budaya, Perintis Jemaat, Pekerja Sosial Misi'
  },
  {
    id: 'pak',
    name: 'Pendidikan Agama Kristen (PAK)',
    description: 'Membentuk pendidik Kristen yang menguasai pedagogi transformatif, pengembangan kurikulum iman kristiani di sekolah formal dan gereja.',
    focusCourses: ['Filsafat PAK', 'Metodologi Pengajaran PAK', 'Pengembangan Kurikulum Iman', 'Manajemen Sekolah Kristen'],
    career: 'Guru PAK Bersertifikasi, Kepala Kurikulum Sekolah Kristen, Pelatih Rohani Remaja'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Hao',
    role: 'Gembala Jemaat & Perintis Pelayanan',
    generation: 'Alumni Angkatan 2020',
    quote: 'STT Providensia memberikan keseimbangan yang baik antara pembelajaran teori dan praktik pelayanan. Dosen-dosen mendampingi secara pribadi, bukan hanya mengajarkan teologi di kelas, melainkan meneladankan ketulusan hidup doa dan integritas pengabdian di ladang pelayanan.',
    avatarText: 'H'
  },
  {
    id: '2',
    name: 'Evanna Waya',
    role: 'Pengajar Teologi & Konselor Kristen',
    generation: 'Alumni Angkatan 2019',
    quote: 'Saya mengalami proses pembentukan karakter yang sangat mendalam di kampus STTP. Di asrama dan persekutuan harian, kami dibentuk untuk menjadi pelayan Tuhan yang setia, berbelas kasih, dan memiliki dasar teologi integratif yang teguh menghadapi tantangan zaman.',
    avatarText: 'EW'
  },
  {
    id: '3',
    name: 'Abdul Gea',
    role: 'Misionaris & Perintis Jemaat Perdesaan',
    generation: 'Alumni Angkatan 2021',
    quote: 'Kurikulum 159–160 SKS yang seimbang antara ranah akademik dan lapangan membekali saya seutuhnya saat diutus melayani. Lingkungan interdenominasi di STT Providensia memperkaya wawasan oikumenis yang bersahabat tanpa mengorbankan kesetiaan pada otoritas Alkitab.',
    avatarText: 'AG'
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: '1',
    title: 'Akhirnya Mendapatkan Akreditasi Institusi (B)',
    date: '26 Mei 2026',
    category: 'Akreditasi & Prestasi',
    author: 'Biro Humas & Akreditasi',
    readTime: '3 mnt baca',
    excerpt: 'Setelah proses asesmen yang komprehensif, Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT) resmi menerbitkan ketetapan Akreditasi Institusi peringkat "B" bagi STT Providensia.',
    content: 'Puji syukur kepada Tuhan Yesus Kristus atas capaian bersejarah civitas akademika STT Providensia. Berdasarkan Surat Keputusan BAN-PT Tahun 2026, STT Providensia telah berhasil meraih peringkat akreditasi institusi kategori "B" (BAIK SEKALI). Pencapaian ini merupakan buah kerja keras seluruh jajaran pimpinan, dosen, tenaga kependidikan, mahasiswa, dan dukungan para alumni. Evaluasi mencakup 9 kriteria penjaminan mutu mencakup visi-misi, tata pamong, kemahasiswaan, sumber daya manusia, keuangan dan sarana prasarana, pendidikan, penelitian, pengabdian masyarakat, dan luaran tri dharma perguruan tinggi.'
  },
  {
    id: '2',
    title: 'Asesmen Lapangan BAN-PT di Batu',
    date: '12 Mei 2026',
    category: 'Akademik Kampus',
    author: 'Tim Penjaminan Mutu Internal',
    readTime: '4 mnt baca',
    excerpt: 'Tim Asesor BAN-PT melaksanakan kunjungan asesmen lapangan secara luring di kampus STT Providensia, Kota Batu, untuk memverifikasi sarana fisik, asrama, dan kurikulum integratif.',
    content: 'Kampus STT Providensia yang berlokasi di kesejukan perbukitan Kota Batu menyambut kehadiran Tim Asesor Badan Akreditasi Nasional Perguruan Tinggi. Selama tiga hari kunjungan kerja, para asesor meninjau langsung kelengkapan laboratorium bahasa biblika, perpustakaan teologi dengan ribuan koleksi literatur fisik dan jurnal internasional, asrama mahasiswa terpadu, kapel ibadah, hingga mewawancarai perwakilan mahasiswa, alumni, dan para pemangku kepentingan (stakeholder) gereja mitra.'
  },
  {
    id: '3',
    title: 'Rekap Seminar Teologi Integratif',
    date: '20 April 2026',
    category: 'Seminar & Diskusi',
    author: 'Pusat Studi Teologi & Kebudayaan',
    readTime: '5 mnt baca',
    excerpt: 'Membahas tuntas keterpautan antara Amanat Agung pemberitaan Injil dengan Mandat Budaya dalam merawat ciptaan dan tata kehidupan sosial masyarakat kontemporer.',
    content: 'Seminar Nasional Teologi Integratif 2026 bertajuk "Gereja yang Memberitakan, Membangun, dan Mengutus" berlangsung sukses dengan dihadiri lebih dari 350 peserta dari berbagai sinode gereja dan STT se-Indonesia. Para narasumber menegaskan bahwa penginjilan sejati tidak boleh mengabaikan keadilan sosial, pelestarian lingkungan, dan etika profesi di ruang publik, sejalan dengan visi STT Providensia dalam mendidik hamba Tuhan masa kini.'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: '1',
    category: 'Program Akademik',
    question: 'Program studi apa saja yang tersedia di STT Providensia?',
    answer: 'STT Providensia menyelenggarakan Program Sarjana Teologi (S1 Teologi - gelar S.Th.) dengan 5 konsentrasi spesifik: Biblika & Eksegesis, Konseling Pastoral, Kepemimpinan Gerejawi, Misiologi & Church Planting, serta Pendidikan Agama Kristen (PAK). Selain itu, kami juga membuka Program Pascasarjana Magister Teologi (S2 - M.Th.) bagi para pelayan dan praktisi.'
  },
  {
    id: '2',
    category: 'Kurikulum & Durasi',
    question: 'Berapa lama durasi studi dan SKS yang harus diselesaikan?',
    answer: 'Untuk jenjang S1 Teologi, perkuliahan ditempuh dalam waktu 4 tahun (8 semester) dengan beban kurikulum seimbang 144–160 SKS. Beban ini memadukan kuliah teologi di kelas, pembinaan asrama kerohanian, magang pelayanan mingguan (weekend ministry), mission trip tahunan, serta satu tahun pelayanan pastoral mandiri (vicarage) sebelum kelulusan.'
  },
  {
    id: '3',
    category: 'Fasilitas & Asrama',
    question: 'Apakah ada fasilitas asrama bagi seluruh mahasiswa baru?',
    answer: 'Ya, STT Providensia mewajibkan dan menyediakan fasilitas asrama representatif bagi mahasiswa putra dan putri. Di asrama mahasiswa dibimbing oleh bapak/ibu asrama (dorm mentor), mengikuti Saat Teduh fajar, mezbah doa malam, pendampingan karakter, serta kegiatan olahraga dan kebersamaan di lingkungan kampus Batu yang asri.'
  },
  {
    id: '4',
    category: 'Kontak & Pendaftaran',
    question: 'Siapa yang dapat dihubungi untuk konsultasi pendaftaran?',
    answer: 'Sekretariat Penerimaan Mahasiswa Baru (PMB) STTP siap melayani via WhatsApp resmi di +62813-3368-2828 atau email pmb@sttprovidensia.ac.id. Jam layanan admisi: Senin – Jumat pukul 08.00 – 16.00 WIB. Anda juga dapat langsung mengisi formulir online di tombol "Daftar Sekarang" pada situs ini.'
  }
];
