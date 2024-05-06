import React, { useState } from 'react';
import { Alert, Button, Form, Input , Checkbox, message, notification  } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { callLogin, callRegisterAdmin } from '../../services/auth-api';
import { useDispatch } from 'react-redux';
import { doLoginAction, doLogoutAction } from '../../redux/account/accountSlice';

function AdminRegister() {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [isLoading,  setIsLoading] = useState(false);
    const navigate = useNavigate();



    const onFinish = async(values) => {
        const {email, password, username, retypePassword } = values;
      
        console.log('values:', email, password, username, retypePassword);
        setIsLoading(true);
        let res = await callRegisterAdmin(email, password, username, retypePassword);
        console.log('res', res);
        setIsLoading(false);
        if(res?.data){
            let accessToken = res.data?.accessToken;
            localStorage.setItem('access_token', accessToken);
            dispatch(doLoginAction({accessToken: accessToken}));
            message.success("Register successfully");
            navigate("/home");   
            return;
        }
        notification.error({
            message: 'Login Error',
            description: res.data && Array.isArray(message) ? res.message[0] : res.message,
            duration: 5
        })
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div  style={{marginLeft: "16.375rem"}}>
            <div>
                <h1 style={{ color: '#4889E9' }}>Sign Up</h1>
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

                <Form.Item
                    label="Full Name"
                    name="username"                          
                >
                    <Input  placeholder="Enter your full name" />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"                          
                >
                    <Input  placeholder="youremail@example.com" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Re-type Password"
                    name="retypePassword"
                >
                    <Input.Password placeholder='Re-enter your password' />
                </Form.Item>

                <Form.Item
                    Col={{
                        offset: 8,
                        span: 24,
                    }}
                    >
                    <Button type="primary" style={{width:"100%", backgroundColor:"#4889E9"}} htmlType="submit" loading={isLoading}>
                        Sign in
                    </Button>
                </Form.Item>
                    
                 <p style={{textAlign:"center"}}>Already have account? <Link style={{textDecoration:"underline"}} to='/'>Sign in</Link></p>   
            </Form>
        </div>
    );
}

export default AdminRegister;
