

import { Avatar, Space, Checkbox, Tag, Button, Flex, Input, Tooltip, Pagination, Modal, DatePicker, Table, Radio, Form } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { callGetPositionPage, createPosition } from '../../redux/Slices/positionSlice/PositionSlices';
import { callGetPosition } from '../../redux/Slices/positionSlice/PositionSlices';
import { updatePosition } from '../../redux/Slices/positionSlice/PositionSlices';
import { deletePosition } from '../../redux/Slices/positionSlice/PositionSlices';
import { useDispatch } from 'react-redux';
import TableComponent from '../../components/Table/TableCompoment';
import Filter from '../../components/Filter/filter';
import { callCreatePosition, callDeletePosition, callUpdatePosition, getPosition } from '../../services/position-api';

const Position = () => {
    const [showDetails, setshowDetails] = useState(false);
    const [showAddPosition, setShowAddPosition] = useState(false);
    const [position, setPosition] = useState([]);
    const pageSize = 6;
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState('');
    const [name, setName] = useState('');
    const [zalo, setZalo] = useState('');
    const [projectId, setProjectId] = useState('');
    const [dataUpdate, setDataUpdate] = useState('');
    const [dataDelete, setDataDelete] = useState('');
    const [showUpdate, setShowUpdate] = useState(false);
    const [data, setData] = useState(false);
    const [selectedRow, setSelectedRow] = useState(false);

    useEffect(() => {
        setName(dataUpdate?.ten);
        setZalo(dataUpdate?.linkNhomZalo);
        setProjectId(dataUpdate?.duAnId);
    }, [dataUpdate])

    const fetchPosition = async () => {
        try {
            const res = await getPosition();
            const projectArray = res?.data.data
            setPosition(projectArray);
            // setFilteredProjects(projectArray);
        } catch (error) {
            toast.error("Failed to fetch positions");
        }
    };

    // console.log('position', Position);
    useEffect(() => {
        fetchPosition();
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

    const handleAddPosition = () => {
        setShowAddPosition(true);
    }

    const handleCloseAddPosition = () => {
        setShowAddPosition(false);
        setName('');
        setZalo('');
        setProjectId('');
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

    const AddPositon = async () => {
        if (!name) {
            toast.error('Please fill name');
            return;
        }
        if (!zalo) {
            toast.error('Please fill link group zalo');
            return;
        }
        if (!projectId) {
            toast.error('Please fill project ID');
            return;
        }
        let res = await callCreatePosition(name, zalo, projectId);
        toast.success(`Success Create!!!!`)
        handleCloseAddPosition();
        useDispatch(
            fetchPosition()
        )
        console.log('check res', res);
    }

    const UpdatePosition = async (values) => {
        console.log('update position', values);
        if (!values.ten) {
            toast.error('Please fill name');
            return;
        }
        if (!values.linkNhomZalo) {
            toast.error('Please fill link zalo');
            return;
        }
        if (!values.duAnId) {
            toast.error('Please fill project ID');
            return;
        }
        values.id = selectedRow[0].id
        try {
            let res = await callUpdatePosition(values);
            if (res) {
                toast.success(`Success Update !!!`)
                handleCloseUpdate();
                console.log('check res', res);
                console.log('update position2', values);
                useDispatch(
                    fetchPosition()
                )
            }
            if (!res) {
                toast.error(`Error updating position`);
            }
        } catch (error) {
            console.error('Error updating position:', error);
        }
    }
    console.log(position)

    const clickDelete = async (id) => {
        console.log('delete', dataDelete);
        try {
            const id = selectedRow[0].id
            let res = await callDeletePosition(id);
            console.log('Response:', res);
            if (res && res.status === 200) {
                toast.success(`Success Delete !!!!`);
                handleCloseUpdate();
                useDispatch(fetchPosition());
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
            title: 'Name',
            dataIndex: 'ten',
            key: 'ten',

        },
        {
            title: 'Link Group Zalo',
            dataIndex: 'linkNhomZalo',
            key: 'linkNhomZalo',
        },
        {
            title: 'Project ID',
            dataIndex: 'duAnId',
            key: 'duAnId',
        },
        /*
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
            title: 'Created Time',
            dataIndex: 'createdTime',
            key: 'createdTime',
        },
        {
            title: 'Updated Time',
            dataIndex: 'lastUpdatedTime',
            key: 'lastUpdatedTime',
        },
        {
            title: 'CV',
            dataIndex: 'cv',
            key: 'cv',
            render: () => <a>Link</a>,
        },
        {
            title: 'Technology',
            dataIndex: 'tech',
            key: 'tech',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        */

    ];

    /*
    const data = [
        {
            key: '1',
            ID: '#12345128',
            name: 'Esther Eden',
            number: '0' + 3767825,
            school: 'FPT University',
            tech: '.NET',
            tags: ['intern'],
        }, {
            key: '2',
            ID: '#12345128',
            name: 'Esther Eden',
            number: '0' + 3767825,
            school: 'FPT University',
            tech: '.NET',
            tags: ['intern'],
        }, {
            key: '3',
            ID: '#12345128',
            name: 'Esther Eden',
            number: '0' + 3767825,
            school: 'FPT University',
            tech: '.NET',
            tags: ['intern'],
        }, {
            key: '4',
            ID: '#12345128',
            name: 'Esther Eden',
            number: '0' + 3767825,
            school: 'FPT University',
            tech: '.NET',
            tags: ['intern'],
        }, {
            key: '5',
            ID: '#12345128',
            name: 'Esther Eden',
            number: '0' + 3767825,
            school: 'FPT University',
            tech: '.NET',
            tags: ['intern'],
        }, {
            key: '6',
            ID: '#12345128',
            name: 'Esther Eden',
            number: '0' + 3767825,
            school: 'FPT University',
            tech: '.NET',
            tags: ['intern'],
        }, {
            key: '7',
            ID: '#12345128',
            name: 'Esther Eden',
            number: '0' + 3767825,
            school: 'FPT University',
            tech: '.NET',
            tags: ['intern'],
        }, {
            key: '8',
            ID: '#12345128',
            name: 'Esther Eden',
            number: '0' + 3767825,
            school: 'FPT University',
            tech: '.NET',
            tags: ['intern'],
        }, {
            key: '9',
            ID: '#12345128',
            name: 'Esther Eden',
            number: '0' + 3767825,
            school: 'FPT University',
            tech: '.NET',
            tags: ['intern'],
        },
    ];
    */

    return (
        <div style={{
            marginRight: '20px',
            marginBottom: '40px',
            backgroundColor: 'white',
            borderRadius: '10px',
        }}>
            <div>
                <h1 style={{ marginLeft: '10px', color: '#8A2BE2' }}>Position Management</h1>
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
                    <Button onClick={handleAddPosition} size={'middle'} type="primary" style={{ margin: '20px 10px 20px 20px', backgroundColor: 'blue' }}>Add New Position</Button>
                </div>
                <br></br>
            </div>

            {/*
            <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                {currentProjects.map(position => (

                    <div style={styles.box} key={position.id}>
                        <div>
                            <div style={{ margin: '10px', fontSize: '25px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                                <div style={{ flex: '1', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                                    {position.ten}
                                </div>
                                <Tag color="blue" >100 People</Tag>
                                <Checkbox onChange={() => onChange(position)} style={{ marginRight: '4%' }} />
                            </div>
                            <div style={{ borderBottom: '2px solid #ccc' }}></div>
                            <div style={{ color: ' #454545', marginLeft: '10px', lineHeight: 2, fontWeight: 'bold' }}>

                                <div>
                                    Technology: .NET, Java,...
                                </div>
                                <div>
                                    Rank: Intern, Fresher, Junior, Middle,Senior,...
                                </div>
                                <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    Group Zalo : {position.linkNhomZalo}
                                </div>
                                <div style={{ fontSize: '14px', display: 'flex', flexDirection: 'row', gap: '10px' }}>
                                    <div style={{ color: 'green' }}>
                                        Start Date :05 Jan 2023
                                    </div>
                                    <div style={{ color: 'red' }}>
                                        Release Date: 05 Apr 2023
                                    </div>
                                </div>
                                <div>
                                    <Avatar.Group>
                                        <Avatar size="small" src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                                        <a href="https://ant.design">
                                            <Avatar
                                                style={{
                                                    backgroundColor: '#f56a00',
                                                }}
                                            >
                                                K
                                            </Avatar>
                                        </a>
                                        <Tooltip title="Ant User" placement="top">
                                            <Avatar
                                                style={{
                                                    backgroundColor: '#87d068',
                                                }}
                                                icon={<UserOutlined />}
                                            />
                                        </Tooltip>
                                        <Avatar
                                            style={{
                                                backgroundColor: '#1677ff',
                                            }}
                                            icon={<AntDesignOutlined />}
                                        />
                                    </Avatar.Group>
                                </div>
                                <div onClick={handleViewDetails} style={{ color: 'gray', float: 'right', marginRight: '5px' }}>
                                    View details
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
            */}

            {/* <Modal
                title="View details"
                open={showDetails}
                footer={null}
                onCancel={handleCloseForm}
                okText="Create Project"
                width={1000}
            >
                <Table pagination={tableParams.pagination} columns={columns} dataSource={data} onChange={handleTableChange} />
            </Modal> */}

            <Modal
                title="Add New Position"
                open={showAddPosition}
                onCancel={handleCloseAddPosition}
                onOk={() => AddPositon()}
                okText="Create Position"
                width={1000}
            >
                <div style={{ marginBottom: '20px' }}>
                    Position's Name
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Position Title"
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    Link Group Zalo
                    <Input
                        value={zalo}
                        onChange={(e) => setZalo(e.target.value)}
                        placeholder="Link group Zalo" />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    Project ID
                    <Input
                        value={projectId}
                        onChange={(e) => setProjectId(e.target.value)}
                        placeholder="Project ID" />
                </div>
            </Modal>

            <Modal
                title="Update Position"
                open={showUpdate}
                onCancel={handleCloseUpdate}
                okText="Update Position"
                footer={null}
                width={1000}
            >
                <Form initialValues={selectedRow[0]} onFinish={UpdatePosition}>
                    <p className="modalContent">Position's Name</p>
                    <Form.Item
                        name="ten"
                        initialValue={dataUpdate.name}
                        rules={[
                            {
                                required: true,
                                message: "Please enter position's name!",
                            },
                        ]}
                    >
                        <Input placeholder="Please enter position's name!"></Input>
                    </Form.Item>
                    <p className="modalContent">Link Group Zalo</p>
                    <Form.Item
                        name="linkNhomZalo"
                        initialValue={dataUpdate.zalo}
                        rules={[
                            {
                                required: true,
                                message: "Please enter link group zalo!",
                            },
                        ]}
                    >
                        <Input placeholder="Please enter link group zalo!"></Input>
                    </Form.Item>
                    <p className="modalContent">Project ID</p>
                    <Form.Item
                        name="duAnId"
                        initialValue={dataUpdate.projectId}
                        rules={[
                            {
                                required: true,
                                message: "Please enter project ID!",
                            },
                        ]}
                    >
                        <Input placeholder="Please enter project ID!"></Input>
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
                <TableComponent rowSelection={rowSelection} columns={columns} dataSource={position} />
            </div>
        </div>
    )
}

export default Position;

