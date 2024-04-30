import { Divider, Radio, Table } from 'antd';
import React, {useState} from 'react';

const TableComponent = ({ columns, dataSource }) => {

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    // rowSelection object indicates the need for row selection
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows, newSelectedRowKeys) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            setSelectedRowKeys(newSelectedRowKeys);
        },
    };

    return (
        <Table
            rowSelection={{...rowSelection}}
            columns={columns}
            dataSource={dataSource}
            scroll={{
                x: 'max-content',
            }}
            pagination={{
                pageSize: 5, position: ['bottomRight'],
                showTotal: (total, range) => (
                    <span >
                        Showing {range[0]}-{range[1]} of {total}
                    </span>
                ),
            }}
        />
    );
};

export default TableComponent;