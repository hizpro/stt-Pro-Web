import React from 'react';
import { BookOpen, Library, GraduationCap, LockKeyhole } from 'lucide-react';

interface AnnouncementBarProps {
  onOpenPortal: (portalType: 'journal' | 'library' | 'student' | 'staff') => void;
  onOpenRegistration: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenPortal, onOpenRegistration }) => {
  return (
    <div className="w-full bg-[#8B0000] text-white text-xs md:text-sm border-b border-[#6D0000] z-50 relative">
      <div className="max-w-[1200px] mx-auto px-5 py-2.5 flex items-center justify-between">
        {/* Left Announcement */}
        <div className="flex items-center gap-2.5 truncate pr-2">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-medium tracking-wide truncate">
            PMB 2026/2027 Gelombang 1 Resmi Dibuka!
          </span>
          <button
            onClick={onOpenRegistration}
            className="hidden sm:inline-flex items-center text-[11px] font-semibold text-amber-300 hover:text-white underline underline-offset-2 ml-1 cursor-pointer transition-colors"
          >
            Daftar Sekarang &rarr;
          </button>
        </div>

        {/* Right Utility Links */}
        <nav aria-label="Utility Portal Navigation" className="hidden md:flex items-center gap-5 text-xs text-stone-200 shrink-0">
          <button
            onClick={() => onOpenPortal('journal')}
            className="flex items-center gap-1.5 hover:text-white hover:underline underline-offset-4 transition-colors cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-300/80" />
            <span>E-Journal</span>
          </button>
          <span className="text-white/30" aria-hidden="true">|</span>
          <button
            onClick={() => onOpenPortal('library')}
            className="flex items-center gap-1.5 hover:text-white hover:underline underline-offset-4 transition-colors cursor-pointer"
          >
            <Library className="w-3.5 h-3.5 text-amber-300/80" />
            <span>Perpustakaan</span>
          </button>
          <span className="text-white/30" aria-hidden="true">|</span>
          <button
            onClick={() => onOpenPortal('student')}
            className="flex items-center gap-1.5 hover:text-white hover:underline underline-offset-4 transition-colors cursor-pointer"
          >
            <GraduationCap className="w-3.5 h-3.5 text-amber-300/80" />
            <span>Portal Mahasiswa</span>
          </button>
          <span className="text-white/30" aria-hidden="true">|</span>
          <button
            onClick={() => onOpenPortal('staff')}
            className="flex items-center gap-1.5 hover:text-white hover:underline underline-offset-4 transition-colors cursor-pointer"
          >
            <LockKeyhole className="w-3.5 h-3.5 text-amber-300/80" />
            <span>Login Staff</span>
          </button>
        </nav>
      </div>
    </div>
  );
};
