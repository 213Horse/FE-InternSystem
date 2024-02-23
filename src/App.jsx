import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from './components/Login/Login';
import Home from './page/Home/index';
import Project from './page/Project/index';
import Dashboard from './page/Dashboard/index';

function App() {
    return (
        <Routes>
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/home" element={<Home />}>
                <Route path="project-management" element={<Project />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    );
}

export default App;
