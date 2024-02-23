import {Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import AdminLogin from './components/AdminLogin/AdminLogin';
import SchoolLogin from './components/SchoolLogin/SchoolLogin';


function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login />} >
                    <Route index element={<AdminLogin/>}/>
                    <Route path='school-login' element={<SchoolLogin/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
