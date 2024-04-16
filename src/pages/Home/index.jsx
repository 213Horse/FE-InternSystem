import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
    PieChartOutlined,
    FileProtectOutlined,
    ProfileOutlined,
    EnvironmentOutlined,
    NodeIndexOutlined,
    WechatOutlined,
    SettingOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Avatar } from "antd";
import { Col, Row } from 'antd';
import Profile from "../../assets/img/Logo/Profile-Pic.png";
const { Header, Content, Footer, Sider } = Layout;


const App = () => {

    const layoutStyle = {
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#E8E9EB',
        gap: '40px',
        height: '98vh',

    };


    console.log('Home');
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout hasSider>

            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <div className="demo-logo-vertical" style={{ height: 40, }} />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}
                    defaultOpenKeys={['1']}>
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <Link to="/home/dashboard">Dashboard</Link>
                    </Menu.Item>

                    <Menu.SubMenu key="sub2" title="CV Management" icon={<ProfileOutlined />}>
                        <Menu.Item key="2">
                            <Link to="/home/approve-cv">Approve CV</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/home/confirm-cv">Confirm CV</Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="sub1" title="List Management" icon={<TeamOutlined />}>
                        <Menu.Item key="4">
                            <Link to="/home/intern-list">Intern List</Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to="/home/group-list">Group List</Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item key="6" icon={<FileProtectOutlined />}>
                        <Link to="/home/project-management">Project Management</Link>
                    </Menu.Item>
                    <Menu.Item key="7" icon={<EnvironmentOutlined />}>
                        <Link to="/home/position-management">Position Management</Link>
                    </Menu.Item>
                    <Menu.Item key="8" icon={<NodeIndexOutlined />}>
                        <Link to="/home/technology-management">Technology Management</Link>
                    </Menu.Item>
                    <Menu.Item key="9" icon={<WechatOutlined />}>
                        <Link to="/home/group-zalo-management">Group Zalo Management</Link>
                    </Menu.Item>
                    <Menu.Item key="10" icon={<SettingOutlined />}>
                        <Link to="/home/settings">Settings</Link>
                    </Menu.Item>
                </Menu>
                <div style={{color: "#fff", padding: "0 15px", marginTop:"10rem"}}> 
                    <Row>
                        <Col span={6}>
                            <Avatar src={Profile}/>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Col span={24} style={{color:"#FFF"}}>Natalie Brogan</Col>
                                <Col span={24} style={{color:"#AAABAF"}}>Admin</Col>
                            </Row>
                        </Col>
                        <Col span={6}>
                            <Link to='/home/profile'>                      
                                <SettingOutlined style={{color:"#DB0D4B"}}/>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </Sider>
            <Layout
                style={{
                    marginLeft: 200,
                    backgroundColor: '#ffff',
                }}
            >
                {/* <Header
                    style={{
                        padding: 0,

                    }}
                /> */}
                <Content
                    style={{
                        margin: '24px',
                        overflow: 'initial',
                        backgroundColor: '#fff',
                        borderRadius: 6,
                    }}
                >
                    <Outlet></Outlet>
                </Content>


            </Layout>
        </Layout>
    );
};
export default App;