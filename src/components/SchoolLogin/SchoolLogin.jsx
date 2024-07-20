import React, { useState, useEffect } from 'react';
import { Button, Input, Tooltip, Checkbox, notification } from 'antd';
import { CloseCircleOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { callLogin } from '../../services/auth-api';
import {  getAllUsers } from '../../services/user-api';

function SchoolLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getAllUsers();
                setUsers(response.data.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    const fetchLogin = async () => {
        try {
            const response = await callLogin(username, password);
            const verificationToken = response?.data?.data?.verificationToken;

            if (verificationToken) {
                notification.success({
                    message: 'Login Successful',
                    description: 'You have successfully logged in.',
                });

                const interviewerId = response.data.data.interviewerId; // Assuming this is part of the response
                const interviewer = users.find(user => user.id === interviewerId);
                console.log('Interviewer Name:', interviewer?.hoVaTen);

                navigate('/home-intern');
            } else {
                throw new Error('Login failed');
            }
        } catch (error) {
            notification.error({
                message: 'Login Failed',
                description: 'The username or password is incorrect.',
            });
        }
    };

    return (
        <div>
            <div style={{ width: '22.5rem', marginLeft: '16.375rem' }}>
                <h1 style={{color: "#4889E9"}}>School Login</h1>
                <p style={{color:'#667085'}}>Please fill your detail to access your account.</p>
                <div>
                    <label>Email</label>
                    <Input
                        suffix={
                            <Tooltip title="Extra information">
                                <CloseCircleOutlined
                                    style={{
                                        color: 'rgba(0,0,0,.45)',
                                    }}
                                />
                            </Tooltip>
                        }
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label>Password</label>
                    <Input.Password
                        placeholder="input password"
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <div
                style={{
                    width: '22.5rem',
                    marginLeft: '16.375rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <div>
                    <Checkbox />
                    <p style={{ display: 'inline-block' }}>Remember me</p>
                </div>
                <div>
                    <a style={{ display:"inline-block", marginTop:"0.75rem", color: '#DB0D4B' }}>Forgot password?</a>
                </div>
            </div>
            <div style={{ width: '22.5rem', marginLeft: '16.375rem' }}>
                <Button style={{width: "100%", backgroundColor:"#4889E9"}} type="primary" onClick={fetchLogin}>
                    Sign in
                </Button>
                <Button style={{width: "100%", backgroundColor:"#E2E8F0", border:"none", marginTop:"0.5rem"}} type="primary" ghost>
                    <Link to='register-school'>Sign up</Link>
                </Button>
                <p style={{textAlign:"center", textTransform:"upperCase"}}>Or Login with</p>
                <Button style={{width: "100%", color:'#333333', border:'none', boxShadow: '0 0.25rem 0.125rem -0.125rem #E2E8F0', display:"flex", justifyContent:"center", textAlign:"center"}} type="primary" ghost>
                    <img src='src/assets/img/Logo/flat-color-icons_google.png' alt="Google logo"/>                    
                    Google
                </Button>
            </div>
        </div>
    );
}

export default SchoolLogin;
