import React, { useEffect, useState } from 'react';
import { Alert, Button, Form, Input, Checkbox, message, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { callLogin } from '../../services/auth-api';
import { useDispatch } from 'react-redux';
import { doLoginAction } from '../../redux/account/accountSlice';

function AdminLogin() {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);
    console.log('isLoading', isLoading);
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);

    const onFinish = async (values) => {
        const { username, password } = values;
        try {
            console.log('Success:', values);
            setIsLoading(true);
            // Uncomment the following line when ready to use the API call
            let res = await callLogin(username, password);
            console.log('res', res);
            if (res?.data) {
                console.log('res?.data?.data?.accessToken', res?.data?.data?.accessToken);
                localStorage.setItem('accessToken', res?.data?.data?.accessToken);
                localStorage.setItem('refreshToken', res?.data?.data?.refreshToken);
                dispatch(doLoginAction(res?.data?.data));
                message.success('Login successful');
                // Uncomment the following line when ready to navigate
                setIsLoading(false);
                navigate('/home');
            }
        } catch (error) {
            console.log(error);
            notification.error({
                message: 'Login Error',
                description: error.response.data.errors,
                duration: 5,
            });
            setIsLoading(false);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onChange = (e) => {
        setChecked(e.target.checked);
        console.log('Checkbox checked:', e.target.checked);
    };

    return (
        <div style={{ marginLeft: '16.375rem' }}>
            <div>
                <h1 style={{ color: '#4889E9' }}>Admin Login</h1>
                <p style={{ color: '#667085' }}>Please fill your detail to access your account.</p>
            </div>
            <Form
                form={form}
                name="trigger"
                style={{ maxWidth: 300 }}
                layout="vertical"
                autoComplete="off"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input placeholder="Your username" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Checkbox checked={checked} onChange={onChange}>
                    Remember me
                </Checkbox>
                <Link to="reset-password" style={{ color: 'red', marginLeft: '3rem' }}>
                    Forgot Password?
                </Link>

                <Form.Item style={{ marginTop: '10px' }}>
                    <Button
                        type="primary"
                        style={{ width: '100%', backgroundColor: '#4889E9' }}
                        htmlType="submit"
                        loading={isLoading}
                    >
                        Sign in
                    </Button>
                </Form.Item>

                <Form.Item>
                    <Link to="register-admin">
                        <Button style={{ width: '100%', backgroundColor: '#EFF4FB' }}>Sign up</Button>
                    </Link>
                </Form.Item>

                <Form.Item style={{ textAlign: 'center' }}>OR LOGIN WITH</Form.Item>

                <Form.Item
                    style={{
                        textAlign: 'center',
                        backgroundColor: '#FFFFFF',
                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '32px',
                        borderRadius: '5px',
                        padding: '5px',
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2px' }}>
                        <img
                            src="src/assets/img/Logo/flat-color-icons_google.png"
                            style={{ width: '1.5rem', height: '1.5rem', marginTop: '12px' }}
                            alt="Google"
                        />
                        <p>Google</p>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
}

export default AdminLogin;
