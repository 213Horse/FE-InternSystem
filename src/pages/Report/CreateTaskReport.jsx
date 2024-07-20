import PropTypes from 'prop-types';
import { Button, Checkbox, DatePicker, Form, Input, Select } from 'antd';

import { callGetProject } from '../../redux/Slices/Project/ProjectSlice';
const { Option } = Select;
const CreateTaskReport = ({ form, handleCreate }) => {
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

    return (
        <Form {...formItemLayout} form={form} layout="vertical" onFinish={handleCreate}>
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
            <Form.Item
              
            >
                <Button htmlType='submit' >Submit</Button>
            </Form.Item>
        </Form>
    );
};

CreateTaskReport.propTypes = {
    form: PropTypes.object,
    handleCreate: PropTypes.func.isRequired,
};

export default CreateTaskReport;
