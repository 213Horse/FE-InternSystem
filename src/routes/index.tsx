import type { RouteObject } from 'react-router';
import MainLayout from '@/layouts/MainLayout';
import AuthGuard from './AuthGuard';
import Loadable from './Loadable';
import Error from '@/pages/Error';
import { createBrowserRouter } from 'react-router-dom';

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
const ConfirmCV = Loadable({ loader: () => import('../pages/ConfirmCV') });
const InternList = Loadable({ loader: () => import('../pages/InternList') });
const ProjectManagement = Loadable({
    loader: () => import('../pages/ProjectManagement'),
});

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
                        path: 'CV-Management/Confirm-CV',
                        element: ConfirmCV,
                    },
                    {
                        path: 'List-Management/Group-List',
                        element: InternList,
                    },
                    { path: 'project-management', element: ProjectManagement },
                    {
                        path: '*',
                        element: Home,
                    },
                    {
                        path: 'ListManagement/InternList',
                        element: InternList,
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
