import React, { useState } from 'react';
import { Button, Modal, Form, Input, Space, Col, Row, Select } from 'antd';
import { EyeFilled } from '@ant-design/icons';

import Filter from '../../components/Filter/filter';
import '../../css/filter.css';
import TableComponent from '../../components/Table/TableCompoment';



const ApproveCV = () => {

    const { Search } = Input;

    // Set Vertical Property
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('vertical');
    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };
    const formItemLayout =
        formLayout === 'vertical'
            ? {
                labelCol: {
                    span: 4,
                },
                wrapperCol: {
                    span: 23,
                },
            }
            : null;

    // Modal
    const [open, setOpen] = useState(false);

    const [showForm, setShowForm] = useState(false);

    const handleAddProject = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };


    const dataSource = [
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

    const columns = [
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

                return (
                    <>
                        <Button type="primary" onClick={() => setOpen(true)}>
                            Open Modal of 1000px width
                        </Button>
                    </>
                )
            },
        },
    ]

    return (
        <>
            <div>
                <h1 style={{ marginLeft: '10px', color: '#8A2BE2' }}>Confirm CV</h1>
                <br></br>
                <div>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        style={{ margin: '20px', width: '33%' }}
                    />
                    <Button size={'large'} type="primary" style={{ width: '160px', margin: '20px', backgroundColor: 'green' }}>Export Excel</Button>
                    <Button size={'large'} type="primary" style={{ width: '160px', margin: '20px', backgroundColor: 'orange' }}>Edit</Button>
                    <Button size={'large'} type="primary" style={{ width: '160px', margin: '20px', backgroundColor: 'red' }}>Delete</Button>
                    <Button onClick={handleAddProject} size={'large'} type="primary" style={{ width: '160px', margin: '20px 10px 20px 20px', backgroundColor: 'blue' }}>Add New Project</Button>

                </div>
                <br></br>
            </div>


            <div>
                {/* Filter */}
                <Filter />

                {/* Table Show Data */}
                <TableComponent columns={columns} dataSource={dataSource} />

                {/* Pop-Up */}
                <div style={{ marginLeft: 200 }}>
                    <Modal
                        centered
                        open={open}
                        onOk={() => setOpen(false)}
                        onCancel={() => setOpen(false)}
                        width={1000}
                    >

                        <Form
                            {...formItemLayout}
                            layout={formLayout}
                            form={form}
                            initialValues={{
                                layout: formLayout,
                            }}
                            onValuesChange={onFormLayoutChange}
                        >
                            <Row>
                                <Col style={{ maxWidth: 'none' }} span={8}>
                                    <Form.Item label="Field A">
                                        <Input placeholder="input placeholder" disabled />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item label="Field B">
                                        <Input placeholder="input placeholder" disabled />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item label="Field C">
                                        <Input placeholder="input placeholder" disabled />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={8}>
                                    <Form.Item label="Field A">
                                        <Input placeholder="input placeholder" disabled />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item label="Field B">
                                        <Input placeholder="input placeholder" disabled />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item label="Field C">
                                        <Input placeholder="input placeholder" disabled />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={8}>
                                    <Form.Item label="Field A">
                                        <Input placeholder="input placeholder" disabled />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item label="Field B">
                                        <Input placeholder="input placeholder" disabled />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item label="Field C">
                                        <Input placeholder="input placeholder" disabled />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={8}>
                                    <Form.Item label="Field A">
                                        <Input placeholder="input placeholder" disabled />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Modal>
                </div>
            </div>

        </>
    );
};
export default ApproveCV;