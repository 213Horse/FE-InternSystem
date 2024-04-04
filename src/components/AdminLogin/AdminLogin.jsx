import React, { useState } from 'react';
import { Alert, Button, Form, Input, Checkbox, message, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { callLogin } from '../../services/api';
import { useDispatch } from 'react-redux';
import { doLoginAction, doLogoutAction } from '../../redux/account/accountSlice';

function AdminLogin() {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        const { email, password } = values;

        console.log('Success:', values);
        setIsLoading(true);
        let res = await callLogin(email, password);
        console.log('res', res);
        setIsLoading(false);
        if (res?.data) {
            let accessToken = res.data?.accessToken;
            localStorage.setItem('access_token', accessToken);
            dispatch(doLoginAction({ accessToken: accessToken }));
            message.success('login success');
            navigate('/home');
            return;
        } else {
            notification.error({
                message: 'Login Error',
                description: res.data && Array.isArray(message) ? res.message[0] : res.message,
                duration: 5,
            });
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={{ marginLeft: '16.375rem' }}>
            <div>
                <h1 style={{ color: '#4889E9' }}>Admin Login</h1>
                <p style={{ color: '#667085' }}>Please fill your detail to access your account.</p>
            </div>
            <Form
                name="trigger"
                style={{
                    maxWidth: 300,
                }}
                layout="vertical"
                autoComplete="off"
                onFinish={onFinish}
            >
                <Form.Item label="Email" name="email">
                    <Input placeholder="youremail@example.com" />
                </Form.Item>

                <Form.Item label="Password" name="password">
                    <Input.Password />
                </Form.Item>

                <Form.Item  
                    style={{display: 'flex', justifyContent: 'space-between'}}
                >
                    <Checkbox>Remember me</Checkbox>
                    <Link to='reset-password' style={{color:'red', display:"inline-block", marginLeft:"3rem"}}>Forgot Password?</Link>
                </Form.Item>

                <Form.Item
                    Col={{
                        offset: 8,
                        span: 24,
                    }}
                >
                    <Button
                        type="primary"
                        style={{ width: '100%', backgroundColor: '#4889E9' }}
                        htmlType="submit"
                        loading={isLoading}
                    >
                        Sign in
                    </Button>
                </Form.Item>
                <Form.Item
                    Col={{
                        offset: 8,
                        span: 24,
                    }}
                >             
                    <Link to="register-admin">
                        <Button style={{ width: '100%', backgroundColor: '##EFF4FB' }}>
                        Sign up
                        </Button>
                    </Link>                   
                </Form.Item>
                <Form.Item
                    Col={{
                        offset: 8,
                        span: 24,
                    }}
                    style={{ textAlign: 'center' }}
                >
                    OR LOGIN WITH
                </Form.Item>
                <Form.Item
                    Col={{
                        offset: 8,
                        span: 24,
                    }}
                    style={{
                        textAlign: 'center',
                        backgroundColor: '#FFFFFF',
                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center' /* căn giữa theo chiều ngang */,
                        alignItems: 'center' /* căn giữa theo chiều dọc */,
                        height: '32px' /* chiều cao của container */,
                        borderRadius: '5px',
                        padding: '5px',
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', textAlign: 'center' }}>
                        <img
                            src="src\assets\img\Logo\flat-color-icons_google.png"
                            style={{ width: '1.5rem', height: '1.5rem', marginTop: '12px' }}
                        />
                        <p>Google</p>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
}

export default AdminLogin;
