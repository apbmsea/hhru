    // import React, { useEffect } from 'react';
    // import { useDispatch, useSelector } from 'react-redux';
    // import { fetchResumesStart } from '../models/resumeSlice.ts';
    // import { RootState } from '../../../app/store/store.ts';
    //
    // const ResumeList: React.FC = () => {
    //     const dispatch = useDispatch();
    //     const { resumes, loading, error } = useSelector((state: RootState) => state.resume);
    //
    //     useEffect(() => {
    //         dispatch(fetchResumesStart());
    //     }, [dispatch]);
    //
    //     if (loading) return <p>Loading...</p>;
    //     if (error) return <p>Error: {error}</p>;
    //
    //     return (
    //         <div>
    //             <h1>Resumes</h1>
    //             <ul>
    //                 {resumes.map((resume) => (
    //                     <li key={resume.id}>
    //                         <h2>
    //                             {resume.name} {resume.lastname}
    //                         </h2>
    //                         <p>Specialty: {resume.specialty}</p>
    //                         <p>Course: {resume.course}</p>
    //                         <p>Skills: {resume.skills.join(', ')}</p>
    //                     </li>
    //                 ))}
    //             </ul>
    //         </div>
    //     );
    // };
    //
    // export default ResumeList;

    import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import './ResumeList.scss';

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

    interface ResumeListProps {
        resumes: Resume[];
    }

    const ResumeList: React.FC<ResumeListProps> = ({ resumes }) => {
        const [searchQuery, setSearchQuery] = useState<string>('');

        return (
            <div className="resume-list">
                <div className="search-bar">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Поиск..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <span className="search-icon"></span>
                </div>
                {resumes.length === 0 ? (
                    <p className="resume-list__empty">Резюме не найдены</p>
                ) : (
                    <ul className="resume-list__list">
                        {resumes
                            .filter((resume) => {
                                const query = searchQuery.toLowerCase();
                                return (
                                    resume.name.toLowerCase().includes(query) ||
                                    resume.lastname.toLowerCase().includes(query) ||
                                    resume.birthdate.includes(query) ||
                                    resume.specialty.toLowerCase().includes(query) ||
                                    resume.course.toString().includes(query) ||
                                    resume.projects.some((project) => project.toLowerCase().includes(query)) ||
                                    resume.skills.some((skill) => skill.toLowerCase().includes(query))
                                );
                            })
                            .map((resume) => (
                                <li key={resume.id} className="resume-list__item">
                                    <div className="resume-list__item__content">
                                        <img
                                            className="resume-list__item__image"
                                            src="../../../../public/image/avatar2.svg"
                                            alt="Аватар"
                                        />
                                        <div className="resume-list__item__info">
                                            <div className="resume-list__item__first">
                                                <h3>
                                                    <Link className="LinkToPage" to={`/resume/${resume.id}`}>
                                                        {resume.name} {resume.lastname}
                                                    </Link>{' '}
                                                    - <span>{resume.specialty}</span>
                                                </h3>
                                            </div>
                                            <div className="resume-list__item__second">
                                                <div className="hr"></div>
                                                <div className="text">
                                                    <p>{resume.birthdate}</p>
                                                    <div className="dot"></div>
                                                    <p>{resume.course} курс</p>
                                                    <div className="dot"></div>
                                                    {resume.projects.map((project, index) => (
                                                        <React.Fragment key={index}>
                                                            <p>{project}</p>
                                                            {index === 0 && resume.projects.length > 1 && (
                                                                <div className="dot"></div>
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                                </div>
                                                <div className="hr"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="resume-list__item__skills">
                                        {resume.skills.map((skill, index) => (
                                            <div className="skill" key={index}>
                                                {skill}
                                            </div>
                                        ))}
                                    </div>
                                </li>
                            ))}
                    </ul>
                )}
            </div>
        );
    };

    export default ResumeList;

