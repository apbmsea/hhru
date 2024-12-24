import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filters from '../../../shared/ui/Filters/Filters.tsx';
import ResumeList from '../../../features/ResumeList/ui/ResumeList.tsx'
import './ResumePage.scss';
import { RootState } from '../../../app/store/store';
import {
    fetchResumesRequest,
    applyFilters
} from '../../../features/ResumeList/model/resumeSlice.ts';

const ResumePage: React.FC = () => {
    const dispatch = useDispatch();
    const resumes = useSelector((state: RootState) => state.resume.list);
    const filteredResumes = useSelector((state: RootState) => state.resume.filteredList);
    const filters = useSelector((state: RootState) => state.resume.filters);
    const isLoading = useSelector((state: RootState) => state.resume.isLoading);

    useEffect(() => {
        dispatch(fetchResumesRequest());
    }, [dispatch]);

    const handleFilterChange = (updatedFilters: typeof filters) => {
        dispatch(applyFilters(updatedFilters));
    };

    return (
        <div className="resume-page">
            {isLoading ? (
                <p>Загрузка...</p>
            ) : (
                <>
                    <Filters
                        specialties={[...new Set(resumes.map((resume) => resume.specialty))]}
                        skills={[...new Set(resumes.flatMap((resume) => resume.skills))]}
                        onFilterChange={handleFilterChange}
                    />
                    <ResumeList resumes={filteredResumes} />
                </>
            )}
        </div>
    );
};

export default ResumePage;