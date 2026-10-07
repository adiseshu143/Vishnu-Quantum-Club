export interface Event {
  id?: string;
  title: string;
  slug: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  imageUrl: string;
  cloudinaryPublicId?: string;
  registrationUrl: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  featured: boolean;
  createdAt: string;
}

export interface Project {
  id?: string;
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  cloudinaryPublicId?: string;
  githubUrl?: string;
  projectUrl?: string;
  createdAt: string;
}

export interface TeamMember {
  id?: string;
  name: string;
  role: string;
  category: 'faculty-coordinator' | 'club-lead' | 'core-team' | 'student-co-organizer';
  imageUrl: string;
  cloudinaryPublicId?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  bio?: string;
  order: number;
  isActive: boolean;
}

export interface Resource {
  id?: string;
  title: string;
  description: string;
  category: 'fundamentals' | 'qiskit' | 'research' | 'tools';
  url?: string;
  createdAt: string;
}
