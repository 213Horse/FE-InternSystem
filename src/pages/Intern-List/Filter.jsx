import React, { useState } from 'react';
import { Collapse, Button, Flex, Input } from 'antd';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import SelectItem from './SelectItem';


const { Panel } = Collapse;

function Filter() {
    const options = [
        { value: '1', label: 'Option 1', color: 'orange' },
        { value: '2', label: 'Option 2', color: 'blue' },
        { value: '3', label: 'Option 3', color: 'green' },
    ];
    const items = [
        {
            key: '1',
            label: 'Filter',
            children:
                <>
                    <Flex className="option">
                        <div className="search-column">
                            <div className="items">
                                <SelectItem options={options} placeholder="Enter intern's ID" />
                                <SelectItem options={options} placeholder="Enter intern's Full name" />
                                <Input style={{ width: 200 }} placeholder="Enter intern's D.O.B"></Input>
                            </div>
                            <div className="items">
                                <SelectItem options={options} placeholder="Enter intern's Phone number" />
                                <SelectItem options={options} placeholder="Enter intern's Address" />
                                <Input style={{ width: 200 }} placeholder="Enter intern's Email"></Input>
                            </div>
                            <div className="items">
                                <SelectItem options={options} placeholder="Enter intern's Major" />
                                <SelectItem options={options} placeholder="Enter intern's Position" />
                                <Input style={{ width: 200 }} placeholder="Enter intern's School"></Input>
                            </div>
                            <div className="items">
                                <SelectItem options={options} placeholder="Enter intern's Title" />
                                <SelectItem options={options} placeholder="Enter intern's Project" />
                                <Input style={{ width: 200 }} placeholder="Enter intern's Group Zalout"></Input>
                            </div>
                        </div>
                        <div className="button-option">
                            <Button
                                className="btn-css"
                                style={{ borderRadius: '15px', border: '1px solid D9D9D9' }}
                                icon={<FilterOutlined />}
                            >
                                Clear Filter
                            </Button>
                            <Button
                                className="btn-css"
                                type="primary"
                                style={{ borderRadius: '15px' }}
                                icon={<SearchOutlined />}
                            >
                                Search
                            </Button>
                        </div>
                    </Flex>
                </>,
        }
    ];
    const [activeKey, setActiveKey] = useState([]);

    const onChange = (key) => {
        setActiveKey(key);
    };
    return (
        <>
            {/* <Collapse items={items}
                activeKey={activeKey}
                onChange={onChange}
                style={{ background: 'white', border: 'none' }} /> */}
        </>
    );
}

export default Filter;