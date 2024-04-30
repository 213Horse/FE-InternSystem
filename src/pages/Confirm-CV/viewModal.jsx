import React, { useState } from "react";
import { Button, Modal, Form, Input, Col, Row, Select, Typography } from 'antd';

const ViewModal = () => {

    // CSS
    const title = {
        fontWeight: 'bold',
    }

    // Đặt thuộc tính CSS 'Vertical' cho bảng Pop-up
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

    return (
        <>
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
                        <Form.Item style={title} label="Intern ID">
                            <Input placeholder="input placeholder" disabled />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item style={title} label="Date Interview">
                            <Input placeholder="input placeholder" disabled />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item style={title} label="Time Interview">
                            <Input placeholder="input placeholder" disabled />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={8}>
                        <Form.Item style={title} label="Full Name">
                            <Input placeholder="input placeholder" disabled />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item style={title} label="Date Of Birth">
                            <Input placeholder="input placeholder" disabled />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item style={title} label="Phone Number">
                            <Input placeholder="input placeholder" disabled />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={8}>
                        <Form.Item style={title} label="Position">
                            <Input placeholder="input placeholder" disabled />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item style={title} label="School">
                            <Input placeholder="input placeholder" disabled />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item style={title} label="Address">
                            <Input placeholder="input placeholder" disabled />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={8}>
                        <Form.Item style={title} label="Email">
                            <Input placeholder="input placeholder" disabled />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item style={title} label="Link CV">
                            <Input placeholder="input placeholder" disabled />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item style={title} label="Interviewer">
                            <Input placeholder="input placeholder" disabled />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={8}>
                        <Form.Item style={title} label="English Proficiency">
                            <Input placeholder="input placeholder" disabled />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
export default ViewModal