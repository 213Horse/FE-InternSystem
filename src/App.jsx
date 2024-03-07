import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';

function App() {
    const account = useSelector(state => state?.account);
    const isAuthenticated = account.isAuthenticated;
    return (
        <Routes>
            <Route path="/" element={<Login />}>
               <Route index element= {<AdminLogin/>}/> 
               <Route path='school-login' element= {<SchoolLogin />}/> 
               <Route path='register-admin' element = {<RegisterAdmin/>}/>
               <Route path='school-login/register-school' element = {<RegisterSchool/>} />
               <Route path='register-intern' element = {<RegisterIntern/>}/>
               <Route/>
            </Route>
            {isAuthenticated == true &&  <Route path="/home" element={<Home />}>
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
            {isAuthenticated == true &&  <Route path="*" element={<ErrorPerrmission />}/>}
        </Routes>
    );
}
export default App