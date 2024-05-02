import React, { useState, useEffect } from 'react';
import { Avatar, Input, Button, ConfigProvider, Spin } from 'antd';
import profilePic from '../../assets/img/Logo/Profile-Pic.png';
import {UsergroupDeleteOutlined, ClockCircleOutlined, EditOutlined, DeleteOutlined, UserAddOutlined} from '@ant-design/icons';
import Filter from '../../components/Filter/filter';
import { Table, Form  } from "antd" ;
import TableComponent from '../../components/Table/TableCompoment';
import { getInterns } from '../../redux/Slices/User/internInfo';
import {PacmanLoader} from "react-spinners";
const App = () => {
      // ************************************************************
    // STATE OF MODALS

    // State Interview Modal
    const [interviewModal, setInterviewModal] = useState(false);

    // State View Modal
    const [view, setView] = useState(false);

    // State contain data from API
    const [internInfo, setInternInfo] = useState([]);

    // State contain info user in the table
    const [internFormInfo, setInternFormInfo] = useState([]);

    // State loading
    const [loading, setLoading] = useState(false);

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
            let res = await getInterns();
            const interntArray = res?.data || {};
            setInternInfo(interntArray);
            setLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }
    //React Hook - UseEffect
    useEffect(() => {
        fetchInterns();
    }, []);

    const handleOK = () => {
        setView(false);
    }

    const handlCancel = () => {
        setView(false)
    }


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
                    style={{ outline: 'none', border: 'none', padding: '5px', width: "600px" }}
                    placeholder="Search for information"
                />
                <div style={{marginLeft:"50px", display:"flex", justifyContent:"space-between"}}>
                    <ConfigProvider
                        theme={{
                            button: {
                                colorPrimary: '#00b96b',
                                padding:"20px !important",
                            },
                        }}
                    >
                        <Button style={{background:"#6537B1", color:"#fff"}}><UsergroupDeleteOutlined />Create Group</Button>
                    </ConfigProvider>
                    <ConfigProvider
                        theme={{
                            button: {
                                colorPrimary: '#00b96b',
                            },
                        }}
                    >
                        <Button style={{background:"#41B137", color:"#fff", marginLeft:"30px"}}><ClockCircleOutlined />Export Excel</Button>
                    </ConfigProvider>
                    <ConfigProvider
                        theme={{
                            button: {
                                colorPrimary: '#00b96b',
                            },
                        }}
                    >
                        <Button style={{background:"#FB8632", color:"#fff", marginLeft:"30px"}}><EditOutlined />Edit</Button>
                    </ConfigProvider>
                    <ConfigProvider
                        theme={{
                            button: {
                                colorPrimary: '#00b96b',
                            },
                        }}
                    >
                        <Button style={{background:"#FF3A2E", color:"#fff", marginLeft:"30px"}}><DeleteOutlined />Delete</Button>
                    </ConfigProvider>
                    <ConfigProvider
                        theme={{
                            button: {
                                colorPrimary: '#00b96b',
                            },
                        }}
                    >
                        <Button style={{background:"#4889E9", color:"#fff", marginLeft:"30px"}}><UserAddOutlined />Add new Intern</Button>
                    </ConfigProvider>
                </div>
            </div>
            {/* Content */}
            <div style={{marginTop:"50px"}}>
                <Filter/>
                 {/* Table */}
                <PacmanLoader style={{marginLeft:"50%", zIndex:1, position: "absolute", left:0, top:0}} loading={loading} color="#f1c40f" tip="Loading..." speedMultiplier={2}>                      
                </PacmanLoader>
                <Spin delay={10} spinning={loading} tip="Loading...">                 
                    <TableComponent style={{marginTop:"1000px"}} columns={columns} dataSource={internInfo} />
                </Spin>
            </div>
        </div>
    );
};

export default App;
