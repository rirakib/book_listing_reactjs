import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import NotFound from '../pages/errors/NotFound';
import { FrontendRoutes } from './FrontendRoutes';
import { UserRoutes } from './UserRoutes';
import { AuthRoutes } from './AuthRoutes';



function AppRoutes() {
    return (
        <Router>
            <Routes>
               {FrontendRoutes}
                {AuthRoutes}
                {UserRoutes}

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes