import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Resume {
    id: number;
    name: string;
    lastname: string;
    birthdate: string;
    gender: string;
    specialty: string;
    course: string;
    projects: string[];
    skills: string[];
    description: string;
    phoneNumbers: string[];
    links: string[];
}

interface ResumeState {
    resumes: Resume[];
    loading: boolean;
    error: string | null;
}

const initialState: ResumeState = {
    resumes: [],
    loading: false,
    error: null,
};

const resumeSlice = createSlice({
    name: 'resume',
    initialState,
    reducers: {
        fetchResumesStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchResumesSuccess(state, action: PayloadAction<Resume[]>) {
            state.resumes = action.payload;
            state.loading = false;
        },
        fetchResumesFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchResumesStart, fetchResumesSuccess, fetchResumesFailure } =
    resumeSlice.actions;

export default resumeSlice.reducer;

