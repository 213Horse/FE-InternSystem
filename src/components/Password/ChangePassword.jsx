import React from 'react';
import { callResetPassword } from '../../services/auth-api';
import { Button, Form, Input, message } from 'antd';

function ChangePassword({ email }) {
    const onFinish = async (values) => {
        const { newPassword, confirmPassword } = values;

        try {
            const res = await callResetPassword(email, newPassword, confirmPassword);
            console.log('res:', res);
            if (res?.data) {
                message.success('Change password successfully');
            }
        } catch (error) {
            notification.error({
                message: 'Change Error',
                description: error.response.data.errors,
                duration: 5,
            });
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div style={{ marginLeft: '16.375rem', width: '500px' }}>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="New Password"
                    name="newPassword"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your new password!',
                        },
                    ]}
                >
                    <Input.Password  />
                </Form.Item>

                <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your confirm password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default ChangePassword;
