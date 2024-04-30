import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Input, Col, Row, Select, Typography } from 'antd';
import Filter from '../../components/Filter/filter';
import '../../css/filter.css';
import TableComponent from '../../components/Table/TableCompoment';
import { getInterns } from '../../redux/Slices/User/internInfo';
import SendEmail from './emailModal';
import ViewModal from './viewModal';

const ApproveCV = () => {

    // React Hook - UseState cho http API
    const [intern, setIntern] = useState([]);

    // State
    // Table Modal (Pop-up Chính)
    const [open, setOpen] = useState(false);

    // Send Email Btn Modal 
    const [emailModal, setEmailModal] = useState(false);
    const handleSendEmail = () => {
        setEmailModal(true);
    };

    // Fetch API Function
    const fetchInterns = async () => {
        try {
            let res = await getInterns();
            const interntArray = res?.data || {};
            setIntern(interntArray);
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchInterns();
    }, [])

    const { Search } = Input;

    // const dataSource = [
    //     {
    //         id: 1,
    //         startDate: '2022-01-01',
    //         finishDate: '2022-12-31',
    //         fullName: 'John Doe',
    //         dateOfBirth: '1990-05-15',
    //         phoneNumber: '123456789',
    //         position: 'Intern',
    //         school: 'ABC University',
    //         address: '123 Example Street',
    //         email: 'johndoe@example.com',
    //         cv: 'Link to CV',
    //         comment: '2 comments',
    //         role: 'Role',
    //         project: 'Project',
    //         groupZalo: 'Group Zalo',
    //         mentor: 'Mentor',
    //         status: 'Option 1',
    //         reportProcess: 'Report Process',
    //         button: 'View',
    //         key: 1
    //     },
    // ];

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
                <a href='' style={{ textDecoration: 'underline', color: 'black' }}>{text}</a>
            )

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
            render: (text) => {
                const selectedOption = options.find((option) => option.label === text);
                // console.log(selectedOption);
                const optionColor = selectedOption ? selectedOption.color : null;
                // console.log(optionColor);
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
            title: 'Button',
            dataIndex: 'button',
            render: (text, record) => {
                return (
                    <>
                        <Button style={{ marginRight: '12px' }} onClick={() => setOpen(true)}>
                            View
                        </Button>
                    </>
                )
            },
        },
    ]

    return (
        <>
            <div className='header'>
                {/* HEADER */}
                <h1 style={{ marginLeft: '10px', color: '#8A2BE2' }}>Confirm CV</h1>
                <br></br>

                {/* TOP-BUTTON */}
                <div>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        style={{ margin: '20px', width: '33%' }}
                    />
                    <Button onClick={handleSendEmail} size={'large'} type="primary" style={{ width: 'fit-content', margin: '20px', backgroundColor: 'purple' }}>Send Email</Button>
                    <Button size={'large'} type="primary" style={{ width: 'fit-content', margin: '20px', backgroundColor: 'green' }}>Export Excel</Button>
                    <Button size={'large'} type="primary" style={{ width: 'fit-content', margin: '20px', backgroundColor: 'orange' }}>Edit</Button>
                    <Button size={'large'} type="primary" style={{ width: 'fit-content', margin: '20px', backgroundColor: 'red' }}>Delete</Button>
                    <Button size={'large'} type="primary" style={{ width: 'fit-content', margin: '20px 10px 20px 20px', backgroundColor: 'blue' }}>Add New Project</Button>

                </div>
                <br></br>
            </div>

            {/* Send Email Modal */}
            <div>
                <Modal width={700}
                    open={emailModal}
                    onOk={() => setEmailModal(false)}
                    onCancel={() => setEmailModal(false)}
                >
                    <SendEmail />   
                </Modal>
            </div>

            {/* BODY */}
            <div className='main'>
                {/* Filter */}
                <Filter />

                {/* Table Show Data */}
                <TableComponent columns={columns} dataSource={intern} />

                {/* Table View */}
                <div style={{ marginLeft: 200 }}>
                    <Modal
                        centered
                        open={open}
                        onOk={() => setOpen(false)}
                        onCancel={() => setOpen(false)}
                        width={1000}
                    >
                        <ViewModal />
                    </Modal>
                </div>
            </div>

        </>
    );
};
export default ApproveCV;