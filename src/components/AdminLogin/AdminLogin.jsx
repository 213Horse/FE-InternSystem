import React from 'react';
import { Alert, Button, Form, Input , Checkbox  } from 'antd';
import { Link } from 'react-router-dom';

function AdminLogin() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div  style={{marginLeft: "16.375rem"}}>
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

                <Form.Item
                    label="Email"
                    name="email"                          
                >
                    <Input  placeholder="youremail@example.com" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="passowrd"
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    Col={{
                        offset: 8,
                        span: 24,
                    }}
                    >
                    <Button type="primary" style={{width:"100%", backgroundColor:"#4889E9"}} htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
                <Form.Item
                    Col={{
                        offset: 8,
                        span: 24,
                    }}
                    >
                    <Button style={{width:"100%", backgroundColor:"##EFF4FB"}} htmlType="submit">
                        Sign up
                    </Button>
                </Form.Item>
                <Form.Item
                    Col={{
                        offset: 8,
                        span: 24,
                    }}
                    style={{textAlign:"center"}}
                >
                        OR LOGIN WITH
                </Form.Item>
                <Form.Item
                    Col={{
                        offset: 8,
                        span: 24,
                    }}
                    style={{
                        textAlign:"center", 
                        backgroundColor:"#FFFFFF", 
                        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)" ,
                        cursor: "pointer", 
                        display: 'flex',
                        justifyContent: 'center', /* căn giữa theo chiều ngang */
                        alignItems: 'center', /* căn giữa theo chiều dọc */
                        height: '32px', /* chiều cao của container */ 
                        borderRadius: '5px',
                        padding: '5px'
                    }}
                >
                    <div style={{display:"flex", justifyContent:"center", gap:'2px', textAlign:'center'}}>
                        <img src="src\assets\img\Logo\flat-color-icons_google.png" style={{width:"1.5rem",height:"1.5rem", marginTop:"12px"}}/>
                        <p>Google</p>
                    </div>                  
                </Form.Item>
            </Form>
        </div>
    );
}

export default AdminLogin;
