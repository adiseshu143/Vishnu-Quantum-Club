import { db } from './firebase';
import { collection, getDocs, doc, setDoc, deleteDoc, query, orderBy } from 'firebase/firestore';
import { Event, Project, TeamMember, Resource } from '@/types';
import { INITIAL_EVENTS, INITIAL_PROJECTS, INITIAL_TEAM, INITIAL_RESOURCES } from '@/data/mockData';

// Safe check if firebase db is active with valid config
const isFirebaseConfigured = () => {
  return typeof window !== 'undefined' && db !== null;
};

// Storage keys for local fallback
const STORAGE_KEYS = {
  EVENTS: 'vqc_events',
  PROJECTS: 'vqc_projects',
  TEAM: 'vqc_team',
  RESOURCES: 'vqc_resources',
};

// Generic Local Storage helper
function getLocal<T>(key: string, fallback: T[]): T[] {
  if (typeof window === 'undefined') return fallback;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    return fallback;
  }
}

function setLocal<T>(key: string, data: T[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Error writing to localStorage', e);
  }
}

// EVENTS CRUD
export async function getEvents(): Promise<Event[]> {
  if (isFirebaseConfigured() && db) {
    try {
      const q = query(collection(db, 'events'), orderBy('startDate', 'asc'));
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Event));
      }
    } catch (err) {
      console.warn('Firebase getEvents fallback:', err);
    }
  }
  return getLocal<Event>(STORAGE_KEYS.EVENTS, INITIAL_EVENTS);
}

export async function saveEvent(event: Event): Promise<void> {
  const events = await getEvents();
  const index = events.findIndex(e => e.slug === event.slug || (event.id && e.id === event.id));
  let updated: Event[];
  if (index >= 0) {
    updated = [...events];
    updated[index] = event;
  } else {
    updated = [...events, { ...event, id: event.id || String(Date.now()) }];
  }
  setLocal(STORAGE_KEYS.EVENTS, updated);

  if (isFirebaseConfigured() && db) {
    try {
      const id = event.id || event.slug;
      await setDoc(doc(db, 'events', id), event, { merge: true });
    } catch (err) {
      console.error('Firebase saveEvent error:', err);
    }
  }
}

export async function deleteEvent(id: string): Promise<void> {
  const events = await getEvents();
  const updated = events.filter(e => e.id !== id && e.slug !== id);
  setLocal(STORAGE_KEYS.EVENTS, updated);

  if (isFirebaseConfigured() && db) {
    try {
      await deleteDoc(doc(db, 'events', id));
    } catch (err) {
      console.error('Firebase deleteEvent error:', err);
    }
  }
}

// PROJECTS CRUD
export async function getProjects(): Promise<Project[]> {
  if (isFirebaseConfigured() && db) {
    try {
      const snapshot = await getDocs(collection(db, 'projects'));
      if (!snapshot.empty) {
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
      }
    } catch (err) {
      console.warn('Firebase getProjects fallback:', err);
    }
  }
  return getLocal<Project>(STORAGE_KEYS.PROJECTS, INITIAL_PROJECTS);
}

export async function saveProject(project: Project): Promise<void> {
  const projects = await getProjects();
  const index = projects.findIndex(p => p.slug === project.slug || (project.id && p.id === project.id));
  let updated: Project[];
  if (index >= 0) {
    updated = [...projects];
    updated[index] = project;
  } else {
    updated = [...projects, { ...project, id: project.id || String(Date.now()) }];
  }
  setLocal(STORAGE_KEYS.PROJECTS, updated);

  if (isFirebaseConfigured() && db) {
    try {
      const id = project.id || project.slug;
      await setDoc(doc(db, 'projects', id), project, { merge: true });
    } catch (err) {
      console.error('Firebase saveProject error:', err);
    }
  }
}

export async function deleteProject(id: string): Promise<void> {
  const projects = await getProjects();
  const updated = projects.filter(p => p.id !== id && p.slug !== id);
  setLocal(STORAGE_KEYS.PROJECTS, updated);

  if (isFirebaseConfigured() && db) {
    try {
      await deleteDoc(doc(db, 'projects', id));
    } catch (err) {
      console.error('Firebase deleteProject error:', err);
    }
  }
}

// TEAM CRUD
export async function getTeamMembers(): Promise<TeamMember[]> {
  if (isFirebaseConfigured() && db) {
    try {
      const q = query(collection(db, 'team'), orderBy('order', 'asc'));
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as TeamMember));
      }
    } catch (err) {
      console.warn('Firebase getTeamMembers fallback:', err);
    }
  }
  return getLocal<TeamMember>(STORAGE_KEYS.TEAM, INITIAL_TEAM);
}

export async function saveTeamMember(member: TeamMember): Promise<void> {
  const team = await getTeamMembers();
  const index = team.findIndex(m => m.id === member.id || m.name === member.name);
  let updated: TeamMember[];
  if (index >= 0) {
    updated = [...team];
    updated[index] = member;
  } else {
    updated = [...team, { ...member, id: member.id || String(Date.now()) }];
  }
  setLocal(STORAGE_KEYS.TEAM, updated);

  if (isFirebaseConfigured() && db) {
    try {
      const id = member.id || String(Date.now());
      await setDoc(doc(db, 'team', id), member, { merge: true });
    } catch (err) {
      console.error('Firebase saveTeamMember error:', err);
    }
  }
}

export async function deleteTeamMember(id: string): Promise<void> {
  const team = await getTeamMembers();
  const updated = team.filter(m => m.id !== id);
  setLocal(STORAGE_KEYS.TEAM, updated);

  if (isFirebaseConfigured() && db) {
    try {
      await deleteDoc(doc(db, 'team', id));
    } catch (err) {
      console.error('Firebase deleteTeamMember error:', err);
    }
  }
}

// RESOURCES CRUD
export async function getResources(): Promise<Resource[]> {
  if (isFirebaseConfigured() && db) {
    try {
      const snapshot = await getDocs(collection(db, 'resources'));
      if (!snapshot.empty) {
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Resource));
      }
    } catch (err) {
      console.warn('Firebase getResources fallback:', err);
    }
  }
  return getLocal<Resource>(STORAGE_KEYS.RESOURCES, INITIAL_RESOURCES);
}

export async function saveResource(resource: Resource): Promise<void> {
  const resources = await getResources();
  const index = resources.findIndex(r => r.id === resource.id);
  let updated: Resource[];
  if (index >= 0) {
    updated = [...resources];
    updated[index] = resource;
  } else {
    updated = [...resources, { ...resource, id: resource.id || String(Date.now()) }];
  }
  setLocal(STORAGE_KEYS.RESOURCES, updated);

  if (isFirebaseConfigured() && db) {
    try {
      const id = resource.id || String(Date.now());
      await setDoc(doc(db, 'resources', id), resource, { merge: true });
    } catch (err) {
      console.error('Firebase saveResource error:', err);
    }
  }
}

export async function deleteResource(id: string): Promise<void> {
  const resources = await getResources();
  const updated = resources.filter(r => r.id !== id);
  setLocal(STORAGE_KEYS.RESOURCES, updated);

  if (isFirebaseConfigured() && db) {
    try {
      await deleteDoc(doc(db, 'resources', id));
    } catch (err) {
      console.error('Firebase deleteResource error:', err);
    }
  }
}
