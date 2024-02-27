import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import Home from './pages/Home/index';
import Project from './pages/Project/index';
import Dashboard from './pages/Dashboard/index';
import Approve from "./pages/Approve-CV/index";
import Confirm from "./pages/Confirm-CV/index";
import Intern from "./pages/Intern-List/index";
import Group from "./pages/Group-List/index";
import Position from "./pages/Position/index";
import Tech from "./pages/Tech/index";
import Zalo from "./pages/Zalo/index";
import Settings from "./pages/Settings/index";
function App() {
    return (
        <Routes>
            {/* <Route path="/" element={<Login />} /> */}
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

    )
}
export default App