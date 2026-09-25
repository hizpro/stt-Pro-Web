import React, { useState } from 'react';
import { X, BookOpen, Library, GraduationCap, Lock, Award, MapPin, ExternalLink, Download, FileText, CheckCircle2 } from 'lucide-react';

interface UtilityPortalModalProps {
  portalType: 'journal' | 'library' | 'student' | 'staff' | 'accreditation' | 'location' | null;
  onClose: () => void;
}

export const UtilityPortalModal: React.FC<UtilityPortalModalProps> = ({
  portalType,
  onClose
}) => {
  const [username, setUsername] = useState('2024.101.003');
  const [password, setPassword] = useState('••••••••');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!portalType) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in-0 duration-150">
      <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-stone-200 overflow-hidden">
        
        {/* Top Header */}
        <div className="p-4 sm:p-5 bg-stone-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {portalType === 'journal' && <BookOpen className="w-5 h-5 text-amber-400" />}
            {portalType === 'library' && <Library className="w-5 h-5 text-amber-400" />}
            {portalType === 'student' && <GraduationCap className="w-5 h-5 text-amber-400" />}
            {portalType === 'staff' && <Lock className="w-5 h-5 text-amber-400" />}
            {portalType === 'accreditation' && <Award className="w-5 h-5 text-amber-400" />}
            {portalType === 'location' && <MapPin className="w-5 h-5 text-amber-400" />}

            <div>
              <h3 className="font-heading font-bold text-base text-white">
                {portalType === 'journal' && 'E-Journal Teologi Providensia (EJTP)'}
                {portalType === 'library' && 'Sistem Informasi Perpustakaan (OPAC)'}
                {portalType === 'student' && 'Sistem Informasi Akademik (SIAKAD)'}
                {portalType === 'staff' && 'Portal SSO Tenaga Pendidik & Karyawan'}
                {portalType === 'accreditation' && 'Informasi Akreditasi BAN-PT'}
                {portalType === 'location' && 'Peta & Lokasi Kampus STTP'}
              </h3>
              <p className="text-[11px] text-stone-400">
                Layanan Digital Terintegrasi STT Providensia
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white flex items-center justify-center cursor-pointer"
            aria-label="Tutup Dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          
          {/* E-Journal */}
          {portalType === 'journal' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-stone-700 space-y-1">
                <p className="font-bold text-amber-900">
                  Jurnal Teologi &amp; Transformasi Budaya STTP (P-ISSN: 2548-1290 | E-ISSN: 2580-9921)
                </p>
                <p className="text-stone-600">
                  Terakreditasi SINTA dan terindeks Google Scholar, CrossRef, PKP Index, Garuda Kemdikbudristek.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                  Edisi Terkini: Vol. 8 No. 1 (2026)
                </p>
                
                <div className="border border-stone-200 rounded-xl p-3 hover:bg-stone-50 transition-colors">
                  <span className="text-[10px] font-bold text-[#8B0000] uppercase tracking-wide">Artikel Riset</span>
                  <p className="text-xs font-bold text-stone-900 mt-0.5">
                    Paradigma Teologi Integratif: Mengharmoniskan Mandat Budaya dan Amanat Agung dalam Konteks Indonesia
                  </p>
                  <p className="text-[11px] text-stone-500 mt-1">Dr. Markus S.Th., M.Th. · STT Providensia</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Open Access PDF (Full Text)
                    </span>
                  </div>
                </div>

                <div className="border border-stone-200 rounded-xl p-3 hover:bg-stone-50 transition-colors">
                  <span className="text-[10px] font-bold text-[#8B0000] uppercase tracking-wide">Artikel Riset</span>
                  <p className="text-xs font-bold text-stone-900 mt-0.5">
                    Eksegesis Kitab Amos: Panggilan Keadilan Sosial bagi Komunitas Iman Kontemporer
                  </p>
                  <p className="text-[11px] text-stone-500 mt-1">Drs. Timotius M.Div. · Dosen Biblika</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Open Access PDF (Full Text)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Perpustakaan OPAC */}
          {portalType === 'library' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-stone-700">
                <p className="font-bold text-blue-900">Perpustakaan STT Providensia</p>
                <p className="text-stone-600 mt-0.5">
                  Koleksi &gt;15.000 judul literatur teologi fisik, 2.400 e-books, dan langganan pangkalan data ilmiah teologi dunia.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Katalog Online Cepat (OPAC)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    defaultValue="Teologi Reformed, Hermeneutika, Konseling"
                    className="flex-1 px-3 py-2 text-xs rounded-xl border border-stone-300 text-stone-900"
                  />
                  <button className="px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-stone-800">
                    Cari Buku
                  </button>
                </div>
              </div>

              <div className="text-xs text-stone-500 space-y-1">
                <p><strong>Jam Buka:</strong> Senin - Jumat 08.00 - 21.00 WIB | Sabtu 08.00 - 14.00 WIB</p>
                <p><strong>Lokasi:</strong> Gedung Gracia Lt. 2 Kampus STTP Batu</p>
              </div>
            </div>
          )}

          {/* Portal Mahasiswa SIAKAD */}
          {portalType === 'student' && (
            <div className="space-y-4">
              {isLoggedIn ? (
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs">
                    <p className="font-bold">Selamat Datang, Yosua Kurniawan (NIM: 2024.101.003)</p>
                    <p className="text-emerald-700 mt-0.5">Status: Mahasiswa Aktif Semester 3 (S1 Teologi)</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <span className="text-stone-500">IPK Kumulatif:</span>
                      <p className="font-heading font-black text-lg text-[#8B0000]">3.84 / 4.00</p>
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <span className="text-stone-500">SKS Terlaksana:</span>
                      <p className="font-heading font-black text-lg text-stone-900">54 / 150 SKS</p>
                    </div>
                  </div>

                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-1">
                    <p className="font-bold text-stone-800">Menu Cepat Mahasiswa:</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="px-2.5 py-1 bg-white border border-stone-200 rounded text-stone-700 font-medium">KRS Online</span>
                      <span className="px-2.5 py-1 bg-white border border-stone-200 rounded text-stone-700 font-medium">Kartu Hasil Studi</span>
                      <span className="px-2.5 py-1 bg-white border border-stone-200 rounded text-stone-700 font-medium">Jadwal Kuliah</span>
                      <span className="px-2.5 py-1 bg-white border border-stone-200 rounded text-stone-700 font-medium">Presensi Kapel</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsLoggedIn(false)}
                    className="text-xs text-red-600 hover:underline pt-2 font-medium"
                  >
                    Keluar dari Akun Demo
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600">
                    Masukkan Nomor Induk Mahasiswa (NIM) dan Password SIAKAD Anda.
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">NIM Mahasiswa</label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">Kata Sandi</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300"
                    />
                  </div>

                  <button
                    onClick={() => setIsLoggedIn(true)}
                    className="w-full py-2.5 bg-[#8B0000] text-white font-semibold text-xs rounded-xl hover:bg-[#6D0000] transition-colors cursor-pointer"
                  >
                    Masuk ke SIAKAD &rarr;
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Login Staff */}
          {portalType === 'staff' && (
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
                Single Sign-On (SSO) Dosen dan Tenaga Kependidikan STT Providensia.
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">NIDN / Akun Staff Email</label>
                <input
                  type="email"
                  defaultValue="dosen@sttprovidensia.ac.id"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Password</label>
                <input
                  type="password"
                  defaultValue="••••••••"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300"
                />
              </div>

              <button
                onClick={() => alert('Autentikasi Staff SSO berhasil diverifikasi.')}
                className="w-full py-2.5 bg-stone-900 text-white font-semibold text-xs rounded-xl hover:bg-stone-800 transition-colors cursor-pointer"
              >
                Masuk ke Portal Dosen &amp; Karyawan
              </button>
            </div>
          )}

          {/* Status Akreditasi BAN-PT */}
          {portalType === 'accreditation' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3">
                <Award className="w-8 h-8 text-[#8B0000] shrink-0" />
                <div>
                  <h4 className="font-heading font-extrabold text-sm text-[#8B0000]">
                    Peringkat Akreditasi Institusi: BAIK / B
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT) RI
                  </p>
                </div>
              </div>

              <div className="text-xs text-stone-700 space-y-2 border-t border-stone-100 pt-3">
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">Nomor Pokok Sekolah Nasional (NPSN):</span>
                  <span className="font-mono font-bold text-stone-900">233158</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">Surat Keputusan (SK) BAN-PT:</span>
                  <span className="font-mono font-bold text-stone-900">No. 312/SK/BAN-PT/Ak/PT/2026</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">Kementerian Pembina:</span>
                  <span className="font-bold text-stone-900">Kementerian Agama RI &amp; Dikti</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-500">Masa Berlaku Akreditasi:</span>
                  <span className="font-bold text-stone-900">Tahun 2026 – 2031</span>
                </div>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl text-xs text-stone-600">
                Peringkat akreditasi ini menjamin ijazah kelulusan diakui secara nasional untuk keperluan studi lanjut S2/S3 di dalam dan luar negeri, maupun pengangkatan jabatan gerejawi serta PNS Guru Agama Kristen.
              </div>
            </div>
          )}

          {/* Lokasi Kampus */}
          {portalType === 'location' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                  <MapPin className="w-4 h-4 text-[#8B0000]" />
                  <span>Kampus STT Providensia Kota Batu</span>
                </div>
                <p className="text-xs text-stone-600 mt-1">
                  Jl. Indragiri / Kawasan Pendidikan Teologi, Kota Batu, Jawa Timur 65313, Indonesia.
                </p>
              </div>

              <div className="p-4 bg-stone-100 rounded-xl text-xs text-stone-700 space-y-2">
                <p><strong>Akses Transportasi:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-stone-600">
                  <li>30 menit dari Stasiun Kereta Api Malang Kota Baru</li>
                  <li>45 menit dari Bandara Abdul Rachman Saleh (MLG)</li>
                  <li>Dikelilingi udara pegunungan sejuk (18&deg;C - 24&deg;C) yang tenang dan kondusif</li>
                </ul>
              </div>

              <a
                href="https://maps.google.com/?q=Sekolah+Tinggi+Teologi+Providensia+Batu"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 bg-[#8B0000] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-[#6D0000] transition-colors"
              >
                <span>Buka Petunjuk Arah di Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
          >
            Tutup Layanan
          </button>
        </div>

      </div>
    </div>
  );
};
