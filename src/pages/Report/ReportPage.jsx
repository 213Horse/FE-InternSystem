import { Button, Form, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { createTask, createTaskReport, deleteTask, deleteTaskReport, getTask, getTaskReport, updateTask, updateTaskReport } from '../../services/task-api';
import TableComponent from '../../components/Table/TableCompoment';
import { render } from 'react-dom';
import { callGetProject } from '../../redux/Slices/Project/ProjectSlice';
import moment from 'moment';
import dayjs from 'dayjs';
import CreateTaskReport from './CreateTaskReport';
import UpdateTaskReport from './UpdateTaskReport';


const ReportPage = () => {
    const [form] = Form.useForm();
    const [formUpdate] = Form.useForm();
    const [task, setTask] = useState([]);
    const [selectedRows, setSelectedRows] = useState({});
    const [currentProjects, setCurrentProjects] = useState([]);
    const [openCreate, setOpenCreate] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);
    const fetchTask = async () => {
        let res = await getTaskReport();
        setTask(res.data.data);
    };

    const handleCreate = async (values) => {
        values.ngayBaoCao = dayjs().format('YYYY-MM-DD') + 'T12:40:18.217Z';
        values.userId = localStorage.getItem("userId")
        values.taskId = selectedRows.taskId
      
        console.log(values);
        let res = await createTaskReport(values);
        await fetchTask()
        setOpenCreate(false)
    };
    const handleUpdate = async (values) => {
        values.id = selectedRows.id
        values.ngayBaoCao = dayjs().format('YYYY-MM-DD') + 'T12:40:18.217Z';
        values.userId = localStorage.getItem("userId")
        values.taskId = selectedRows.taskId
        console.log(values);
        let res = await updateTaskReport(values);
        await fetchTask()
        setOpenUpdate(false)
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

    }, []);

    const columns = [
        {
            title: 'Task id',
            dataIndex: 'taskId',
        },
        {
            title: 'Task',
            dataIndex: 'moTa',
        },
        {
            title: 'Report Description',
            dataIndex: 'noiDungBaoCao',
        },
        {
            title: 'Date Set',
            dataIndex: 'ngayBaoCao',
            render: (ngayBaoCao) => {
                return dayjs(ngayBaoCao).format('DD-MM-YYYY');
            },
        },

        {
            title: 'Task Status',
            dataIndex: 'trangThai',
           
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
                    <Button onClick={async()=>{
                        const values = {}
                        values.id = selectedRows.id
                        await deleteTaskReport(values)
                    }} size={'middle'} type="primary" style={{ margin: '20px', backgroundColor: 'red' }}>
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
                        Create Task Report
                    </Button>
                </div>
                <br></br>
            </div>
            <TableComponent columns={columns} dataSource={task} rowSelection={rowSelection}></TableComponent>
            <Modal
                title="Tạo task report mới"
                open={openCreate}
                footer={null}
                onCancel={() => {
                    form.resetFields()
                    setOpenCreate(false);
                }}
            >
                <CreateTaskReport form={form} handleCreate={handleCreate} />
            </Modal>
            <Modal
                title="Cập nhật task"
                open={openUpdate}
                footer={null}
                onCancel={() => {
                    setSelectedRows(null)
                    formUpdate.resetFields()
                    setOpenUpdate(false);
                }}
            >
                <UpdateTaskReport formUpdate={formUpdate} handleUpdate={handleUpdate} initialValues={selectedRows} ></UpdateTaskReport>
            </Modal>
        </div>
    );
};

export default ReportPage;
