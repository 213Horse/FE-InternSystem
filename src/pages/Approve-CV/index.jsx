import React, { useState } from 'react';
import { Button, Modal, Form, Input, Space, Col, Row, Select, Tabs, Flex, Typography } from 'antd';
import { EyeFilled, DownOutlined } from '@ant-design/icons';
import { dataSource } from '../../apis/mock-data';

import Filter from '../../components/Filter/filter';
import '../../css/filter.css';
import TableComponent from '../../components/Table/TableCompoment';



const ApproveCV = () => {

    const { TextArea } = Input;

    const { Title } = Typography;

    const onChange = (key) => {
        console.log(key);
    };

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

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
                    span: 20,
                },
                wrapperCol: {
                    span: 23,
                },
            }
            : null;

    // Modal
    const [open, setOpen] = useState(false);

    const [interviewModal, setInterviewModal] = useState(false);

    console.log('This is interview Modal', interviewModal)

    const showInterviewModal = () => {
        setInterviewModal(true);
        console.log(interviewModal, 'Modal is open')
    };
    const handleOk = () => {
        setInterviewModal(false);
        console.log('HandleOk been clicked', interviewModal)
    };
    const handleCancel = () => {
        setInterviewModal(false);
        console.log('Handle canncel been clicked', interviewModal)
    };

    // Table API
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

    // Table > Status
    const options = [
        { value: '1', label: 'Option 1', color: 'orange' },
        { value: '2', label: 'Option 2', color: 'blue' },
        { value: '3', label: 'Option 3', color: 'green' },
    ];

    // Table Columns API
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
                        <Button style={{ marginRight: '12px' }} onClick={() => setOpen(true)}>
                            View
                        </Button>

                        <Button>
                            Feedback
                        </Button>
                    </>
                )
            },
        },
    ]

    // Pop-up drop down


    const items = [
        {
            key: '1',
            label: 'View details of intern',
            children:
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
                            <Form.Item label="Intern ID">
                                <Input placeholder="#123456" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="FullName">
                                <Input placeholder="Estherne Eden" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Date Of Birth">
                                <Input placeholder="25/11/2023" disabled />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <Form.Item label="Phone Number">
                                <Input placeholder="123456789" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Position">
                                <Input placeholder="Back-End" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="School">
                                <Input placeholder="FPT University" disabled />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <Form.Item label="Address">
                                <Input placeholder="District 9" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Email">
                                <Input placeholder="abc@gmail.com" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Link CV">
                                <Input placeholder="link" disabled />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <Form.Item label="Rank">
                                <Input placeholder="Intern" disabled />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            ,
        },
        {
            key: '2',
            label: 'Comments of CV',
            children:
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
                            <Form.Item label="Major">
                                <Input placeholder="software engineer" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Programming Language">
                                <Input placeholder="ReactJS" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Project on Github">
                                <Input placeholder="Cannot open link Github" disabled />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <Form.Item label="Position">
                                <Input placeholder="Back-End" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Rank">
                                <Input placeholder="Intern/Senior/Junior" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Add Comment">
                                <Input placeholder="Click to add more content" disabled />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            ,
        },
        {
            key: '3',
            label: 'Result of interview',
            children:
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
                            <Form.Item label="Programming Language">
                                <Input placeholder="ReactJs" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Major">
                                <Input placeholder="Software engineer" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Which year are you are in?">
                                <Input placeholder="select" disabled />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <Form.Item label="Why choose this major?">
                                <Input placeholder="" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Why choose to intern at Amazing Tech?">
                                <Input placeholder="Back-End" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="How do you know about Amazing Tech?">
                                <Input placeholder="" disabled />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <Form.Item label="Do you know the office address?">
                                <Input placeholder="Yes/No Select" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Do you know about UNPAID intership?">
                                <Input placeholder="Yes/No Select" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="What are you desire when intering at Amazing Tech?">
                                <Input placeholder="link" disabled />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <Form.Item label="Work online or office?">
                                <Input placeholder="Online/Offline Select" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Are you busy with anything else?">
                                <Input placeholder="" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Communication skill">
                                <Input placeholder="" disabled />
                            </Form.Item>
                        </Col>
                    </Row>

                    <h3 style={{ color: 'red' }}>Question of Technology</h3>
                    <Row>
                        <Col span={8}>
                            <Form.Item label="Question 1">
                                <Input placeholder="Enter intern's answer" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Question 2">
                                <Input placeholder="" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Question 3">
                                <Input placeholder="" disabled />
                            </Form.Item>
                        </Col>
                    </Row>

                    <h3 style={{ color: 'red' }}>Assign Project</h3>
                    <Row>
                        <Col span={8}>
                            <Form.Item label="Project's Name">
                                <Input placeholder="" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Position">
                                <Input placeholder="" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Group Zalo">
                                <Input placeholder="" disabled />
                            </Form.Item>
                        </Col>
                    </Row>

                    <h2>Final Result:
                        <Space wrap>
                            <Select
                                defaultValue="choose"
                                style={{
                                    width: 120,
                                    marginLeft: 16,
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'passed',
                                        label: 'Passed',
                                    },
                                    {
                                        value: 'not passed',
                                        label: 'Not Passed',
                                    },
                                ]}
                            />
                        </Space>
                    </h2>
                </Form>
            ,
        },
    ];

    return (
        <>
            <div>
                <h1 style={{ marginLeft: '10px', color: '#8A2BE2' }}>Approve CV</h1>
                <br></br>
                <div>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        style={{ margin: '20px', width: '33%' }}
                    />
                    <Button onClick={showInterviewModal} size={'large'} type="primary" style={{ width: '160px', margin: '20px', backgroundColor: 'purple' }}>Schedule Interview </Button>
                    <Button size={'large'} type="primary" style={{ width: '160px', margin: '20px', backgroundColor: 'green' }}>Export Excel</Button>
                    <Button size={'large'} type="primary" style={{ width: '160px', margin: '20px', backgroundColor: 'orange' }}>Edit</Button>
                    <Button size={'large'} type="primary" style={{ width: '160px', margin: '20px', backgroundColor: 'red' }}>Delete</Button>
                    <Button size={'large'} type="primary" style={{ width: '160px', margin: '20px 10px 20px 20px', backgroundColor: 'blue' }}>Add New Project</Button>

                </div>
                <br></br>
            </div>

            {/* Interview Modal */}
            <div>
                <Modal width={1000}
                    centered
                    open={interviewModal}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <div>
                        <h1>Schedule interview for Intern's ID: xxxx</h1>

                        <div>
                            <Flex justify={'space-between'}>
                                <div>
                                    <Title style={{fontWeight: 'bold'}} level={4}>Date</Title>
                                    <Input placeholder="DD/MM/YYYY" />
                                </div>
                                <div>
                                    <Title style={{fontWeight: 'bold'}} level={4}>Start Time</Title>
                                    <Input placeholder="12:00 AM" />
                                </div>
                                <div>
                                    <Title style={{fontWeight: 'bold'}} level={4}>Time Duration</Title>
                                    <Input placeholder="15 minutes" />
                                </div>
                            </Flex>
                        </div>

                        <div>
                            <Flex justify={'space-between'}>
                                <div>
                                    <Title style={{fontWeight: 'bold'}} level={4}>Types of Interviews</Title>
                                    <Input placeholder="Online/Offline" />
                                </div>
                                <div>
                                    <Title style={{fontWeight: 'bold'}} level={4}>Interviewer</Title>
                                    <div style={{ display: 'flex' }}>
                                        <Select
                                            showSearch
                                            style={{
                                                width: 100,
                                                borderRadius: 6,
                                            }}
                                            placeholder="Position"
                                            optionFilterProp="children"
                                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                            filterSort={(optionA, optionB) =>
                                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                            }
                                            options={[
                                                {
                                                    value: '1',
                                                    label: 'Back End',
                                                },
                                                {
                                                    value: '2',
                                                    label: 'Font End',
                                                },
                                                {
                                                    value: '3',
                                                    label: 'BA',
                                                },
                                            ]}
                                        />
                                        <Input style={{ width: 182 }} placeholder="Nguyen Van A" />
                                    </div>
                                </div>
                                <div>
                                    <Title style={{fontWeight: 'bold'}} level={4}>Link Google Meet/Address</Title>
                                    <Input placeholder="" />
                                </div>
                            </Flex>
                        </div>

                        <div>
                            <Flex justify={'space-between'}>
                                <div>
                                    <Title style={{fontWeight: 'bold'}} level={4}>Send Email</Title>
                                    <Input placeholder="Types of Email" />
                                </div>

                                <div>
                                    <Title style={{fontWeight: 'bold'}} level={4}>Rank</Title>
                                    <Input placeholder="intern/senior/junior" />
                                </div>
                            </Flex>
                        </div>

                        <div>
                            <Flex justify={'space-between'}>
                                <div>
                                    <Title style={{fontWeight: 'bold'}} level={4}>To:</Title>
                                    <Input style={{ width: 350 }} placeholder="" />
                                </div>

                                <div>
                                    <Title style={{fontWeight: 'bold'}} level={4}>BCC:</Title>
                                    <Input style={{ width: 350 }} placeholder="" />
                                </div>
                            </Flex>
                        </div>

                        <Title style={{fontWeight: 'bold'}} level={3}>Choose types of Email</Title>

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
                    </div>

                </Modal>
            </div>

            {/* Main */}
            <div>
                {/* Filter */}
                <Filter />

                {/* Table Show Data */}
                <TableComponent columns={columns} dataSource={dataSource} />

                {/* View Table Pop-Up */}
                <div style={{ marginLeft: 200 }}>
                    <Modal
                        centered
                        open={open}
                        onOk={() => setOpen(false)}
                        onCancel={() => setOpen(false)}
                        width={1000}
                    >
                        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
                    </Modal>
                </div>
            </div>

        </>
    );
};
export default ApproveCV;