import ResumePage from "../../pages/ResumePage";
import Landing from "../../pages/LandingPage/ui/Landing.tsx";
import Home from "../../pages/HomePage/ui/Home.tsx";
import ResumeForm from "../../features/ResumeForm/ui/ResumeForm.tsx";

const routes = [
    { path: '/', element: <Landing /> },
    { path: '/home', element: <Home /> },
    { path: '/resume-page', element: <ResumePage /> },
    { path: '/create-resume', element: <ResumeForm /> },
];

export default routes;