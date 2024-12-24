import React, { useState, useEffect, useCallback } from 'react';
import Step1 from './Steps/Step1.tsx';
import Step2 from './Steps/Step2.tsx';
import Step3 from './Steps/Step3.tsx';
import Step4 from './Steps/Step4.tsx';
import Step5 from './Steps/Step5.tsx';
import ProgressBar from './ProgressBar.tsx';
import './ResumeForm.scss';
import { saveToLocalStorage, getFromLocalStorage } from '../lib/localStorageHelper.ts';

const TOTAL_STEPS = 5;

const ResumeForm: React.FC = () => {
    const [currentStep, setCurrentStep] = useState<number>(
        Number(localStorage.getItem('currentStep')) || 1
    );
    const [formData, setFormData] = useState(() => getFromLocalStorage('resumeForm') || {});

    useEffect(() => {
        saveToLocalStorage('resumeForm', formData);
    }, [formData]);

    useEffect(() => {
        localStorage.setItem('currentStep', String(currentStep));
    }, [currentStep]);

    const updateFormData = useCallback((newData: any) => {
        setFormData((prevData: any) => ({ ...prevData, ...newData }));
    }, []);

    const handleNext = () => {
        if (currentStep < TOTAL_STEPS) setCurrentStep(currentStep + 1);
    };

    const handlePrev = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    return (
        <section className="create-resume">
            <div className="create-resume__form">

                <div className="create-resume__content">
                {currentStep === 1 && <Step1 data={formData} updateFormData={updateFormData}/>}
                {currentStep === 2 && <Step2 data={formData} updateFormData={updateFormData}/>}
                {currentStep === 3 && <Step3 data={formData} updateFormData={updateFormData}/>}
                {currentStep === 4 && <Step4 data={formData} updateFormData={updateFormData}/>}
                {currentStep === 5 && <Step5 data={formData} updateFormData={updateFormData}/>}
                </div>

                <div className="create-resume__functional">
                    <div className="create-resume__buttons">
                        {currentStep > 1 && <button className="prev-button" onClick={handlePrev}>Назад</button>}
                        {currentStep < TOTAL_STEPS ? (
                            <button className="next-button" onClick={handleNext}>Далее</button>
                        ) : (
                            <button onClick={() => alert('Резюме сохранено!')}>Сохранить</button>
                        )}
                    </div>

                    <div className="create-resume__progress-bar">
                        <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResumeForm;



