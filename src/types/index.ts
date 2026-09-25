export type Language = 'id' | 'en';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  generation: string;
  quote: string;
  avatarText: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  readTime: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Concentration {
  id: string;
  name: string;
  description: string;
  focusCourses: string[];
  career: string;
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  churchOrigin: string;
  city: string;
  program: string;
  concentration: string;
  pathway: 'reguler' | 'beasiswa_misi' | 'pindahan';
  personalCalling: string;
}
