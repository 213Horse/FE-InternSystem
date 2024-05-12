import { Avatar, Space, Checkbox, Tag, Button, Flex, Input, Tooltip, Pagination, Modal, DatePicker, Select } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { searchProjects, callGetProject, createProject, updateProject, deleteProject } from '../../redux/Slices/Project/ProjectSlice';
import Search from 'antd/es/input/Search';
import moment from "moment";


const Project = () => {
    const [showForm, setShowForm] = useState(false);
    const pageSize = 6;
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState('');
    const [currentProjects, setCurrentProjects] = useState([]);
    const [leaderName, setLeaderName] = useState('');
    const [leaderId, setLeaderId] = useState('');
    const [options, setOptions] = useState([]);
    const [name, setName] = useState('');
    const [timeStart, setTimeStart] = useState('');
    const [timeEnd, setTimeEnd] = useState('');
    const [idLeader, setIdLeader] = useState('');
    const [dataDelete, setDataDelete] = useState('');
    const [dataUpdate, setDataUpdate] = useState('');
    const [showUpdate, setShowUpdate] = useState(false);

    const dispatch = useDispatch();

    const handleAddProject = () => {
        setShowForm(true);
    };

    const handleUpdateProject = () => {
        setShowUpdate(true);
    };

    const onChanges = (value) => {
        setIdLeader(value);
        console.log(`selected ${value}`);

    };


    const handleCloseFormU = () => {
        setShowUpdate(false);
        setName('');
        setOptions([]);
        setTimeStart('');
        setTimeEnd('');
    };

    const handleCloseForm = () => {
        setShowForm(false);
        setName('');
        setOptions([]);
        setTimeStart('');
        setTimeEnd('');
    };

    const handleChangePage = (page) => {
        setCurrentPage(page);
    };
    const AddProject = async () => {
        if (!name) {
            toast.error('Please fill name');
            return;
        }
        if (!options) {
            toast.error('Please select leader');
            return;
        }
        if (!timeStart) {
            toast.error('Please fill start date');
            return;
        }
        if (!timeEnd) {
            toast.error('Please fill end date');
            return;
        }
        let res = await createProject(name, idLeader, timeStart, timeEnd);
        toast.success(`Success Create!!!!`)
        fetchProject()
        handleCloseForm();

        console.log('check res', res);
    }
    const UpdateProject = async () => {
        console.log('update position', dataUpdate);
        let res = await updateProject(dataUpdate.id, name, idLeader, timeStart, timeEnd);
        console.log('check res', res);
        if (res) {
            toast.success(`Success Update !!!!`)
            handleCloseFormU();
            console.log('check res', res);
            console.log('update position2', dataUpdate);
            fetchProject()

        }
        if (!res) {
            toast.error(`Error updating project`);
        }
    }
    const clickDelete = async (e) => {
        console.log('delete', dataDelete);
        let res = await deleteProject(dataDelete.id);
        if (res) {
            toast.success(`Success Delete !!!!`)
            fetchProject()
        }
        if (!res) {
            toast.error(`Error updating position`);
        }
    }

    const fetchProject = async () => {
        let res;
        res = await callGetProject();
        setFilteredProjects(res.data.value);
        res.data.value.forEach(project => {
            setLeaderName(prev => [...prev, project.leaderName]);
            setLeaderId(prev => [...prev, project.leaderId]);
        });
    }
    const uniqueName = [...new Set(leaderName)];
    const uniqueID = [...new Set(leaderId)];
    console.log(uniqueName);
    console.log(uniqueID);
    useEffect(() => {
        fetchProject();
    }, []);


    const buildOptions = () => {
        return uniqueID.map((id, index) => ({
            value: id,
            label: uniqueName[index]
        }))
    }
    console.log('check opp', options);
    useEffect(() => {
        const newOptions = buildOptions();

        if (JSON.stringify(newOptions) !== JSON.stringify(options)) {
            setOptions(newOptions);
        }
    }, [uniqueID, uniqueName]);

    const handleSearch = async () => {
        setCurrentPage(1);
        await searchProjects(searchText)
            .then(response => {
                setFilteredProjects(response.data);
            })
            .catch(error => {
                console.error('Error searching projects:', error);
            });
    }
    const onChange = (e) => {
        console.log('D', dataDelete);
        console.log('U', dataUpdate);
        setDataUpdate(e);
        setDataDelete(e);
    };
    useEffect(() => {
        setName(dataUpdate?.ten);
        setIdLeader(dataUpdate?.leaderId);
        // setTimeStart(dataUpdate?.thoiGianBatDau);
        // setTimeEnd(dataUpdate?.thoiGianKetThuc);
    }, [dataUpdate])
    useEffect(() => {
        handleSearch(searchText);
    }, []);
    console.log('check tS', timeStart);
    console.log('check tE', timeEnd);
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
            width: '400px'
        },
        model: {
            display: 'flex',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            marginBottom: '20px',
            gap: '20px',
        }
    };

    console.log('check o', options);
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
                    <Button onClick={handleUpdateProject} size={'middle'} type="primary" style={{ margin: '20px', backgroundColor: 'orange' }}>Edit</Button>
                    <Button onClick={clickDelete} size={'middle'} type="primary" style={{ margin: '20px', backgroundColor: 'red' }}>Delete</Button>
                    <Button onClick={handleAddProject} size={'middle'} type="primary" style={{ margin: '10px', backgroundColor: 'blue' }}>New Project</Button>
                </div>
                <br></br>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                {currentProjects.map(project => (
                    <div style={styles.box} key={project.id}>
                        <div>
                            <div style={{ margin: '10px', fontSize: '25px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                                <div style={{ flex: '1', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                                    {project.ten}
                                </div>
                                <Tag color="blue" >100 People</Tag>
                                <Checkbox onChange={() => onChange(project)} style={{ marginRight: '4%' }} />
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
                                        {moment(project.thoiGianBatDau).format('MMMM Do YYYY, h:mm:ss a')}
                                    </div>
                                    <div style={{ color: 'red' }}>
                                    {moment(project.thoiGianKetThuc).format('MMMM Do YYYY, h:mm:ss a')}
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
                open={showForm}
                onCancel={handleCloseForm}
                okText="Create Project"
                onOk={() => AddProject()}
                width={1000}
            >
                <div style={styles.model}>
                    <div style={{ flex: '1' }}>
                        Project Title
                        <Input
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Project Title"
                        />
                    </div>
                    <div style={{ flex: '1' }}>
                        Leader
                        <Select
                            style={{
                                width: '100% ',
                            }}
                            onChange={onChanges}
                            placeholder="Leader"
                            options={options}
                        />
                    </div>
                </div>
                <div style={styles.model}>
                    <div style={{ flex: '1' }}>
                        <div>Start Date</div>
                        <div><DatePicker style={{ width: '100%' }} onChange={(date, dateString) => { setTimeStart(date); }} /></div>
                    </div>
                    <div style={{ flex: '1', width: '500' }}>
                        <div>Release Date</div>
                        <div><DatePicker style={{ width: '100%' }} onChange={(date, dateString) => { setTimeEnd(date); }} /></div>
                    </div>
                </div>
                <Tag color="gold" style={{ marginBottom: '5px' }}>In process</Tag>
            </Modal>
            <Modal
                title="Update New Project"
                open={showUpdate}
                onCancel={handleCloseFormU}
                okText="Update Project"
                onOk={() => UpdateProject()}
                width={1000}
            >
                <div style={styles.model}>
                    <div style={{ flex: '1' }}>
                        Project Title
                        <Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Project Title"
                        />
                    </div>
                    <div style={{ flex: '1' }}>
                        Leader
                        <Select
                            value={idLeader}
                            style={{
                                width: '100% ',
                            }}
                            onChange={onChanges}
                            placeholder="Leader"
                            options={options}
                        />
                    </div>
                </div>
                <div style={styles.model}>
                    <div style={{ flex: '1' }}>
                        <div>Start Date</div>
                        <div><DatePicker value={timeStart} style={{ width: '100%' }} onChange={(date, dateString) => { setTimeStart(date); }} /></div>
                    </div>
                    <div style={{ flex: '1', width: '500' }}>
                        <div>Release Date</div>
                        <div><DatePicker value={timeEnd} style={{ width: '100%' }} onChange={(date, dateString) => { setTimeEnd(date); }} /></div>
                    </div>
                </div>
                <Tag color="gold" style={{ marginBottom: '5px' }}>In process</Tag>
            </Modal>
        </div>
    )
}

export default Project;

