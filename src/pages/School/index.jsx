import { Button, DatePicker, Form, Input, Modal, Select } from 'antd';
import React, { useEffect, useState } from 'react'
import TableComponent from '../../components/Table/TableCompoment';
import { toast } from 'react-toastify';
import { callCreateSchool, callUpdateSchool, getSchool } from '../../services/school-api';

const School = () => {
    const [showDetails, setshowDetails] = useState(false);
    const [showAddPosition, setShowAddPosition] = useState(false);
    const [school, setSchool] = useState([]);
    const pageSize = 6;
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState('');

    const [name, setName] = useState('');
    const [numberOfInternWeek, setNumberOfWeekIntern] = useState('');
    const [createdBy, setCreatedBy] = useState('');
    const [updatedBy, setUpdatedBy] = useState('');
    const [deletedBy, setDeletedBy] = useState('');
    const [createdTime, setCreatedTime] = useState('');
    const [updatedTime, setUpdatedTime] = useState('');
    const [deletedTime, setDeletedTime] = useState('');
    const [isActive, setIsActive] = useState('');
    const [isDelete, setIsDelete] = useState('');

    const [dataUpdate, setDataUpdate] = useState('');
    const [dataDelete, setDataDelete] = useState('');
    const [showUpdate, setShowUpdate] = useState(false);
    const [data, setData] = useState(false);
    const [selectedRow, setSelectedRow] = useState(false);

    useEffect(() => {
        setName(dataUpdate?.ten);
        setNumberOfWeekIntern(dataUpdate?.soTuanThucTap);
        setCreatedBy(dataUpdate?.createdBy);
        setUpdatedBy(dataUpdate?.lastUpdatedBy);
        setDeletedBy(dataUpdate?.deletedBy);
        setCreatedTime(dataUpdate?.createdTime);
        setUpdatedTime(dataUpdate?.lastUpdatedTime);
        setDeletedTime(dataUpdate?.deletedTime);
        setIsActive(dataUpdate?.isActive);
        setIsDelete(dataUpdate?.isDelete);
    }, [dataUpdate])

    const fetchSchool = async () => {
        try {
            const res = await getSchool();
            const projectArray = res?.data.data
            setSchool(projectArray);
            // setFilteredProjects(projectArray);
        } catch (error) {
            toast.error("Failed to fetch school");
        }
    };

    // console.log('position', Position);
    useEffect(() => {
        fetchSchool();
    }, []);

    // useEffect(() => {
    //     filterProjects(searchText);
    // }, [Position, searchText]);

    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 5,
        },
    });

    const handleTableChange = (pagination, filters, sorter) => {
        setTableParams({
            pagination,
            filters,
            ...sorter,
        });

        if (pagination.pageSize !== tableParams.pagination?.pageSize) {
            setData([]);
        }

    };

    const handleViewDetails = () => {
        setshowDetails(true);
    };

    const handleCloseForm = () => {
        setshowDetails(false);
    };

    const handleUpdata = (record) => {
        setDataUpdate({
            id: record.id,
            name: record.name,
            zalo: record.zalo,
            projectId: record.projectId,
        })
        setShowUpdate(true);
    }

    const handleCloseUpdate = () => {
        setShowUpdate(false);
        setDataUpdate('');
    }

    const handleAddSchool = () => {
        setShowAddPosition(true);
    }

    const handleCloseAddSchool = () => {
        setShowAddPosition(false);
        setName('');
        setNumberOfWeekIntern('');
        setCreatedBy('');
        setUpdatedBy('');
        setDeletedBy('');
        setCreatedTime('');
        setUpdatedTime('');
        setDeletedTime('');
        setIsActive('');
        setIsDelete('');
    }

    const handleChangePage = (page) => {
        setCurrentPage(page);
    };

    const handleSearch = (value) => {
        setSearchText(value);
        filterProjects(value);
    };

    const filterProjects = (value) => {
        const filtered = position.filter(project => project && project.ten && project.ten.toLowerCase().includes(value.toLowerCase()));
        setFilteredProjects(filtered);
    };

    const rowSelection = {
        onChange: (selectedRowKey, selectedRows) => {
            console.log(

                selectedRows
            );
            setSelectedRow(selectedRows)
        },
    };

    const indexOfLastProject = currentPage * pageSize;
    const indexOfFirstProject = indexOfLastProject - pageSize;
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
    const onChange = (e) => {
        console.log('D', dataDelete);
        console.log('U', dataUpdate);
        setDataUpdate(e);
        setDataDelete(e);
    };

    const styles = {
        box: {
            margin: '20px',
            border: '0.5px solid black',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
            height: '230px',
            width: '348px'
        },
        model: {
            display: 'flex',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            marginBottom: '20px',
            gap: '20px',
        }
    };

    const AddSchool = async () => {
        if (!name) {
            toast.error('Please fill name');
            return;
        }
        if (!numberOfInternWeek) {
            toast.error('Please fill number of intern weeks');
            return;
        }
        if (!createdBy) {
            toast.error('Please fill created by');
            return;
        }
        if (!updatedBy) {
            toast.error('Please fill updated by');
            return;
        }
        if (!deletedBy) {
            toast.error('Please fill deleted by');
            return;
        }
        if (!createdTime) {
            toast.error('Please fill created time');
            return;
        }
        if (!updatedTime) {
            toast.error('Please fill updated time');
            return;
        }
        if (!deletedTime) {
            toast.error('Please fill deleted time');
            return;
        }
        if (!isActive) {
            toast.error('Please fill activation');
            return;
        }
        if (!isDelete) {
            toast.error('Please fill delete');
            return;
        }
        let res = await callCreateSchool(name, numberOfInternWeek, createdBy, updatedBy, deletedBy, createdTime, updatedTime, deletedTime, isActive, isDelete);
        toast.success(`Success Create!!!!`)
        handleCloseAddPosition();
        useDispatch(
            fetchSchool()
        )
        console.log('check res', res);
    }

    const UpdateSchool = async (values) => {
        console.log('update position', values);
        if (!values.name) {
            toast.error('Please fill name');
            return;
        }
        if (!values.numberOfInternWeek) {
            toast.error('Please fill number of intern weeks');
            return;
        }
        if (!values.createdBy) {
            toast.error('Please fill created by');
            return;
        }
        if (!values.updatedBy) {
            toast.error('Please fill updated by');
            return;
        }
        if (!values.deletedBy) {
            toast.error('Please fill deleted by');
            return;
        }
        if (!values.createdTime) {
            toast.error('Please fill created time');
            return;
        }
        if (!values.updatedTime) {
            toast.error('Please fill updated time');
            return;
        }
        if (!values.deletedTime) {
            toast.error('Please fill deleted time');
            return;
        }
        if (!values.isActive) {
            toast.error('Please fill activation');
            return;
        }
        if (!values.isDelete) {
            toast.error('Please fill delete');
            return;
        }
        values.id = selectedRow[0].id
        try {
            let res = await callUpdateSchool(values);
            if (res) {
                toast.success(`Success Update !!!`)
                handleCloseUpdate();
                console.log('check res', res);
                console.log('update position2', values);
                useDispatch(
                    fetchSchool()
                )
            }
            if (!res) {
                toast.error(`Error updating school`);
            }
        } catch (error) {
            console.error('Error updating school:', error);
        }
    }
    console.log(school)

    const clickDelete = async (id) => {
        console.log('delete', dataDelete);
        try {
            const id = selectedRow[0].id
            let res = await callDeletePosition(id);
            console.log('Response:', res);
            if (res && res.status === 200) {
                toast.success(`Success Delete !!!!`);
                handleCloseUpdate();
                useDispatch(fetchSchool());
            } else {
                toast.error(`Error deleting position`);
            }
        } catch (error) {
            console.error('Error details:', error);
            if (error.response && error.response.status === 404) {
                toast.error(`Position not found`);
            } else {
                toast.error(`Error deleting position: ${error.message}`);
            }
        }
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'School Name',
            dataIndex: 'ten',
            key: 'ten',
        },
        {
            title: 'Number of Intern Weeks',
            dataIndex: 'soTuanThucTap',
            key: 'soTuanThucTap',
        },
        {
            title: 'Created By',
            dataIndex: 'createdBy',
            key: 'createdBy',
        },
        {
            title: 'Updated By',
            dataIndex: 'lastUpdatedBy',
            key: 'lastUpdatedBy',
        },
        {
            title: 'Delete By',
            dataIndex: 'deletedBy',
            key: 'deletedBy',
        },
        {
            title: 'Time Created',
            dataIndex: 'createdTime',
            key: 'createdTime',
        },
        {
            title: 'Time Updated',
            dataIndex: 'lastUpdatedTime',
            key: 'lastUpdatedTime',
        },
        {
            title: 'Time Deleted',
            dataIndex: 'deletedTime',
            key: 'deletedTime',
        },
        {
            title: 'Activation',
            dataIndex: 'isActive',
            key: 'isActive',
            render: (isActive) => (isActive ? 'Yes' : 'No'),
        },
        {
            title: 'Delete',
            dataIndex: 'isDelete',
            key: 'isDelete',
            render: (isDelete) => (isDelete ? 'Yes' : 'No'),
        },
    ]

    return (
        <div style={{
            marginRight: '20px',
            marginBottom: '40px',
            backgroundColor: 'white',
            borderRadius: '10px',
        }}>
            <div>
                <h1 style={{ marginLeft: '10px', color: '#8A2BE2' }}>School Management</h1>
                <br></br>
                <div>
                    <Input.Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="middle"
                        style={{ margin: '20px', width: '50%' }}
                        onSearch={handleSearch}
                    />
                    <Button size={'middle'} type="primary" style={{ margin: '20px', backgroundColor: 'green' }}>Export Excel</Button>
                    <Button onClick={handleUpdata} size={'middle'} type="primary" style={{ margin: '20px', backgroundColor: 'orange' }}>Edit</Button>
                    <Button onClick={() => clickDelete()} size={'middle'} type="primary" style={{ margin: '20px', backgroundColor: 'red' }}>Delete</Button>
                    <Button onClick={handleAddSchool} size={'middle'} type="primary" style={{ margin: '20px 10px 20px 20px', backgroundColor: 'blue' }}>Add New Position</Button>
                </div>
                <br></br>
            </div>

            <Modal
                title="Add New School"
                open={showAddPosition}
                onCancel={handleCloseAddSchool}
                onOk={() => AddSchool()}
                okText="Create School"
                width={1000}
            >
                <div style={{ marginBottom: '20px' }}>
                    Position's Name
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Shool name"
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    Number of intern weeks
                    <Input
                        value={numberOfInternWeek}
                        onChange={(e) => setNumberOfWeekIntern(e.target.value)}
                        placeholder="Number of intern weeks" />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    Created by
                    <Input
                        value={createdBy}
                        onChange={(e) => setCreatedBy(e.target.value)}
                        placeholder="Created by" />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    Updated by
                    <Input
                        value={updatedBy}
                        onChange={(e) => setUpdatedBy(e.target.value)}
                        placeholder="Updated by" />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    Deleted by
                    <Input
                        value={deletedBy}
                        onChange={(e) => setDeletedBy(e.target.value)}
                        placeholder="Deleted by" />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    Created time
                    <DatePicker
                        style={{ width: "100%" }}
                        value={createdTime}
                        onChange={(e) => setCreatedTime(e.target.value)}
                        placeholder="Created time" />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    Updated time
                    <DatePicker
                        style={{ width: "100%" }}
                        value={updatedTime}
                        onChange={(e) => setUpdatedTime(e.target.value)}
                        placeholder="Updated time" />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    Deleted time
                    <DatePicker
                        style={{ width: "100%" }}
                        value={deletedTime}
                        onChange={(e) => setDeletedTime(e.target.value)}
                        placeholder="Deleted time" />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    Activation
                    <Select
                        value={isActive}
                        onChange={(value) => setIsActive(value)}
                        placeholder="Select Activation"
                        style={{ width: '100%' }}
                    >
                        <Select.Option value={true}>Yes</Select.Option>
                        <Select.Option value={false}>No</Select.Option>
                    </Select>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    Delete
                    <Select
                        value={isDelete}
                        onChange={(value) => setIsDelete(value)}
                        placeholder="Select Delete"
                        style={{ width: '100%' }}
                    >
                        <Select.Option value={true}>Yes</Select.Option>
                        <Select.Option value={false}>No</Select.Option>
                    </Select>
                </div>
            </Modal>

            <Modal
                title="Update School"
                open={showUpdate}
                onCancel={handleCloseUpdate}
                okText="Update School"
                footer={null}
                width={1000}
            >
                <Form initialValues={selectedRow[0]} onFinish={UpdateSchool}>
                    <p className="modalContent">School Name</p>
                    <Form.Item
                        name="ten"
                        initialValue={dataUpdate.name}
                        rules={[
                            {
                                required: true,
                                message: "Please enter school name!",
                            },
                        ]}
                    >
                        <Input placeholder="Please enter school name!"></Input>
                    </Form.Item>
                    <p className="modalContent">Number of Intern Weeks</p>
                    <Form.Item
                        name="linkNhomZalo"
                        initialValue={dataUpdate.numberOfInternWeek}
                        rules={[
                            {
                                required: true,
                                message: "Please enter Number of Intern Weeks!",
                            },
                        ]}
                    >
                        <Input placeholder="Please enter Number of Intern Weeks!"></Input>
                    </Form.Item>
                    <p className="modalContent">Created By</p>
                    <Form.Item
                        name="duAnId"
                        initialValue={dataUpdate.createdBy}
                        rules={[
                            {
                                required: true,
                                message: "Please enter Created By!",
                            },
                        ]}
                    >
                        <Input placeholder="Please enter Created By!"></Input>
                    </Form.Item>
                    <p className="modalContent">Updated By</p>
                    <Form.Item
                        name="duAnId"
                        initialValue={dataUpdate.updatedBy}
                        rules={[
                            {
                                required: true,
                                message: "Please enter Updated By!",
                            },
                        ]}
                    >
                        <Input placeholder="Please enter Updated By!"></Input>
                    </Form.Item>
                    <p className="modalContent">Deleted By</p>
                    <Form.Item
                        name="duAnId"
                        initialValue={dataUpdate.deletedBy}
                        rules={[
                            {
                                required: true,
                                message: "Please enter Deleted By!",
                            },
                        ]}
                    >
                        <Input placeholder="Please enter Deleted By!"></Input>
                    </Form.Item>
                    <p className="modalContent">Created Time</p>
                    <Form.Item
                        name="duAnId"
                        initialValue={dataUpdate.createdTime}
                        rules={[
                            {
                                required: true,
                                message: "Please enter Created Time!",
                            },
                        ]}
                    >
                        <Input placeholder="Please enter Created Time!"></Input>
                    </Form.Item>
                    <p className="modalContent">Updated Time</p>
                    <Form.Item
                        name="duAnId"
                        initialValue={dataUpdate.updatedTime}
                        rules={[
                            {
                                required: true,
                                message: "Please enter Updated Time!",
                            },
                        ]}
                    >
                        <Input placeholder="Please enter Updated Time!"></Input>
                    </Form.Item>
                    <p className="modalContent">Deleted Time</p>
                    <Form.Item
                        name="duAnId"
                        initialValue={dataUpdate.deletedTime}
                        rules={[
                            {
                                required: true,
                                message: "Please enter Deleted Time!",
                            },
                        ]}
                    >
                        <Input placeholder="Please enter Deleted Time!"></Input>
                    </Form.Item>
                    <p className="modalContent">Activation</p>
                    <Form.Item
                        name="duAnId"
                        initialValue={dataUpdate.isActive}
                        rules={[
                            {
                                required: true,
                                message: "Please enter Activation!",
                            },
                        ]}
                    >
                        <Input placeholder="Please enter Activation!"></Input>
                    </Form.Item>
                    <p className="modalContent">Delete</p>
                    <Form.Item
                        name="duAnId"
                        initialValue={dataUpdate.isDelete}
                        rules={[
                            {
                                required: true,
                                message: "Please enter Delete!",
                            },
                        ]}
                    >
                        <Input placeholder="Please enter Delete!"></Input>
                    </Form.Item>
                    <Form.Item style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button onClick={handleCloseUpdate}>
                            Cancel
                        </Button>
                        <Button onClick={handleCloseUpdate} htmlType='submit' type='primary' style={{ marginLeft: '5px' }}>
                            Update
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>

            <div>
                <TableComponent rowSelection={rowSelection} columns={columns} dataSource={school} />
            </div>
        </div>
    )
}

export default School;