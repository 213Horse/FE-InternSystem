import React, { useState } from 'react';
import { Button, Modal, Form, Input, Space, Col, Row, Select, Typography } from 'antd';
import { EyeFilled } from '@ant-design/icons';

import Filter from '../../components/Filter/filter';
import '../../css/filter.css';
import TableComponent from '../../components/Table/TableCompoment';



const ApproveCV = () => {

    const { Search } = Input;

    const { TextArea } = Input;

    const { Title } = Typography;

    // CSS
    const title = {
        fontWeight: 'bold',
    }

    // Đặt thuộc tính CSS 'Vertical' cho bảng Pop-up
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('vertical');
    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };
    const formItemLayout =
        formLayout === 'vertical'
            ? {
                labelCol: {
                    span: 20,
                },
                wrapperCol: {
                    span: 23,
                },
            }
            : null;

    // Table Modal (Pop-up Chính)
    const [open, setOpen] = useState(false);

    // Top-Head-Bar Modal 
    const [showForm, setShowForm] = useState(false);

    const handleSendEmail = () => {
        setShowForm(true);
    };

    const handleOk = () => {
        setShowForm(false);
    };
    const handleCancel = () => {
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
                        <Button onClick={() => setOpen(true)}>
                            View
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
                    <Button onClick={handleSendEmail} size={'large'} type="primary" style={{ width: '160px', margin: '20px', backgroundColor: 'purple' }}>Send Email</Button>
                    <Button size={'large'} type="primary" style={{ width: '160px', margin: '20px', backgroundColor: 'green' }}>Export Excel</Button>
                    <Button size={'large'} type="primary" style={{ width: '160px', margin: '20px', backgroundColor: 'orange' }}>Edit</Button>
                    <Button size={'large'} type="primary" style={{ width: '160px', margin: '20px', backgroundColor: 'red' }}>Delete</Button>
                    <Button size={'large'} type="primary" style={{ width: '160px', margin: '20px 10px 20px 20px', backgroundColor: 'blue' }}>Add New Project</Button>

                </div>
                <br></br>
            </div>

            {/* Send Email Modal */}
            <div>
                <Modal width={700} open={showForm} onOk={handleOk} onCancel={handleCancel}>

                    <Title level={2}>Send Email</Title>

                    <h3>Choose types of Email</h3>

                    <div style={{ display: 'flex' }}>
                        <div style={{ marginRight: 12 }}>
                            <Select
                                showSearch
                                style={{
                                    width: 150,
                                }}
                                placeholder="Types of Email"
                                optionFilterProp="children"
                                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                options={[
                                    {
                                        value: '1',
                                        label: 'Email interview',
                                    },
                                    {
                                        value: '2',
                                        label: 'Emai result',
                                    },
                                    {
                                        value: '3',
                                        label: 'Intership information',
                                    },
                                ]}
                            />
                        </div>

                        <div style={{ width: '100%' }}>
                            <TextArea placeholder='Enter your email' rows={4} width={500} />
                        </div>
                    </div>

                </Modal>
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
                                <Col span={8}>
                                    <Form.Item style={title} label="Intern ID">
                                        <Input placeholder="input placeholder" disabled />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item style={title} label="Date Interview">
                                        <Input placeholder="input placeholder" disabled />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item style={title} label="Time Interview">
                                        <Input placeholder="input placeholder" disabled />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={8}>
                                    <Form.Item style={title} label="Full Name">
                                        <Input placeholder="input placeholder" disabled />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item style={title} label="Date Of Birth">
                                        <Input placeholder="input placeholder" disabled />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item style={title} label="Phone Number">
                                        <Input placeholder="input placeholder" disabled />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={8}>
                                    <Form.Item style={title} label="Position">
                                        <Input placeholder="input placeholder" disabled />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item style={title} label="School">
                                        <Input placeholder="input placeholder" disabled />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item style={title} label="Address">
                                        <Input placeholder="input placeholder" disabled />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={8}>
                                    <Form.Item style={title} label="Email">
                                        <Input placeholder="input placeholder" disabled />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item style={title} label="Link CV">
                                        <Input placeholder="input placeholder" disabled />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item style={title} label="Interviewer">
                                        <Input placeholder="input placeholder" disabled />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={8}>
                                    <Form.Item style={title} label="English Proficiency">
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