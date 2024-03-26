import React from 'react';
import { Select } from 'antd';

const SelectItem = ({ options, placeholder }) => {
    return (
        <div className="item">
            <Select
                showSearch
                style={{
                    width: 200,
                    borderRadius: '0px !importance',
                    textAlign: 'start'
                }}
                placeholder={placeholder}
                optionFilterProp="label"
                filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={options}
            />
        </div>
    );
};

export default SelectItem;