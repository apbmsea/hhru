import React from 'react';
import './ProgressBar.scss'

interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
    return (
        <div className="progress-bar">
            {[...Array(totalSteps)].map((_, index) => (
                <div
                    key={index}
                    className={`progress-step ${index < currentStep ? 'filled' : ''}`}
                ></div>
            ))}
        </div>
    );
};

export default ProgressBar;
