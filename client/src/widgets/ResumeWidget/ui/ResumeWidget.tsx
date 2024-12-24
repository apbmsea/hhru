// widgets/ResumeWidget/ResumeWidget.tsx
import React from 'react';
import ResumeList from '../../../features/ResumeList/ui/ResumeList.tsx';

const ResumeWidget: React.FC = () => {
    return (
        <div>
            <h2>Резюме</h2>
            <ResumeList />
        </div>
    );
};

export default ResumeWidget;