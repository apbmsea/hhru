import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../shared/ui/Header/Header.tsx';
import { Provider } from 'react-redux';
import './style/index.scss'
import store from './store/store.ts';
import routes from './providers/appRouter.tsx';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Routes>
                    {routes.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
