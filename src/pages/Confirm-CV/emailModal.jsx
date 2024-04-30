import React, { useState } from "react";
import { Button, Modal, Form, Input, Col, Row, Select, Typography } from 'antd';

const SendEmail = () => {

    const { TextArea } = Input;

    const { Title } = Typography;

    return (
        <>
            <Title level={2}>Send Email</Title>

            <h3>Choose types of Email</h3>

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
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
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
                    <TextArea placeholder='Enter your email' rows={4} width={500} />
                </div>
            </div>
        </>
    )
}

export default SendEmail