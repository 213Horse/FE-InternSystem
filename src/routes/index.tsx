import type { RouteObject } from 'react-router';
import MainLayout from '@/layouts/MainLayout';
import AuthGuard from './AuthGuard';
import Loadable from './Loadable';
import Error from '@/pages/Error';
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import ForgotPassword from '@/pages/Login/ForgotPassword';

// *  AUTHENTICATION PAGES
const Login = Loadable({
    loader: () => import('../pages/Login/AdminLogin'),
});
const restPass = Loadable({
    loader: () => import('../pages/Login/ForgotPassword'),
});

//  * HOME PAGE
const Home = Loadable({ loader: () => import('../pages/Dashboard') });
const ApproveCV = Loadable({ loader: () => import('../pages/ApproveCV') });

const routes: RouteObject[] = [
    {
        //public
        path: 'login',
        element: Login,
    },
    {
        //public
        path: 'forgot',
        element: restPass,
    },

    {
        path: '/',
        element: <AuthGuard />,
        children: [
            {
                //private
                element: <MainLayout />,
                children: [
                    { index: true, element: Home },
                    { path: 'hop-dong-va-dang-ky', element: Home },
                    {
                        path: 'CV-Management/Approve-CV',
                        element: ApproveCV,
                    },
                    {
                        path: '*',
                        element: Home,
                    },
                ],
            },
        ],
    },
    {
        path: '*',
        element: <Error />,
    },
];
const router = createBrowserRouter(routes);
export default router;
