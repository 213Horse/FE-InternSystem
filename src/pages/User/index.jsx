import { Avatar, Button, ConfigProvider, Input, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import profilePic from '../../assets/img/Logo/Profile-Pic.png';
import { ClockCircleOutlined, DeleteOutlined, EditOutlined, MailOutlined, UserAddOutlined } from '@ant-design/icons';
import Filter from '../../components/Filter/filter';
import { PacmanLoader } from 'react-spinners';
import TableComponent from '../../components/Table/TableCompoment';
import { getAllUsers } from '../../services/user-api';
import ModalAddUser from '../../components/User/ModalAddUser';
import { getAllRoles } from '../../services/role-api';

function UserManagement() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [roles, setRoles] = useState([]);
    const [isModalOpenAddUser, setIsModalOpenAddUser] = useState(false);

    const showModalModalAddUser = () => {
        isModalOpenAddUser(true);
    };

    const fetchUsers = async () => {
        try {
            setLoading(true);
            let res = await getAllUsers();
            setUsers(res.data.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const fetchRoles = async () => {
        try {
            setLoading(true);
            let res = await getAllRoles();
            setRoles(res.data.data);
            console.log('check roles', roles);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
        fetchRoles();
    }, []);

    const handleTableChange = (pagination) => {
        setCurrentPage(pagination.current);
        setPageSize(pagination.pageSize);
    };

    const handleView = (record) => {
        console.log('View button clicked for record:', record);
        // Implement your logic here, such as navigating to a detailed view or showing a modal
    };

    const columns = [
        {
            title: 'STT',
            key: 'index',
            render: (text, record, index) => (currentPage - 1) * pageSize + index + 1,
        },
        {
            title: 'FullName',
            dataIndex: 'hoVaTen',
            key: 'hoVaTen',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Normalized Email',
            dataIndex: 'normalizedEmail',
            key: 'normalizedEmail',
        },
        {
            title: 'User Name',
            dataIndex: 'userName',
            key: 'userName',
        },
        {
            title: 'Normalized UserName',
            dataIndex: 'normalizedUserName',
            key: 'normalizedUserName',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: 'View Detail',
            key: 'action',
            render: (text, record) => <Button onClick={() => handleView(record)}>Click here</Button>,
        },
    ];

    return (
        <>
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
                            <Button style={{ background: '#6537B1', color: '#fff' }}>
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
                            <Button
                                style={{ background: '#4889E9', color: '#fff', marginLeft: '30px' }}
                                onClick={() => setIsModalOpenAddUser(true)}
                            >
                                <UserAddOutlined />
                                Add New User
                            </Button>
                        </ConfigProvider>
                    </div>
                </div>
                {/* Content */}
                <div style={{ marginTop: '50px' }}>
                    <Filter />
                    {/* Table */}
                    {loading ? (
                        <div
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
                        >
                            <PacmanLoader loading={loading} color="#e74c3c" speedMultiplier={2} />
                        </div>
                    ) : (
                        <Spin delay={10} spinning={loading} tip="Loading...">
                            <TableComponent
                                onChange={handleTableChange}
                                columns={columns}
                                pagination={{ current: currentPage, pageSize: pageSize }}
                                dataSource={users}
                            />
                        </Spin>
                    )}
                </div>
            </div>
            <ModalAddUser 
              isModalOpenAddUser={isModalOpenAddUser} 
              setIsModalOpenAddUser={setIsModalOpenAddUser}
              roles={roles}
            />
        </>
    );
}

export default UserManagement;
