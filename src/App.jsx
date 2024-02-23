import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home/index';
import Project from './page/Project/index';
import Dashboard from './page/Dashboard/index';
import Approve from './page/Approve-CV/index';
import Confirm from './page/Confirm-CV/index';
import Intern from './page/Intern-List/index';
import Group from './page/Group-List/index';
import Position from './page/Position/index';
import Tech from './page/Tech/index';
import Zalo from './page/Zalo/index';
import Settings from './page/Settings/index';
import Login from './pages/Login/Login';
import AdminLogin from './components/AdminLogin/AdminLogin';
import SchoolLogin from './components/SchoolLogin/SchoolLogin';
function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />}>
               <Route index element= {<AdminLogin/>}/> 
               <Route path='school-login' element= {<SchoolLogin />}/> 
            </Route>
            <Route path="/home" element={<Home />}>
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
            </Route>
        </Routes>
    );
}
export default App