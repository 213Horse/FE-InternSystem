import React, { useState, useEffect } from 'react';
import { Avatar, Input, Button, ConfigProvider, Spin, Modal, Select } from 'antd';
import profilePic from '../../assets/img/Logo/Profile-Pic.png';
import {
    UsergroupDeleteOutlined,
    ClockCircleOutlined,
    EditOutlined,
    DeleteOutlined,
    UserAddOutlined,
    MailOutlined,
} from '@ant-design/icons';
import Filter from '../../components/Filter/filter';
import { Table, Form } from 'antd';
import TableComponent from '../../components/Table/TableCompoment';
import { getInterns } from '../../redux/Slices/User/internInfo';
import { PacmanLoader } from 'react-spinners';
import { getAllIntern } from '../../services/intern-api';
import { showEmails, showEmailTypes } from '../../services/interview.-api';

const {Option} = Select
const App = () => {
    // ************************************************************
    // STATE OF MODALS

    // State Interview Modal
    const [interviewModal, setInterviewModal] = useState(false);

    // State View Modal
    const [view, setView] = useState(false);
    const [emailForm, setEmailForm] = useState(false);

    // State contain data from API
    const [internInfo, setInternInfo] = useState([]);

    // State contain info user in the table
    const [internFormInfo, setInternFormInfo] = useState([]);

    // State loading
    const [loading, setLoading] = useState(false);
    const [emails, setEmails] = useState([]);
    const [emailTypes, setEmailTypes] = useState([]);

    // STATE OF MODALS
    // ************************************************************

    // Variables
    const { Search } = Input;

    const [form] = Form.useForm();

    // Show interview Modal function
    const showInterviewModal = () => {
        setInterviewModal(true);
    };

    // fetch API
    const fetchInterns = async () => {
        try {
            setLoading(true);
            let res = await getAllIntern();
            console.log('check res data', res.data);
            setInternInfo(res.data.data.items);
            setLoading(false);
            let res2 = await showEmails();
            setEmails(res2?.data?.data);
            let res3 = await showEmailTypes();
            setEmailTypes(res3?.data?.data);
            
        } catch (error) {
            console.log(error);
        }
    };
    //React Hook - UseEffect
    useEffect(() => {
        fetchInterns();
    }, []);
    console.log('check internInfo', internInfo);
    const handleOK = () => {
        setView(false);
    };

    const handlCancel = () => {
        setView(false);
    };

    const columns = [
        {
            title: 'Intern ID',
            dataIndex: 'id',
            key: 'id',
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
            dataIndex: 'hoTen',
        },
        {
            title: 'Date Of Birth',
            dataIndex: 'ngaySinh',
        },
        {
            title: 'Majors',
            dataIndex: 'nganhHoc',
        },
        {
            title: 'Phone Number',
            dataIndex: 'sdt',
        },
        {
            title: "Phone Number's Homie ",
            dataIndex: 'sdtNguoiThan',
        },
        {
            title: 'Want to Do',
            dataIndex: 'viTriMongMuon',
        },
        {
            title: 'Round',
            dataIndex: 'round',
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
            title: 'Link CV',
            dataIndex: 'linkCv',
            render: (text) => (
                <a href="" style={{ textDecoration: 'underline', color: 'black' }}>
                    {text}
                </a>
            ),
        },

        {
            title: 'Link Facebook',
            dataIndex: 'linkFacebook',
            render: (text) => (
                <a href="" style={{ textDecoration: 'underline', color: 'black' }}>
                    {text}
                </a>
            ),
        },
        {
            title: 'English Level',
            dataIndex: 'trinhDoTiengAnh',
        },
        {
            title: 'Round',
            dataIndex: 'round',
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
                                setView(true);
                                setInternFormInfo(record);
                                console.log('Intern Detail: ', record);
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

    const onFinish = async(values) =>{
        console.log(values)
    }

    return (
        <div>
            {/* Title */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1 style={{ color: '#280559' }}>Group List</h1>
                <div style={{ display: 'flex' }}>
                    <Avatar src={profilePic} style={{ marginTop: '20px' }}></Avatar>
                    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '30px' }}>
                        <h2>Natalie Brogan</h2>
                        <p style={{ color: '#AAABAF', marginTop: '-15px' }}>Admin</p>
                    </div>
                </div>
            </div>
            {/* Search Button Input */}
            <div style={{ borderRadius: '3px', display: 'flex', ':focus': 'none', borderRadius: '5px' }}>
                <Input
                    style={{ outline: 'none', border: 'none', padding: '5px', width: '600px' }}
                    placeholder="Search for information"
                />
                <div style={{ marginLeft: '50px', display: 'flex', justifyContent: 'space-between' }}>
                    <ConfigProvider
                        theme={{
                            button: {
                                colorPrimary: '#00b96b',
                                padding: '20px !important',
                            },
                        }}
                    >
                        <Button
                            onClick={() => {
                                setEmailForm(true);
                            }}
                            style={{ background: '#6537B1', color: '#fff' }}
                        >
                            <MailOutlined />
                            Send Email
                        </Button>
                    </ConfigProvider>
                    <ConfigProvider
                        theme={{
                            button: {
                                colorPrimary: '#00b96b',
                            },
                        }}
                    >
                        <Button style={{ background: '#41B137', color: '#fff', marginLeft: '30px' }}>
                            <ClockCircleOutlined />
                            Export Excel
                        </Button>
                    </ConfigProvider>
                    <ConfigProvider
                        theme={{
                            button: {
                                colorPrimary: '#00b96b',
                            },
                        }}
                    >
                        <Button style={{ background: '#FB8632', color: '#fff', marginLeft: '30px' }}>
                            <EditOutlined />
                            Edit
                        </Button>
                    </ConfigProvider>
                    <ConfigProvider
                        theme={{
                            button: {
                                colorPrimary: '#00b96b',
                            },
                        }}
                    >
                        <Button style={{ background: '#FF3A2E', color: '#fff', marginLeft: '30px' }}>
                            <DeleteOutlined />
                            Delete
                        </Button>
                    </ConfigProvider>
                    <ConfigProvider
                        theme={{
                            button: {
                                colorPrimary: '#00b96b',
                            },
                        }}
                    >
                        <Button style={{ background: '#4889E9', color: '#fff', marginLeft: '30px' }}>
                            <UserAddOutlined />
                            Add new Intern
                        </Button>
                    </ConfigProvider>
                </div>
            </div>
            {/* Content */}
            <div style={{ marginTop: '50px' }}>
                <Filter />
                {/* Table */}
                <PacmanLoader
                    style={{ marginLeft: '50%', zIndex: 1, position: 'absolute', left: 0, top: 0 }}
                    loading={loading}
                    color="#e74c3c"
                    tip="Loading..."
                    speedMultiplier={2}
                ></PacmanLoader>
                <Spin delay={10} spinning={loading} tip="Loading...">
                    <TableComponent style={{ marginTop: '1000px' }} columns={columns} dataSource={internInfo} />
                </Spin>
            </div>
            <Modal
                open={emailForm}
                footer={null}
                onCancel={() => {
                    setEmailForm(false);
                }}
            >
                <Form onFinish={onFinish}>
                    <Form.Item name="indices" label="Emails">
                        <Select mode='multiple' placeholder="Choose an email">
                            {emails?.map((project) => (
                                <Option key={project?.index} value={project?.id}>
                                    {project?.email}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item name="subject" label="Subject" rules={[{require:true}]}>
                      <Input></Input>
                    </Form.Item>
                    <Form.Item name="body" label="Body" rules={[{require:true}]}>
                      <Input></Input>
                    </Form.Item>
                    <Form.Item name="indices" label="Email Types">
                        <Select  placeholder="Choose an email type" options={[
                            {
                                value:"Interview Date",
                                label:"Interview Date",
                            },
                            {
                                value:"Interview Result",
                                label:"Interview Result",
                            },
                            {
                                value:"Internship Time",
                                label:"Internship Time",
                            },
                            {
                                value:"Internship Information",
                                label:"Internship Information",
                            }
                        ]}>
                          
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType='submit'>Send</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default App;
