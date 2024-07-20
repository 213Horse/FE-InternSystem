import { Button, Form, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { createTask, deleteTask, getTask, updateTask } from '../../services/task-api';
import TableComponent from '../../components/Table/TableCompoment';
import { render } from 'react-dom';
import { callGetProject } from '../../redux/Slices/Project/ProjectSlice';
import moment from 'moment';
import dayjs from 'dayjs';
import CreateTaskForm from './CreateTaskForm';
import UpdateTaskForm from './UpdateTaskForm';

const TaskPage = () => {
    const [form] = Form.useForm();
    const [formUpdate] = Form.useForm();
    const [task, setTask] = useState([]);
    const [selectedRows, setSelectedRows] = useState({});
    const [currentProjects, setCurrentProjects] = useState([]);
    const [openCreate, setOpenCreate] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);
    const fetchTask = async () => {
        let res = await getTask();
        setTask(res.data.data);
    };
    const fetchProject = async () => {
        let res;
        res = await callGetProject();
        setCurrentProjects(res.data.data);
    };
    const handleCreate = async (values) => {
        values.ngayGiao = dayjs(values.ngayGiao).format('YYYY-MM-DD') + 'T12:40:18.217Z';
        values.hanHoanThanh = dayjs(values.hanHoanThanh).format('YYYY-MM-DD') + 'T12:40:18.217Z';
        console.log(values);
        let res = await createTask(values);
    };
    const handleUpdate = async (values) => {
        values.id = selectedRows.id;
        values.ngayGiao = dayjs(values.ngayGiao).format('YYYY-MM-DD') + 'T12:40:18.217Z';
        values.hanHoanThanh = dayjs(values.hanHoanThanh).format('YYYY-MM-DD') + 'T12:40:18.217Z';
        console.log(values);
        let res = await updateTask(values);
    };
    const rowSelection = {
        onSelect: (selectedRows) => {
            setSelectedRows(selectedRows);
            console.log(selectedRows);

        },
        type:"radio"
    };
    useEffect(() => {
        fetchTask();
        fetchProject();
    }, []);

    const columns = [
        {
            title: 'Task id',
            dataIndex: 'id',
        },
        {
            title: 'Project',
            dataIndex: 'duAnId',
            render: (duAnId) => {
                const project = currentProjects.find((proj) => proj.id === duAnId);
                return project ? project.ten : 'N/A';
            },
        },
        {
            title: 'Task',
            dataIndex: 'moTa',
        },
        {
            title: 'Task Description',
            dataIndex: 'noiDung',
        },
        {
            title: 'Date Set',
            dataIndex: 'ngayGiao',
            render: (ngayGiao) => {
                return dayjs(ngayGiao).format('DD-MM-YYYY');
            },
        },
        {
            title: 'Deadline Date',
            dataIndex: 'hanHoanThanh',
            render: (hanHoanThanh) => {
                return dayjs(hanHoanThanh).format('DD-MM-YYYY');
            },
        },
        {
            title: 'Task Status',
            dataIndex: 'hoanThanh',
            render: (hoanThanh) => {
                return hoanThanh ? 'Finished' : 'Not Finished';
            },
        },
    ];
    return (
        <div>
            <div>
                <h1 style={{ marginLeft: '10px', color: '#8A2BE2' }}>Task Management</h1>
                <br></br>
                <div>
                    <Input
                        placeholder="input search text"
                        allowClear
                        size="middle"
                        style={{ margin: '20px', width: '50%' }}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <Button size={'middle'} type="primary" style={{ left: -20, backgroundColor: 'blue' }}>
                        Search
                    </Button>
                    <Button
                        onClick={() => {
                            setOpenUpdate(true);
                        }}
                        size={'middle'}
                        type="primary"
                        style={{ margin: '20px', backgroundColor: 'orange' }}
                    >
                        Edit
                    </Button>
                    <Button
                        onClick={async () => {
                          
                            let res = await deleteTask(selectedRows.id);
                        }}
                        size={'middle'}
                        type="primary"
                        style={{ margin: '20px', backgroundColor: 'red' }}
                    >
                        Delete
                    </Button>
                    <Button
                        onClick={() => {
                            setOpenCreate(true);
                        }}
                        size={'middle'}
                        type="primary"
                        style={{ margin: '10px', backgroundColor: 'blue' }}
                    >
                        Create Task
                    </Button>
                </div>
                <br></br>
            </div>
            <TableComponent columns={columns} dataSource={task} rowSelection={rowSelection}></TableComponent>
            <Modal
                title="Tạo task mới"
                open={openCreate}
                footer={null}
                onCancel={() => {
                    form.resetFields()
                    setOpenCreate(false);
                }}
            >
                <CreateTaskForm form={form} handleCreate={handleCreate} />
            </Modal>
            <Modal
                title="Cập nhật task"
                open={openUpdate}
                footer={null}
                onCancel={() => {
                    setSelectedRows()
                    formUpdate.resetFields();
                    setOpenUpdate(false);
                }}
            >
                <UpdateTaskForm
                    formUpdate={formUpdate}
                    handleUpdate={handleUpdate}
                    initialValues={selectedRows}
                ></UpdateTaskForm>
            </Modal>
        </div>
    );
};

export default TaskPage;
