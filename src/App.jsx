import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/index';
import Project from './pages/Project/index';
import Dashboard from './pages/Dashboard/index';
import Approve from './pages/Approve-CV/index';
import Confirm from './pages/Confirm-CV/index';
import Intern from './pages/Intern-List/index';
import Group from './pages/Group-List/index';
import Position from './pages/Position/index';
import Tech from './pages/Tech/index';
import Zalo from './pages/Zalo/index';
import Settings from './pages/Settings/index';
import Login from './pages/Login/Login';
import AdminLogin from './components/AdminLogin/AdminLogin';
import SchoolLogin from './components/SchoolLogin/SchoolLogin';
import RegisterAdmin from './components/Register/RegisterAdmin';
import RegisterSchool from './components/Register/RegisterSchool';
import RegisterIntern from './components/Register/RegisterIntern';
import { useSelector } from 'react-redux';
import ErrorPerrmission from './components/Auth/ErrorPerrmission';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
    const account = useSelector(state => state?.account);
    const isAuthenticated = account.isAuthenticated;
    return (
        <>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Login />}>
                    <Route index element={<AdminLogin />} />
                    <Route path='school-login' element={<SchoolLogin />} />
                    <Route path='register-admin' element={<RegisterAdmin />} />
                    <Route path='school-login/register-school' element={<RegisterSchool />} />
                    <Route path='register-intern' element={<RegisterIntern />} />
                    <Route />
                </Route>
                {isAuthenticated === true && <Route path="/home" element={<Home />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="approve-cv" element={<Approve />} />
                    <Route path="confirm-cv" element={<Confirm />} />
                    <Route path="intern-list" element={<Intern />} />
                    <Route path="group-list" element={<Group />} />
                    <Route path="project-management" element={<Project />} />
                    <Route path="position-management" element={<Position />} />
                    <Route path="technology-management" element={<Tech />} />
                    <Route path="group-zalo-management" element={<Zalo />} />
                    <Route path="settings" element={<Settings />} />
                </Route>}
                {isAuthenticated === false && <Route path="*" element={<ErrorPerrmission />} />}
            </Routes>

        </>
    );
}
export default App