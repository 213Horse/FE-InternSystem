import React, { useEffect, useState } from 'react';
import { Button, Modal, Input, Col, Row, Select, Switch } from 'antd';

import TableComponent from '../Intern-List/TableCompoment';
import Filter from '../Intern-List/Filter';
import '../../css/filter.css';
import { callAddUser2Group, callCreateGroup, callDelUserFromGroup, callDeleteGroup, callEditGroup, callExportExcel, callGetAllUsers, callGetGroup, callGetGroupDetail } from '../../services/api';


import instance from '../../ultils/axios-custom';
import axios from '../../ultils/axios-custom';
import { toast } from 'react-toastify';
const Group = () => {

    const { Search } = Input;
    const [dataSource, setDataSource] = useState([]);
    const [dataGroup, setDataGroup] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [formValues, setFormValues] = useState({ 'tenNhom': '', 'linkNhom': '' });
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [openFormCreateGroup, setOpenFormCreateGroup] = useState(false);
    const [openFormAddUser, setOpenFormAddUser] = useState(false);
    const [internData, setListInternData] = useState([]);
    const [data2Del, setData2Del] = useState({ 'userId': null, 'nhomZaloId': null });
    const [open, setOpen] = useState(false);
    const [addUser2GroupData, setaddUser2GroupData] = useState({
        nhomZaloId: null,
        userId: null,
        isMentor: false
    });
    const [openModalEditGroup, setOpenModalEditGroup] = useState(false);
    const [data2Edit, setData2Edit] = useState({ 'id': null, 'tenNhom': '', 'linkNhom': '' })
    const accessToken = localStorage.getItem('access_token');
    const headers = { 'Authorization': `Bearer ${accessToken}` };



    const [openViewUserInGroup, setOpenViewUserInGroup] = useState(false);
    useEffect(() => {
        fetchGroup();

    }, []);


    const fetchGroup = async () => {
        try {
            const response = await callGetGroup();

            const data = response.data.map((item, index) => ({ ...item, key: item.id }));
            setDataSource(data);
            setFilteredData(data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchGroupDetail = async (id) => {

        await callGetGroupDetail(id).then((response) => {
            setDataGroup(response.data);
            setOpenViewUserInGroup(true);
        }).catch((error) => {
            if (error.request.status === 400) {
                toast.error('Group is empty');
            } else {
                toast.error('Error: ' + error.message);
            }
        });

    };






    const columns = [
        {
            title: 'Group ID',
            dataIndex: 'id',
        },
        {
            title: 'Tên nhóm',
            dataIndex: 'tenNhom',
        },
        {
            title: 'Link nhóm',
            dataIndex: 'linkNhom',
        },
        {
            title: 'Button',
            dataIndex: 'button',
            render: (text, record) => {
                return (
                    <>
                        <Button type="primary" onClick={() => handleViewGroupDetail(record)}>
                            View
                        </Button>
                    </>
                );
            },
        },
    ].map((col) => ({
        ...col,
        width: 200,

    }));
    const fieldView = [
        {
            title: 'ID',
            dataIndex: 'userId',

        },
        {
            title: 'Full Name',
            dataIndex: 'userName',

        },
        {
            title: 'Mentor',
            dataIndex: 'isMentor',
            render: (text, record) => {
                return (
                    <>
                        {record.isMentor ? 'Yes' : 'No'}
                    </>
                );
            }

        },
        {
            title: 'Group Zalo',
            dataIndex: 'nhomZalo',

        },
        {
            title: 'Time Joined',
            dataIndex: 'joinedTime',

        },
        {
            title: 'Time Left',
            dataIndex: 'leftTime',

        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: (text, record) => {
                return (
                    <>
                        <Button type="primary" onClick={() => handleDelUfromG(record)}>
                            Delete
                        </Button>
                    </>
                );
            }

        },

    ]

    const handleViewGroupDetail = (record) => {
        fetchGroupDetail(record.id);
        setData2Del({ ...data2Del, nhomZaloId: record.id })

    }

    const handleCreateGroupOk = () => {
        const { tenNhom, linkNhom } = formValues;
        if (tenNhom === '') {
            alert('Vui lòng điền tên nhóm');
            return;
        } else {
            callCreateGroup(tenNhom, linkNhom).then((response) => {
                toast.success('Create group success');
                setOpenFormCreateGroup(false);
                fetchGroup();
            }).catch((error) => {
                console.log(error);
                toast.error('Error: ' + error.message);
            });
        }
    }



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };
    const handleSelectedRowKeysChange = (keys) => {
        setSelectedRowKeys(keys);
    };
    const handleDeleteGroup = async () => {
        if (selectedRowKeys.length === 0) {
            alert('Vui lòng chọn nhóm cần xóa');
            return;
        }
        try {

            await Promise.all(
                selectedRowKeys.map((item) =>
                    callDeleteGroup(item)
                )
            );

            setSelectedRowKeys([]);
            await fetchGroup();
            toast.success('Delete group success');
        } catch (error) {
            console.log(error);
            toast.error('Error: ' + error.message);
        }
    };
    const handleExportExcel = async () => {
        try {
            const timestamp = new Date().toISOString().replace(/[-:.T]/g, '');
            const filename = `ZaloGroups_${timestamp}.xlsx`;
            callExportExcel().then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', filename);
                document.body.appendChild(link);
                link.click();
            }).catch((error) => {
                console.log(error);
                toast.error('Error: ' + error.message);
             })
        } catch (error) {
            console.error('Error exporting Excel file:', error);
        }
    };
    const handleOpenEditGroup = () => {
        if (selectedRowKeys.length === 0) {
            alert('Vui lòng chọn nhóm cần sửa');
            return;
        }
        setData2Edit(dataSource.find((item) => item.id === selectedRowKeys[selectedRowKeys.length - 1]))
        setOpenModalEditGroup(true)

    }
    const handleEditGroupOK = () => {

        callEditGroup(data2Edit).then((response) => {
            toast.success('Update group success');
            setOpenModalEditGroup(false);
            fetchGroup();
        }).catch((error) => {
            console.log(error);
            toast.error('Error: ' + error.message);
        })
    }
    const handleAddUserToGroup = () => {
        callGetAllUsers().then((response) => {
            let data = response.data.map((item) => ({ value: item.id, label: item.fullNameOrSchoolName }));
            setListInternData(data)
        }).catch((error) => {
            console.log(error);
            toast.error('Error: ' + error.message);
        });
        setOpenFormAddUser(true);
    }



    const handleSelectChange = (value, field) => {
        setaddUser2GroupData((prevaddUser2GroupData) => ({
            ...prevaddUser2GroupData,
            [field]: value
        }));
    };

    const handleSwitchChange = (checked) => {
        setaddUser2GroupData((prevaddUser2GroupData) => ({
            ...prevaddUser2GroupData,
            isMentor: checked
        }));
    };
    const handleAddUserOk = () => {

        callAddUser2Group(addUser2GroupData.nhomZaloId, addUser2GroupData.userId, addUser2GroupData.isMentor).then(async (response) => {
            toast.success('Add user success');
            setOpenFormAddUser(false);
            await fetchGroup();
        }).catch((error) => {
            console.log(error);
            toast.error('Error: ' + error.message);
        });
    }
    const handleDelUfromG = (record) => {
        callDelUserFromGroup(data2Del.nhomZaloId, record.userId).then(async (response) => {
            toast.success('Delete user success');
            await fetchGroupDetail(data2Del.nhomZaloId)
        }).catch((error) => {
            console.log(error);
            toast.error('Error: ' + error.message);
        });

    }

    const callSearchUsers = (keyword) => {
        callGetGroup().then(response => {
            if (keyword === '') {
                setFilteredData(response.data);
                return;
            }
            const filtered = response.data.filter((item) => {
                console.log(item);
                return Object.values(item).some((value) => {
                    if (value !== null && value !== undefined) {
                        return value.toString().toLowerCase().includes(keyword.toLowerCase());
                    }
                    return false;
                });
            });
            console.log(filtered);
            setFilteredData(filtered);
        });
    }


    const handleChangeEditValue = (e) => {
        const { name, value } = e.target;
        setData2Edit((prevData2Edit) => ({
            ...prevData2Edit,
            [name]: value
        }));
    }

    const handleCancel = () => {
        setOpenViewUserInGroup(false);
        setDataGroup([]);
        setOpenFormCreateGroup(false);
        setOpenFormAddUser(false);
        setOpenFormAddUser(false);
        setOpenModalEditGroup(false);
    }
    return (
        <>
            <div>
                <h1 style={{ marginLeft: '10px', color: '#8A2BE2' }}>Group List</h1>
                <br></br>
                <div>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        style={{ margin: '20px', width: '33%' }}
                        onSearch={(value) => callSearchUsers(value)}

                    />
                    <Button size={'large'} type="primary" style={{ width: '160px', margin: '20px', backgroundColor: 'green' }} onClick={() => setOpenFormCreateGroup(true)}>Create Group</Button>
                    <Button size={'large'} type="primary" style={{ width: '160px', margin: '20px', backgroundColor: 'orange' }} onClick={handleExportExcel}>Export Excel</Button>
                    <Button size={'large'} type="primary" style={{ width: '160px', margin: '20px', backgroundColor: 'red' }} onClick={handleOpenEditGroup}>Edit</Button>
                    <Button size={'large'} type="primary" style={{ width: '160px', margin: '20px', backgroundColor: 'red' }} onClick={handleDeleteGroup}>Delete</Button>
                    <Button size={'large'} type="primary" style={{ width: '160px', margin: '20px 10px 20px 20px', backgroundColor: 'blue' }} onClick={handleAddUserToGroup}>Add New Intern</Button>

                </div>
                <br></br>
            </div>


            <div>
                {/* Filter */}
                <Filter />

                {/* Table Show Data */}
                <TableComponent columns={columns} dataSource={filteredData} onSelectedRowKeysChange={handleSelectedRowKeysChange} />

                {/* Pop-Up */}

                <Modal
                    title="Group Detail"
                    centered
                    open={openViewUserInGroup}
                    onCancel={() => handleCancel()}
                    footer={null}
                    width={1200}
                >
                    <TableComponent columns={fieldView} dataSource={dataGroup} onSelectedRowKeysChange={handleSelectedRowKeysChange} />

                </Modal>
                <Modal
                    title="Create Group"
                    centered
                    open={openFormCreateGroup}
                    onOk={() => handleCreateGroupOk()}
                    onCancel={() => handleCancel()}
                    width={1200}
                    footer={
                        <Button type="primary" onClick={() => handleCreateGroupOk()}>Create group</Button>
                    }
                >

                    <Row gutter={[30, 10]}>
                        <Col span={12}>
                            <div>Tên nhóm</div>
                            <Input style={{ width: '100%' }} name="tenNhom"
                                onChange={handleInputChange} required />
                        </Col>
                        <Col span={12}>
                            <div>Link nhóm</div>
                            <Input style={{ width: '100%' }} name="linkNhom"
                                onChange={handleInputChange} />
                        </Col>
                    </Row>
                </Modal>
                <Modal
                    title="Add User To Group"
                    centered
                    open={openFormAddUser}
                    onCancel={() => handleCancel()}
                    footer={
                        <>
                            <Button onClick={handleCancel}>Cancel</Button>
                            <Button type='primary' onClick={handleAddUserOk}>Add user</Button>
                        </>
                    }

                >
                    <Row gutter={[30, 10]}>
                        <Col span={24}>
                            <div>Nhóm Zalo</div>
                            <Select
                                options={dataSource.map((item) => ({
                                    value: item.id,
                                    label: item.tenNhom
                                }))}
                                style={{ width: '100%' }}
                                onChange={(value) => handleSelectChange(value, 'nhomZaloId')}
                            />
                        </Col>
                        <Col span={24}>
                            <div>Intern</div>
                            <Select
                                options={internData}
                                style={{ width: '100%' }}
                                onChange={(value) => handleSelectChange(value, 'userId')}
                            />
                        </Col>
                        <Col span={24}>
                            <div>Mentor</div>
                            <Switch onChange={handleSwitchChange}
                                checked={addUser2GroupData.isMentor} />
                        </Col>
                    </Row>

                </Modal>
                <Modal
                    title="Edit Group"
                    centered
                    open={openModalEditGroup}

                    onCancel={() => handleCancel()}
                    width={1200}
                    footer={
                        <Button type="primary" onClick={() => handleEditGroupOK()}>Confirm</Button>
                    }
                >

                    <Row gutter={[30, 10]}>
                        <Col span={12}>
                            <div>Tên nhóm</div>
                            <Input style={{ width: '100%' }} name="tenNhom"
                                onChange={handleChangeEditValue} value={data2Edit.tenNhom} />
                        </Col>
                        <Col span={12}>
                            <div>Link nhóm</div>
                            <Input style={{ width: '100%' }} name="linkNhom"
                                onChange={handleChangeEditValue} value={data2Edit.linkNhom} />
                        </Col>
                    </Row>
                </Modal>
            </div>

        </>
    );
};
export default Group;