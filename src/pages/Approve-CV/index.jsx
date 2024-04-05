import React, { useEffect, useState } from 'react';
import { Button, Modal, Form, Input, Space, Col, Row, Select, Tabs, Flex, Typography } from 'antd';
import Filter from '../../components/Filter/filter';
import '../../css/filter.css';
import TableComponent from '../../components/Table/TableCompoment';
import { getInterns } from '../../services/api';
import axios from '../../ultils/axios-custom';

const ApproveCV = () => {
    // React Hook - UseState cho List Intern http API
    const [internInfo, setInternInfo] = useState([]);
    const [internFormInfo, setInternFormInfo] = useState([]);

    // Lấy API từ Swegger

    // Cách 1: Lấy successs => Chạy
    // const fetchInterns = async () => {
    //     try {
    //         let res = await getInterns();
    //         const interntArray = res?.data || {};
    //         setIntern(interntArray);
    //         console.log(data);
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }

    // cách 2: Lấy success => Chạy
    const fetchInterns = async () => {
        try {
            const res = await axios.get('/api/interns/get');
            const interntArray = res?.data || {}; // Phải có dòng này thì code mới chạy được.
            setInternInfo(interntArray);
        } catch (error) {
            console.log(error);
        }
    };
    console.log('Danh sach Intern:', internInfo);

    //React Hook - UseEffect - Lấy Intern Info
    useEffect(() => {
        fetchInterns();
    }, []);

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

    // View Pop-up
    const [open, setOpen] = useState(false);

    // Interview Pop-up
    const [interviewModal, setInterviewModal] = useState(false);

    const showInterviewModal = () => {
        setInterviewModal(true);
    };
    const handleOk = () => {
        setInterviewModal(false);
    };
    const handleCancel = () => {
        setInterviewModal(false);
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
            key: 1,
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
            title: 'MSSV',
            dataIndex: 'mssv',
        },
        {
            title: 'Start Date',
            dataIndex: 'startDate',
        },
        {
            title: 'End Date',
            dataIndex: 'endDate',
        },
        {
            title: 'Full Name',
            dataIndex: 'hoten',
        },
        {
            title: 'Date Of Birth',
            dataIndex: 'ngaySinh',
        },
        {
            title: 'Phone Number',
            dataIndex: 'sdt',
        },
        {
            title: 'Position',
            dataIndex: 'viTriMongMuon',
        },
        {
            title: 'Position',
            dataIndex: 'viTri',
        },
        {
            title: 'Address',
            dataIndex: 'diaChi',
        },
        {
            title: 'Personal Email',
            dataIndex: 'emailCaNhan',
        },
        {
            title: 'Shcool Email',
            dataIndex: 'emailTruong',
        },
        {
            title: 'CV',
            dataIndex: 'linkCV',
            render: (text) => (
                <a href="" style={{ textDecoration: 'underline', color: 'black' }}>
                    {text}
                </a>
            ),
        },
        {
            title: 'Gender',
            dataIndex: 'gioiTinh',
        },
        {
            title: 'English Level',
            dataIndex: 'trinhDoTiengAnh',
        },
        {
            title: 'Project',
            dataIndex: 'duAn',
        },
        // {
        //     title: 'Comments',
        //     dataIndex: 'comment',
        //     render: (text) => (
        //         <div style={{ border: '2px solid #CBD2DC', borderRadius: '15px', padding: '6px 10px' }}>
        //             <Space >
        //                 <span>{text}</span>
        //                 <EyeFilled />
        //             </Space>
        //         </div>
        //     )
        // },
        {
            title: 'Group Zalo',
            dataIndex: 'nhomZalo',
        },
        {
            title: 'School',
            dataIndex: 'truongHoc',
        },
        {
            title: 'OJT',
            dataIndex: 'kiThucTap',
        },
        {
            title: 'Round',
            dataIndex: 'round',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            // render: (text) => {
            //     const selectedOption = options.find((option) => option.label === text);

            //     const optionColor = selectedOption ? selectedOption.color : null;

            //     return (
            //         <Select defaultValue='Option 1' variant="borderless" style={{ color: optionColor }}>
            //             {options.map((option) => (
            //                 <Select.Option key={option.value} value={option.value}>
            //                     {option.label}
            //                 </Select.Option>
            //             ))}
            //         </Select>
            //     );
            // },
        },
        {
            title: 'Button',
            dataIndex: 'button',
            render: (text, record) => {
                return (
                    <>
                        <Button
                            style={{ marginRight: '12px' }}
                            onClick={() => {
                                setOpen(true);
                                setInternFormInfo(record);
                            }}
                        >
                            View
                        </Button>

                        <Button>Feedback</Button>
                    </>
                );
            },
        },
    ];

    // View Items Pop-Up
    const items = [
        {
            key: '1',
            label: 'View details of intern',
            children: (
                <Form
                    name="formInModal"
                    {...formItemLayout}
                    layout={formLayout}
                    form={form}
                    initialValues={internFormInfo}
                    onValuesChange={onFormLayoutChange}
                >
                    <Row>
                        <Col span={8}>
                            <Form.Item name="id" label="Intern ID">
                                <Input placeholder="Estherne Eden" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="hoTen" label="FullName">
                                <Input placeholder="Estherne Eden" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="ngaySinh" label="Date Of Birth">
                                <Input placeholder="25/11/2023" disabled />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <Form.Item name="sdt" label="Phone Number">
                                <Input placeholder="123456789" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="position" label="Position">
                                <Input placeholder="Back-End" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="truongHoc" label="School">
                                <Input placeholder="FPT University" disabled />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <Form.Item name="diaChi" label="Address">
                                <Input placeholder="District 9" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="emailCaNhan" label="Email">
                                <Input placeholder="abc@gmail.com" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="linkCV" label="Link CV">
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
            ),
        },
        {
            key: '2',
            label: 'Comments of CV',
            children: (
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
            ),
        },
        {
            key: '3',
            label: 'Result of interview',
            children: (
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

                    <h2>
                        Final Result:
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
            ),
        },
    ];

    return (
        <>
            <div>
                <h1 style={{ marginLeft: '10px', color: '#8A2BE2' }}>Approve CV</h1>
                <br></br>
                {/* Top-Bar*/}
                <div>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        style={{ margin: '20px', width: '33%' }}
                    />
                    <Button
                        onClick={showInterviewModal}
                        size={'large'}
                        type="primary"
                        style={{ width: 'fit-content', margin: '20px', backgroundColor: 'purple' }}
                    >
                        Schedule Interview{' '}
                    </Button>
                    <Button
                        size={'large'}
                        type="primary"
                        style={{ width: 'fit-content', margin: '20px', backgroundColor: 'green' }}
                    >
                        Export Excel
                    </Button>
                    <Button
                        size={'large'}
                        type="primary"
                        style={{ width: 'fit-content', margin: '20px', backgroundColor: 'orange' }}
                    >
                        Edit
                    </Button>
                    <Button
                        size={'large'}
                        type="primary"
                        style={{ width: 'fit-content', margin: '20px', backgroundColor: 'red' }}
                    >
                        Delete
                    </Button>
                    <Button
                        size={'large'}
                        type="primary"
                        style={{ width: 'fit-content', margin: '20px 10px 20px 20px', backgroundColor: 'blue' }}
                    >
                        Add New Project
                    </Button>
                </div>
                <br></br>
            </div>

            {/*Schedule Interview Pop-up */}
            <div>
                <Modal width={1000} centered open={interviewModal} onOk={handleOk} onCancel={handleCancel}>
                    <Form
                        {...formItemLayout}
                        layout={formLayout}
                        form={form}
                        initialValues={{
                            layout: formLayout,
                        }}
                        onValuesChange={onFormLayoutChange}
                    >
                        <Title style={{ fontWeight: 'bold' }} level={4}>
                            Schedule interview for Intern's ID: xxxx
                        </Title>
                        {/* Row 1 */}
                        <Row>
                            <Col span={8}>
                                <Form.Item label="Date">
                                    <Input placeholder="" />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item label="Start Time">
                                    <Input placeholder=" " />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item label="Time Duration">
                                    <Input placeholder="" />
                                </Form.Item>
                            </Col>
                        </Row>

                        {/* Row 2 */}
                        <Row>
                            <Col span={8}>
                                <Form.Item label="Types of interviews">
                                    <Input placeholder="" />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item label="Interviewer">
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
                                                (optionA?.label ?? '')
                                                    .toLowerCase()
                                                    .localeCompare((optionB?.label ?? '').toLowerCase())
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
                                        <Input placeholder="" />
                                    </div>
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item label="Link Google Meet/Address">
                                    <Input placeholder="" />
                                </Form.Item>
                            </Col>
                        </Row>

                        {/* Row 3 */}
                        <Row>
                            <Col span={8}>
                                <Form.Item label="Send Email">
                                    <Input placeholder="" />
                                </Form.Item>
                            </Col>

                            <Col span={8}></Col>

                            <Col span={8}>
                                <Form.Item label="Rank">
                                    <Input placeholder="" />
                                </Form.Item>
                            </Col>
                        </Row>

                        {/* Row 4 */}
                        <Row>
                            <Col span={8}>
                                <Form.Item label="To:">
                                    <Input placeholder="" />
                                </Form.Item>
                            </Col>

                            <Col span={8}></Col>

                            <Col span={8}>
                                <Form.Item label="BCC:">
                                    <Input placeholder="" />
                                </Form.Item>
                            </Col>
                        </Row>

                        {/* Row 5 */}
                        <Title style={{ fontWeight: 'bold' }} level={4}>
                            Choose types of Email
                        </Title>

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
                                        (optionA?.label ?? '')
                                            .toLowerCase()
                                            .localeCompare((optionB?.label ?? '').toLowerCase())
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
                                <TextArea placeholder="Enter your email" rows={4} width={500} />
                            </div>
                        </div>
                    </Form>
                </Modal>
            </div>
            {/* Interview Pop-up */}

            {/* Main */}
            <div>
                {/* Filter */}
                <Filter />

                {/* Table Show Data */}
                <TableComponent columns={columns} dataSource={internInfo} />

                {/* View Pop-Up */}
                <div style={{ marginLeft: 200 }}>
                    <Modal
                        centered
                        open={open}
                        onOk={() => setOpen(false)}
                        onCancel={() => setOpen(false)}
                        width={1300}
                    >
                        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                    </Modal>
                </div>
            </div>
        </>
    );
};
export default ApproveCV;
