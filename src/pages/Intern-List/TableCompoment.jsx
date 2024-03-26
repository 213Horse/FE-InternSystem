import { Select, Table } from 'antd';
import React, { useState } from 'react';

const TableComponent = ({ columns, dataSource, onSelectedRowKeysChange }) => {
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            onSelectedRowKeysChange(selectedRowKeys);
        },

    };
    return (
        <Table
            rowSelection={{ ...rowSelection }}
            columns={columns}
            dataSource={dataSource}
            scroll={{
                x: 'max-content',


            }}
            style={{ padding: 16, height: '100%' }}
            pagination={{
                pageSize: 3, position: ['bottomRight'],
                showTotal: (total, range) => (
                    <span >
                        Showing {range[0]}-{range[1]} of {total}
                    </span>
                ),
                style: { position: 'fixed' }
            }}
        />
    );
};

export default TableComponent;