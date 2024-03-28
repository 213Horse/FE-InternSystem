import { Avatar, Space, Checkbox, Tag, Button, Flex, Input, Tooltip, Pagination, Modal, DatePicker } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchProjects } from '../../services/api';
import { callGetProject } from '../../services/api';
import Search from 'antd/es/input/Search';

const Project = () => {
    const [showForm, setShowForm] = useState(false);
    const pageSize = 6;
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState('');
    const [currentProjects, setCurrentProjects] = useState([]);
    const dispatch = useDispatch();

    const handleAddProject = () => {
        setShowForm(true);
    };


    const handleCloseForm = () => {
        setShowForm(false);
    };

    const handleChangePage = (page) => {
        setCurrentPage(page);
    };


    const handleSearch = (searchText) => {
        // setCurrentPage(1);
        searchProjects(searchText)
        // .then(response => {
        //     setFilteredProjects(response.data);
        // })
        // .catch(error => {
        //     console.error('Error searching projects:', error);
        // });
    };
    console.log(filteredProjects);
    useEffect(() => {
        handleSearch(searchText);
    }, []);

    useEffect(() => {
        const indexOfLastProject = currentPage * pageSize;
        const indexOfFirstProject = indexOfLastProject - pageSize;
        setCurrentProjects(filteredProjects.slice(indexOfFirstProject, indexOfLastProject));
    }, [filteredProjects, currentPage]);

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

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <div style={{
            marginRight: '20px',
            marginBottom: '40px',
            backgroundColor: 'white',
            borderRadius: '10px',
        }}>
            <div>
                <h1 style={{ marginLeft: '10px', color: '#8A2BE2' }}>Project Management</h1>
                <br></br>
                <div>
                    <Input
                        placeholder="input search text"
                        allowClear
                        size="middle"
                        style={{ margin: '20px', width: '50%' }}
                        onChange={e => setSearchText(e.target.value)}
                    />
                    <Button size={'middle'} type="primary" onClick={handleSearch} style={{ left: -20, backgroundColor: 'blue' }}>Search</Button>
                    <Button size={'middle'} type="primary" style={{ margin: '20px', backgroundColor: 'green' }}>Export Excel</Button>
                    <Button size={'middle'} type="primary" style={{ margin: '20px', backgroundColor: 'orange' }}>Edit</Button>
                    <Button size={'middle'} type="primary" style={{ margin: '20px', backgroundColor: 'red' }}>Delete</Button>
                    <Button onClick={handleAddProject} size={'middle'} type="primary" style={{ margin: '10px', backgroundColor: 'blue' }}>New Project</Button>
                </div>
                <br></br>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                {currentProjects.map(project => (
                    <div style={styles.box} key={project.id}>
                        <div>
                            <div style={{ margin: '10px', fontSize: '22px', fontWeight: 'bold', }}>
                                {project.ten}
                            </div>
                            <div style={{ borderBottom: '2px solid #ccc' }}></div>
                            <div style={{ color: ' #454545', marginLeft: '10px', lineHeight: 1.5, fontWeight: 'bold' }}>
                                <div>
                                    Position: Back-end, Front-end, BA, Design
                                </div>
                                <div>
                                    Technology: .NET, Reactjs, Trello, ...
                                </div>
                                <div>
                                    Leader - Sub Leader: {project.leaderName} <Avatar size="small" icon={<UserOutlined />} /> <Avatar size="small" icon={<UserOutlined />} />
                                </div>
                                <div>
                                    Mentor <Avatar size="small" icon={<UserOutlined />} />
                                </div>
                                <div>
                                    Group Zalo : Link
                                </div>
                                <div style={{ fontSize: '12px', display: 'flex', flexDirection: 'row', gap: '10px' }}>
                                    <div style={{ color: 'green' }}>
                                        {project.thoiGianBatDau}
                                    </div>
                                    <div style={{ color: 'red' }}>
                                        {project.thoiGianKetThuc}
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
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination
                defaultCurrent={1}
                total={filteredProjects.length}
                pageSize={pageSize}
                onChange={handleChangePage}
                style={{ padding: '20px' }}
            />
            <Modal
                title="Add New Project"
                visible={showForm}
                onCancel={handleCloseForm}
                okText="Create Project"
                width={1000}
            >
                <div style={styles.model}>
                    <div style={{ flex: '1' }}>
                        Project Title
                        <Input placeholder="Project Title" />
                    </div>
                    <div style={{ flex: '1' }}>
                        Position
                        <Input placeholder="Position" />
                    </div>
                    <div style={{ flex: '1' }}>
                        Technology
                        <Input placeholder="Technology" />
                    </div>
                </div>
                <div style={styles.model}>
                    <div style={{ flex: '1' }}>
                        Leader
                        <Input placeholder="Leader" />
                    </div>
                    <div style={{ flex: '1' }}>
                        Sub-Leader
                        <Input placeholder="Sub-Leader" />
                    </div>
                    <div style={{ flex: '1' }}>
                        Mentor
                        <Input placeholder="Mentor" />
                    </div>
                </div>
                <div style={styles.model}>
                    <div style={{ flex: '1' }}>
                        <div>Start Date</div>
                        <div><DatePicker style={{ width: '100%' }} onChange={onChange} /></div>
                    </div>
                    <div style={{ flex: '1', width: '500' }}>
                        <div>Release Date</div>
                        <div><DatePicker style={{ width: '100%' }} onChange={onChange} /></div>
                    </div>
                    <div style={{ flex: '1' }}>
                        Group Zalo
                        <Input placeholder="Zalo" />
                    </div>
                </div>
                <Tag color="gold" style={{ marginBottom: '5px' }}>In process</Tag>
            </Modal>
        </div>
    )
}

export default Project;

