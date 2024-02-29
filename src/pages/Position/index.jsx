import React from 'react'
import { Avatar, Space, Checkbox, Tag, Button, Flex, Input, Tooltip, Pagination, Modal, Table } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import { useState } from 'react';

const getRandomuserParams = (params) => ({
    results: params.pagination?.pageSize,
    page: params.pagination?.current,
    ...params,
});

const Position = () => {
    const [showForm, setShowForm] = useState(false);
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 5,
        },
    });
    const handleTableChange = (pagination, filters, sorter) => {
        setTableParams({
            pagination,
            filters,
            ...sorter,
        });

        if (pagination.pageSize !== tableParams.pagination?.pageSize) {
            setData([]);
        }
    };
    const handleAddProject = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };
    const { Search } = Input;
    const styles = {
        box: {
            margin: '20px',
            border: '0.5px solid black',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
            height: '280px',
            width: '372px'
        },
        model: {
            display: 'flex',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            marginBottom: '20px',
            gap: '20px',
        }
    };

    const columns = [
        {
            title: 'Intern ID',
            dataIndex: 'ID',
            key: 'ID',

        },
        {
            title: 'Full Name',
            dataIndex: 'name',
            key: 'name',

        },
        {
            title: 'Phone Number',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'School',
            dataIndex: 'school',
            key: 'school',
        },
        {
            title: 'CV',
            dataIndex: 'cv',
            key: 'cv',
            render: () => <a>Link</a>,
        },
        {
            title: 'Technology',
            dataIndex: 'tech',
            key: 'tech',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },

    ];
    const data = [
        {
            key: '1',
            ID: '#12345128',
            name: 'Esther Eden',
            number: '0' + 3767825,
            school: 'FPT University',
            tech: '.NET',
            tags: ['intern'],
        }, {
            key: '2',
            ID: '#12345128',
            name: 'Esther Eden',
            number: '0' + 3767825,
            school: 'FPT University',
            tech: '.NET',
            tags: ['intern'],
        }, {
            key: '3',
            ID: '#12345128',
            name: 'Esther Eden',
            number: '0' + 3767825,
            school: 'FPT University',
            tech: '.NET',
            tags: ['intern'],
        }, {
            key: '4',
            ID: '#12345128',
            name: 'Esther Eden',
            number: '0' + 3767825,
            school: 'FPT University',
            tech: '.NET',
            tags: ['intern'],
        }, {
            key: '5',
            ID: '#12345128',
            name: 'Esther Eden',
            number: '0' + 3767825,
            school: 'FPT University',
            tech: '.NET',
            tags: ['intern'],
        }, {
            key: '6',
            ID: '#12345128',
            name: 'Esther Eden',
            number: '0' + 3767825,
            school: 'FPT University',
            tech: '.NET',
            tags: ['intern'],
        }, {
            key: '7',
            ID: '#12345128',
            name: 'Esther Eden',
            number: '0' + 3767825,
            school: 'FPT University',
            tech: '.NET',
            tags: ['intern'],
        }, {
            key: '8',
            ID: '#12345128',
            name: 'Esther Eden',
            number: '0' + 3767825,
            school: 'FPT University',
            tech: '.NET',
            tags: ['intern'],
        }, {
            key: '9',
            ID: '#12345128',
            name: 'Esther Eden',
            number: '0' + 3767825,
            school: 'FPT University',
            tech: '.NET',
            tags: ['intern'],
        },
    ];
    return (
        <div style={{
            marginLeft: '200px',
            marginRight: '20px',
            backgroundColor: 'white',
            borderRadius: '10px',
        }}>
            <div>
                <h1 style={{ marginLeft: '10px', color: '#8A2BE2' }}>Position Managemnet</h1>
                <br></br>
                <div>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        style={{ margin: '20px', width: '33%' }}
                    />
                    <Button size={'large'} type="primary" style={{ width: '160px', margin: '20px', backgroundColor: 'green' }}>Export Excel</Button>
                    <Button size={'large'} type="primary" style={{ width: '160px', margin: '20px', backgroundColor: 'orange' }}>Edit</Button>
                    <Button size={'large'} type="primary" style={{ width: '160px', margin: '20px', backgroundColor: 'red' }}>Delete</Button>
                    <Button onClick={handleAddProject} size={'large'} type="primary" style={{ width: '160px', margin: '20px 10px 20px 20px', backgroundColor: 'blue' }}>Add New Position</Button>
                </div>
                <br></br>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                <div style={styles.box}>
                    <div>
                        <div style={{ margin: '10px', fontSize: '25px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                            <div style={{ flex: '1' }}>
                                Back-End
                            </div>
                            <Tag color="blue" >100 People</Tag>
                            <Checkbox style={{ marginRight: '4%' }} />
                        </div>
                        <div style={{ borderBottom: '2px solid #ccc' }}></div>
                        <div style={{ color: ' #454545', marginLeft: '10px', lineHeight: 2, fontWeight: 'bold' }}>

                            <div>
                                Technology: .NET, Java,...
                            </div>
                            <div>
                                Rank: Intern, Fresher, Junior, Middle,Senior,...
                            </div>
                            <div>
                                Group Zalo : Link
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '28px' }}>
                                <div style={{ color: 'green' }}>
                                    Start Date :05 Jan 2023
                                </div>
                                <div style={{ color: 'red' }}>
                                    Release Date: 05 Apr 2023
                                </div>
                            </div>
                            <div>
                                <Avatar.Group>
                                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                                    <a href="https://ant.design">
                                        <Avatar
                                            style={{
                                                backgroundColor: '#f56a00',
                                            }}
                                        >
                                            K
                                        </Avatar>
                                    </a>
                                    <Tooltip title="Ant User" placement="top">
                                        <Avatar
                                            style={{
                                                backgroundColor: '#87d068',
                                            }}
                                            icon={<UserOutlined />}
                                        />
                                    </Tooltip>
                                    <Avatar
                                        style={{
                                            backgroundColor: '#1677ff',
                                        }}
                                        icon={<AntDesignOutlined />}
                                    />
                                </Avatar.Group>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={styles.box}>
                    <div>
                        <div style={{ margin: '10px', fontSize: '25px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                            <div style={{ flex: '1' }}>
                                Front-End
                            </div>
                            <Tag color="blue" >100 People</Tag>
                            <Checkbox style={{ marginRight: '4%' }} />
                        </div>
                        <div style={{ borderBottom: '2px solid #ccc' }}></div>
                        <div style={{ color: ' #454545', marginLeft: '10px', lineHeight: 2, fontWeight: 'bold' }}>

                            <div>
                                Technology: Reactjs, ...
                            </div>

                            <div>
                                Rank: Intern, Fresher, Junior, Middle,Senior,...
                            </div>
                            <div>
                                Group Zalo : Link
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '28px' }}>
                                <div style={{ color: 'green' }}>
                                    Start Date :05 Jan 2023
                                </div>
                                <div style={{ color: 'red' }}>
                                    Release Date: 05 Apr 2023
                                </div>
                            </div>
                            <div>
                                <Avatar.Group>
                                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                                    <a href="https://ant.design">
                                        <Avatar
                                            style={{
                                                backgroundColor: '#f56a00',
                                            }}
                                        >
                                            K
                                        </Avatar>
                                    </a>
                                    <Tooltip title="Ant User" placement="top">
                                        <Avatar
                                            style={{
                                                backgroundColor: '#87d068',
                                            }}
                                            icon={<UserOutlined />}
                                        />
                                    </Tooltip>
                                    <Avatar
                                        style={{
                                            backgroundColor: '#1677ff',
                                        }}
                                        icon={<AntDesignOutlined />}
                                    />
                                </Avatar.Group>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={styles.box}>
                    <div>
                        <div style={{ margin: '10px', fontSize: '25px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                            <div style={{ flex: '1' }}>
                                Business Analyst
                            </div>
                            <Tag color="blue" >100 People</Tag>
                            <Checkbox style={{ marginRight: '4%' }} />
                        </div>
                        <div style={{ borderBottom: '2px solid #ccc' }}></div>
                        <div style={{ color: ' #454545', marginLeft: '10px', lineHeight: 2, fontWeight: 'bold' }}>

                            <div>
                                Technology: Trello,...
                            </div>

                            <div>
                                Rank: Intern, Fresher, Junior, Middle,Senior,...
                            </div>
                            <div>
                                Group Zalo : Link
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '28px' }}>
                                <div style={{ color: 'green' }}>
                                    Start Date :05 Jan 2023
                                </div>
                                <div style={{ color: 'red' }}>
                                    Release Date: 05 Apr 2023
                                </div>
                            </div>
                            <div>
                                <Avatar.Group>
                                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                                    <a href="https://ant.design">
                                        <Avatar
                                            style={{
                                                backgroundColor: '#f56a00',
                                            }}
                                        >
                                            K
                                        </Avatar>
                                    </a>
                                    <Tooltip title="Ant User" placement="top">
                                        <Avatar
                                            style={{
                                                backgroundColor: '#87d068',
                                            }}
                                            icon={<UserOutlined />}
                                        />
                                    </Tooltip>
                                    <Avatar
                                        style={{
                                            backgroundColor: '#1677ff',
                                        }}
                                        icon={<AntDesignOutlined />}
                                    />
                                </Avatar.Group>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={styles.box}>
                    <div>
                        <div style={{ margin: '10px', fontSize: '25px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                            <div style={{ flex: '1' }}>
                                Marketing
                            </div>
                            <Tag color="blue" >100 People</Tag>
                            <Checkbox style={{ marginRight: '4%' }} />
                        </div>
                        <div style={{ borderBottom: '2px solid #ccc' }}></div>
                        <div style={{ color: ' #454545', marginLeft: '10px', lineHeight: 2, fontWeight: 'bold' }}>

                            <div>
                                Technology:Excel, Word, ...
                            </div>

                            <div>
                                Rank: Intern, Fresher, Junior, Middle,Senior,...
                            </div>
                            <div>
                                Group Zalo : Link
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '28px' }}>
                                <div style={{ color: 'green' }}>
                                    Start Date :05 Jan 2023
                                </div>
                                <div style={{ color: 'red' }}>
                                    Release Date: 05 Apr 2023
                                </div>
                            </div>
                            <div>
                                <Avatar.Group>
                                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                                    <a href="https://ant.design">
                                        <Avatar
                                            style={{
                                                backgroundColor: '#f56a00',
                                            }}
                                        >
                                            K
                                        </Avatar>
                                    </a>
                                    <Tooltip title="Ant User" placement="top">
                                        <Avatar
                                            style={{
                                                backgroundColor: '#87d068',
                                            }}
                                            icon={<UserOutlined />}
                                        />
                                    </Tooltip>
                                    <Avatar
                                        style={{
                                            backgroundColor: '#1677ff',
                                        }}
                                        icon={<AntDesignOutlined />}
                                    />
                                </Avatar.Group>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={styles.box}>
                    <div>
                        <div style={{ margin: '10px', fontSize: '25px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                            <div style={{ flex: '1' }}>
                                Desinger
                            </div>
                            <Tag color="blue" >100 People</Tag>
                            <Checkbox style={{ marginRight: '4%' }} />
                        </div>
                        <div style={{ borderBottom: '2px solid #ccc' }}></div>
                        <div style={{ color: ' #454545', marginLeft: '10px', lineHeight: 2, fontWeight: 'bold' }}>

                            <div>
                                Technology: Reactjs, ...
                            </div>

                            <div>
                                Rank: Intern, Fresher, Junior, Middle,Senior,...
                            </div>
                            <div>
                                Group Zalo : Link
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '28px' }}>
                                <div style={{ color: 'green' }}>
                                    Start Date :05 Jan 2023
                                </div>
                                <div style={{ color: 'red' }}>
                                    Release Date: 05 Apr 2023
                                </div>
                            </div>
                            <div>
                                <Avatar.Group>
                                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                                    <a href="https://ant.design">
                                        <Avatar
                                            style={{
                                                backgroundColor: '#f56a00',
                                            }}
                                        >
                                            K
                                        </Avatar>
                                    </a>
                                    <Tooltip title="Ant User" placement="top">
                                        <Avatar
                                            style={{
                                                backgroundColor: '#87d068',
                                            }}
                                            icon={<UserOutlined />}
                                        />
                                    </Tooltip>
                                    <Avatar
                                        style={{
                                            backgroundColor: '#1677ff',
                                        }}
                                        icon={<AntDesignOutlined />}
                                    />
                                </Avatar.Group>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={styles.box}>
                    <div>
                        <div style={{ margin: '10px', fontSize: '25px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                            <div style={{ flex: '1' }}>
                                Sales Executive
                            </div>
                            <Tag color="blue" >100 People</Tag>
                            <Checkbox style={{ marginRight: '4%' }} />
                        </div>

                        <div style={{ borderBottom: '2px solid #ccc' }}></div>
                        <div style={{ color: ' #454545', marginLeft: '10px', lineHeight: 2, fontWeight: 'bold' }}>

                            <div>
                                Technology: Trello, ...
                            </div>

                            <div>
                                Rank: Intern, Fresher, Junior, Middle,Senior,...
                            </div>
                            <div>
                                Group Zalo : Link
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '28px' }}>
                                <div style={{ color: 'green' }}>
                                    Start Date :05 Jan 2023
                                </div>
                                <div style={{ color: 'red' }}>
                                    Release Date: 05 Apr 2023
                                </div>
                            </div>
                            <div>
                                <Avatar.Group>
                                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                                    <a href="https://ant.design">
                                        <Avatar
                                            style={{
                                                backgroundColor: '#f56a00',
                                            }}
                                        >
                                            K
                                        </Avatar>
                                    </a>
                                    <Tooltip title="Ant User" placement="top">
                                        <Avatar
                                            style={{
                                                backgroundColor: '#87d068',
                                            }}
                                            icon={<UserOutlined />}
                                        />
                                    </Tooltip>
                                    <Avatar
                                        style={{
                                            backgroundColor: '#1677ff',
                                        }}
                                        icon={<AntDesignOutlined />}
                                    />
                                </Avatar.Group>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Pagination defaultCurrent={1} total={500} style={{ padding: '20px' }} />
            <Modal
                title="Add New Position"
                visible={showForm}
                footer={null}
                onCancel={handleCloseForm}
                okText="Create Project"
                width={1000}
            >
                <Table pagination={tableParams.pagination} columns={columns} dataSource={data} onChange={handleTableChange} />
            </Modal>

        </div>
    )
}

export default Position