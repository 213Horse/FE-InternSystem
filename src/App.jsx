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
import ResetPassword from './components/Password/ResetPassword';
import Profile from './pages/Profile';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import TaskPage from './pages/Task/TaskPage';
import ReportPage from './pages/Report/ReportPage';
import UserManagement from './pages/User';
import HomeIntern from './pages/Home-Intern';

function App() {
    const account = useSelector((state) => state?.account);
    const isAuthenticated = account.isAuthenticated;
    const accessToken = localStorage.getItem('accessToken');
    return (
        <>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Login />}>
                    <Route index element={<AdminLogin />} />
                    <Route path="school-login" element={<SchoolLogin />} />
                    <Route path="reset-password" element={<ResetPassword />} />
                    <Route path="register-admin" element={<RegisterAdmin />} />
                    <Route path="school-login/register-school" element={<RegisterSchool />} />
                    <Route path="register-intern" element={<RegisterIntern />} />
                    <Route />
                </Route>
                {isAuthenticated === true && <Route path="/home" element={<Home />}>
                    <Route index element={<Dashboard />} />
                    <Route path="approve-cv" element={<Approve />} />
                    <Route path="confirm-cv" element={<Confirm />} />
                    <Route path="intern-list" element={<Intern />} />
                    <Route path="group-list" element={<Group />} />
                    <Route path="project-management" element={<Project />} />
                    <Route path="position-management" element={<Position />} />
                    <Route path="technology-management" element={<Tech />} />
                    <Route path="group-zalo-management" element={<Zalo />} />
                    <Route path="task-management" element={<TaskPage />} />
                    <Route path="report" element={<ReportPage />} />
                    <Route path="settings" element={<Settings />} />
                <Route path="profile" element={<Profile/>}/>
                </Route>}
                <Route path="home-intern" element={<HomeIntern />} />
                {isAuthenticated === true && (
                    <Route path="/home" element={<Home />}>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="approve-cv" element={<Approve />} />
                        <Route path="confirm-cv" element={<Confirm />} />
                        <Route path="intern-list" element={<Intern />} />
                        <Route path="group-list" element={<Group />} />
                        <Route path="user-list" element={<UserManagement />} />
                        <Route path="project-management" element={<Project />} />
                        <Route path="position-management" element={<Position />} />
                        <Route path="technology-management" element={<Tech />} />
                        <Route path="group-zalo-management" element={<Zalo />} />
                        <Route path="settings" element={<Settings />} />
                        <Route path="profile" element={<Profile />} />
                    </Route>
                    
                )}
                {isAuthenticated === false  && <Route path="*" element={<ErrorPerrmission />} />}
            </Routes>
        </>
    );
}
export default App;
