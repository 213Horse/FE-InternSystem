import type { FC, ReactNode } from 'react';

import { Outlet, useLocation, Navigate } from 'react-router-dom';

// import PropTypes from 'prop-types'
// import useAuth from '../hooks/useAuth'
// import Login from '../pages/authentication/Login'

interface AuthGuardProps {
    children?: ReactNode;
}

const AuthGuard: FC<AuthGuardProps> = () => {
    //   const auth = useAuth() as any
    const location = useLocation();
    //   const [requestedLocation, setRequestedLocation] = useState<string | null>('/login')
    console.log(location);
    let isAuthenticated;
    const token = sessionStorage.getItem('token');
    if (token !== null && token !== '' && token !== undefined) {
        isAuthenticated = true;
    } else {
        isAuthenticated = false;
    }

    //   if (location.pathname !== requestedLocation) {
    //     //   setRequestedLocation(location.pathname)
    //     return <Login />
    //   }

    // This is done so that in case the route changes by any chance through other
    // means between the moment of request and the render we navigate to the initially
    // requested route.
    // if (location.pathname == '/login') {
    //   console.log('run')

    //   // setRequestedLocation(null)
    //   return <Navigate to={'/home'} replace />
    // }

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AuthGuard;
