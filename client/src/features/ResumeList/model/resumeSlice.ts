import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Resume {
    id: number;
    name: string;
    lastname: string;
    birthdate: string;
    specialty: string;
    course: number;
    projects: string[];
    skills: string[];
}

interface Filters {
    specialty: string;
    projects: string[];
    selectedSkills: string[];
}

interface ResumeState {
    list: Resume[];
    filteredList: Resume[];
    isLoading: boolean;
    error: string | null;
    filters: Filters;
}

const initialState: ResumeState = {
    list: [],
    filteredList: [],
    isLoading: false,
    error: null,
    filters: {
        specialty: '',
        projects: [],
        selectedSkills: [],
    },
};

const resumeSlice = createSlice({
    name: 'resume',
    initialState,
    reducers: {
        fetchResumesRequest: (state) => {
            state.isLoading = true;
        },
        fetchResumesSuccess: (state, action: PayloadAction<Resume[]>) => {
            state.isLoading = false;
            state.list = action.payload;
            state.filteredList = action.payload; // Изначально отфильтрованный список равен полному
        },
        fetchResumesFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        applyFilters: (state, action: PayloadAction<Filters>) => {
            state.filters = action.payload;

            // Применяем фильтры
            let filtered = [...state.list];

            if (state.filters.specialty) {
                filtered = filtered.filter((resume) =>
                    resume.specialty.toLowerCase().includes(state.filters.specialty.toLowerCase())
                );
            }

            if (state.filters.projects.length > 0) {
                filtered = filtered.filter((resume) =>
                    state.filters.projects.every((project) => {
                        if (project === 'college') {
                            return resume.projects.includes('Проекты колледжа');
                        }
                        if (project === 'personal') {
                            return resume.projects.includes('Личные проекты студентов');
                        }
                        return false;
                    })
                );
            }

            if (state.filters.selectedSkills.length > 0) {
                filtered = filtered.filter((resume) =>
                    state.filters.selectedSkills.every((skill) => resume.skills.includes(skill))
                );
            }

            state.filteredList = filtered;
        },
    },
});

export const {
    fetchResumesRequest,
    fetchResumesSuccess,
    fetchResumesFailure,
    applyFilters,
} = resumeSlice.actions;

export default resumeSlice.reducer;