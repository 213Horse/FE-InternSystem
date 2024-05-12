import React, { useEffect, useState } from 'react';
import { Button, Modal, Form, Select, notification, message } from 'antd';
import { getUser } from '../../services/user-api';
import { callAddUserToCommonGroupAndPrivateGroup } from '../../services/group-api';

const ModalAddUserToGroup = (props) => {
    const {
        isModalAddUserToGroup,
        setIsModalAddUserToGroup,
        showModalAddUserToGroup,
        fetchGroupsZalo,
        groupZalo,
        users,
    } = props;
    const { Option } = Select;
    const [form] = Form.useForm();

    console.log('users', users);

    const showModal = () => {
        setIsModalAddUserToGroup(true);
    };
    const handleOk = () => {
        setIsModalAddUserToGroup(false);
        form.submit();
    };
    const handleCancel = () => {
        setIsModalAddUserToGroup(false);
    };

    const onFinish = async (values) => {
        const { commonGroupId, privateGroupId, userId, isMentor } = values;
        console.log('commonGroupId, privateGroupId, userId', commonGroupId, privateGroupId, userId, isMentor);
        try {
            await callAddUserToCommonGroupAndPrivateGroup(commonGroupId, privateGroupId, userId, isMentor);
            message.success('User added to group successfully');
        } catch (err) {
            console.log(err.response.data);
            notification.error({
                message: 'Error',
                description: err.response.data || 'Internal Server Error',
            });
        } finally {
            form.resetFields();
        }
    };

    console.log('groupZalo', groupZalo);
    return (
        <>
            <Modal open={isModalAddUserToGroup} onOk={handleOk} onCancel={handleCancel} width={1000}>
                <h1>Add User to group zalo</h1>
                <div>
                    <Form form={form} name="basic" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                        <Form.Item
                            label="Common Group"
                            name="commonGroupId"
                            rules={[{ required: true, message: 'Please select an option!' }]}
                        >
                            <Select
                                showSearch
                                placeholder="Please select common group"
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {groupZalo &&
                                    groupZalo.length > 0 &&
                                    groupZalo.map((group) => {
                                        return <Option value={group.id}>{group.tenNhom}</Option>;
                                    })}
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="Private Group"
                            name="privateGroupId"
                            rules={[{ required: true, message: 'Please select an option!' }]}
                        >
                            <Select
                                showSearch
                                placeholder="Please select private group"
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {groupZalo &&
                                    groupZalo.length > 0 &&
                                    groupZalo.map((group) => {
                                        return <Option value={group.id}>{group.tenNhom}</Option>;
                                    })}
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="User"
                            name="userId"
                            rules={[{ required: true, message: 'Please select user!' }]}
                        >
                            <Select
                                showSearch
                                placeholder="Please select user to add group"
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {users &&
                                    users.length > 0 &&
                                    users.map((user) => {
                                        return <Option value={user.id}>{user.username}</Option>;
                                    })}
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="Is Mentor"
                            name="isMentor"
                            rules={[{ required: true, message: 'Please select an option!' }]}
                        >
                            <Select placeholder="Please select if the user is a mentor">
                                <Option value={true}>Yes</Option>
                                <Option value={false}>No</Option>
                            </Select>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </>
    );
};
export default ModalAddUserToGroup;
