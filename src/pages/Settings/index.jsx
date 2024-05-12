import React from 'react';
import { Button, Grid } from 'antd';
import { Col, Row } from 'antd';
import { Avatar } from 'antd';
import ProfilePic from '../../assets/img/Logo/Profile-Pic.png';
import { SearchOutlined } from '@ant-design/icons';
const Settings = () => {
    const styleCenter = {
        position: 'absolute',
        top: '10%',
        left: '50%',
        height: '100px',
        // marginTeft: "-50px",
    };
    return (
        <div>
            <div style={{ ...styleCenter }}>
                <Row>
                    <Col span={24}>
                        <Avatar src={ProfilePic} size={120} />
                    </Col>
                    <Col span={24} style={{ marginLeft: '-50px' }}>
                        <h2>Hello Natalie Brogan!</h2>
                    </Col>
                    <Col span={24} style={{ marginLeft: '-70px' }}>
                        <h2>nataliebrogan@gmail.com</h2>
                    </Col>
                    <Col span={24} style={{ marginLeft: '-30px' }}>
                        <Button disabled>Manage Your Account</Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Settings;
