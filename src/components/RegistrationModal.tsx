import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, User, Mail, Phone, Church, MapPin, GraduationCap } from 'lucide-react';
import { CONCENTRATIONS } from '../data/content';
import { RegistrationFormData } from '../types';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedConcentrationId?: string;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  preselectedConcentrationId
}) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    phone: '',
    churchOrigin: '',
    city: '',
    program: 'S1 Teologi (S.Th)',
    concentration: preselectedConcentrationId || 'biblika',
    pathway: 'reguler',
    personalCalling: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [regNumber, setRegNumber] = useState('');

  useEffect(() => {
    if (preselectedConcentrationId) {
      setFormData((prev) => ({ ...prev, concentration: preselectedConcentrationId }));
    }
  }, [preselectedConcentrationId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `PMB-STTP-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setRegNumber(generatedId);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in-0 duration-150">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-200">
        
        {/* Header */}
        <div className="p-6 bg-[#8B0000] text-white flex items-center justify-between sticky top-0 z-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-stone-900 px-2 py-0.5 rounded">
                TA 2026/2027
              </span>
              <span className="text-xs text-stone-200 font-medium">Gelombang 1</span>
            </div>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-white mt-1">
              Formulir Pendaftaran Mahasiswa Baru
            </h2>
            <p className="text-xs text-stone-200 mt-0.5">
              Sekolah Tinggi Teologi Providensia • Akreditasi BAN-PT
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Tutup Formulir"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body or Success State */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="w-9 h-9" />
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-stone-900">
                Pendaftaran Berhasil Dikirim!
              </h3>

              <p className="text-sm text-stone-600 max-w-md mx-auto">
                Terima kasih, Saudara/i <strong className="text-stone-900">{formData.fullName}</strong>. Data calon mahasiswa telah tersimpan di sistem admisi STT Providensia.
              </p>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 max-w-sm mx-auto text-left space-y-1 text-xs text-stone-700">
                <p className="flex justify-between">
                  <span className="text-stone-500">Nomor Registrasi:</span>
                  <span className="font-mono font-bold text-[#8B0000]">{regNumber}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-stone-500">Program:</span>
                  <span className="font-semibold">{formData.program}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-stone-500">Jalur:</span>
                  <span className="font-semibold capitalize">{formData.pathway.replace('_', ' ')}</span>
                </p>
              </div>

              <p className="text-xs text-stone-500">
                Tim admisi akan segera menghubungi nomor WhatsApp Anda (<strong>{formData.phone}</strong>) dalam 1x24 jam untuk verifikasi berkas dan jadwal tes wawancara rohani.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/6281333682828?text=Halo%20Sekretariat%20PMB%20STT%20Providensia,%20saya%20sudah%20mendaftar%20dengan%20nomor%20registrasi%20${regNumber}%20atas%20nama%20${encodeURIComponent(formData.fullName)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-2"
                >
                  <span>Konfirmasi via WhatsApp Admisi</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-3 border border-stone-300 text-stone-700 hover:bg-stone-50 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  Tutup Jendela
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Personal Info Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Nama Lengkap Sesuai KTP *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Yosua Kristianto"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] text-sm text-stone-900 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Nomor WhatsApp Aktif *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 081234567890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] text-sm text-stone-900 bg-white"
                  />
                </div>
              </div>

              {/* Email and City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Alamat Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. yosua@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] text-sm text-stone-900 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Kota Asal / Domisili *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Surabaya, Jawa Timur"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] text-sm text-stone-900 bg-white"
                  />
                </div>
              </div>

              {/* Church Origin */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Gereja Asal / Sinode *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. GII Hok Im Tong / GKII / GPIB / GBI / dll"
                  value={formData.churchOrigin}
                  onChange={(e) => setFormData({ ...formData, churchOrigin: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] text-sm text-stone-900 bg-white"
                />
              </div>

              {/* Program & Concentration Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Jenjang Program Studi *
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] text-sm text-stone-900 bg-white"
                  >
                    <option value="S1 Teologi (S.Th)">S1 Teologi (Gelar S.Th) - 4 Tahun</option>
                    <option value="S2 Magister Teologi (M.Th)">S2 Magister Teologi (M.Th) - Pascasarjana</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Pilihan Konsentrasi *
                  </label>
                  <select
                    value={formData.concentration}
                    onChange={(e) => setFormData({ ...formData, concentration: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] text-sm text-stone-900 bg-white"
                  >
                    {CONCENTRATIONS.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Pathway */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                  Jalur Pendaftaran
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'reguler', label: 'Jalur Reguler', desc: 'Mandiri / Utusan Gereja' },
                    { id: 'beasiswa_misi', label: 'Beasiswa Misi', desc: 'Bantuan Biaya Studi Penuh' },
                    { id: 'pindahan', label: 'Jalur Pindahan', desc: 'Transfer Nilai SKS Resmi' }
                  ].map((p) => (
                    <label
                      key={p.id}
                      className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex flex-col ${
                        formData.pathway === p.id
                          ? 'border-[#8B0000] bg-red-50/50 text-[#8B0000]'
                          : 'border-stone-200 hover:border-stone-300 text-stone-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="pathway"
                        value={p.id}
                        checked={formData.pathway === p.id}
                        onChange={() => setFormData({ ...formData, pathway: p.id as any })}
                        className="sr-only"
                      />
                      <span className="font-heading font-bold text-xs">{p.label}</span>
                      <span className="text-[11px] text-stone-500 mt-0.5">{p.desc}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Personal Calling Short Statement */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Refleksi Panggilan Pribadi Menjadi Pelayan Tuhan (Singkat)
                </label>
                <textarea
                  rows={3}
                  placeholder="Ceritakan secara singkat bagaimana Tuhan memanggil dan menaruh beban pelayanan dalam hati Anda..."
                  value={formData.personalCalling}
                  onChange={(e) => setFormData({ ...formData, personalCalling: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] text-sm text-stone-900 bg-white"
                />
              </div>

              {/* Security & Integrity Note */}
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-600 text-xs">
                <ShieldCheck className="w-4 h-4 text-[#8B0000] shrink-0 mt-0.5" />
                <span>
                  Data pendaftaran dijaga kerahasiaannya untuk keperluan seleksi admisi resmi STT Providensia. Bebas biaya formulir pendaftaran gelombang 1.
                </span>
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 border border-stone-300 rounded-xl text-xs font-semibold text-stone-700 hover:bg-stone-50 transition-colors cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-7 py-2.5 bg-[#8B0000] hover:bg-[#6D0000] text-white rounded-xl text-xs font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Kirim Formulir Pendaftaran</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
