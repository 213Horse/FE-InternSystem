import React from 'react'
import { Avatar, Space, Checkbox, Tag, Button, Flex, Input, Tooltip, Pagination, Modal, DatePicker, Menu, Tabs } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import { useState } from 'react';

const items = [

    {
        label: 'Back-end',
        key: 'back-end',
    },
    {
        label: 'Front-end',
        key: 'front-end',
    },
    {
        label: 'BA',
        key: 'BA',
    },
    {
        label: 'Marketing',
        key: 'marketing',
    },
    {
        label: 'Design',
        key: 'design',
    },
];
const items1 = [

    {
        label: 'Intern',
        key: '1',
        children: 'Content of Tab Intern',
    },
    {
        label: 'Fresher',
        key: '2',
        children: 'Content of Tab Fresher',
    },
    {
        label: 'Junior',
        key: '3',
        children: 'Content of Tab Junior',
    },
    {
        label: 'Middle',
        key: '4',
        children: 'Content of Tab Middle',
    },
    {
        label: 'Senior',
        key: '5',
        children: 'Content of Tab Senior',
    },
];

const Tech = () => {
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
            height: '180px',
            width: '362px'
        },
        model: {
            display: 'flex',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            marginBottom: '20px',
            gap: '20px',
        }
    };
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <div style={{
            // marginLeft: '200px',
            marginRight: '20px',
            marginBottom: '40px',
            backgroundColor: 'white',
            borderRadius: '10px',
        }}>
            <div>
                <h1 style={{ marginLeft: '10px', color: '#8A2BE2' }}>Technology</h1>
                <br></br>
                <div style={{
                    margin: '20px',
                    border: '1px solid black',
                    borderRadius: '20px',
                }}>
                    <Menu
                        style={{ margin: '10px', fontSize: '40', }}
                        defaultSelectedKeys={['back-end']}
                        defaultOpenKeys={['back-end']}
                        mode="horizontal"
                        items={items}
                    />
                </div>
                <div>

                    <Button size={'large'} type="primary" style={{ margin: '20px', backgroundColor: 'green' }}>Export Excel</Button>
                    <Button size={'large'} type="primary" style={{ margin: '20px', backgroundColor: 'orange' }}>Edit</Button>
                    <Button size={'large'} type="primary" style={{ margin: '20px', backgroundColor: 'red' }}>Delete</Button>
                    <Button onClick={handleAddProject} size={'large'} type="primary" style={{ margin: '20px 10px 20px 20px', backgroundColor: 'blue' }}>Add New Technology</Button>


                </div>
                <br></br>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                <div style={styles.box}>
                    <div>
                        <img src="https://th.bing.com/th/id/OIP.iYqLXAIfO2Wo5uR6xscVfAHaC9?rs=1&pid=ImgDetMain" alt="Mô tả ảnh" style={{ width: '100%', height: '180px', borderRadius: '10px' }} />
                    </div>
                </div>
                <div style={styles.box}>
                    <img src="https://logos-download.com/wp-content/uploads/2016/10/Java_logo_icon.png" alt="Mô tả ảnh" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                </div>
                <div style={styles.box}>
                    <img src="https://codeprogramming.org/wp-content/uploads/2022/01/C-Logo.wine_.png" alt="Mô tả ảnh" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                </div>

            </div>
            <Pagination defaultCurrent={1} total={500} style={{ padding: '20px', marginTop: '300px' }} />
            <Modal
                title="Add New Project"
                visible={showForm}
                onCancel={handleCloseForm}
                okText="Create Project"
                width={1000}
                footer={null}
            >
                <div style={{
                    margin: '20px',
                    borderRadius: '20px',
                    width: '100%'
                }}>
                    <Tabs defaultActiveKey="1" items={items1} />

                </div>
                <div style={styles.model}>
                    <div style={{ flex: '1' }}>
                        Question 1
                        <Input placeholder="Question 1" />
                    </div>
                    <div style={{ flex: '1' }}>
                        Question 2
                        <Input placeholder="Question 2" />
                    </div>
                    <div style={{ flex: '1' }}>
                        Question 3
                        <Input placeholder="Question 3" />
                    </div>
                </div>
                <div style={styles.model}>
                    <div style={{ flex: '1' }}>
                        Add Question
                        <Input placeholder="Add new question " />
                    </div>

                </div>


            </Modal>

        </div>
    )
}

export default Tech;