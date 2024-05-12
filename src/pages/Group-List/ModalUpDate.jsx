import React, { useState, useEffect } from 'react';
import { Button, Input, Modal, Form, notification } from 'antd';
import { callUpdateZaloGroup } from '../../services/group-api';

const ModalUpdate = ({ isModalUpdateOpen, setIsModalUpdateOpen, fetchGroupsZalo, selectedRows, selectedRowId }) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false); // State to track loading state during update operation

    // Set form values when groupToUpdate changes
    useEffect(() => {
        if (selectedRows[0]) {
            console.log('Group to updateaddadas:', selectedRows[0]);
            form.setFieldsValue({
                tenNhom: selectedRows[0]?.tenNhom,
                linkNhom: selectedRows[0]?.linkNhom,
            });
        }
    }, [selectedRows]);

    const handleOk = async () => {
        try {
            // Close the modal
            setIsModalUpdateOpen(false);
            setLoading(true); // Set loading state to true during update operation
            const values = await form.validateFields();

            // Perform Axios PUT request to update the group
            await callUpdateZaloGroup(selectedRows[0].id, values);
            
            // Show success notification
            notification.success({
                message: 'Success',
                description: 'Group updated successfully!',
            });

            // Fetch the updated list of groups
           
        } catch (error) {
            console.error('Failed to update group:', error);

            // Show error notification
            notification.error({
                message: 'Error',
                description: 'Failed to update group. Please try again later.',
            });
        } finally {
            setLoading(false); // Set loading state back to false after update operation completes
            await fetchGroupsZalo();
        }
    };

    const handleCancel = () => {
        setIsModalUpdateOpen(false);
    };

    return (
        <>
            <Modal
                title="Update Group"
                onCancel={handleCancel}
                visible={isModalUpdateOpen}
                footer={[
                    <Button key="cancel" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="update" type="primary" onClick={handleOk} loading={loading}>
                        Update
                    </Button>,
                ]}
            >
                <Form
                    form={form}
                    name="updateGroupForm"
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

export default ModalUpdate;
