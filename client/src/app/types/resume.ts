// app/types/resume.ts

// Тип для одного резюме
export interface Resume {
    id: number;
    name: string;
    lastname: string;
    birthdate: string; // Возможно, лучше сделать Date
    gender: string;
    specialty: string;
    course: number;
    projects: string[];
    skills: string[];
    description: string;
    phoneNumbers: string[];
    links: string[];
}
