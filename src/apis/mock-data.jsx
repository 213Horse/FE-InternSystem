import React, { useState } from "react";
import { Button, Modal, Form, Input, Space, Col, Row, Select } from "antd";
import { EyeFilled } from '@ant-design/icons';



export const dataSource = [
    {
        id: 1,
        startDate: '2022-01-01',
        finishDate: '2022-12-31',
        fullName: 'John Doe',
        dateOfBirth: '1990-05-15',
        phoneNumber: '123456789',
        position: 'Intern',
        school: 'ABC University',
        address: '123 Example Street',
        email: 'johndoe@example.com',
        cv: 'Link to CV',
        comment: '2 comments',
        role: 'Role',
        project: 'Project',
        groupZalo: 'Group Zalo',
        mentor: 'Mentor',
        status: 'Option 1',
        reportProcess: 'Report Process',
        button: 'View',
        key: 1
    },
    {
        id: 2,
        startDate: '2022-02-01',
        finishDate: '2022-11-30',
        fullName: 'Jane Smith',
        dateOfBirth: '1992-10-20',
        phoneNumber: '987654321',
        position: 'Intern',
        school: 'XYZ University',
        address: '456 Example Street',
        email: 'janesmith@example.com',
        cv: 'Link to CV',
        comment: '2 comments',
        role: 'Role',
        project: 'Project',
        groupZalo: 'Group Zalo',
        mentor: 'Mentor',
        status: 'Option 2',
        reportProcess: 'Report Process',
        button: 'View',
        key: 2
    },
    {
        id: 3,
        startDate: '2022-01-01',
        finishDate: '2022-12-31',
        fullName: 'John Doe',
        dateOfBirth: '1990-05-15',
        phoneNumber: '123456789',
        position: 'Intern',
        school: 'ABC University',
        address: '123 Example Street',
        email: 'johndoe@example.com',
        cv: 'Link to CV',
        comment: '2 comments',
        role: 'Role',
        project: 'Project',
        groupZalo: 'Group Zalo',
        mentor: 'Mentor',
        status: 'Option 3',
        reportProcess: 'Report Process',
        button: 'View',
        key: 3
    },
    {
        id: 4,
        startDate: '2022-02-01',
        finishDate: '2022-11-30',
        fullName: 'Jane Smith',
        dateOfBirth: '1992-10-20',
        phoneNumber: '987654321',
        position: 'Intern',
        school: 'XYZ University',
        address: '456 Example Street',
        email: 'janesmith@example.com',
        cv: 'Link to CV',
        comment: '2 comments',
        role: 'Role',
        project: 'Project',
        groupZalo: 'Group Zalo',
        mentor: 'Mentor',
        status: 'Status',
        reportProcess: 'Report Process',
        button: 'View',
        key: 4
    },
];

const options = [
    { value: '1', label: 'Option 1', color: 'orange' },
    { value: '2', label: 'Option 2', color: 'blue' },
    { value: '3', label: 'Option 3', color: 'green' },
];

export const columns = [
    {
        title: 'Intern ID',
        dataIndex: 'id',
    },
    {
        title: 'Start Date',
        dataIndex: 'startDate',
    },
    {
        title: 'Finish Date',
        dataIndex: 'finishDate',
    },
    {
        title: 'Full Name',
        dataIndex: 'fullName',


    },
    {
        title: 'Date Of Birth',
        dataIndex: 'dateOfBirth',


    },
    {
        title: 'Phone Number',
        dataIndex: 'phoneNumber',

    },
    {
        title: 'Position',
        dataIndex: 'position',

    },
    {
        title: 'School',
        dataIndex: 'school',

    },
    {
        title: 'Address',
        dataIndex: 'address',

    },
    {
        title: 'Email',
        dataIndex: 'email',

    },
    {
        title: 'CV',
        dataIndex: 'cv',
        render: (text) => (
            <a href='' style={{ textDecoration: 'underline', color: 'black' }}>{text}</a>
        )

    },
    {
        title: 'Comments',
        dataIndex: 'comment',
        render: (text) => (
            <div style={{ border: '2px solid #CBD2DC', borderRadius: '15px', padding: '6px 10px' }}>
                <Space >
                    <span>{text}</span>
                    <EyeFilled />
                </Space>
            </div>
        )
    },
    {
        title: 'Role',
        dataIndex: 'role',
    },
    {
        title: 'Project',
        dataIndex: 'project',
    },
    {
        title: 'Group Zalo',
        dataIndex: 'groupZalo',
    },
    {
        title: 'Mentor',
        dataIndex: 'mentor',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        render: (text) => {
            const selectedOption = options.find((option) => option.label === text);
            console.log(selectedOption);
            const optionColor = selectedOption ? selectedOption.color : null;
            console.log(optionColor);
            return (
                <Select defaultValue='Option 1' variant="borderless" style={{ color: optionColor }}>
                    {options.map((option) => (
                        <Select.Option key={option.value} value={option.value}>
                            {option.label}
                        </Select.Option>
                    ))}
                </Select>
            );
        },
    },
    {
        title: 'Report Process',
        dataIndex: 'reportProcess',
    },
    {
        title: 'Button',
        dataIndex: 'button',
        render: (text, record) => {
            const showModal = () => {
                setIsModalOpen(true);
            };
            return (
                <>
                    <Button type="primary" onClick={showModal}>
                        Open Modal of 1000px width
                    </Button>
                    
                </>
            )
        },
    },
]

