import { Select, Table } from 'antd';
import React from 'react';

const TableComponent = ({ columns, dataSource }) => {

    return (
        <Table
            rowSelection={{}}
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