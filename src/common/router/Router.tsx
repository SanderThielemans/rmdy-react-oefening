import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IRoute, Routes as AppRoutes } from './routes';

const AppRouter: React.FC = () => {
    return(
        <Router>
            <Routes>
            {AppRoutes.map((route: IRoute) => (<Route key={route.url} path={route.url} element={<route.Component/>}/>))}
            </Routes>
        </Router>
    )
}

export default AppRouter;