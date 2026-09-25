import React, { useState } from 'react';
import { X, Play, CheckCircle, Volume2, Maximize2, MapPin, Building2, BookOpen, HeartHandshake } from 'lucide-react';

interface CampusTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegistration: () => void;
}

export const CampusTourModal: React.FC<CampusTourModalProps> = ({
  isOpen,
  onClose,
  onOpenRegistration
}) => {
  const [activeTab, setActiveTab] = useState<'video' | 'facilities' | 'spiritual'>('video');
  const [isPlaying, setIsPlaying] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in-0 duration-150">
      <div className="bg-stone-900 text-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-stone-800 flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
            <div>
              <h3 className="font-heading font-bold text-sm sm:text-base text-white">
                Profil Kampus STT Providensia
              </h3>
              <p className="text-[11px] text-stone-400">
                Kota Batu, Jawa Timur • Lingkungan Pembentukan Hamba Tuhan Holistik
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Tutup Video Tour"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-5 py-2.5 bg-stone-900 border-b border-stone-800 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('video')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'video' ? 'bg-[#8B0000] text-white' : 'text-stone-400 hover:text-white'
            }`}
          >
            Video Profil (Cinematic Tour)
          </button>
          <button
            onClick={() => setActiveTab('facilities')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'facilities' ? 'bg-[#8B0000] text-white' : 'text-stone-400 hover:text-white'
            }`}
          >
            Sarana &amp; Fasilitas Kampus
          </button>
          <button
            onClick={() => setActiveTab('spiritual')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'spiritual' ? 'bg-[#8B0000] text-white' : 'text-stone-400 hover:text-white'
            }`}
          >
            Ritme Rohani Asrama
          </button>
        </div>

        {/* Modal Main Viewport */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {activeTab === 'video' && (
            <div className="space-y-4">
              {/* Simulated Video Player with rich hero footage */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-stone-800 group shadow-2xl">
                <img
                  src="/src/assets/images/hero_campus_sttp_1790353170511.jpg"
                  alt="Kampus STT Providensia Batu"
                  className="w-full h-full object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Player Controls & Captions */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 flex flex-col justify-between p-6">
                  <div className="flex justify-between items-center text-xs font-semibold text-white/90">
                    <span className="bg-black/60 px-3 py-1 rounded-md backdrop-blur-sm">
                      STTP Documentary &bull; 4K HD
                    </span>
                    <span className="flex items-center gap-1.5 text-amber-400">
                      <Volume2 className="w-4 h-4" />
                      Audio Audio Stereo
                    </span>
                  </div>

                  <div className="text-center my-auto">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-16 h-16 rounded-full bg-[#8B0000] hover:bg-[#A31F34] text-white flex items-center justify-center mx-auto shadow-xl hover:scale-110 transition-transform cursor-pointer"
                      aria-label="Play or Pause"
                    >
                      {isPlaying ? <Play className="w-7 h-7 fill-white ml-1" /> : <Play className="w-7 h-7 fill-white ml-1" />}
                    </button>
                    <p className="text-xs text-stone-300 mt-3 font-medium">
                      &quot;Dipanggil, Dibentuk, dan Diutus Menggarami Bangsa-bangsa&quot;
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-stone-400">
                    <span>Durasi: 03:45 / 03:45</span>
                    <span>Kampus Indragiri, Kota Batu</span>
                  </div>
                </div>
              </div>

              {/* Video Description Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700/80">
                  <p className="font-bold text-amber-400">Pendidikan Teologi Terakreditasi</p>
                  <p className="text-stone-300 mt-1">
                    Diakui oleh BAN-PT dan Kementerian Agama RI dengan kurikulum terstruktur.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700/80">
                  <p className="font-bold text-amber-400">Lingkungan Alam Sejuk Batu</p>
                  <p className="text-stone-300 mt-1">
                    Suasana tenang pegunungan yang sangat kondusif untuk membaca, doa, dan riset.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700/80">
                  <p className="font-bold text-amber-400">Komunitas Interdenominasi</p>
                  <p className="text-stone-300 mt-1">
                    Mahasiswa berasal dari puluhan denominasi gereja dari Sabang sampai Merauke.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'facilities' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-stone-800/90 border border-stone-700 space-y-2">
                <div className="flex items-center gap-2 text-[#F59E0B]">
                  <Building2 className="w-5 h-5" />
                  <h4 className="font-heading font-bold text-sm text-white">Kapel Utama &amp; Ruang Doa</h4>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Kapel berkapasitas 300 jemaat dengan akustik prima, alat musik lengkap (Grand Piano, Organ, Drum), serta ruang doa hening pribadi 24 jam.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-800/90 border border-stone-700 space-y-2">
                <div className="flex items-center gap-2 text-[#F59E0B]">
                  <BookOpen className="w-5 h-5" />
                  <h4 className="font-heading font-bold text-sm text-white">Perpustakaan Teologi Integratif</h4>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Memuat lebih dari 15.000 judul buku teologi, tafsir biblika, bahasa Ibrani-Yunani, serta akses pangkalan data e-journal internasional EBSCO &amp; JSTOR.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-800/90 border border-stone-700 space-y-2">
                <div className="flex items-center gap-2 text-[#F59E0B]">
                  <Building2 className="w-5 h-5" />
                  <h4 className="font-heading font-bold text-sm text-white">Asrama Putra &amp; Putri Representatif</h4>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Hunian asrama bersih dilengkapi Wi-Fi kampus, ruang belajar bersama, fasilitas makan bergizi 3x sehari, dan pendampingan bapak/ibu asrama.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-800/90 border border-stone-700 space-y-2">
                <div className="flex items-center gap-2 text-[#F59E0B]">
                  <HeartHandshake className="w-5 h-5" />
                  <h4 className="font-heading font-bold text-sm text-white">Laboratorium Konseling &amp; Microteaching</h4>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Fasilitas simulasi konseling pastoral dengan one-way mirror dan ruang latihan khotbah (homiletika) dilengkapi rekaman video evaluasi dosen.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'spiritual' && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-stone-800/90 border border-stone-700 space-y-3">
                <h4 className="font-heading font-bold text-base text-amber-400">
                  Jadwal Formasi Spiritual Harian Mahasiswa STTP
                </h4>
                <div className="space-y-2 text-xs text-stone-300">
                  <div className="flex justify-between py-1 border-b border-stone-700/60">
                    <span className="font-semibold text-white">05.00 - 06.00 WIB</span>
                    <span>Saat Teduh Pribadi &amp; Mezbah Doa Fajar Asrama</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-700/60">
                    <span className="font-semibold text-white">06.00 - 07.30 WIB</span>
                    <span>Sarapan Bersama, Kerja Bakti Kebersihan Kampus</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-700/60">
                    <span className="font-semibold text-white">08.00 - 15.30 WIB</span>
                    <span>Perkuliahan Teologi &amp; Ibadah Kapel Tengah Hari</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-700/60">
                    <span className="font-semibold text-white">16.00 - 17.30 WIB</span>
                    <span>Olahraga Bersama / Komunitas Minat Bakat Musik &amp; Seni</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-semibold text-white">19.00 - 21.30 WIB</span>
                    <span>Waktu Belajar Mandiri di Perpustakaan &amp; Doa Malam</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 sm:p-5 bg-stone-950 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-400 text-center sm:text-left">
            Tertarik menjadi bagian dari keluarga besar STT Providensia?
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-semibold text-stone-300 hover:text-white border border-stone-700 hover:bg-stone-800 cursor-pointer"
            >
              Tutup Profil
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenRegistration();
              }}
              className="flex-1 sm:flex-none px-5 py-2 bg-[#8B0000] hover:bg-[#A31F34] text-white rounded-xl text-xs font-semibold cursor-pointer shadow"
            >
              Daftar Sekarang &rarr;
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
