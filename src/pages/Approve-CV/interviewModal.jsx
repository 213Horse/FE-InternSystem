import React, { useState } from "react";
import { Button, Modal, Form, Input, Space, Col, Row, Select, Tabs, Typography } from 'antd';


const InterviewModal = ({formInterview}) => {

    // Set Vertical Property

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

    const { TextArea } = Input;
    const { Title } = Typography;

    return (
        <>
            <Form
                {...formItemLayout}
                layout={formLayout}
                form={formInterview}
                initialValues={{
                    layout: formLayout,
                }}
                onValuesChange={onFormLayoutChange}
            >
                <Title style={{ fontWeight: 'bold' }} level={4}>
                    Schedule interview for Intern's ID: xxxx
                </Title>
                {/* Row 1 */}
                <Row>
                    <Col span={8}>
                        <Form.Item label="Date">
                            <Input placeholder="" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Start Time">
                            <Input placeholder=" " />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Time Duration">
                            <Input placeholder="" />
                        </Form.Item>
                    </Col>
                </Row>

                {/* Row 2 */}
                <Row>
                    <Col span={8}>
                        <Form.Item label="Types of interviews">
                            <Input placeholder="" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Interviewer">
                            <div style={{ display: 'flex' }}>
                                <Select
                                    showSearch
                                    style={{
                                        width: 100,
                                        borderRadius: 6,
                                    }}
                                    placeholder="Position"
                                    optionFilterProp="children"
                                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '')
                                            .toLowerCase()
                                            .localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={[
                                        {
                                            value: '1',
                                            label: 'Back End',
                                        },
                                        {
                                            value: '2',
                                            label: 'Font End',
                                        },
                                        {
                                            value: '3',
                                            label: 'BA',
                                        },
                                    ]}
                                />
                                <Input placeholder="" />
                            </div>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Link Google Meet/Address">
                            <Input placeholder="" />
                        </Form.Item>
                    </Col>
                </Row>

                {/* Row 3 */}
                <Row>
                    <Col span={8}>
                        <Form.Item label="Send Email">
                            <Input placeholder="" />
                        </Form.Item>
                    </Col>

                    <Col span={8}></Col>

                    <Col span={8}>
                        <Form.Item label="Rank">
                            <Input placeholder="" />
                        </Form.Item>
                    </Col>
                </Row>

                {/* Row 4 */}
                <Row>
                    <Col span={8}>
                        <Form.Item label="To:">
                            <Input placeholder="" />
                        </Form.Item>
                    </Col>

                    <Col span={8}></Col>

                    <Col span={8}>
                        <Form.Item label="BCC:">
                            <Input placeholder="" />
                        </Form.Item>
                    </Col>
                </Row>

                {/* Row 5 */}
                <Title style={{ fontWeight: 'bold' }} level={4}>
                    Choose types of Email
                </Title>

                <div style={{ display: 'flex' }}>
                    <div style={{ marginRight: 12 }}>
                        <Select 
                            showSearch
                            style={{
                                width: 150,
                            }}
                            placeholder="Types of Email"
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '')
                                    .toLowerCase()
                                    .localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={[
                                {
                                    value: '1',
                                    label: 'Email interview',
                                },
                                {
                                    value: '2',
                                    label: 'Emai result',
                                },
                                {
                                    value: '3',
                                    label: 'Intership information',
                                },
                            ]}
                        />
                    </div>

                    <div style={{ width: '100%' }}>
                        <TextArea placeholder="Enter your email" rows={4} width={500} />
                    </div>
                </div>
            </Form>
        </>
    )
}
export default InterviewModal