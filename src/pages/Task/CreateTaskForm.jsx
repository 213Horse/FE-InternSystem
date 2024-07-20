import PropTypes from "prop-types";
import { Button, Checkbox, DatePicker, Form, Input, Select } from 'antd';

import { callGetProject } from "../../redux/Slices/Project/ProjectSlice";
import { useState, useEffect } from "react";
const {Option} = Select
const CreateTaskForm=  ({ form, handleCreate }) => {
    const [currentProjects, setCurrentProjects] = useState([])
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
        let res;
        res = await callGetProject();
        setCurrentProjects(res.data.data);
      
    }

    useEffect(() => {
        fetchProject()
    }, []);

    return (
        <Form
            {...formItemLayout}
            form={form}
            layout="vertical"
            onFinish={handleCreate}
          
        >
            <Form.Item
                name="duAnId"
                label="Project"
                rules={[
                    { required: true, message: "Please choose a project!" },
                ]}
            >
                <Select placeholder="Choose a project">
                    {currentProjects.map(project => (
                        <Option key={project.id} value={project.id}>{project.ten}</Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                name="moTa"
                label="Task name"
                rules={[
                    { required: true, message: "Please input the description!" },
                    { min: 3, message: "Description must be at least 3 characters" }
                ]}
            >
                <Input />
            </Form.Item>
           
            <Form.Item
                name="noiDung"
                label="Task Description"
                rules={[
                    { required: true, message: "Please input the price!" },
        
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="ngayGiao"
                label="Date Set"
                rules={[
                    { required: true, message: "Please select the date!" },
                
                ]}
            >
                <DatePicker />
            </Form.Item>
            <Form.Item
                name="hanHoanThanh"
                label="Deadline"
                rules={[
                    { required: true, message: "Please input the image URL!" },
                ]}
            >
                <DatePicker />
            </Form.Item>
           
            <Form.Item>
                <Button style={{backgroundColor:"palevioletred"}} type='primary' htmlType='submit'>Submit</Button>
            </Form.Item>
        </Form>
    );
};

CreateTaskForm.propTypes = {
    form: PropTypes.object,
    handleCreate: PropTypes.func.isRequired,
};

export default CreateTaskForm;