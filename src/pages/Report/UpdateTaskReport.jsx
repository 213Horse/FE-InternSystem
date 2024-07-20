import { DatePicker, Form, Input, Select, Button, Checkbox } from 'antd';
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

const UpdateTaskReport = ({ formUpdate, handleUpdate, initialValues }) => {
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
    useEffect(() => {
        if(formUpdate && initialValues){
            formUpdate.resetFields()
        }
        
    }, [initialValues, formUpdate]);
    return (
        <Form
            {...formItemLayout}
            form={formUpdate}
            layout="vertical"
            onFinish={handleUpdate}
            initialValues={initialValues}
        >
            <Form.Item
                name="moTa"
                label="Task description"
                rules={[
                    { required: true, message: 'Please input the description!' },
                    { min: 3, message: 'Description must be at least 3 characters' },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="noiDungBaoCao"
                label="Report Description"
                rules={[{ required: true, message: 'Please input the price!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    );
};
UpdateTaskReport.propTypes = {
    formUpdate: PropTypes.object,
    handleCreate: PropTypes.func.isRequired,
    initialValues: PropTypes.object.isRequired,
};

export default UpdateTaskReport;
