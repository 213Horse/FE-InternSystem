import React, { useState } from 'react';
import { Col, Image, Row } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Carousel } from 'antd';
import AdminLogin from '../../components/AdminLogin/AdminLogin';
import SchoolLogin from '../../components/SchoolLogin/SchoolLogin';
import './Login.css';
import { Link, Outlet } from 'react-router-dom';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [

    {
        label: (
            <Link to="">
                Admin
            </Link>
        ),
        key: 'admin',
    },
    {
        label: 'Human Resources',
        key: 'humanresources',
    },
    {
        label: 'Mentor',
        key: 'mentor',
    },
    {
        label: (
            <Link to="school-login">
                School
            </Link>
        ),
        key: 'school',
    },
    {
        label: (
            <Link to="register-intern">
                Intern
            </Link>
        ),
        key: 'intern',
    },
];

function CustomMenu({ menuActive, setMenuActive }) {
    const onClick = (e) => {
        console.log('click ', e);
        setMenuActive(e.key);
        localStorage.setItem('menuActive', e.key);
    };
    console.log('menuActive', menuActive);

    console.log('menuActive', menuActive);
    return (
        <Menu
            onClick={onClick}
            style={{
                width: '31.875rem',
                display: 'flex',
                gap: '0.5rem',
                marginLeft: '8.25rem',
            }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="horizontal"
            items={items}
        />
    );
}

function Login() {
    const [menuActive, setMenuActive] = useState('tmp-1');
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Row>
                <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ marginTop: '1.25rem', marginLeft: '3.938rem' }}>
                        <img src="src\assets\img\Logo\AmazingTech.png" />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            width: '15.25rem',
                            height: '5.25rem',
                            marginTop: '2.5rem',
                            textAlign: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                        }}
                    >
                        <img src="src\assets\img\Logo\Us.png" style={{ width: '5.5rem', height: '2.75rem' }} />
                        <div
                            style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', gap: '0.5rem' }}
                        >
                            <h1 style={{ lineHeight: '0rem' }}>EN</h1>
                            <p>
                                <DownOutlined />
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <CustomMenu menuActive={menuActive} setMenuActive={setMenuActive} />
                    <Outlet />
                </Col>
                <Col span={12}>
                    <Image src="src\assets\img\Logo\login-image.png" />
                </Col>
            </Row>
        </div>
    );
}

export default Login;
