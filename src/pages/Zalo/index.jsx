import React from 'react'
import { Avatar, Space, Checkbox, Tag, Button, Flex, Input, Tooltip, Pagination, Modal, DatePicker, Select } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import { useState } from 'react';


const Zalo = () => {
    const [showForm, setShowForm] = useState(false);

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
            height: '230px',
            width: '372px'
        },
        model: {
            display: 'flex',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            marginBottom: '20px',
            gap: '20px',
        },
        zalo: {
            height: '100px',
            width: '95%',
            borderRadius: '30px',
            backgroundColor: '#F5F5F5',
            margin: '30px',
            fontWeight: 'bold',
            fontSize: '20px',
            paddingLeft: '50px',
            paddingTop: '20px',
        }
    };
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    const onChange1 = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };
    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    return (
        <div style={{
            marginLeft: '200px',
            marginRight: '20px',
            marginBottom: '40px',
            backgroundColor: 'white',
            borderRadius: '10px',

        }}>
            <div>
                <h1 style={{ marginLeft: '10px', color: '#8A2BE2' }}>Group Zalo</h1>
                <br></br>
                <div>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        style={{ margin: '20px', width: '35%' }}
                    />
                    <Button size={'large'} type="primary" style={{ margin: '20px', backgroundColor: 'purple' }}>Schedule interview</Button>
                    <Button size={'large'} type="primary" style={{ margin: '20px', backgroundColor: 'green' }}>Export Excel</Button>
                    <Button size={'large'} type="primary" style={{ margin: '20px', backgroundColor: 'orange' }}>Edit</Button>
                    <Button size={'large'} type="primary" style={{ margin: '20px', backgroundColor: 'red' }}>Delete</Button>
                    <Button onClick={handleAddProject} size={'large'} type="primary" style={{ margin: '20px 10px 20px 20px', backgroundColor: 'blue' }}>Add New Project</Button>
                </div>
                <Select
                    showSearch
                    style={{ marginLeft: '80%', width: '220px' }}
                    placeholder="Select filters"
                    optionFilterProp="children"
                    onChange={onChange1}
                    onSearch={onSearch}
                    filterOption={filterOption}
                    options={[
                        {
                            value: 'jack',
                            label: 'Jack',
                        },
                        {
                            value: 'lucy',
                            label: 'Lucy',
                        },
                        {
                            value: 'tom',
                            label: 'Tom',
                        },
                    ]}
                />
                <br></br>
            </div>

            <div style={{ paddingBottom: '100px' }}>
                <div style={styles.zalo}>
                    <Avatar size={'large'} style={{ marginRight: '20px' }} icon={<UserOutlined />} />

                    Designer_FU_SP24
                    <div style={{ fontWeight: 'lighter', marginLeft: '5.3%', fontSize: '14px' }}>
                        Click to veiw
                    </div>

                </div>
                <div style={styles.zalo}>
                    <Avatar size={'large'} style={{ marginRight: '20px' }} icon={<UserOutlined />} />

                    Back_End_FU_SP24
                    <div style={{ fontWeight: 'lighter', marginLeft: '5.3%', fontSize: '14px' }}>
                        Click to veiw
                    </div>

                </div>
                <div style={styles.zalo}>
                    <Avatar size={'large'} style={{ marginRight: '20px' }} icon={<UserOutlined />} />

                    Front_End_FU_SP24
                    <div style={{ fontWeight: 'lighter', marginLeft: '5.3%', fontSize: '14px' }}>
                        Click to veiw
                    </div>

                </div>
                <div style={styles.zalo}>
                    <Avatar size={'large'} style={{ marginRight: '20px' }} icon={<UserOutlined />} />

                    Maketing_FU_SP24
                    <div style={{ fontWeight: 'lighter', marginLeft: '5.3%', fontSize: '14px' }}>
                        Click to veiw
                    </div>

                </div>
            </div>

            <Modal
                title="Add New Project"
                visible={showForm}
                onCancel={handleCloseForm}
                okText="Create Project"
                width={1000}
            >
                <div style={styles.model}>
                    <div style={{ flex: '1' }}>
                        Project Title
                        <Input placeholder="Project Title" />
                    </div>
                    <div style={{ flex: '1' }}>
                        Position
                        <Input placeholder="Position" />
                    </div>
                    <div style={{ flex: '1' }}>
                        Technology
                        <Input placeholder="Technology" />
                    </div>
                </div>
                <div style={styles.model}>
                    <div style={{ flex: '1' }}>
                        Leader
                        <Input placeholder="Leader" />
                    </div>
                    <div style={{ flex: '1' }}>
                        Sub-Leader
                        <Input placeholder="Sub-Leader" />
                    </div>
                    <div style={{ flex: '1' }}>
                        Mentor
                        <Input placeholder="Mentor" />
                    </div>
                </div>
                <div style={styles.model}>
                    <div style={{ flex: '1' }}>
                        <div>Start Date</div>
                        <div><DatePicker style={{ width: '100%' }} onChange={onChange} /></div>
                    </div>
                    <div style={{ flex: '1', width: '500' }}>
                        <div>Release Date</div>
                        <div><DatePicker style={{ width: '100%' }} onChange={onChange} /></div>
                    </div>
                    <div style={{ flex: '1' }}>
                        Group Zalo
                        <Input placeholder="Zalo" />
                    </div>
                </div>
                <Tag color="gold" style={{ marginBottom: '5px' }}>In process</Tag>
            </Modal>

        </div>
    )
}

export default Zalo