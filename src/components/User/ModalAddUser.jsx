import React, { useState } from 'react';
import { Button, Form, Input, message, Modal, Select } from 'antd';
import { CreateAUser } from '../../services/user-api';

const { Option } = Select;

const ModalAddUser = ({ isModalOpenAddUser, setIsModalOpenAddUser, roles }) => {
    const [form] = Form.useForm();

    const handleOk = () => {
        form.submit();
    };

    const handleCancel = () => {
        setIsModalOpenAddUser(false);
    };

    const onFinish = async (values) => {
        const { fullName, email, username, password, phoneNumber, roleName } = values;
        try {
            const res = await CreateAUser(fullName, email, username, password, phoneNumber, roleName);
            console.log('res', res.data);
            message.success('User added successfully');
            setIsModalOpenAddUser(false); // Close the modal on success
            form.resetFields(); // Reset the form fields
        } catch (err) {
            console.log(err.response?.data?.errorMessage || 'An error occurred');
            message.error(`An error occurred: ${err.response?.data?.errorMessage || 'Please try again later'}`);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Modal
                open={isModalOpenAddUser}
                onOk={handleOk}
                onCancel={handleCancel}
                width={1000}
                title="Add New User"
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleOk}>
                        Submit
                    </Button>,
                ]}
            >
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="FullName"
                        name="fullName"
                        rules={[{ required: true, message: 'Please input your full name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="Phone Number"
                        name="phoneNumber"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Role"
                        name="roleName"
                        rules={[{ required: true, message: 'Please select a role!' }]}
                    >
                        <Select placeholder="Please select a role">
                            {roles && roles.map((role) => (
                                <Option key={role.name} value={role.name}>
                                    {role.name}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default ModalAddUser;
