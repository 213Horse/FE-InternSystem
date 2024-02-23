import React from 'react';
import { Button, Input, Tooltip } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Checkbox } from 'antd';
import { Link } from 'react-router-dom';

function AdminLogin() {
    return (
        <div>
            <div style={{ width: '22.5rem', marginLeft: '16.375rem' }}>
                <h1 style={{color: "#4889E9"}}>Admin Login</h1>
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
                    />
                    <label>Password</label>
                    <Input.Password
                        placeholder="input password"
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
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
                    <a  style={{ display:"inline-block", marginTop:"0.75rem" ,color: '#DB0D4B' }}>Forgot password?</a>
                </div>
            </div>
            <div style={{ width: '22.5rem', marginLeft: '16.375rem' }}>
                <Button style={{width: "100%", backgroundColor:"#4889E9"}} type="primary">
                    Sign in
                </Button>
                <Button style={{width: "100%", backgroundColor:"#E2E8F0", border:"none", marginTop:"0.5rem"}} type="primary" ghost>
                    <Link to='/register-admin' style={{width:'100%'}}>Register</Link>
                </Button>
                <p style={{textAlign:"center", textTransform:"upperCase"}}>Or Login with</p>
                <Button style={{width: "100%", color:'#333333',border:'none', boxShadow: '0 0.25rem 0.125rem -0.125rem #E2E8F0', display:"flex", justifyContent:"center", textAlign:"center"}} type="primary" ghost>
                   <img src='src\assets\img\Logo\flat-color-icons_google.png'/>
                    Google
                </Button>
            </div>
        </div>
    );
}

export default AdminLogin;
