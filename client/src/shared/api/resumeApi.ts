import axios from "axios";

const BASE_URL = 'http://localhost:3000';

const instance = axios.create({
    baseURL: BASE_URL,
})

export const resumeApi = {
    fetchResumes: () => instance.get('/resumes'),
    fetchResumeById: (id: string) => instance.get(`/resumes/${id}`),
    createResume: (data: any) => instance.post('/resumes', data),
    updateResume: (id: string, data: any) => instance.put(`/resumes/${id}`, data),
    deleteResume: (id: string) => instance.delete(`/resumes/${id}`),
};
