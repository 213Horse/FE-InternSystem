import React, { useEffect, useState } from 'react';
import { Button, Modal, Form, Select } from 'antd';
import { getUser } from '../../services/user-api';
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

    console.log('users', users);

    const showModal = () => {
        setIsModalAddUserToGroup(true);
    };
    const handleOk = () => {
        setIsModalAddUserToGroup(false);
    };
    const handleCancel = () => {
        setIsModalAddUserToGroup(false);
    };
    const onFinish = (values) => {
        console.log('Form values:', values);
    };

    console.log('groupZalo', groupZalo);
    return (
        <>
            <Modal open={isModalAddUserToGroup} onOk={handleOk} onCancel={handleCancel} width={1000}>
                <h1>Add User to group zalo</h1>
                <div>
                    <Form name="basic" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                        <Form.Item
                            label="Common Group"
                            name="select"
                            rules={[{ required: true, message: 'Please select an option!' }]}
                        >
                            <Select placeholder="Please select common group">
                                {groupZalo &&
                                    groupZalo.length > 0 &&
                                    groupZalo.map((group) => {
                                        return (
                                            <>
                                                {' '}
                                                <Option value={group.id}>{group.tenNhom}</Option>
                                            </>
                                        );
                                    })}
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="Private Group"
                            name="select"
                            rules={[{ required: true, message: 'Please select an option!' }]}
                        >
                            <Select placeholder="Please select common group">
                                {groupZalo &&
                                    groupZalo.length > 0 &&
                                    groupZalo.map((group) => {
                                        return (
                                            <>
                                                {' '}
                                                <Option value={group.id}>{group.tenNhom}</Option>
                                            </>
                                        );
                                    })}
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="User"
                            name="select"
                            rules={[{ required: true, message: 'Please select user!' }]}
                        >
                            <Select placeholder="Please select user to add group">
                                {users &&
                                    users.length > 0 &&
                                    users.map((user) => {
                                        return (
                                            <>
                                                <Option value={user.id}>{user.username}</Option>
                                            </>
                                        );
                                    })}
                            </Select>
                        </Form.Item>                  
                    </Form>
                </div>
            </Modal>
        </>
    );
};
export default ModalAddUserToGroup;
