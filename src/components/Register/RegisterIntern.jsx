import React, { useState } from 'react';
import { Alert, Button, Form, Input , Checkbox, message, notification  } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { callLogin, callRegisterAdmin, callRegisterIntern, callRegisterschool } from '../../services/api';
import { useDispatch } from 'react-redux';
import { doLoginAction, doLogoutAction } from '../../redux/account/accountSlice';

function RegisterIntern() {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [isLoading,  setIsLoading] = useState(false);
    const navigate = useNavigate();
    const onFinish = async(values) => {
        const {username, password, email} = values;    
        console.log(username, password, email);
        setIsLoading(false);
        let res = await callRegisterIntern(username, password, email);
        console.log('res', res);
        setIsLoading(false);
        if(res?.data){
            let accessToken = res.data?.accessToken;
            localStorage.setItem('access_token', accessToken);
            dispatch(doLoginAction({accessToken: accessToken}));
            message.success("Register successfully");   
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
                    label="Email"
                    name="email"                          
                >
                    <Input  placeholder="youremail@example.com" />
                </Form.Item>
                <Form.Item
                    label="Username"
                    name="username"                          
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                >
                    <Input.Password />
                </Form.Item>

                <Button type="primary" style={{width:"100%", backgroundColor:"#4889E9"}} htmlType="submit" loading={isLoading}>
                        Sign Up
                </Button>
                <p style={{textAlign:"center"}}>Already have account? <Link  to='/school-login' st yle={{textDecoration:"underline"}}>Sign in</Link></p>   
            </Form>
        </div>
    );
}

export default RegisterIntern;
