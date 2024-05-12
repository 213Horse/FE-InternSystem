import React from 'react';
import { Button, Input, Modal, Form, notification } from 'antd';
import axios from 'axios';
import { callCreateZaloGroup, getGroupsZalo } from '../../services/group-api';

const ModalCreate = ({ isModalCreateOpen, setIsModalCreateOpen, fetchGroupsZalo }) => {
    const [form] = Form.useForm(); // Using the useForm hook to get the form instance

    
    console.log('setIsModalCreateOpen', setIsModalCreateOpen);
    const handleOk = async () => {
        try {
            // Close the modal
            setIsModalCreateOpen(false);
            // Validate form fields
            const values = await form.validateFields();
            console.log('Form values:', values);
            // Perform Axios POST request
            await callCreateZaloGroup(values);
            await fetchGroupsZalo()
            // Show success notification
            notification.success({
                message: 'Success',
                description: 'Group created successfully!',
            });
        } catch (error) {
            // notification.error({
            //     message: 'Login Error',
            //     description: error.response.data.errors.title,
            //     duration: 5,
            // });
            console.log(error.response.data);
            notification.error({
                message: 'Error',
                description: error.response.data.title || "Internal Server Error",
            });
        }
    };

    const handleCancel = () => {
        setIsModalCreateOpen(false);
    };

    return (
        <>
            <Modal
                title="Create Group"
                visible={isModalCreateOpen}
                open={isModalCreateOpen}
                onCancel={handleCancel}
                footer={[
                    <Button key="cancel" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="create" type="primary" onClick={handleOk}>
                        Create
                    </Button>,
                ]}
            >
                <Form
                    form={form} // Set the form instance obtained from useForm hook
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ marginTop: '20px', maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Group Name"
                        name="tenNhom"
                        rules={[{ required: true, message: 'Please input your group name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Link Group"
                        name="linkNhom"
                        rules={[{ required: true, message: 'Please input your group link!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default ModalCreate;
