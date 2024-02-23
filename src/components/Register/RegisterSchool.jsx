import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Input, Tooltip } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';

function RegisterSchool() {
    return (
        <div style={{ width: '22.5rem', marginLeft: '16.375rem', marginTop: '1.25rem' }}>
            <div>
                <h1 style={{ color: '#4889E9' }}>Sign Up</h1>
                <p style={{ color: '#667085' }}>Please fill your detail to create your account</p>
                <p>School</p>
                <Input
                    placeholder="Enter your school"
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
                <p>Email</p>
                <Input
                    placeholder="youremail@example.com"
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
                <p>Password</p>
                <Input.Password
                    placeholder="input password"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
                <p>Re-type Password</p>
                <Input.Password
                    placeholder="Re-enter your password"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
                <Button style={{width: "100%", backgroundColor:"#4889E9", marginTop:'2rem', boxShadow: '0 0.25rem 0.125rem -0.125rem #E2E8F0'}} type="primary">
                   <Link to="">Sign in</Link>
                </Button>
                <p style={{textAlign: 'center'}}>Already have account? <Link to='/school-login' style={{textDecoration:'underline'}}>Sign in</Link></p>
            </div>
        </div>
    );
}

export default RegisterSchool;
