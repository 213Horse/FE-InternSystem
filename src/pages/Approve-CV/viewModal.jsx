import React, { useState } from "react";
import { Button, Modal, Form, Input, Space, Col, Row, Select, Tabs, Typography } from 'antd';

const ViewModal = ({ data }) => {

    // State View Modal
    // const [view, setView] = useState(false);

    // Set Vertical Property
    const [form] = Form.useForm();

    const [formLayout, setFormLayout] = useState('vertical');
    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };
    const formItemLayout =
        formLayout === 'vertical'
            ? {
                labelCol: {
                    span: 20,
                },
                wrapperCol: {
                    span: 23,
                },
            }
            : null;

    // Tabs onChange
    const onChange = (key) => {
        console.log(key);
    };

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onFinish = () => {
        form.resetFields();
    }

    // Tabs child
    const items = [
        {
            key: '1',
            label: 'View details of intern',
            children: (
                <Form
                    name="formInModal"
                    {...formItemLayout}
                    layout={formLayout}
                    form={form}
                    initialValues={data}
                    onValuesChange={onFormLayoutChange}
                    onFinish={onFinish}
                >
                    {/* 1 */}
                    <Row>
                        <Col span={8}>
                            <Form.Item name="id" label="Intern ID">
                                <Input placeholder="error" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="hoTen" label="FullName">
                                <Input placeholder="error" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="ngaySinh" label="Date Of Birth">
                                <Input placeholder="error" disabled />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* 2 */}
                    <Row>
                        <Col span={8}>
                            <Form.Item name="sdt" label="Phone Number">
                                <Input placeholder="error" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="viTri" label="Position">
                                <Input placeholder="error" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="truongHoc" label="School">
                                <Input placeholder="error" disabled />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* 3 */}
                    <Row>
                        <Col span={8}>
                            <Form.Item name="diaChi" label="Address">
                                <Input placeholder="error" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="emailCaNhan" label="Email">
                                <Input placeholder="error" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="linkCV" label="Link CV">
                                <Input placeholder="error" disabled />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* 4 - End */}
                    <Row>
                        <Col span={8}>
                            <Form.Item name="trinhDoTiengAnh" label="Tiếng Anh">
                                <Input placeholder="error" disabled />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Button type="primary" htmlType="reset">
                        reset
                    </Button>
                </Form>
            ),
        },
        {
            key: '2',
            label: 'Comments of CV',
            children: (
                <Form
                    {...formItemLayout}
                    layout={formLayout}
                    form={form}
                    initialValues={{
                        layout: formLayout,
                    }}
                    onValuesChange={onFormLayoutChange}
                >
                    <Row>
                        <Col span={8}>
                            <Form.Item label="Major">
                                <Input placeholder="error" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Programming Language">
                                <Input placeholder="error" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Project on Github">
                                <Input placeholder="error" disabled />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <Form.Item label="Position">
                                <Input placeholder="error" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Rank">
                                <Input placeholder="error" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Add Comment">
                                <Input placeholder="error" disabled />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Button type="primary" htmlType="reset">
                        refresh modal
                    </Button>
                </Form>
            ),
        },
        {
            key: '3',
            label: 'Result of interview',
            children: (
                <Form
                    {...formItemLayout}
                    layout={formLayout}
                    form={form}
                    initialValues={{
                        layout: formLayout,
                    }}
                    onValuesChange={onFormLayoutChange}
                >
                    <Row>
                        <Col span={8}>
                            <Form.Item label="Programming Language">
                                <Input placeholder="error" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Major">
                                <Input placeholder="error" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Which year are you are in?">
                                <Input placeholder="error" disabled />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <Form.Item label="Why choose this major?">
                                <Input placeholder="error" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Why choose to intern at Amazing Tech?">
                                <Input placeholder="error" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="How do you know about Amazing Tech?">
                                <Input placeholder="error" disabled />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <Form.Item label="Do you know the office address?">
                                <Input placeholder="error" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Do you know about UNPAID intership?">
                                <Input placeholder="error" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="What are you desire when intering at Amazing Tech?">
                                <Input placeholder="error" disabled />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <Form.Item label="Work online or office?">
                                <Input placeholder="error" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Are you busy with anything else?">
                                <Input placeholder="error" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Communication skill">
                                <Input placeholder="error" disabled />
                            </Form.Item>
                        </Col>
                    </Row>

                    <h3 style={{ color: 'red' }}>Question of Technology</h3>
                    <Row>
                        <Col span={8}>
                            <Form.Item label="Question 1">
                                <Input placeholder="Enter intern's answer" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Question 2">
                                <Input placeholder="" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Question 3">
                                <Input placeholder="" disabled />
                            </Form.Item>
                        </Col>
                    </Row>

                    <h3 style={{ color: 'red' }}>Assign Project</h3>
                    <Row>
                        <Col span={8}>
                            <Form.Item label="Project's Name">
                                <Input placeholder="" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Position">
                                <Input placeholder="" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Group Zalo">
                                <Input placeholder="" disabled />
                            </Form.Item>
                        </Col>
                    </Row>

                    <h2>
                        Final Result:
                        <Space wrap>
                            <Select
                                defaultValue="choose"
                                style={{
                                    width: 120,
                                    marginLeft: 16,
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'passed',
                                        label: 'Passed',
                                    },
                                    {
                                        value: 'not passed',
                                        label: 'Not Passed',
                                    },
                                ]}
                            />
                        </Space>
                    </h2>
                </Form>
            ),
        },
    ];

    return (
        <>

            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />

        </>
    )
}
export default ViewModal