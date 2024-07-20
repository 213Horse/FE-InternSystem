import { Button, Form, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { createTask, deleteTask, getTask, updateTask } from '../../services/task-api';
import TableComponent from '../../components/Table/TableCompoment';
import dayjs from 'dayjs';
import CreateInterview from './CreateInterview';
import { createInterview, getCauHoi, getLichPhongVan, getPhongVan, updateInterview } from '../../services/interview.-api';
import { getAllUser } from '../../services/user-api';
import UpdateInterview from './UpdateInterview';


const Interview = () => {
    const [form] = Form.useForm();
    const [formUpdate] = Form.useForm();
    const [task, setTask] = useState([]);
    const [selectedRows, setSelectedRows] = useState({});
    const [currentProjects, setCurrentProjects] = useState([]);
    const [openCreate, setOpenCreate] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);
    const [phongVan, setPhongVan] = useState([]);
    const [cauHoi, setCauHoi] = useState([]);
    const [user, setUser] = useState([]);
    const handleCreate = async (values) => {
        values.cauTraLoi="not yet"
        values.rankDate = dayjs().format("YYYY-MM-DD")
        values.createdBy = localStorage.getItem("userId")
        let res = await createInterview(values);
    };
    const handleUpdate = async (values) => {
        values.id = selectedRows.id;
        values.rankDate = dayjs().format("YYYY-MM-DD")
       
        console.log(values);
        let res = await updateInterview(values);
    };
    const rowSelection = {
        onSelect: (selectedRows) => {
            setSelectedRows(selectedRows);
            console.log(selectedRows);

        },
        type:"radio"
    };
    useEffect( () => {
        const fetchData = async () =>{
            let res = await getPhongVan();
            setTask(res.data.data);
    
            let res2 = await getCauHoi();
            setCauHoi(res2.data.data);
    
            let res3 = await getAllUser();
            setUser(res3.data.data);
        }
        fetchData()
    }, []);

    const columns = [
        {
            title: 'Project',
            dataIndex: 'duAnId',
            render: (duAnId) => {
                const project = currentProjects.find((proj) => proj.id === duAnId);
                return project ? project.ten : 'N/A';
            },
        },
        {
            title: 'Question',
            dataIndex: 'idCauHoiCongNghe',
            render:(idCauHoiCongNghe)=>{
                const question = cauHoi.find(cauhoi=> cauhoi.id = idCauHoiCongNghe)
                return question?.noiDung
            }
        },
        {
            title: 'Answer',
            dataIndex: 'cauTraLoi',
        },
        {
            title: 'Grade',
            dataIndex: 'rank',
           
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
                <h1 style={{ marginLeft: '10px', color: '#8A2BE2' }}>Interview Management</h1>
                <br></br>
                <div>
                   
              
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
                <CreateInterview form={form} handleCreate={handleCreate} />
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
                <UpdateInterview
                    formUpdate={formUpdate}
                    handleUpdate={handleUpdate}
                    initialValues={selectedRows}
                ></UpdateInterview>
            </Modal>
        </div>
    );
};

export default Interview;
