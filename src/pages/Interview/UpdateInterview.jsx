import { DatePicker, Form, Input, Select, Button, InputNumber } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { callGetProject } from '../../redux/Slices/Project/ProjectSlice';
import { getCauHoi, getLichPhongVan } from '../../services/interview.-api';
import { getAllUser } from '../../services/user-api';

const UpdateInterview = ({ formUpdate, handleUpdate, initialValues }) => {
    const [currentProjects, setCurrentProjects] = useState([]);
    const [cauHoi, setCauHoi] = useState([]);
    const [user, setUser] = useState([]);
    const [selectedInterviewer, setSelectedInterviewer] = useState(null);

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };

    const fetchProject = async () => {
        let res = await getLichPhongVan();
        setCurrentProjects(res.data.data);

        let res2 = await getCauHoi();
        setCauHoi(res2.data.data);

        let res3 = await getAllUser();
        setUser(res3.data.data);
    };

    useEffect(() => {
        fetchProject();
    }, []);

    const handleInterviewerChange = (value) => {
        const interviewer = currentProjects.find((interview) => interview?.id === value);
        const userSelected = user.find((user) => user?.id === interviewer?.idNguoiPhongVan);

        if (userSelected) {
            formUpdate.setFieldsValue({ nguoiCham: userSelected.id });
        }
    };
    useEffect(() => {
        if(formUpdate && initialValues){
            formUpdate.resetFields()
        }
        
    }, [initialValues, formUpdate]);
    
    

    const initialFormValues = {
        ...initialValues,
    
    };

    return (
        <Form
        initialValues={initialFormValues}
        {...formItemLayout}
        form={formUpdate}
        layout="vertical"
        onFinish={handleUpdate}
    >
        <Form.Item
                name="idLichPhongVan"
                label="Choose Interview Schedule"
                rules={[{ required: true, message: 'Please choose a schedule!' }]}
            >
                <Select placeholder="Choose a project" onChange={handleInterviewerChange}>
                    {currentProjects.map((project) => (
                        <Option key={project.id} value={project.id}>
                            {dayjs(project.thoiGianPhongVan).format('DD-MM-YYYY HH:mm')}
                        </Option>
                    ))}
                </Select>
            </Form.Item>

            <Form.Item name="nguoiCham" label="Interviewer">
                <Select
                    disabled
                    placeholder="Please choose an interviewer"
                    options={user.map((user) => ({
                        label: user.hoVaTen,
                        value: user.id,
                    }))}
                ></Select>
            </Form.Item>

            <Form.Item
                name="idCauHoiCongNghe"
                label="Interview question"
                rules={[{ required: true, message: 'Please input the question!' }]}
            >
                <Select placeholder="Choose a question">
                    {cauHoi.map((question) => (
                        <Option key={question.id} value={question.id}>
                            {question.noiDung}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
            name="rank"
            label="Grade"
            rules={[
                { required: true, message: "Please input the grade!" },
    
            ]}
        >
            <InputNumber max={10} />
        </Form.Item>
            <Form.Item
            
            >
                <Button htmlType='submit'>Submit</Button>
            </Form.Item>
    </Form>
    );
};

export default UpdateInterview;