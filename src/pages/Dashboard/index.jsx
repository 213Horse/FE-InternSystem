import React from 'react'
import { Button, Modal, Form, Input, Space, Col, Row, Select, Tabs, Typography, DatePicker, Tag, Avatar } from 'antd';
import {
    SettingOutlined,
    AntDesignOutlined,
    UserOutlined
} from '@ant-design/icons';
import ProfilePic from '../../assets/img/Logo/Profile-Pic.png'
import StatisticNumber from './statisticNumber';
import StatisticTable from './statisticTable';

const Dashboard = () => {

    // Variables
    const { Search } = Input;

    return (
        <>
            {/* Top Page and short User Profile */}
            <div>
                <div style={{margin: '0 0 0 20px', display: 'flex', alignItems:'center', justifyContent: 'space-between'}}>
                    <h1>Dashboard</h1>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <div style={{margin:'0 50px'}}>
                            <Avatar src={ProfilePic} size="large" icon={<UserOutlined />} />
                        </div>
                        <div style={{ margin: '0 50px' }}>
                            <h3>Natalie Brogan</h3>
                            <p>Admin</p>
                        </div>
                        <div style={{ margin: '0 50px' }}>
                            <SettingOutlined style={{fontSize:'x-large', color:'red'}} />
                        </div>
                    </div>
                </div>
                {/* Top-Bar Btn*/}
                <div>
                    <Search
                        placeholder="Search for information"
                        allowClear
                        enterButton="Search"
                        size="large"
                        style={{ margin: '20px', width: '33%' }}
                    />
                    <Button
                        size={'large'}
                        type="primary"
                        style={{ width: 'fit-content', margin: '20px', backgroundColor: 'purple' }}
                    >
                        Schedule Interview{' '}
                    </Button>
                    <Button
                        size={'large'}
                        type="primary"
                        style={{ width: 'fit-content', margin: '20px', backgroundColor: 'green' }}
                    >
                        Export Excel
                    </Button>
                    <Button
                        size={'large'}
                        type="primary"
                        style={{ width: 'fit-content', margin: '20px', backgroundColor: 'orange' }}
                    >
                        Edit
                    </Button>
                    <Button
                        size={'large'}
                        type="primary"
                        style={{ width: 'fit-content', margin: '20px', backgroundColor: 'red' }}
                    >
                        Delete
                    </Button>
                    <Button
                        size={'large'}
                        type="primary"
                        style={{ width: 'fit-content', margin: '20px 10px 20px 20px', backgroundColor: 'blue' }}
                    >
                        Add New Item
                    </Button>
                </div>
                <br></br>
            </div>

            <br/>

            {/* API show dữ liệu số */}
            <div>
                <StatisticNumber />
            </div>

            <br/>

            {/* Show dữ liệu bảng */}
            <div>
                <StatisticTable />
            </div>
        </>
    )
}

export default Dashboard