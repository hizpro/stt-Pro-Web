import React, { useState } from 'react';
import { HeartHandshake, Church, Globe2, ChevronRight, X, Calendar, MapPin, Users } from 'lucide-react';

interface MinistryModalData {
  title: string;
  tagline: string;
  image: string;
  description: string;
  activities: string[];
  schedule: string;
}

export const CampusMinistry: React.FC = () => {
  const [activeModal, setActiveModal] = useState<MinistryModalData | null>(null);

  const MINISTRY_ITEMS = [
    {
      id: 'mission-trip',
      title: 'Mission Trip',
      badge: 'Pelayanan Lapangan',
      description: 'Kegiatan pelayanan lintas daerah sebagai wujud nyata memberitakan Injil.',
      image: '/src/assets/images/ministry_mission_trip_1790353208297.jpg',
      icon: Globe2,
      details: {
        title: 'Mission Trip Lintas Daerah',
        tagline: 'Praktek Nyata Amanat Agung ke Penjuru Nusantara',
        image: '/src/assets/images/ministry_mission_trip_1790353208297.jpg',
        description: 'Setiap tahun, mahasiswa STT Providensia diutus dalam tim misi menuju daerah-daerah perintisan di Jawa Timur, Nusa Tenggara, Kalimantan, hingga pedalaman Sumatera. Mereka melayani sekolah minggu, kebaktian kebangunan rohani (KKR), pengobatan gratis, dan bimbingan belajar anak pedesaan.',
        activities: [
          'Pemberitaan Injil personal dan visitasi rumah ke rumah',
          'Pelayanan anak sekolah minggu dan remaja pelosok',
          'Bakti sosial pemeriksaan kesehatan dan sembako cinta kasih',
          'Penanaman benih pos pelayanan baru bersama gereja mitra'
        ],
        schedule: 'Setiap masa libur semester genap (Juli - Agustus)'
      }
    },
    {
      id: 'ibadah-raya',
      title: 'Ibadah Raya & Persekutuan',
      badge: 'Kehidupan Rohani',
      description: 'Pusat persekutuan civitas akademika untuk memuji, menyembah, dan bertumbuh.',
      image: '/src/assets/images/campus_chapel_worship_1790353223582.jpg',
      icon: Church,
      details: {
        title: 'Ibadah Raya & Persekutuan Kapel',
        tagline: 'Membangun Mezbah Penyembahan yang Autentik dan Hangat',
        image: '/src/assets/images/campus_chapel_worship_1790353223582.jpg',
        description: 'Kapel STT Providensia menjadi jantung kerohanian seluruh sivitas akademika. Melalui ibadah kapel mingguan, doa fajar asrama, dan malam puji-pujian, mahasiswa dan dosen bersama-sama bersujud merendahkan diri di hadapan Tuhan, memperbaharui komitmen pelayanan.',
        activities: [
          'Ibadah Kapel Umum setiap hari Selasa & Kamis pagi',
          'Mezbah Doa Fajar asrama putra dan putri pukul 05.00 WIB',
          'Persekutuan Doa Puasa bulanan untuk bangsa dan negara',
          'Latihan paduan suara gerejawi dan tim musik ibadah'
        ],
        schedule: 'Selasa & Kamis (08.00 WIB), Doa Fajar Setiap Hari'
      }
    },
    {
      id: 'misi-penginjilan',
      title: 'Misi Penginjilan',
      badge: 'Transformasi Sosial',
      description: 'Pelayanan sosial, kunjungan masyarakat, dan keterlibatan langsung di komunitas.',
      image: '/src/assets/images/about_theology_study_1790353186321.jpg',
      icon: HeartHandshake,
      details: {
        title: 'Misi Penginjilan & Kepedulian Sosial',
        tagline: 'Mandat Budaya: Membawa Kasih Kristus ke Ruang Publik',
        image: '/src/assets/images/about_theology_study_1790353186321.jpg',
        description: 'Mahasiswa tidak hanya tinggal di balik dinding kampus, melainkan terjun langsung menjumpai warga sekitar Kota Batu dan Malang. Melalui pos konseling cuma-cuma, pembinaan anak jalanan, pendampingan panti werdha, dan aksi lingkungan.',
        activities: [
          'Pelayanan konseling gratis dan pendampingan keluarga prasejahtera',
          'Bimbingan belajar karakter untuk anak-anak lingkungan sekitar kampus',
          'Aksi bersih lingkungan dan edukasi pemeliharaan alam ciptaan Tuhan',
          'Kunjungan rutin ke panti asuhan, panti jompo, dan lembaga pemasyarakatan'
        ],
        schedule: 'Setiap Sabtu & Minggu (Weekend Ministry)'
      }
    }
  ];

  return (
    <section id="ministry" className="py-20 md:py-28 bg-[#F8F9FA] border-b border-stone-200/60 scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-5">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8B0000] bg-red-100/60 px-3 py-1 rounded-md mb-3">
            <span>Kehidupan Kampus &amp; Pengabdian</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-stone-900 tracking-tight [text-wrap:balance]">
            Ministry &amp; Kehidupan Kampus
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
            Menempa kedewasaan rohani, kepemimpinan hamba, dan kepekaan sosial melalui ritme persekutuan dan keterlibatan nyata di tengah dunia.
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MINISTRY_ITEMS.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent"></div>
                  
                  {/* Subtle Unboxed Category */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-[#8B0000] shadow-sm">
                    {item.badge}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-red-50 text-[#8B0000] flex items-center justify-center">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-stone-900 group-hover:text-[#8B0000] transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-sm text-stone-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Read More Trigger */}
                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                    <button
                      onClick={() => setActiveModal(item.details)}
                      className="text-xs font-semibold text-[#8B0000] hover:text-[#6D0000] inline-flex items-center gap-1 group-hover:translate-x-1 transition-all cursor-pointer"
                    >
                      <span>Lihat Rincian Kegiatan</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] text-stone-400">Aktif Rutin</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Ministry Detail Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in-0 duration-150">
          <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200">
            <div className="relative aspect-[16/9] w-full bg-stone-900">
              <img
                src={activeModal.image}
                alt={activeModal.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
                aria-label="Tutup Dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8B0000]">
                {activeModal.tagline}
              </span>
              <h3 className="font-heading font-extrabold text-xl text-stone-900 mt-1">
                {activeModal.title}
              </h3>

              <p className="text-sm text-stone-600 mt-3 leading-relaxed">
                {activeModal.description}
              </p>

              <div className="mt-5 p-4 rounded-xl bg-stone-50 border border-stone-200">
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-600" />
                  Jadwal &amp; Pelaksanaan
                </h4>
                <p className="text-xs text-stone-600 font-medium">
                  {activeModal.schedule}
                </p>
              </div>

              <div className="mt-5">
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2.5">
                  Fokus Aktivitas Mahasiswa:
                </h4>
                <ul className="space-y-2">
                  {activeModal.activities.map((act, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B0000] mt-1.5 shrink-0"></span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex justify-end">
                <button
                  onClick={() => setActiveModal(null)}
                  className="px-5 py-2 text-xs font-semibold bg-stone-900 text-white rounded-lg hover:bg-stone-800 cursor-pointer"
                >
                  Tutup Rincian
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
