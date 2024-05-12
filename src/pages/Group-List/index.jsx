import React, { useState, useEffect } from 'react';
import { Avatar, Input, Button, ConfigProvider, Spin, message, notification } from 'antd';
import profilePic from '../../assets/img/Logo/Profile-Pic.png';
import {
    UsergroupDeleteOutlined,
    ClockCircleOutlined,
    EditOutlined,
    DeleteOutlined,
    UserAddOutlined,
} from '@ant-design/icons';
import Filter from '../../components/Filter/filter';
import { Table, Form } from 'antd';
import TableComponent from '../../components/Table/TableCompoment';
import { PacmanLoader } from 'react-spinners';
import ModalCreate from './ModalCreate';
import { callCreateZaloGroup, callDeleteZaloGroup, getGroupZaloExcelExport, getGroupsZalo } from '../../services/group-api';
import ModalView from './ModalView';
import ModalDelete from './ModalDelete';
import ModalUpdate from './ModalUpDate';
import { CiEdit } from "react-icons/ci";
import { MdOutlinePreview } from "react-icons/md";
import ModalAddUserToGroup from './ModalAddUserToGroup';
import { getUser } from '../../services/user-api';
const App = () => {
    // ************************************************************
    // STATE OF MODALS
  

 

    // State Interview Modal
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectedRowId, setSelectedRowId] = useState('');
    const [users, setUsers] = useState([]);
    console.log("users", users);

    // STATE OF MODALS
    // ************************************************************
    // State View Modal
    const [isModalViewOpen, setIsModalViewOpen] = useState(false);
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [isModalAddUserToGroup, setIsModalAddUserToGroup] = useState(false);

    const [groupSelectedView, setGroupSelectedView] = useState({});
    const showModalAddUserToGroup = () => {      
        setIsModalAddUserToGroup(true);
    };
    const showModalView = () => {      
        setIsModalViewOpen(true);
    };
    const showModalDelete = () => {
        if(selectedRows.length != 1) return
        setIsModalDeleteOpen(true);
    };
    const showModalCreate = () => {
        setIsModalCreateOpen(true)
        setSelectedRowId(selectedRows.id)
    }
    const showModalUpdate = () => {
        if(selectedRows.length != 1) return
        setIsModalUpdateOpen(true)
    }

    console.log('isModalDeleteOpen', isModalDeleteOpen);
    console.log("isModalUpdateOpen", isModalUpdateOpen)
    // State contain data from API
    const [groupZalo, setGroupZalo] = useState([]);

    // State loading
    const [loading, setLoading] = useState(false);

    // fetch API

     
    const fetchUser = async () => {
        try {
            setLoading(true);
            let res = await getUser();
            const userArray = res?.data || {};
            setUsers(userArray);
            // Generate unique keys for each row based on index
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchGroupsZalo = async () => {
        try {
            setLoading(true);
            let res = await getGroupsZalo();
            const groupArray = res?.data || {};
            setGroupZalo(groupArray);
            // Generate unique keys for each row based on index
            setGroupZalo((groupZalo) => groupZalo.map((item, index) => ({ ...item, key: index.toString() })));
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const getGroupsZaloExcel = async () => {
        try {
            let res = await getGroupZaloExcelExport();
            fetchGroupsZalo();
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };


    const deleteGroupZalo = async(id) => {
        try{
            let res = await callDeleteZaloGroup(id);
            console.log(res);
            
            message.success("Delete Group Successfully!");
        }catch (error) {
            console.log(error);
            notification.error({
                message: 'Delete Group Error',
                description: error.response.data,
                duration: 5,
            })
        }
    }


    //React Hook - UseEffect
    useEffect(() => {
        fetchGroupsZalo();
    }, []);
    // useEffect(() => {
    //     fetchGroupsZalo();
    // }, [groupZalo]);

    
    useEffect(() => {
        fetchUser()
      }, [])
    const columns = [
        {
            title: 'Group id',
            dataIndex: 'id',
        },
        {
            title: 'Group Name',
            dataIndex: 'tenNhom',
        },
        {
            title: 'Link Nhom',
            dataIndex: 'linkNhom',
        },
        {
            title: 'Action',
            dataIndex: 'button',
            render: (text, record) => {
                return (
                    <>
                        <Button
                            style={{ marginRight: '12px' }}
                            onClick={() => {
                                setGroupSelectedView(record);
                                showModalView();
                            }}
                            type='primary'
                        >
                            <MdOutlinePreview />
                        </Button>

                        <Button style={{backgroundColor:'orange'}}><CiEdit /></Button>
                    </>
                );
            },
        },
    ];
    console.log("selectedRows", selectedRows);

    //proper ty selection in table
    const rowSelection = {
        onSelect: (record, selected, selectedRows, nativeEvent) => {
            console.log(
                `record: ${record}`,
                'selected: ',
                selected,
                'selectedRows: ',
                selectedRows,
                'nativeEvent: ',
                nativeEvent,
            );
            setSelectedRows(selectedRows);
        },
    };




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
                        <Button onClick={() => showModalCreate()} style={{ background: '#6537B1', color: '#fff' }}>
                            <UsergroupDeleteOutlined />
                            Create Group
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
                            style={{ background: '#41B137', color: '#fff', marginLeft: '30px' }}
                            onClick={() => getGroupsZaloExcel()}
                        >
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
                        <Button onClick={() => showModalUpdate()} style={{ background: '#FB8632', color: '#fff', marginLeft: '30px' }}>
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
                        <Button
                            onClick={() => showModalDelete()}
                            style={{ background: '#FF3A2E', color: '#fff', marginLeft: '30px' }}
                        >
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
                        <Button onClick={() => showModalAddUserToGroup()} style={{ background: '#4889E9', color: '#fff', marginLeft: '30px' }}>
                            <UserAddOutlined />
                            Add user to group zalo
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
                    color="#f1c40f"
                    tip="Loading..."
                    speedMultiplier={2}
                ></PacmanLoader>
                <Spin delay={10} spinning={loading} tip="Loading...">
                    <TableComponent
                        style={{ marginTop: '1000px' }}
                        columns={columns}
                        dataSource={groupZalo}
                        rowSelection={rowSelection}
                    />
                </Spin>
            </div>
            {/* Modal  */}
            <ModalView
                isModalViewOpen={isModalViewOpen}
                setIsModalViewOpen={setIsModalViewOpen}
                showModalView={showModalView}
                groupSelectedView={groupSelectedView}
            />
            <ModalDelete
                isModalDeleteOpen={isModalDeleteOpen}
                setIsModalDeleteOpen={setIsModalDeleteOpen}
                showModalDelete={showModalDelete}
                selectedRows={selectedRows}
                deleteGroupZalo={deleteGroupZalo}
                fetchGroupsZalo={fetchGroupsZalo}
            />
            <ModalCreate 
                isModalCreateOpen={isModalCreateOpen}
                setIsModalCreateOpen={setIsModalCreateOpen}
                showModalCreate={showModalCreate}
                fetchGroupsZalo={fetchGroupsZalo}
            />
            <ModalUpdate
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                showModalUpdate={showModalUpdate}
                fetchGroupsZalo={fetchGroupsZalo}
                selectedRows={selectedRows}
                selectedRowId={selectedRowId}
            />
            <ModalAddUserToGroup
                isModalAddUserToGroup={isModalAddUserToGroup}
                setIsModalAddUserToGroup={setIsModalAddUserToGroup}
                showModalAddUserToGroup={showModalAddUserToGroup}
                fetchGroupsZalo={fetchGroupsZalo}
                groupZalo={groupZalo}
                users={users}
            />
        </div>
    );
};

export default App;
