

import { Avatar, Space, Checkbox, Tag, Button, Flex, Input, Tooltip, Pagination, Modal, DatePicker, Table } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { createPosition } from '../../services/api';
import { callGetPosition } from '../../services/api';

const Position = () => {
    const [showDetails, setshowDetails] = useState(false);
    const [showAddPosition, setShowAddPosition] = useState(false);
    const [Position, setPosition] = useState([]);
    const pageSize = 6;
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState('');
    const [name, setName] = useState('');
    const [zalo, setZalo] = useState('');
    const fetchPosition = async () => {
        let res;
        res = await callGetPosition();
        const projectArray = Object.values(res?.data || {});
        setPosition(projectArray);
    }
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
    />
    useEffect(() => {
        fetchPosition();
    }, []);
    useEffect(() => {
        filterProjects('');
    }, [Position]);

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

    const handleAddProject = () => {
        setShowAddPosition(true);
    }
    const handleCloseAddProject = () => {
        setShowAddPosition(false);
    }

    const handleChangePage = (page) => {
        setCurrentPage(page);
    };

    const handleSearch = (value) => {
        setSearchText(value);
        filterProjects(value);
    };

    const filterProjects = (value) => {
        const filtered = Position.filter(project => project.ten.toLowerCase().includes(value.toLowerCase()));
        setFilteredProjects(filtered);
    };

    const indexOfLastProject = currentPage * pageSize;
    const indexOfFirstProject = indexOfLastProject - pageSize;
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
    // console.log(Position);

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
        console.log('hello');
        if (!name) {
            toast.error('Please fill name');
            return;
        }
        if (!zalo) {
            toast.error('Please fill link zalo');
            return;
        }
        let res = await createPosition(name, zalo);
        console.log('check res', res);
    }

    console.log(name);
    console.log(zalo);
    const columns = [
        {
            title: 'Intern ID',
            dataIndex: 'ID',
            key: 'ID',

        },
        {
            title: 'Full Name',
            dataIndex: 'name',
            key: 'name',

        },
        {
            title: 'Phone Number',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'School',
            dataIndex: 'school',
            key: 'school',
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

    ];
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
                    <Button size={'middle'} type="primary" style={{ margin: '20px', backgroundColor: 'orange' }}>Edit</Button>
                    <Button size={'middle'} type="primary" style={{ margin: '20px', backgroundColor: 'red' }}>Delete</Button>
                    <Button onClick={handleAddProject} size={'middle'} type="primary" style={{ margin: '20px 10px 20px 20px', backgroundColor: 'blue' }}>Add New Position</Button>
                </div>
                <br></br>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                {currentProjects.map(position => (

                    <div style={styles.box} key={position.id}>
                        <div>
                            <div style={{ margin: '10px', fontSize: '25px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                                <div style={{ flex: '1' }}>
                                    {position.ten}
                                </div>
                                <Tag color="blue" >100 People</Tag>
                                <Checkbox style={{ marginRight: '4%' }} />
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
            <Pagination
                defaultCurrent={1}
                total={Position.length}
                pageSize={pageSize}
                onChange={handleChangePage}
                style={{ padding: '20px' }}
            />
            <Modal
                title="View details"
                open={showDetails}
                footer={null}
                onCancel={handleCloseForm}
                okText="Create Project"
                width={1000}
            >
                <Table pagination={tableParams.pagination} columns={columns} dataSource={data} onChange={handleTableChange} />
            </Modal>
            <Modal
                title="Add New Position"
                open={showAddPosition}
                onCancel={handleCloseAddProject}
                onOk={() => AddPositon()}
                okText="Create Position"
                width={1000}
            >
                <div style={{ marginBottom: '30px', marginTop: '10px' }}>
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
                        placeholder="Link Zalo" />
                </div>

            </Modal>
        </div>
    )
}

export default Position;

