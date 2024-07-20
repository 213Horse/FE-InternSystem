import React, { useEffect } from 'react'
import { Avatar, Space, Checkbox, Tag, Button, Flex, Input, Tooltip, Pagination, Modal, DatePicker, Menu, Tabs, Form, Select } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import { useState } from 'react';
import TableComponent from '../../components/Table/TableCompoment';
import { callCreateTech, callDeleteTech, callUpdateTech, getTech } from '../../services/tech-api';
import { useDispatch } from 'react-redux';
import { render } from 'react-dom';
import { toast } from 'react-toastify';

/*
const items = [
    {
        label: 'Back-end',
        key: 'back-end',
    },
    {
        label: 'Front-end',
        key: 'front-end',
    },
    {
        label: 'BA',
        key: 'BA',
    },
    {
        label: 'Marketing',
        key: 'marketing',
    },
    {
        label: 'Design',
        key: 'design',
    },
];
const items1 = [
    {
        label: 'Intern',
        key: '1',
        children: 'Content of Tab Intern',
    },
    {
        label: 'Fresher',
        key: '2',
        children: 'Content of Tab Fresher',
    },
    {
        label: 'Junior',
        key: '3',
        children: 'Content of Tab Junior',
    },
    {
        label: 'Middle',
        key: '4',
        children: 'Content of Tab Middle',
    },
    {
        label: 'Senior',
        key: '5',
        children: 'Content of Tab Senior',
    },
];
*/

const Tech = () => {
    const [showDetails, setshowDetails] = useState(false);
    const [showAddTech, setShowAddTech] = useState(false);
    const [tech, setTech] = useState([]);
    const pageSize = 6;
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState('');
    const [name, setName] = useState('');
    const [positionId, setPositionId] = useState('');
    const [image, setImage] = useState('');
    const [isActive, setIsActive] = useState('');
    const [isDelete, setIsDelete] = useState('');
    const [dataUpdate, setDataUpdate] = useState('');
    const [dataDelete, setDataDelete] = useState('');
    const [showUpdate, setShowUpdate] = useState(false);
    const [data, setData] = useState(false);
    const [selectedRow, setSelectedRow] = useState(false);

    useEffect(() => {
        setName(dataUpdate?.ten);
        setPositionId(dataUpdate?.idViTri);
        setImage(dataUpdate?.urlImage);
        setIsActive(dataUpdate?.isActive);
        setIsDelete(dataUpdate?.isDelete);
    }, [dataUpdate])

    const fetchTech = async () => {
        try {
            const res = await getTech();
            const projectArray = res?.data.data
            setTech(projectArray);
            // setFilteredProjects(projectArray);
        } catch (error) {
            toast.error("Failed to fetch techs");
        }
    };

    // console.log('position', Position);
    useEffect(() => {
        fetchTech();
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
            techId: record.techId,
            projectId: record.projectId,
        })
        setShowUpdate(true);
    }

    const handleCloseUpdate = () => {
        setShowUpdate(false);
        setDataUpdate('');
    }

    const handleAddTech = () => {
        setShowAddTech(true);
    }

    const handleCloseAddTech = () => {
        setShowAddTech(false);
        setTechId('');
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
        const filtered = tech.filter(project => project && project.ten && project.ten.toLowerCase().includes(value.toLowerCase()));
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

    const AddTech = async () => {
        if (!name) {
            toast.error("Please fill technology's name");
            return;
        }
        if (!positionId) {
            toast.error('Please fill position ID');
            return;
        }
        if (!image) {
            toast.error('Please fill image');
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
        let res = await callCreateTech(name, positionId, image, isActive, isDelete);
        toast.success(`Success Create!!!!`)
        handleCloseAddTech();
        useDispatch(
            fetchTech()
        )
        console.log('check res', res);
    }

    const UpdateTech = async (values) => {
        console.log('update tech', values);
        if (!values.ten) {
            toast.error('Please fill technology name');
            return;
        }
        if (!values.idViTri) {
            toast.error('Please fill position ID');
            return;
        }
        if (!values.urlImage) {
            toast.error('Please fill image');
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
            let res = await callUpdateTech(values);
            if (res) {
                toast.success(`Success Update !!!`)
                handleCloseUpdate();
                console.log('check res', res);
                console.log('update position2', values);
                useDispatch(
                    fetchTech()
                )
            }
            if (!res) {
                toast.error(`Error updating position`);
            }
        } catch (error) {
            console.error('Error updating position:', error);
        }
    }
    console.log(tech);

    const clickDelete = async (id) => {
        console.log('delete', dataDelete);
        try {
            const id = selectedRow[0].id
            let res = await callDeleteTech(id);
            console.log('Response:', res);
            if (res && res.status === 200) {
                toast.success(`Success Delete !!!!`);
                handleCloseUpdate();
                useDispatch(fetchTech());
            } else {
                toast.error(`Error deleting technology`);
            }
        } catch (error) {
            console.error('Error details:', error);
            if (error.response && error.response.status === 404) {
                toast.error(`Technology not found`);
            } else {
                toast.error(`Error deleting technology: ${error.message}`);
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
            title: 'Position ID',
            dataIndex: 'idViTri',
            key: 'idViTri',
        },
        {
            title: 'Image',
            dataIndex: 'urlImage',
            key: 'urlImage',
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
            // marginLeft: '200px',
            marginRight: '20px',
            marginBottom: '40px',
            backgroundColor: 'white',
            borderRadius: '10px',
        }}>
            <div>
                <h1 style={{ marginLeft: '10px', color: '#8A2BE2' }}>Technology</h1>
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
                    <Button onClick={handleAddTech} size={'middle'} type="primary" style={{ margin: '20px 10px 20px 20px', backgroundColor: 'blue' }}>Add New Technology</Button>
                </div>
                <br></br>
            </div>
            {/*}
            <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                <div style={styles.box}>
                    <div>
                        <img src="https://th.bing.com/th/id/OIP.iYqLXAIfO2Wo5uR6xscVfAHaC9?rs=1&pid=ImgDetMain" alt="Mô tả ảnh" style={{ width: '100%', height: '180px', borderRadius: '10px' }} />
                    </div>
                </div>
                <div style={styles.box}>
                    <img src="https://logos-download.com/wp-content/uploads/2016/10/Java_logo_icon.png" alt="Mô tả ảnh" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                </div>
                <div style={styles.box}>
                    <img src="https://codeprogramming.org/wp-content/uploads/2022/01/C-Logo.wine_.png" alt="Mô tả ảnh" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                </div>
            </div>
            */}

            <Modal
                title="Add New Technology"
                open={showAddTech}
                onCancel={handleCloseAddTech}
                onOk={() => AddTech()}
                okText="Create Technology"
                width={1000}
            >
                <div style={{ marginBottom: '20px' }}>
                    technology's name
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Technology's name"
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    Position ID
                    <Input
                        value={positionId}
                        onChange={(e) => setPositionId(e.target.value)}
                        placeholder="Position ID" />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    Image
                    <Input
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        placeholder="Image" />
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
                title="Update Technology"
                open={showUpdate}
                onCancel={handleCloseUpdate}
                okText="Update Technology"
                footer={null}
                width={1000}
            >
                <Form initialValues={selectedRow[0]} onFinish={UpdateTech}>
                    <p className="modalContent">Technology's name</p>
                    <Form.Item
                        name="ten"
                        initialValue={dataUpdate.name}
                        rules={[
                            {
                                required: true,
                                message: "Please enter technology's name!",
                            },
                        ]}
                    >
                        <Input placeholder="Please enter technology's name!"></Input>
                    </Form.Item>
                    <p className="modalContent">Position ID</p>
                    <Form.Item
                        name="idViTri"
                        initialValue={dataUpdate.positionId}
                        rules={[
                            {
                                required: true,
                                message: "Please enter position ID!",
                            },
                        ]}
                    >
                        <Input placeholder="Please enter position ID!"></Input>
                    </Form.Item>
                    <p className="modalContent">Image</p>
                    <Form.Item
                        name="urlImage"
                        initialValue={dataUpdate.image}
                        rules={[
                            {
                                required: true,
                                message: "Please enter image!",
                            },
                        ]}
                    >
                        <Input placeholder="Please enter image!"></Input>
                    </Form.Item>
                    <p className="modalContent">Activation</p>
                    <Form.Item
                        name="isActive"
                        initialValue={dataUpdate.isActive}
                        rules={[
                            {
                                required: true,
                                message: "Please enter activation!",
                            },
                        ]}
                    >
                        <Input placeholder="Please enter activation!"></Input>
                    </Form.Item>
                    <p className="modalContent">Delete</p>
                    <Form.Item
                        name="isDelete"
                        initialValue={dataUpdate.isDelete}
                        rules={[
                            {
                                required: true,
                                message: "Please enter delete!",
                            },
                        ]}
                    >
                        <Input placeholder="Please enter delete!"></Input>
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
                <TableComponent rowSelection={rowSelection} columns={columns} dataSource={tech} />
            </div>

        </div>
    )
}

export default Tech;