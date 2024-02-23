// import React from 'react';
// import { Link } from 'react-router-dom';
// import {
//     PieChartOutlined,
//     FileProtectOutlined,
//     ProfileOutlined,
//     EnvironmentOutlined,
//     NodeIndexOutlined,
//     WechatOutlined,
//     SettingOutlined,
//     TeamOutlined,
// } from '@ant-design/icons';
// import { Layout, Menu, theme } from 'antd';
// const { Header, Content, Footer, Sider } = Layout;


// const Project = () => {
//     console.log('Project');
//     const {
//         token: { colorBgContainer, borderRadiusLG },
//     } = theme.useToken();
//     return (
//         <Layout hasSider>
//             {/* <Sider
//                 style={{
//                     overflow: 'auto',
//                     height: '100vh',
//                     position: 'fixed',
//                     left: 0,
//                     top: 0,
//                     bottom: 0,
//                 }}
//             >
//                 <div className="demo-logo-vertical" style={{ height: 40, }} />
//                 <Menu theme="dark" mode="inline">
//                     <Menu.Item key="1" icon={<PieChartOutlined />}>
//                         <Link to="/dashboard">Dashboard</Link>
//                     </Menu.Item>

//                     <Menu.SubMenu key="sub2" title="CV Management" icon={<ProfileOutlined />}>
//                         <Menu.Item key="2">
//                             <Link to="/intern-list">Approve CV</Link>
//                         </Menu.Item>
//                         <Menu.Item key="3">
//                             <Link to="/group-list">Confirm CV</Link>
//                         </Menu.Item>
//                     </Menu.SubMenu>
//                     <Menu.SubMenu key="sub1" title="List Management" icon={<TeamOutlined />}>
//                         <Menu.Item key="4">
//                             <Link to="/intern-list">Intern List</Link>
//                         </Menu.Item>
//                         <Menu.Item key="5">
//                             <Link to="/group-list">Group List</Link>
//                         </Menu.Item>
//                     </Menu.SubMenu>
//                     <Menu.Item key="6" icon={<FileProtectOutlined />}>
//                         <Link to="/project-management">Project Management</Link>
//                     </Menu.Item>
//                     <Menu.Item key="7" icon={<EnvironmentOutlined />}>
//                         <Link to="/position-management">Position Management</Link>
//                     </Menu.Item>
//                     <Menu.Item key="8" icon={<NodeIndexOutlined />}>
//                         <Link to="/technology-management">Technology Management</Link>
//                     </Menu.Item>
//                     <Menu.Item key="9" icon={<WechatOutlined />}>
//                         <Link to="/group-zalo-management">Group Zalo Management</Link>
//                     </Menu.Item>
//                     <Menu.Item key="10" icon={<SettingOutlined />}>
//                         <Link to="/settings">Settings</Link>
//                     </Menu.Item>
//                 </Menu>
//             </Sider> */}
//             <Layout
//                 style={{
//                     width: 1310,
//                     marginLeft: 200,
//                 }}
//             >
//                 <Header
//                     style={{
//                         padding: 0,
//                         background: colorBgContainer,
//                     }}
//                 />
//                 <Content
//                     style={{
//                         margin: '24px 16px 0',
//                         overflow: 'initial',
//                     }}
//                 >
//                     <h1>hello project</h1>
//                     <p>sffgdfgdhdh
//                         dfhfghfgb
//                         ggfhfgh
//                     </p>

//                 </Content>
//                 <Footer
//                     style={{
//                         textAlign: 'center',
//                     }}
//                 >
//                     Ant Design ©{new Date().getFullYear()} Created by Ant UED
//                 </Footer>
//             </Layout>
//         </Layout>
//     );
// };
// export default Project;
import React from 'react'

const project = () => {
    return (
        <div style={{ margin: 1000 }}>Project</div>
    )
}

export default project