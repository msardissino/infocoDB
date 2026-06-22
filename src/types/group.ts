export interface GroupMember {
  name: string;
  avatarUrl?: string;
  icon?: "star" | "heart" | "music" | "smile" | "sun" | "coffee" | "leaf" | "bolt";
  details: string[]; // e.g., ["Escuchar cumbia", "Jugar a la pelota", "Las pizzas del viernes"]
}

export interface GroupTutor {
  name: string;
  avatarUrl?: string;
  role: string; // e.g., "Tutor del Grupo"
  bio: string;
  quote: string;
  formation: string[];
}

export interface GroupInterviewQA {
  question: string;
  answer: string;
}

export interface GroupInterview {
  qaList: GroupInterviewQA[];
  keywords: string[]; // e.g., ["Confianza", "Humor", "Compañerismo"]
}

export interface StudentMessage {
  text: string;
  author: string;
  color?: "yellow" | "green" | "pink" | "blue";
}

export interface PolaroidMoment {
  imageUrl: string;
  caption?: string;
  rotation?: number; // deg of rotation for layout variety
}

export interface GroupDetail {
  slug: string;
  name: string;
  description: string;
  memberCount: number;
  establishedYear: number;
  heroCollage: string[]; // array of images for the top-left collage
  tutor: GroupTutor;
  objective: string;
  interview: GroupInterview;
  members: GroupMember[];
  messages: StudentMessage[];
  moments: PolaroidMoment[];
  momentsCaption?: string; // e.g., "Seguimos creciendo juntos"
}
